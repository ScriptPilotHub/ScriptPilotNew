import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Code, CreditCard, FileText, LogOut, PlusCircle, TrendingUp } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { profile, credits, signOut } = useAuth();

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'free': return '#808080';
      case 'starter': return '#4CAF50';
      case 'pro': return '#2196F3';
      case 'teams': return '#9C27B0';
      default: return '#808080';
    }
  };

  const getTierLabel = (tier: string) => {
    return tier.charAt(0).toUpperCase() + tier.slice(1);
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
          <div className="flex items-center gap-3">
            <Code size={32} style={{ color: '#FFFFFF' }} />
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>ScripPilot</span>
          </div>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-2 px-4 py-2 font-medium transition-colors"
            style={{
              backgroundColor: 'transparent',
              color: '#808080',
              border: '1px solid #333',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#808080';
            }}
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
              Welcome back, {profile?.full_name || profile?.email}
            </h1>
            <div className="flex items-center gap-2">
              <span style={{ color: '#808080' }}>Current plan:</span>
              <span
                className="px-3 py-1 text-sm font-semibold rounded-full"
                style={{
                  backgroundColor: getTierColor(profile?.tier || 'free') + '20',
                  color: getTierColor(profile?.tier || 'free')
                }}
              >
                {getTierLabel(profile?.tier || 'free')}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                  Credits Remaining
                </h3>
                <CreditCard size={24} style={{ color: '#808080' }} />
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                  {credits?.credits_remaining || 0}
                </span>
                <span className="text-lg ml-2" style={{ color: '#808080' }}>
                  / {credits?.monthly_allocation || 0}
                </span>
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
              {creditPercentage < 20 && (
                <button
                  onClick={() => onNavigate('upgrade')}
                  className="mt-4 w-full py-2 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0A0A0A',
                    borderRadius: '8px'
                  }}
                >
                  Upgrade Plan
                </button>
              )}
            </div>

            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                  Scripts Created
                </h3>
                <FileText size={24} style={{ color: '#808080' }} />
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                  0
                </span>
              </div>
              <button
                onClick={() => onNavigate('builder')}
                className="w-full py-2 text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid #333',
                  borderRadius: '8px'
                }}
              >
                View Library
              </button>
            </div>

            <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                  Usage This Month
                </h3>
                <TrendingUp size={24} style={{ color: '#808080' }} />
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                  {credits?.credits_used || 0}
                </span>
                <span className="text-lg ml-2" style={{ color: '#808080' }}>
                  credits
                </span>
              </div>
              <button
                onClick={() => onNavigate('usage')}
                className="w-full py-2 text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid #333',
                  borderRadius: '8px'
                }}
              >
                View Details
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onNavigate('builder')}
              className="p-8 text-left transition-all"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #333',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#222';
                e.currentTarget.style.borderColor = '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1A1A1A';
                e.currentTarget.style.borderColor = '#333';
              }}
            >
              <PlusCircle size={40} style={{ color: '#FFFFFF', marginBottom: '16px' }} />
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                Create New Script
              </h3>
              <p style={{ color: '#808080' }}>
                Build a new script with custom variables and messaging
              </p>
            </button>

            <button
              onClick={() => onNavigate('library')}
              className="p-8 text-left transition-all"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #333',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#222';
                e.currentTarget.style.borderColor = '#555';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1A1A1A';
                e.currentTarget.style.borderColor = '#333';
              }}
            >
              <FileText size={40} style={{ color: '#FFFFFF', marginBottom: '16px' }} />
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                Script Library
              </h3>
              <p style={{ color: '#808080' }}>
                View, edit, and manage all your saved scripts
              </p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
