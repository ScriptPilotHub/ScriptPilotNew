import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, Save, Play, PlusCircle, X, Eye, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

interface ScriptBuilderProps {
  onNavigate: (page: string) => void;
}

interface Variable {
  name: string;
  placeholder?: string;
}

export const ScriptBuilder: React.FC<ScriptBuilderProps> = ({ onNavigate }) => {
  const { user, credits, refreshCredits, profile } = useAuth();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [variables, setVariables] = useState<Variable[]>([]);
  const [newVarName, setNewVarName] = useState('');
  const [newVarPlaceholder, setNewVarPlaceholder] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewValues, setPreviewValues] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const addVariable = () => {
    if (newVarName.trim()) {
      setVariables([...variables, { name: newVarName.trim(), placeholder: newVarPlaceholder.trim() || undefined }]);
      setNewVarName('');
      setNewVarPlaceholder('');
      setMessageBody(prev => prev + `{{${newVarName.trim()}}}`);
    }
  };

  const removeVariable = (index: number) => {
    const varToRemove = variables[index];
    setVariables(variables.filter((_, i) => i !== index));
    setMessageBody(prev => prev.replace(new RegExp(`{{${varToRemove.name}}}`, 'g'), ''));
  };

  const getPreviewText = () => {
    let preview = messageBody;
    variables.forEach(variable => {
      const value = previewValues[variable.name] || variable.placeholder || `{{${variable.name}}}`;
      preview = preview.replace(new RegExp(`{{${variable.name}}}`, 'g'), value);
    });
    return preview;
  };

  const handleSave = async () => {
    if (!name.trim() || !messageBody.trim()) {
      setError('Name and message body are required');
      return;
    }

    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const { error: saveError } = await supabase
        .from('scripts')
        .insert({
          owner_id: user?.id,
          name: name.trim(),
          category: category.trim() || null,
          description: description.trim() || null,
          message_body: messageBody,
          variables: variables
        });

      if (saveError) throw saveError;

      setSuccess('Script saved successfully!');
      setTimeout(() => {
        onNavigate('library');
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to save script');
    } finally {
      setSaving(false);
    }
  };

  const handleRun = async () => {
    if (credits && credits.credits_remaining < 1) {
      setError('Insufficient credits. Please upgrade your plan.');
      return;
    }

    const finalText = getPreviewText();
    navigator.clipboard.writeText(finalText);

    try {
      await supabase.from('usage_logs').insert({
        user_id: user?.id,
        action_type: 'run',
        credits_used: 1
      });

      await supabase
        .from('credits')
        .update({
          credits_used: (credits?.credits_used || 0) + 1,
          credits_remaining: (credits?.credits_remaining || 0) - 1
        })
        .eq('user_id', user?.id);

      refreshCredits();
      setSuccess('Script executed and copied to clipboard!');
    } catch (err: any) {
      setError(err.message || 'Failed to execute script');
    }
  };

  const handleGenerate = async () => {
    if (!aiPrompt.trim()) {
      setError('Please describe the script you want to generate');
      return;
    }

    if (credits && credits.credits_remaining < 1) {
      setError('Insufficient credits. Please upgrade your plan.');
      return;
    }

    setGenerating(true);
    setError('');
    setSuccess('');

    try {
      const { data: { session } } = await supabase.auth.getSession();

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-script`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session?.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: aiPrompt,
            category: category
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate script');
      }

      setMessageBody(data.script);
      setSuccess('Script generated successfully!');
      refreshCredits();

      const variableMatches = data.script.match(/\{\{([^}]+)\}\}/g);
      if (variableMatches) {
        const detectedVars = variableMatches.map((match: string) => {
          const name = match.replace(/\{\{|\}\}/g, '');
          return { name, placeholder: undefined };
        });
        const uniqueVars = Array.from(
          new Map(detectedVars.map((v: Variable) => [v.name, v])).values()
        );
        setVariables(uniqueVars);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to generate script');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0A0F1E' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <header className="sticky top-0 z-50 px-6 md:px-8 py-4" style={{
        backgroundColor: 'rgba(10, 15, 30, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="p-2 rounded-lg transition-colors hover:bg-slate-800/50"
              style={{ color: '#94A3B8' }}
            >
              <ArrowLeft size={24} />
            </button>

            <img
              src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
              alt="ScriptPilot Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="hidden md:flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                color: '#FFFFFF',
                border: '1px solid rgba(148, 163, 184, 0.2)'
              }}
            >
              <Eye size={18} />
              Preview
            </button>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.1)'
            }}>
              <Zap size={16} className="text-cyan-400" />
              <span className="text-sm font-bold text-white">
                {credits?.credits_remaining || 0}
              </span>
            </div>

            <button
              onClick={handleRun}
              disabled={!messageBody.trim() || (credits?.credits_remaining || 0) < 1}
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: '#FFFFFF',
                opacity: (!messageBody.trim() || (credits?.credits_remaining || 0) < 1) ? 0.5 : 1,
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
              }}
            >
              <Play size={18} />
              Run (1)
            </button>

            <button
              onClick={handleSave}
              disabled={saving || !name.trim() || !messageBody.trim()}
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                color: '#FFFFFF',
                opacity: saving || !name.trim() || !messageBody.trim() ? 0.5 : 1,
                boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)'
              }}
            >
              <Save size={18} />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12 relative">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-6 p-4 rounded-xl backdrop-blur-sm flex items-start gap-3" style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
              <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-300 flex-1">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-xl backdrop-blur-sm flex items-start gap-3" style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-emerald-300 flex-1">{success}</p>
            </div>
          )}

          <div className="mb-8 p-6 rounded-2xl backdrop-blur-sm" style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <h3 className="text-xl font-bold mb-3 text-white">
              How to Create a Script
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Scripts are reusable message templates that save you time. Create them once, use them forever with dynamic variables.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  step: '1',
                  title: 'Write Your Message',
                  desc: 'Type the message you want to reuse in the Message Body field below.'
                },
                {
                  step: '2',
                  title: 'Add Variables',
                  desc: 'Use {{name}} for parts that change, like customer names or dates.'
                },
                {
                  step: '3',
                  title: 'Save & Run',
                  desc: 'Saving is FREE. Running costs 1 credit and copies to clipboard.'
                }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl" style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.1)'
                }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-sm font-bold text-cyan-400" style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.2)'
                  }}>
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Script Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-cyan-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  placeholder="My awesome script"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Category
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-cyan-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  placeholder="Sales, Support, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-cyan-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  placeholder="What does this script do?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Generate with AI
                </label>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g., cold outreach email, follow-up message..."
                    className="flex-1 px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-cyan-500/50"
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(148, 163, 184, 0.2)'
                    }}
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={generating || !aiPrompt.trim() || (credits?.credits_remaining || 0) < 1}
                    className="px-6 py-3 font-semibold rounded-xl transition-all hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                      color: '#FFFFFF',
                      opacity: generating || !aiPrompt.trim() || (credits?.credits_remaining || 0) < 1 ? 0.5 : 1,
                      boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    {generating ? 'Generating...' : 'Generate (1)'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Message Body *
                </label>
                <textarea
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  rows={12}
                  className="w-full px-4 py-3 rounded-xl outline-none font-mono text-sm transition-all focus:ring-2 focus:ring-cyan-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  placeholder="Type your message here or use AI to generate. Use {{variableName}} for dynamic content."
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                  <Zap size={20} className="text-cyan-400" />
                  Variables
                </h3>

                <div className="mb-4 p-4 rounded-xl" style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.05)',
                  border: '1px solid rgba(6, 182, 212, 0.2)'
                }}>
                  <p className="text-xs text-cyan-300 mb-2 leading-relaxed">
                    <strong className="text-white">What are variables?</strong><br />
                    Variables are placeholders for information that changes each time you use the script.
                  </p>
                  <p className="text-xs text-cyan-300 leading-relaxed">
                    <strong className="text-white">Example:</strong> Use "Hi <code className="text-emerald-400 text-xs">{'{{name}}'}</code>" instead of "Hi John"
                  </p>
                </div>

                <div className="p-4 mb-4 rounded-xl backdrop-blur-sm" style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(148, 163, 184, 0.1)'
                }}>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      value={newVarName}
                      onChange={(e) => setNewVarName(e.target.value)}
                      placeholder="e.g., name, date"
                      className="px-3 py-2 rounded-lg outline-none text-sm transition-all focus:ring-2 focus:ring-cyan-500/50"
                      style={{
                        backgroundColor: 'rgba(10, 15, 30, 0.6)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(148, 163, 184, 0.2)'
                      }}
                    />
                    <input
                      type="text"
                      value={newVarPlaceholder}
                      onChange={(e) => setNewVarPlaceholder(e.target.value)}
                      placeholder="Default (optional)"
                      className="px-3 py-2 rounded-lg outline-none text-sm transition-all focus:ring-2 focus:ring-cyan-500/50"
                      style={{
                        backgroundColor: 'rgba(10, 15, 30, 0.6)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(148, 163, 184, 0.2)'
                      }}
                    />
                  </div>
                  <button
                    onClick={addVariable}
                    disabled={!newVarName.trim()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                      color: '#FFFFFF',
                      opacity: !newVarName.trim() ? 0.5 : 1,
                      boxShadow: '0 4px 16px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    <PlusCircle size={16} />
                    Add Variable
                  </button>
                </div>

                <div className="space-y-2 mb-6">
                  {variables.map((variable, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-xl backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        border: '1px solid rgba(148, 163, 184, 0.1)'
                      }}
                    >
                      <div>
                        <span className="font-mono text-sm text-cyan-400">
                          {`{{${variable.name}}}`}
                        </span>
                        {variable.placeholder && (
                          <span className="text-xs ml-2 text-slate-500">
                            ({variable.placeholder})
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => removeVariable(index)}
                        className="p-1.5 rounded-lg hover:bg-red-500/20 transition-colors"
                        style={{ color: '#EF4444' }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {showPreview && variables.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                    <Eye size={20} className="text-sky-400" />
                    Preview
                  </h3>

                  <div className="space-y-3 mb-4">
                    {variables.map((variable) => (
                      <input
                        key={variable.name}
                        type="text"
                        value={previewValues[variable.name] || ''}
                        onChange={(e) => setPreviewValues({ ...previewValues, [variable.name]: e.target.value })}
                        placeholder={variable.placeholder || variable.name}
                        className="w-full px-3 py-2 rounded-lg outline-none text-sm transition-all focus:ring-2 focus:ring-sky-500/50"
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.6)',
                          color: '#FFFFFF',
                          border: '1px solid rgba(148, 163, 184, 0.2)'
                        }}
                      />
                    ))}
                  </div>

                  <div
                    className="p-4 rounded-xl min-h-[200px]"
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    <p className="text-white text-sm leading-relaxed">
                      {getPreviewText() || 'Type your message to see preview...'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
