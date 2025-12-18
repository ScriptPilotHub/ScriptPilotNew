import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import { CreditCard, FileText, LogOut, PlusCircle, TrendingUp, Zap, ArrowRight } from 'lucide-react';

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
      case 'free':
        return { color: '#64748B', label: 'Free', gradient: 'from-slate-500 to-slate-600' };
      case 'starter':
        return { color: '#0EA5E9', label: 'Starter', gradient: 'from-sky-500 to-blue-500' };
      case 'pro':
        return { color: '#06B6D4', label: 'Pro', gradient: 'from-cyan-500 to-teal-500' };
      case 'agency':
        return { color: '#10B981', label: 'Agency', gradient: 'from-emerald-500 to-green-500' };
      default:
        return { color: '#64748B', label: 'Free', gradient: 'from-slate-500 to-slate-600' };
    }
  };

  const tierInfo = getTierInfo(profile?.tier || 'free');

  const creditPercentage = credits
    ? (credits.credits_remaining / credits.monthly_allocation) * 100
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900">
        <div className="text-center">
          <img
            src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
            alt="ScriptPilot Logo"
            className="h-40 w-auto mx-auto mb-6 animate-pulse"
          />
          <p className="text-neutral-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="sticky top-0 z-50 px-6 md:px-8 py-4 bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img
              src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
              alt="ScriptPilot Logo"
              className="h-24 w-auto"
            />

            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700">
              <Zap size={16} style={{ color: tierInfo.color }} />
              <span className="text-sm font-semibold" style={{ color: tierInfo.color }}>
                {tierInfo.label}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <CreditCard size={16} className="text-neutral-400" />
              <span className="text-sm font-bold text-white">
                {credits?.credits_remaining || 0}
              </span>
              <span className="text-sm text-neutral-500">credits</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('upgrade')}
              className="group relative px-4 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${tierInfo.color}, ${tierInfo.color}CC)`,
                boxShadow: `0 4px 20px ${tierInfo.color}40`
              }}
            >
              <span className="relative z-10 flex items-center gap-1">
                Upgrade
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => signOut()}
              className="p-2 rounded-lg transition-colors hover:bg-neutral-800 text-neutral-400"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 text-white">
              Welcome back!
            </h1>
            <p className="text-neutral-400">
              {profile?.email}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group p-6 rounded-xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-neutral-600">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-sky-500/20">
                    <CreditCard size={20} style={{ color: tierInfo.color }} />
                  </div>
                  <h3 className="text-sm font-medium text-slate-400">
                    Credits Remaining
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    {credits?.credits_remaining || 0}
                  </span>
                  <span className="text-2xl ml-2 text-slate-500">
                    / {credits?.monthly_allocation || 0}
                  </span>
                </div>

                <div className="w-full h-2 rounded-full overflow-hidden mb-3" style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }}>
                  <div
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${creditPercentage}%`,
                      background: creditPercentage > 20
                        ? `linear-gradient(90deg, ${tierInfo.color}, ${tierInfo.color}CC)`
                        : 'linear-gradient(90deg, #EF4444, #DC2626)'
                    }}
                  />
                </div>

                <p className="text-sm text-neutral-400">
                  {creditPercentage < 20 ? 'Running low! Consider upgrading.' : 'You\'re all set for this month.'}
                </p>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-neutral-600">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-neutral-700">
                    <FileText size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-400">
                    Your Scripts
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    {scriptsCount}
                  </span>
                  <span className="text-2xl ml-2 text-neutral-500">
                    saved
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('library')}
                  className="text-sm font-medium hover:underline flex items-center gap-1 text-white"
                >
                  View all scripts
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-neutral-600">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-neutral-700">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-400">
                    Credits Used
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    {credits?.credits_used || 0}
                  </span>
                  <span className="text-2xl ml-2 text-neutral-500">
                    this month
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('usage')}
                  className="text-sm font-medium hover:underline flex items-center gap-1 text-white"
                >
                  View usage history
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate('builder')}
              className="group p-8 text-left rounded-xl bg-neutral-800 border-2 border-neutral-700 transition-all duration-300 hover:border-white"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-neutral-700">
                    <PlusCircle size={40} className="text-white" />
                  </div>
                  <span className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-neutral-700 text-white">
                    1 credit
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  Create New Script
                </h3>
                <p className="text-neutral-400 mb-4">
                  Build a reusable message template with smart variables
                </p>

                <div className="flex items-center gap-2 text-white font-medium">
                  <span>Get started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('library')}
              className="group p-8 text-left rounded-xl bg-neutral-800 border border-neutral-700 transition-all duration-300 hover:border-neutral-600"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-neutral-700">
                    <FileText size={40} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-neutral-400">
                    {scriptsCount} scripts
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  Script Library
                </h3>
                <p className="text-neutral-400 mb-4">
                  Access, run, and manage all your saved scripts
                </p>

                <div className="flex items-center gap-2 text-white font-medium">
                  <span>Browse library</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
