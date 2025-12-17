import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Code, ArrowLeft, Check, Zap } from 'lucide-react';

interface UpgradeProps {
  onNavigate: (page: string) => void;
}

export const Upgrade: React.FC<UpgradeProps> = ({ onNavigate }) => {
  const { profile } = useAuth();

  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      credits: 0,
      features: [
        'Create up to 3 scripts',
        'Basic variables',
        '0 monthly credits',
        'Personal use only'
      ],
      cta: 'Current Plan',
      link: null,
      current: profile?.tier === 'free',
      highlighted: false
    },
    {
      name: 'Starter',
      price: '$25',
      period: 'per month',
      credits: 100,
      features: [
        'Unlimited scripts',
        'Advanced variables',
        '100 monthly credits',
        'Export & copy features',
        'Email support'
      ],
      cta: 'Upgrade to Starter',
      link: 'https://buy.stripe.com/test_starter',
      current: profile?.tier === 'starter',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$79',
      period: 'per month',
      credits: 500,
      features: [
        'Everything in Starter',
        '500 monthly credits',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Custom integrations'
      ],
      cta: 'Upgrade to Pro',
      link: 'https://buy.stripe.com/test_pro',
      current: profile?.tier === 'pro',
      highlighted: true
    },
    {
      name: 'Teams',
      price: '$299',
      period: 'per month',
      credits: 2000,
      features: [
        'Everything in Pro',
        '2000 shared credits',
        'Team collaboration',
        'Revenue tracking',
        'Dedicated support',
        'Custom onboarding'
      ],
      cta: 'Upgrade to Teams',
      link: 'https://buy.stripe.com/test_teams',
      current: profile?.tier === 'teams',
      highlighted: false
    }
  ];

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
            <Zap size={32} style={{ color: '#FFFFFF' }} />
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>Upgrade Plan</span>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Choose Your Plan
            </h1>
            <p className="text-lg" style={{ color: '#808080' }}>
              Select the plan that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 relative"
                style={{
                  backgroundColor: tier.highlighted ? '#1A1A1A' : '#0F0F0F',
                  border: tier.highlighted ? '2px solid #FFFFFF' : tier.current ? '2px solid #2196F3' : '1px solid #1A1A1A',
                  borderRadius: '12px'
                }}
              >
                {tier.highlighted && (
                  <div
                    className="absolute top-0 right-6 px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#0A0A0A',
                      borderRadius: '0 0 8px 8px'
                    }}
                  >
                    POPULAR
                  </div>
                )}
                {tier.current && (
                  <div
                    className="absolute top-0 left-6 px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: '#2196F3',
                      color: '#FFFFFF',
                      borderRadius: '0 0 8px 8px'
                    }}
                  >
                    CURRENT
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF', marginTop: tier.current ? '24px' : '0' }}>
                  {tier.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                    {tier.price}
                  </span>
                  <span className="text-sm ml-2" style={{ color: '#808080' }}>
                    /{tier.period}
                  </span>
                </div>
                <div className="text-sm mb-6" style={{ color: '#2196F3' }}>
                  {tier.credits} credits per month
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={20} style={{ color: '#FFFFFF', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#808080', fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (tier.link && !tier.current) {
                      window.open(tier.link, '_blank');
                    }
                  }}
                  disabled={tier.current}
                  className="w-full py-3 font-semibold transition-colors"
                  style={{
                    backgroundColor: tier.current ? '#0F0F0F' : tier.highlighted ? '#FFFFFF' : '#1A1A1A',
                    color: tier.current ? '#666' : tier.highlighted ? '#0A0A0A' : '#FFFFFF',
                    border: tier.current ? '1px solid #333' : tier.highlighted ? 'none' : '1px solid #333',
                    borderRadius: '8px',
                    cursor: tier.current ? 'not-allowed' : 'pointer',
                    opacity: tier.current ? 0.5 : 1
                  }}
                >
                  {tier.current ? 'Current Plan' : tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#FFFFFF' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  What are credits?
                </h3>
                <p style={{ color: '#808080' }}>
                  Credits are used each time you run or export a script. 1 credit = 1 script execution. Credits reset monthly based on your plan.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  Can I change my plan later?
                </h3>
                <p style={{ color: '#808080' }}>
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  What happens if I run out of credits?
                </h3>
                <p style={{ color: '#808080' }}>
                  You can upgrade to a higher tier to get more credits immediately, or wait until your credits reset next month.
                </p>
              </div>
              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  Is there a free trial?
                </h3>
                <p style={{ color: '#808080' }}>
                  Yes! All paid plans come with a 14-day free trial. No credit card required to start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
