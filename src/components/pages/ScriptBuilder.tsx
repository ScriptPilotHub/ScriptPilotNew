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

      if (!session?.access_token) {
        throw new Error('Please log in to generate scripts');
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-script`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY
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
    <div className="min-h-screen bg-neutral-900">
      <header className="sticky top-0 z-50 px-6 md:px-8 py-4 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="p-2 rounded-lg transition-colors hover:bg-neutral-800 text-neutral-400"
            >
              <ArrowLeft size={24} />
            </button>

            <img
              src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
              alt="ScriptPilot Logo"
              className="h-24 w-auto"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="hidden md:flex items-center gap-2 px-4 py-2 font-medium rounded-lg bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 transition-all"
            >
              <Eye size={18} />
              Preview
            </button>

            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700">
              <Zap size={16} className="text-white" />
              <span className="text-sm font-bold text-white">
                {credits?.credits_remaining || 0}
              </span>
            </div>

            <button
              onClick={handleRun}
              disabled={!messageBody.trim() || (credits?.credits_remaining || 0) < 1}
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg bg-white text-black hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play size={18} />
              Run (1)
            </button>

            <button
              onClick={handleSave}
              disabled={saving || !name.trim() || !messageBody.trim()}
              className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

          <div className="mb-8 p-8 rounded-2xl backdrop-blur-sm" style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
            border: '2px solid rgba(139, 92, 246, 0.2)'
          }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl" style={{
                background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)'
              }}>
                <Zap size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  AI Script Generator
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Describe what you need and our AI will create a professional script with variables in seconds.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mb-6">
              {[
                'Follow-up email for potential clients',
                'Cold outreach for B2B sales',
                'Meeting request with executive',
                'Thank you message after purchase',
                'Product demo scheduling email',
                'Contract proposal introduction'
              ].map((example, i) => (
                <button
                  key={i}
                  onClick={() => setAiPrompt(example)}
                  className="text-left px-4 py-3 rounded-lg transition-all text-sm hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#E9D5FF'
                  }}
                >
                  "{example}"
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !generating && aiPrompt.trim() && (credits?.credits_remaining || 0) >= 1 && handleGenerate()}
                placeholder="Describe the script you need (e.g., 'cold email for SaaS product demo')"
                className="flex-1 px-6 py-4 rounded-xl text-lg outline-none transition-all focus:ring-2"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  color: '#FFFFFF',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  borderColor: 'rgba(139, 92, 246, 0.5)'
                }}
              />
              <button
                onClick={handleGenerate}
                disabled={generating || !aiPrompt.trim() || (credits?.credits_remaining || 0) < 1}
                className="px-8 py-4 font-bold text-lg rounded-xl transition-all hover:scale-105 flex items-center gap-3"
                style={{
                  background: generating || !aiPrompt.trim() || (credits?.credits_remaining || 0) < 1
                    ? 'rgba(139, 92, 246, 0.3)'
                    : 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                  color: '#FFFFFF',
                  boxShadow: generating || !aiPrompt.trim() || (credits?.credits_remaining || 0) < 1
                    ? 'none'
                    : '0 8px 32px rgba(139, 92, 246, 0.4)',
                  cursor: generating || !aiPrompt.trim() || (credits?.credits_remaining || 0) < 1 ? 'not-allowed' : 'pointer'
                }}
              >
                <Zap size={20} />
                {generating ? 'Generating...' : 'Generate (1 Credit)'}
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: '#C4B5FD' }}>
              <CheckCircle2 size={16} />
              <span>Press Enter to generate • Uses 1 credit • Instant results</span>
            </div>
          </div>

          <div className="mb-6 p-6 rounded-xl" style={{
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            border: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <CheckCircle2 size={20} className="text-emerald-400" />
              Script Details
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Script Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-emerald-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  placeholder="e.g., Sales Follow-up"
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
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-emerald-500/50"
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
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-emerald-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.2)'
                  }}
                  placeholder="What does this do?"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-bold mb-3 text-white flex items-center gap-2">
                  <Eye size={20} className="text-cyan-400" />
                  Your Script
                </label>
                <textarea
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  rows={18}
                  className="w-full px-5 py-4 rounded-xl outline-none font-mono text-base transition-all focus:ring-2 focus:ring-cyan-500/50"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    color: '#FFFFFF',
                    border: '2px solid rgba(6, 182, 212, 0.3)',
                    lineHeight: '1.6'
                  }}
                  placeholder="Your generated script will appear here, or type your own message. Use {{variableName}} for dynamic content."
                />
                <p className="mt-2 text-sm text-slate-400">
                  Tip: Use <code className="text-cyan-400 bg-slate-800 px-2 py-1 rounded">{'{{variableName}}'}</code> for parts that change each time
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-white flex items-center gap-2">
                  <Zap size={20} className="text-yellow-400" />
                  Dynamic Variables
                </h3>

                <div className="mb-5 p-5 rounded-xl" style={{
                  backgroundColor: 'rgba(250, 204, 21, 0.05)',
                  border: '1px solid rgba(250, 204, 21, 0.2)'
                }}>
                  <p className="text-sm text-yellow-100 mb-3 leading-relaxed">
                    <strong>Variables let you personalize each message</strong>
                  </p>
                  <p className="text-xs text-yellow-200/70 leading-relaxed">
                    Example: "Hi <code className="text-emerald-400 text-xs bg-slate-800 px-1.5 py-0.5 rounded">{'{{firstName}}'}</code>" becomes "Hi Sarah" when you run it
                  </p>
                </div>

                {variables.length > 0 && (
                  <div className="mb-5 space-y-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                      Detected Variables ({variables.length})
                    </p>
                    {variables.map((variable, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg backdrop-blur-sm group"
                        style={{
                          backgroundColor: 'rgba(15, 23, 42, 0.8)',
                          border: '1px solid rgba(250, 204, 21, 0.2)'
                        }}
                      >
                        <div>
                          <span className="font-mono text-sm text-yellow-300 font-semibold">
                            {`{{${variable.name}}}`}
                          </span>
                          {variable.placeholder && (
                            <span className="text-xs ml-2 text-slate-400">
                              default: {variable.placeholder}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => removeVariable(index)}
                          className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-500/20 transition-all"
                          style={{ color: '#EF4444' }}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-5 rounded-xl" style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(148, 163, 184, 0.2)'
                }}>
                  <p className="text-sm font-semibold text-white mb-3">Add Custom Variable</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={newVarName}
                      onChange={(e) => setNewVarName(e.target.value)}
                      placeholder="Variable name (e.g., companyName)"
                      className="w-full px-4 py-2.5 rounded-lg outline-none text-sm transition-all focus:ring-2 focus:ring-yellow-500/50"
                      style={{
                        backgroundColor: 'rgba(10, 15, 30, 0.8)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && newVarName.trim() && addVariable()}
                    />
                    <input
                      type="text"
                      value={newVarPlaceholder}
                      onChange={(e) => setNewVarPlaceholder(e.target.value)}
                      placeholder="Default value (optional)"
                      className="w-full px-4 py-2.5 rounded-lg outline-none text-sm transition-all focus:ring-2 focus:ring-yellow-500/50"
                      style={{
                        backgroundColor: 'rgba(10, 15, 30, 0.8)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(148, 163, 184, 0.3)'
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && newVarName.trim() && addVariable()}
                    />
                    <button
                      onClick={addVariable}
                      disabled={!newVarName.trim()}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-lg transition-all hover:scale-105"
                      style={{
                        background: newVarName.trim()
                          ? 'linear-gradient(135deg, #FBBF24, #F59E0B)'
                          : 'rgba(148, 163, 184, 0.2)',
                        color: '#FFFFFF',
                        cursor: newVarName.trim() ? 'pointer' : 'not-allowed',
                        boxShadow: newVarName.trim() ? '0 4px 16px rgba(251, 191, 36, 0.3)' : 'none'
                      }}
                    >
                      <PlusCircle size={18} />
                      Add Variable to Script
                    </button>
                  </div>
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
