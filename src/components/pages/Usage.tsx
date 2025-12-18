import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, UsageLog } from '../../lib/supabase';
import { Code, ArrowLeft, TrendingUp, CreditCard, Zap, Clock } from 'lucide-react';

interface UsageProps {
  onNavigate: (page: string) => void;
}

export const Usage: React.FC<UsageProps> = ({ onNavigate }) => {
  const { credits, profile, user } = useAuth();
  const [logs, setLogs] = useState<UsageLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUsageLogs();
    } else {
      setLoading(false);
    }
  }, [user]);

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'starter': return '#10B981';
      case 'pro': return '#3B82F6';
      case 'agency': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const tierColor = getTierColor(profile?.tier || 'starter');

  const fetchUsageLogs = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        console.error('No active session');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('usage_logs')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      setLogs(data || []);
    } catch (err) {
      console.error('Failed to load usage logs:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const creditPercentage = credits
    ? (credits.credits_remaining / credits.monthly_allocation) * 100
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="text-center">
          <Code size={48} style={{ color: '#FFFFFF', margin: '0 auto 16px' }} />
          <p style={{ color: '#808080' }}>Loading usage data...</p>
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
              style={{ backgroundColor: 'transparent', color: '#808080' }}
            >
              <ArrowLeft size={24} />
            </button>
            <TrendingUp size={28} style={{ color: '#FFFFFF' }} />
            <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Credit Usage</span>
          </div>
          <button
            onClick={() => onNavigate('upgrade')}
            className="px-4 py-2 text-sm font-semibold transition-colors"
            style={{
              backgroundColor: tierColor,
              color: '#FFFFFF',
              borderRadius: '6px'
            }}
          >
            Upgrade Plan
          </button>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
              <div className="flex items-center gap-2 mb-2">
                <CreditCard size={20} style={{ color: tierColor }} />
                <h3 className="text-sm font-medium" style={{ color: '#808080' }}>
                  Credits Left
                </h3>
              </div>
              <div className="mb-3">
                <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                  {credits?.credits_remaining || 0}
                </span>
                <span className="text-xl ml-2" style={{ color: '#808080' }}>
                  / {credits?.monthly_allocation || 0}
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#0A0A0A' }}>
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${creditPercentage}%`,
                    backgroundColor: creditPercentage > 20 ? tierColor : '#EF4444'
                  }}
                />
              </div>
            </div>

            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={20} style={{ color: tierColor }} />
                <h3 className="text-sm font-medium" style={{ color: '#808080' }}>
                  Credits Used
                </h3>
              </div>
              <div className="mb-1">
                <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                  {credits?.credits_used || 0}
                </span>
              </div>
              <p className="text-sm" style={{ color: '#666' }}>
                This billing period
              </p>
            </div>

            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} style={{ color: tierColor }} />
                <h3 className="text-sm font-medium" style={{ color: '#808080' }}>
                  Last Reset
                </h3>
              </div>
              <div className="mb-1">
                <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>
                  {credits?.last_reset ? new Date(credits.last_reset).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A'}
                </span>
              </div>
              <p className="text-sm" style={{ color: '#666' }}>
                Credits reset monthly
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
              Recent Activity
            </h2>
            <p style={{ color: '#808080' }}>
              Your script execution history
            </p>
          </div>

          {logs.length === 0 ? (
            <div className="text-center py-16" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
              <TrendingUp size={64} style={{ color: '#333', margin: '0 auto 24px' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                No Usage Yet
              </h3>
              <p style={{ color: '#808080' }}>
                Start running scripts to see your usage history here
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {logs.map((log) => (
                <div
                  key={log.id}
                  className="p-4 flex items-center justify-between"
                  style={{
                    backgroundColor: '#1A1A1A',
                    borderRadius: '8px',
                    border: '1px solid #333'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10" style={{ backgroundColor: `${tierColor}20`, borderRadius: '50%' }}>
                      <Zap size={20} style={{ color: tierColor }} />
                    </div>
                    <div>
                      <p className="font-medium mb-1" style={{ color: '#FFFFFF' }}>
                        {log.action_type === 'run' ? 'Script Executed' : 'Script Exported'}
                      </p>
                      <p className="text-sm" style={{ color: '#808080' }}>
                        {formatDate(log.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold" style={{ color: tierColor }}>
                      -{log.credits_used}
                    </span>
                    <p className="text-xs" style={{ color: '#666' }}>
                      {log.credits_used === 1 ? 'credit' : 'credits'}
                    </p>
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
