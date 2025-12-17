import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Code, ArrowLeft, TrendingUp, Calendar } from 'lucide-react';

interface UsageLog {
  id: string;
  action_type: string;
  credits_used: number;
  created_at: string;
  scripts: {
    name: string;
  } | null;
}

interface UsageProps {
  onNavigate: (page: string) => void;
}

export const Usage: React.FC<UsageProps> = ({ onNavigate }) => {
  const { credits } = useAuth();
  const [logs, setLogs] = useState<UsageLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsageLogs();
  }, []);

  const fetchUsageLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('usage_logs')
        .select('*, scripts(name)')
        .order('created_at', { ascending: false })
        .limit(50);

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
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const creditPercentage = credits
    ? (credits.credits_remaining / credits.monthly_allocation) * 100
    : 0;

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
            <TrendingUp size={32} style={{ color: '#FFFFFF' }} />
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Usage & Credits</span>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <h3 className="text-sm font-medium mb-2" style={{ color: '#808080' }}>
                Credits Remaining
              </h3>
              <div className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                {credits?.credits_remaining || 0}
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${creditPercentage}%`,
                    backgroundColor: creditPercentage > 20 ? '#4CAF50' : '#FF4444'
                  }}
                />
              </div>
            </div>

            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <h3 className="text-sm font-medium mb-2" style={{ color: '#808080' }}>
                Credits Used
              </h3>
              <div className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                {credits?.credits_used || 0}
              </div>
              <p className="text-xs mt-2" style={{ color: '#666' }}>
                This billing period
              </p>
            </div>

            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <h3 className="text-sm font-medium mb-2" style={{ color: '#808080' }}>
                Monthly Allocation
              </h3>
              <div className="text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                {credits?.monthly_allocation || 0}
              </div>
              <p className="text-xs mt-2" style={{ color: '#666' }}>
                Resets monthly
              </p>
            </div>
          </div>

          {creditPercentage < 20 && credits && credits.monthly_allocation > 0 && (
            <div className="mb-8 p-6" style={{ backgroundColor: '#FF4444', borderRadius: '12px' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                Running low on credits
              </h3>
              <p className="mb-4" style={{ color: '#FFFFFF' }}>
                You're running low on credits for this month. Upgrade your plan to get more.
              </p>
              <button
                onClick={() => onNavigate('upgrade')}
                className="px-6 py-2 font-semibold"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#FF4444',
                  border: 'none',
                  borderRadius: '8px'
                }}
              >
                Upgrade Plan
              </button>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Usage History
            </h2>

            {loading ? (
              <div className="text-center py-12">
                <div
                  className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
                  style={{ borderColor: '#FFFFFF' }}
                />
                <p style={{ color: '#808080' }}>Loading usage history...</p>
              </div>
            ) : logs.length === 0 ? (
              <div className="text-center py-12">
                <Calendar size={64} style={{ color: '#333', margin: '0 auto 16px' }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  No usage yet
                </h3>
                <p style={{ color: '#808080' }}>
                  Your script usage will appear here
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {logs.map(log => (
                  <div
                    key={log.id}
                    className="p-4 flex items-center justify-between"
                    style={{ backgroundColor: '#1A1A1A', borderRadius: '8px' }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold" style={{ color: '#FFFFFF' }}>
                          {log.scripts?.name || 'Unnamed Script'}
                        </span>
                        <span
                          className="px-2 py-1 text-xs font-semibold rounded"
                          style={{
                            backgroundColor: log.action_type === 'run' ? '#2196F3' : '#4CAF50',
                            color: '#FFFFFF'
                          }}
                        >
                          {log.action_type}
                        </span>
                      </div>
                      <div className="text-sm" style={{ color: '#808080' }}>
                        {formatDate(log.created_at)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold" style={{ color: '#FFFFFF' }}>
                        -{log.credits_used} credits
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
