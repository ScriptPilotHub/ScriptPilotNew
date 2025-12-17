import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { Code, CreditCard, FileText, LogOut, PlusCircle, TrendingUp, Zap } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { profile, credits, signOut, user } = useAuth();
  const [scriptsCount, setScriptsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScriptsCount = async () => {
      if (!user) return;
      const { count } = await supabase
        .from('scripts')
        .select('*', { count: 'exact', head: true })
        .eq('owner_id', user.id)
        .eq('is_archived', false);
      setScriptsCount(count || 0);
      setLoading(false);
    };
    fetchScriptsCount();
  }, [user]);

  const getTierInfo = (tier: string) => {
    switch (tier) {
      case 'starter':
        return { color: '#10B981', label: 'Starter', credits: 100 };
      case 'pro':
        return { color: '#3B82F6', label: 'Pro', credits: 500 };
      case 'agency':
        return { color: '#8B5CF6', label: 'Agency', credits: 2000 };
      default:
        return { color: '#6B7280', label: 'Unknown', credits: 0 };
    }
  };

  const tierInfo = getTierInfo(profile?.tier || 'starter');

  const creditPercentage = credits
    ? (credits.credits_remaining / credits.monthly_allocation) * 100
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="text-center">
          <Code size={48} style={{ color: '#FFFFFF', margin: '0 auto 16px' }} />
          <p style={{ color: '#808080' }}>Loading...</p>
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
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <Code size={28} style={{ color: '#FFFFFF' }} />
              <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>ScripPilot</span>
            </button>
            <nav className="hidden lg:flex items-center gap-4">
              <button onClick={() => onNavigate('home')} className="text-sm font-medium transition-colors hover:text-white" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#808080' }}>
                Home
              </button>
              <button onClick={() => onNavigate('dashboard')} className="text-sm font-medium transition-colors hover:text-white" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#808080' }}>
                Dashboard
              </button>
            </nav>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5" style={{ backgroundColor: '#1A1A1A', borderRadius: '6px' }}>
              <Zap size={16} style={{ color: tierInfo.color }} />
              <span className="text-sm font-semibold" style={{ color: tierInfo.color }}>
                {tierInfo.label}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <CreditCard size={16} style={{ color: '#808080' }} />
              <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
                {credits?.credits_remaining || 0}
              </span>
              <span className="text-sm" style={{ color: '#808080' }}>credits left</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('upgrade')}
              className="px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                backgroundColor: tierInfo.color,
                color: '#FFFFFF',
                borderRadius: '6px'
              }}
            >
              Upgrade
            </button>
            <button
              onClick={() => signOut()}
              className="p-2 transition-colors"
              style={{
                color: '#808080',
                backgroundColor: 'transparent'
              }}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
              Welcome back!
            </h1>
            <p style={{ color: '#808080' }}>
              {profile?.email}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 relative overflow-hidden" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard size={20} style={{ color: tierInfo.color }} />
                  <h3 className="text-sm font-medium" style={{ color: '#808080' }}>
                    Credits Remaining
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
                <div className="w-full h-2 rounded-full overflow-hidden mb-3" style={{ backgroundColor: '#0F0F0F' }}>
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${creditPercentage}%`,
                      backgroundColor: creditPercentage > 20 ? tierInfo.color : '#EF4444'
                    }}
                  />
                </div>
                <p className="text-sm" style={{ color: '#808080' }}>
                  {creditPercentage < 20 ? 'Running low! Consider upgrading.' : 'You\'re all set for this month.'}
                </p>
              </div>
            </div>

            <div className="p-6 relative overflow-hidden" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <FileText size={20} style={{ color: tierInfo.color }} />
                  <h3 className="text-sm font-medium" style={{ color: '#808080' }}>
                    Your Scripts
                  </h3>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                    {scriptsCount}
                  </span>
                  <span className="text-xl ml-2" style={{ color: '#808080' }}>
                    saved
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('library')}
                  className="text-sm font-medium hover:underline"
                  style={{ color: tierInfo.color }}
                >
                  View all scripts →
                </button>
              </div>
            </div>

            <div className="p-6 relative overflow-hidden" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={20} style={{ color: tierInfo.color }} />
                  <h3 className="text-sm font-medium" style={{ color: '#808080' }}>
                    Credits Used
                  </h3>
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                    {credits?.credits_used || 0}
                  </span>
                  <span className="text-xl ml-2" style={{ color: '#808080' }}>
                    this month
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('usage')}
                  className="text-sm font-medium hover:underline"
                  style={{ color: tierInfo.color }}
                >
                  View usage history →
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate('builder')}
              className="group p-8 text-left transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${tierInfo.color}15, #1A1A1A)`,
                border: `1px solid ${tierInfo.color}30`,
                borderRadius: '12px'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <PlusCircle size={40} style={{ color: tierInfo.color }} />
                <span className="text-sm font-medium px-3 py-1" style={{ backgroundColor: `${tierInfo.color}20`, color: tierInfo.color, borderRadius: '6px' }}>
                  1 credit
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                Create New Script
              </h3>
              <p style={{ color: '#808080' }}>
                Build a reusable message template with smart variables
              </p>
            </button>

            <button
              onClick={() => onNavigate('library')}
              className="group p-8 text-left transition-all hover:scale-105"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #333',
                borderRadius: '12px'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <FileText size={40} style={{ color: '#FFFFFF' }} />
                <span className="text-sm font-medium" style={{ color: '#808080' }}>
                  {scriptsCount} scripts
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                Script Library
              </h3>
              <p style={{ color: '#808080' }}>
                Access, run, and manage all your saved scripts
              </p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
