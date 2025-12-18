import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, Script } from '../../lib/supabase';
import { Code, ArrowLeft, Play, Trash2, PlusCircle, Search, Zap, CreditCard } from 'lucide-react';

interface ScriptLibraryProps {
  onNavigate: (page: string) => void;
}

export const ScriptLibrary: React.FC<ScriptLibraryProps> = ({ onNavigate }) => {
  const { user, credits, refreshCredits, profile } = useAuth();
  const [scripts, setScripts] = useState<Script[]>([]);
  const [filteredScripts, setFilteredScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      fetchScripts();
    } else {
      setScripts([]);
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    filterScripts();
  }, [scripts, searchTerm, selectedCategory]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'starter': return '#10B981';
      case 'pro': return '#3B82F6';
      case 'agency': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const tierColor = getTierColor(profile?.tier || 'starter');

  const fetchScripts = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setError('Please log in to view your scripts');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('scripts')
        .select('*')
        .eq('owner_id', user.id)
        .eq('is_archived', false)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setScripts(data || []);
    } catch (err: any) {
      console.error('Error fetching scripts:', err);
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
    if (!user) {
      setError('Please log in to run scripts');
      setTimeout(() => setError(''), 4000);
      return;
    }

    if (credits && credits.credits_remaining < 1) {
      setError('Not enough credits! Upgrade your plan to continue.');
      setTimeout(() => setError(''), 4000);
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setError('Your session has expired. Please log in again.');
        setTimeout(() => setError(''), 4000);
        return;
      }

      let finalText = script.message_body;
      if (script.variables && Array.isArray(script.variables) && script.variables.length > 0) {
        script.variables.forEach(variable => {
          if (variable && variable.name) {
            const value = variable.placeholder || `{{${variable.name}}}`;
            finalText = finalText.replace(new RegExp(`{{${variable.name}}}`, 'g'), value);
          }
        });
      }

      await navigator.clipboard.writeText(finalText);

      await supabase.from('usage_logs').insert({
        user_id: user.id,
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
        .eq('user_id', user.id);

      await supabase
        .from('scripts')
        .update({ usage_count: script.usage_count + 1 })
        .eq('id', script.id);

      await refreshCredits();
      await fetchScripts();
      setSuccess('Copied to clipboard!');
      setTimeout(() => setSuccess(''), 2000);
    } catch (err: any) {
      console.error('Error running script:', err);
      setError(err.message || 'Failed to run script');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleDelete = async (scriptId: string) => {
    if (!confirm('Delete this script? This cannot be undone.')) return;

    if (!user) {
      setError('Please log in to delete scripts');
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setError('Your session has expired. Please log in again.');
        return;
      }

      await supabase
        .from('scripts')
        .delete()
        .eq('id', scriptId);

      setSuccess('Script deleted');
      setTimeout(() => setSuccess(''), 2000);
      await fetchScripts();
    } catch (err: any) {
      console.error('Error deleting script:', err);
      setError(err.message || 'Failed to delete script');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="text-center">
          <Code size={48} style={{ color: '#FFFFFF', margin: '0 auto 16px' }} />
          <p style={{ color: '#808080' }}>Loading your scripts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      <header className="sticky top-0 z-50 px-6 md:px-8 py-4" style={{
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1A1A1A'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="p-2"
              style={{ color: '#808080', backgroundColor: 'transparent' }}
            >
              <ArrowLeft size={24} />
            </button>
            <Code size={28} style={{ color: '#FFFFFF' }} />
            <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Script Library</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5" style={{ backgroundColor: '#1A1A1A', borderRadius: '6px' }}>
              <CreditCard size={16} style={{ color: '#808080' }} />
              <span className="text-sm font-bold" style={{ color: '#FFFFFF' }}>
                {credits?.credits_remaining || 0}
              </span>
            </div>
            <button
              onClick={() => onNavigate('builder')}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                backgroundColor: tierColor,
                color: '#FFFFFF',
                borderRadius: '6px'
              }}
            >
              <PlusCircle size={18} />
              New Script
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-6 p-4 flex items-center gap-3" style={{ backgroundColor: '#FEE2E2', border: '1px solid #EF4444', borderRadius: '8px' }}>
              <span style={{ color: '#991B1B' }}>⚠️ {error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 flex items-center gap-3" style={{ backgroundColor: '#D1FAE5', border: '1px solid #10B981', borderRadius: '8px' }}>
              <span style={{ color: '#065F46' }}>✓ {success}</span>
            </div>
          )}

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#808080' }} />
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
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredScripts.length === 0 ? (
            <div className="text-center py-16">
              <Code size={64} style={{ color: '#333', margin: '0 auto 24px' }} />
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                {scripts.length === 0 ? 'No Scripts Yet' : 'No Scripts Found'}
              </h3>
              <p className="mb-8" style={{ color: '#808080' }}>
                {scripts.length === 0
                  ? 'Create your first reusable message template'
                  : 'Try adjusting your search or filters'}
              </p>
              {scripts.length === 0 && (
                <button
                  onClick={() => onNavigate('builder')}
                  className="px-6 py-3 font-semibold transition-colors"
                  style={{
                    backgroundColor: tierColor,
                    color: '#FFFFFF',
                    borderRadius: '8px'
                  }}
                >
                  Create Your First Script
                </button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScripts.map((script) => (
                <div
                  key={script.id}
                  className="p-6 transition-all hover:scale-105"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid #333',
                    borderRadius: '12px'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1" style={{ color: '#FFFFFF' }}>
                        {script.name}
                      </h3>
                      {script.category && (
                        <span className="text-xs px-2 py-1" style={{ backgroundColor: '#0A0A0A', color: '#808080', borderRadius: '4px' }}>
                          {script.category}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleDelete(script.id)}
                      className="p-2 transition-colors"
                      style={{ color: '#EF4444', backgroundColor: 'transparent' }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {script.description && (
                    <p className="text-sm mb-4" style={{ color: '#808080' }}>
                      {script.description}
                    </p>
                  )}

                  <div className="mb-4">
                    <p className="text-xs mb-2" style={{ color: '#808080' }}>Preview:</p>
                    <div className="p-3 max-h-24 overflow-hidden" style={{ backgroundColor: '#0A0A0A', borderRadius: '6px' }}>
                      <p className="text-sm truncate" style={{ color: '#FFFFFF' }}>
                        {script.message_body.substring(0, 100)}...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-xs" style={{ color: '#808080' }}>
                    <span>Used {script.usage_count} times</span>
                    {script.variables && script.variables.length > 0 && (
                      <span>{script.variables.length} variables</span>
                    )}
                  </div>

                  <button
                    onClick={() => handleRun(script)}
                    disabled={(credits?.credits_remaining || 0) < 1}
                    className="w-full flex items-center justify-center gap-2 py-2 font-semibold transition-colors"
                    style={{
                      backgroundColor: (credits?.credits_remaining || 0) < 1 ? '#333' : tierColor,
                      color: '#FFFFFF',
                      borderRadius: '6px',
                      opacity: (credits?.credits_remaining || 0) < 1 ? 0.5 : 1
                    }}
                  >
                    <Play size={16} />
                    Run (1 credit)
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
