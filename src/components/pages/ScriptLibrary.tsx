import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, Script } from '../../lib/supabase';
import { Code, ArrowLeft, Play, Copy, Trash2, Archive, PlusCircle, Search } from 'lucide-react';

interface ScriptLibraryProps {
  onNavigate: (page: string) => void;
}

export const ScriptLibrary: React.FC<ScriptLibraryProps> = ({ onNavigate }) => {
  const { user, credits, refreshCredits } = useAuth();
  const [scripts, setScripts] = useState<Script[]>([]);
  const [filteredScripts, setFilteredScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchScripts();
  }, [user]);

  useEffect(() => {
    filterScripts();
  }, [scripts, searchTerm, selectedCategory]);

  const fetchScripts = async () => {
    try {
      const { data, error } = await supabase
        .from('scripts')
        .select('*')
        .eq('owner_id', user?.id)
        .eq('is_archived', false)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setScripts(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load scripts');
    } finally {
      setLoading(false);
    }
  };

  const filterScripts = () => {
    let filtered = [...scripts];

    if (searchTerm) {
      filtered = filtered.filter(script =>
        script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        script.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(script => script.category === selectedCategory);
    }

    setFilteredScripts(filtered);
  };

  const categories = ['all', ...Array.from(new Set(scripts.map(s => s.category).filter(Boolean)))];

  const handleRun = async (script: Script) => {
    if (credits && credits.credits_remaining < 1) {
      setError('Insufficient credits. Please upgrade your plan.');
      return;
    }

    navigator.clipboard.writeText(script.message_body);

    try {
      await supabase.from('usage_logs').insert({
        user_id: user?.id,
        script_id: script.id,
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

      await supabase
        .from('scripts')
        .update({ usage_count: script.usage_count + 1 })
        .eq('id', script.id);

      refreshCredits();
      fetchScripts();
      setSuccess('Script executed and copied to clipboard!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to execute script');
    }
  };

  const handleCopy = async (script: Script) => {
    navigator.clipboard.writeText(script.message_body);
    setSuccess('Script copied to clipboard!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const handleArchive = async (script: Script) => {
    try {
      await supabase
        .from('scripts')
        .update({ is_archived: true })
        .eq('id', script.id);

      fetchScripts();
      setSuccess('Script archived!');
      setTimeout(() => setSuccess(''), 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to archive script');
    }
  };

  const handleDelete = async (script: Script) => {
    if (!confirm('Are you sure you want to delete this script? This action cannot be undone.')) {
      return;
    }

    try {
      await supabase
        .from('scripts')
        .delete()
        .eq('id', script.id);

      fetchScripts();
      setSuccess('Script deleted!');
      setTimeout(() => setSuccess(''), 2000);
    } catch (err: any) {
      setError(err.message || 'Failed to delete script');
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
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Script Library</span>
          </div>
          <button
            onClick={() => onNavigate('builder')}
            className="flex items-center gap-2 px-4 py-2 font-semibold transition-colors"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            <PlusCircle size={18} />
            New Script
          </button>
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

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#808080'
                }}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search scripts..."
                className="w-full pl-12 pr-4 py-3 outline-none"
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  border: '1px solid #333',
                  borderRadius: '8px'
                }}
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 outline-none"
              style={{
                backgroundColor: '#1A1A1A',
                color: '#FFFFFF',
                border: '1px solid #333',
                borderRadius: '8px'
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div
                className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                style={{ borderColor: '#FFFFFF' }}
              />
              <p style={{ color: '#808080' }}>Loading scripts...</p>
            </div>
          ) : filteredScripts.length === 0 ? (
            <div className="text-center py-12">
              <Code size={64} style={{ color: '#333', margin: '0 auto 16px' }} />
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                No scripts found
              </h3>
              <p className="mb-6" style={{ color: '#808080' }}>
                {searchTerm || selectedCategory !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'Create your first script to get started'}
              </p>
              <button
                onClick={() => onNavigate('builder')}
                className="px-6 py-3 font-semibold transition-colors"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0A0A0A',
                  border: 'none',
                  borderRadius: '8px'
                }}
              >
                Create Script
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScripts.map(script => (
                <div
                  key={script.id}
                  className="p-6"
                  style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}
                >
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold" style={{ color: '#FFFFFF' }}>
                        {script.name}
                      </h3>
                      {script.category && (
                        <span
                          className="px-2 py-1 text-xs font-semibold rounded"
                          style={{
                            backgroundColor: '#0F0F0F',
                            color: '#808080'
                          }}
                        >
                          {script.category}
                        </span>
                      )}
                    </div>
                    {script.description && (
                      <p className="text-sm mb-3" style={{ color: '#808080' }}>
                        {script.description}
                      </p>
                    )}
                    <div className="text-xs" style={{ color: '#666' }}>
                      Used {script.usage_count} times
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleRun(script)}
                      className="flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: '#2196F3',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '6px'
                      }}
                    >
                      <Play size={16} />
                      Run
                    </button>
                    <button
                      onClick={() => handleCopy(script)}
                      className="flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: '#0F0F0F',
                        color: '#FFFFFF',
                        border: '1px solid #333',
                        borderRadius: '6px'
                      }}
                    >
                      <Copy size={16} />
                      Copy
                    </button>
                    <button
                      onClick={() => handleArchive(script)}
                      className="flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: '#0F0F0F',
                        color: '#FFFFFF',
                        border: '1px solid #333',
                        borderRadius: '6px'
                      }}
                    >
                      <Archive size={16} />
                      Archive
                    </button>
                    <button
                      onClick={() => handleDelete(script)}
                      className="flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors"
                      style={{
                        backgroundColor: '#0F0F0F',
                        color: '#FF4444',
                        border: '1px solid #333',
                        borderRadius: '6px'
                      }}
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
