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
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0A0F1E' }}>
        <div className="text-center">
          <div className="mb-6">
            <img
              src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
              alt="ScriptPilot Logo"
              className="h-16 w-auto mx-auto animate-pulse"
            />
          </div>
          <p className="text-slate-400">Loading your workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0A0F1E' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      <header className="sticky top-0 z-50 px-6 md:px-8 py-4" style={{
        backgroundColor: 'rgba(10, 15, 30, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
                alt="ScriptPilot Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                ScriptPilot
              </span>
            </div>

            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg backdrop-blur-sm" style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.1)'
            }}>
              <Zap size={16} style={{ color: tierInfo.color }} />
              <span className="text-sm font-semibold" style={{ color: tierInfo.color }}>
                {tierInfo.label}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <CreditCard size={16} className="text-slate-400" />
              <span className="text-sm font-bold text-white">
                {credits?.credits_remaining || 0}
              </span>
              <span className="text-sm text-slate-500">credits</span>
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
              className="p-2 rounded-lg transition-colors hover:bg-slate-800/50"
              style={{ color: '#94A3B8' }}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2 text-white">
              Welcome back!
            </h1>
            <p className="text-slate-400">
              {profile?.email}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative p-6 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105" style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
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

                <p className="text-sm text-slate-400">
                  {creditPercentage < 20 ? 'Running low! Consider upgrading.' : 'You\'re all set for this month.'}
                </p>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105" style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-500/20">
                    <FileText size={20} className="text-sky-400" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-400">
                    Your Scripts
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    {scriptsCount}
                  </span>
                  <span className="text-2xl ml-2 text-slate-500">
                    saved
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('library')}
                  className="text-sm font-medium hover:underline flex items-center gap-1 text-sky-400"
                >
                  View all scripts
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="group relative p-6 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105" style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500/20 to-emerald-500/20">
                    <TrendingUp size={20} className="text-teal-400" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-400">
                    Credits Used
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">
                    {credits?.credits_used || 0}
                  </span>
                  <span className="text-2xl ml-2 text-slate-500">
                    this month
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('usage')}
                  className="text-sm font-medium hover:underline flex items-center gap-1 text-teal-400"
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
              className="group relative p-8 text-left rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(6, 182, 212, 0.05)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-sky-500/20">
                    <PlusCircle size={40} className="text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold px-3 py-1.5 rounded-lg text-cyan-400" style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    border: '1px solid rgba(6, 182, 212, 0.3)'
                  }}>
                    1 credit
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  Create New Script
                </h3>
                <p className="text-slate-400 mb-4">
                  Build a reusable message template with smart variables
                </p>

                <div className="flex items-center gap-2 text-cyan-400 font-medium">
                  <span>Get started</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>

            <button
              onClick={() => onNavigate('library')}
              className="group relative p-8 text-left rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600">
                    <FileText size={40} className="text-slate-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-400">
                    {scriptsCount} scripts
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  Script Library
                </h3>
                <p className="text-slate-400 mb-4">
                  Access, run, and manage all your saved scripts
                </p>

                <div className="flex items-center gap-2 text-sky-400 font-medium">
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
