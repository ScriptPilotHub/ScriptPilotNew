import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Code, ArrowLeft, Check, Zap, CreditCard } from 'lucide-react';

interface UpgradeProps {
  onNavigate: (page: string) => void;
}

export const Upgrade: React.FC<UpgradeProps> = ({ onNavigate }) => {
  const { profile, credits } = useAuth();

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$25',
      period: 'month',
      credits: 100,
      color: '#10B981',
      features: [
        'Unlimited scripts',
        '100 credits per month',
        'Dynamic variables',
        'Copy to clipboard',
        'Script library',
        'Email support'
      ],
      cta: 'Subscribe to Starter',
      link: 'https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a',
      current: profile?.tier === 'starter',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$50',
      period: 'month',
      credits: 500,
      color: '#3B82F6',
      features: [
        'Everything in Starter',
        '500 credits per month',
        'Priority support',
        'Advanced analytics',
        'Export to file',
        'Custom categories'
      ],
      cta: 'Subscribe to Pro',
      link: 'https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b',
      current: profile?.tier === 'pro',
      highlighted: true
    },
    {
      name: 'Agency',
      price: '$299',
      period: 'month',
      credits: 2000,
      color: '#8B5CF6',
      features: [
        'Everything in Pro',
        '2000 credits per month',
        'Team collaboration',
        'Dedicated support',
        'API access',
        'White-label options'
      ],
      cta: 'Subscribe to Agency',
      link: 'https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c',
      current: profile?.tier === 'agency',
      highlighted: false
    }
  ];

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
            <Zap size={28} style={{ color: '#FFFFFF' }} />
            <span className="text-xl font-bold" style={{ color: '#FFFFFF' }}>Upgrade Your Plan</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5" style={{ backgroundColor: '#1A1A1A', borderRadius: '6px' }}>
            <CreditCard size={16} style={{ color: '#808080' }} />
            <span className="text-sm font-bold" style={{ color: '#FFFFFF' }}>
              {credits?.credits_remaining || 0}
            </span>
            <span className="text-sm" style={{ color: '#808080' }}>left</span>
          </div>
        </div>
      </header>

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Get More Credits
            </h1>
            <p className="text-lg mb-2" style={{ color: '#808080' }}>
              Choose a plan that fits your workflow
            </p>
            <p className="text-sm" style={{ color: '#666' }}>
              All plans include unlimited scripts and full platform access
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 relative"
                style={{
                  backgroundColor: tier.current ? '#1A1A1A' : '#0F0F0F',
                  border: tier.current ? `2px solid ${tier.color}` : tier.highlighted ? '2px solid #FFFFFF' : '1px solid #333',
                  borderRadius: '12px',
                  transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {tier.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#0A0A0A',
                      borderRadius: '12px'
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                {tier.current && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold"
                    style={{
                      backgroundColor: tier.color,
                      color: '#FFFFFF',
                      borderRadius: '12px'
                    }}
                  >
                    YOUR PLAN
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  {tier.name}
                </h3>

                <div className="mb-4">
                  <span className="text-5xl font-bold" style={{ color: '#FFFFFF' }}>
                    {tier.price}
                  </span>
                  <span className="text-lg ml-2" style={{ color: '#808080' }}>
                    /{tier.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-6 px-3 py-2" style={{ backgroundColor: `${tier.color}20`, borderRadius: '6px' }}>
                  <Zap size={20} style={{ color: tier.color }} />
                  <span className="text-lg font-bold" style={{ color: tier.color }}>
                    {tier.credits} credits/month
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={18} style={{ color: tier.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#CCCCCC', fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (!tier.current) {
                      window.open(tier.link, '_blank');
                    }
                  }}
                  disabled={tier.current}
                  className="w-full py-3 font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: tier.current ? '#333' : tier.color,
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    cursor: tier.current ? 'not-allowed' : 'pointer',
                    opacity: tier.current ? 0.6 : 1
                  }}
                >
                  {tier.current ? 'Current Plan' : tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#FFFFFF' }}>
              Common Questions
            </h2>
            <div className="space-y-4">
              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  💳 What are credits used for?
                </h3>
                <p style={{ color: '#CCCCCC' }}>
                  Each time you run a script and copy it to your clipboard, it costs 1 credit. Saving scripts is free!
                </p>
              </div>

              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  🔄 When do credits reset?
                </h3>
                <p style={{ color: '#CCCCCC' }}>
                  Your credits reset monthly on the date you subscribed. Unused credits don't roll over.
                </p>
              </div>

              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  ⚡ What if I run out of credits?
                </h3>
                <p style={{ color: '#CCCCCC' }}>
                  You can upgrade to a higher tier anytime to get more credits immediately, or wait for your monthly reset.
                </p>
              </div>

              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  🔐 Is my payment secure?
                </h3>
                <p style={{ color: '#CCCCCC' }}>
                  Yes! All payments are processed securely through Stripe. We never see or store your payment information.
                </p>
              </div>

              <div className="p-6" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', border: '1px solid #333' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  🔄 Can I change plans?
                </h3>
                <p style={{ color: '#CCCCCC' }}>
                  Absolutely! You can upgrade or downgrade at any time through your Stripe customer portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
