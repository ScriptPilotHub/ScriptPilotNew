import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Code, ArrowLeft, Save, Play, PlusCircle, X, Eye } from 'lucide-react';

interface ScriptBuilderProps {
  onNavigate: (page: string) => void;
}

interface Variable {
  name: string;
  placeholder?: string;
}

export const ScriptBuilder: React.FC<ScriptBuilderProps> = ({ onNavigate }) => {
  const { user, credits, refreshCredits } = useAuth();
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <header className="sticky top-0 z-50 px-6 md:px-8 py-6" style={{
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1A1A1A'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="p-2"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#808080'
              }}
            >
              <ArrowLeft size={24} />
            </button>
            <Code size={32} style={{ color: '#FFFFFF' }} />
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Script Builder</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 font-medium transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '1px solid #333',
                borderRadius: '8px'
              }}
            >
              <Eye size={18} />
              Preview
            </button>
            <button
              onClick={handleRun}
              disabled={!messageBody.trim()}
              className="flex items-center gap-2 px-4 py-2 font-medium transition-colors"
              style={{
                backgroundColor: '#2196F3',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                opacity: !messageBody.trim() ? 0.5 : 1
              }}
            >
              <Play size={18} />
              Run (1 credit)
            </button>
            <button
              onClick={handleSave}
              disabled={saving || !name.trim() || !messageBody.trim()}
              className="flex items-center gap-2 px-4 py-2 font-semibold transition-colors"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                border: 'none',
                borderRadius: '8px',
                opacity: saving || !name.trim() || !messageBody.trim() ? 0.5 : 1
              }}
            >
              <Save size={18} />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-6 p-4" style={{ backgroundColor: '#FF4444', borderRadius: '8px' }}>
              <p style={{ color: '#FFFFFF' }}>{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4" style={{ backgroundColor: '#4CAF50', borderRadius: '8px' }}>
              <p style={{ color: '#FFFFFF' }}>{success}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#FFFFFF' }}>
                  Script Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 outline-none"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                  placeholder="My awesome script"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="category" className="block text-sm font-medium mb-2" style={{ color: '#FFFFFF' }}>
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 outline-none"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                  placeholder="Sales, Support, etc."
                />
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-medium mb-2" style={{ color: '#FFFFFF' }}>
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 outline-none"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                  placeholder="What does this script do?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="messageBody" className="block text-sm font-medium mb-2" style={{ color: '#FFFFFF' }}>
                  Message Body *
                </label>
                <textarea
                  id="messageBody"
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  rows={10}
                  className="w-full px-4 py-3 outline-none font-mono text-sm"
                  style={{
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    border: '1px solid #333',
                    borderRadius: '8px'
                  }}
                  placeholder="Type your message here. Use {{variableName}} for dynamic content."
                />
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                  Variables
                </h3>
                <div className="p-4 mb-4" style={{ backgroundColor: '#1A1A1A', borderRadius: '8px' }}>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      value={newVarName}
                      onChange={(e) => setNewVarName(e.target.value)}
                      placeholder="Variable name"
                      className="px-3 py-2 outline-none text-sm"
                      style={{
                        backgroundColor: '#0F0F0F',
                        color: '#FFFFFF',
                        border: '1px solid #333',
                        borderRadius: '6px'
                      }}
                    />
                    <input
                      type="text"
                      value={newVarPlaceholder}
                      onChange={(e) => setNewVarPlaceholder(e.target.value)}
                      placeholder="Placeholder (optional)"
                      className="px-3 py-2 outline-none text-sm"
                      style={{
                        backgroundColor: '#0F0F0F',
                        color: '#FFFFFF',
                        border: '1px solid #333',
                        borderRadius: '6px'
                      }}
                    />
                  </div>
                  <button
                    onClick={addVariable}
                    disabled={!newVarName.trim()}
                    className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: '#2196F3',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      opacity: !newVarName.trim() ? 0.5 : 1
                    }}
                  >
                    <PlusCircle size={16} />
                    Add Variable
                  </button>
                </div>

                <div className="space-y-2">
                  {variables.map((variable, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3"
                      style={{ backgroundColor: '#1A1A1A', borderRadius: '8px' }}
                    >
                      <div>
                        <span className="font-mono text-sm" style={{ color: '#FFFFFF' }}>
                          {`{{${variable.name}}}`}
                        </span>
                        {variable.placeholder && (
                          <span className="text-xs ml-2" style={{ color: '#808080' }}>
                            ({variable.placeholder})
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => removeVariable(index)}
                        className="p-1"
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#FF4444'
                        }}
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {showPreview && (
                <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                    Preview
                  </h3>
                  <div className="mb-4 space-y-2">
                    {variables.map((variable) => (
                      <input
                        key={variable.name}
                        type="text"
                        value={previewValues[variable.name] || ''}
                        onChange={(e) => setPreviewValues({ ...previewValues, [variable.name]: e.target.value })}
                        placeholder={variable.placeholder || variable.name}
                        className="w-full px-3 py-2 outline-none text-sm"
                        style={{
                          backgroundColor: '#1A1A1A',
                          color: '#FFFFFF',
                          border: '1px solid #333',
                          borderRadius: '6px'
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="p-4"
                    style={{
                      backgroundColor: '#1A1A1A',
                      borderRadius: '8px',
                      minHeight: '200px',
                      whiteSpace: 'pre-wrap'
                    }}
                  >
                    <p style={{ color: '#FFFFFF', fontSize: '14px' }}>
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
