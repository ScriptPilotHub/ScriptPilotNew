import React from 'react';
import { Zap, Code, Copy, Download, Users, TrendingUp, Check } from 'lucide-react';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  const pricingTiers = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Create up to 3 scripts',
        'Basic variables',
        '0 monthly credits',
        'Personal use only'
      ],
      cta: 'Get Started',
      link: null,
      highlighted: false
    },
    {
      name: 'Starter',
      price: '$25',
      period: 'per month',
      features: [
        'Unlimited scripts',
        'Advanced variables',
        '100 monthly credits',
        'Export & copy features',
        'Email support'
      ],
      cta: 'Start Free Trial',
      link: 'https://buy.stripe.com/test_starter',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$79',
      period: 'per month',
      features: [
        'Everything in Starter',
        '500 monthly credits',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      link: 'https://buy.stripe.com/test_pro',
      highlighted: true
    },
    {
      name: 'Teams',
      price: '$299',
      period: 'per month',
      features: [
        'Everything in Pro',
        '2000 shared credits',
        'Team collaboration',
        'Revenue tracking',
        'Dedicated support',
        'Custom onboarding'
      ],
      cta: 'Contact Sales',
      link: 'https://buy.stripe.com/test_teams',
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
          <div className="flex items-center gap-3">
            <Code size={32} style={{ color: '#FFFFFF' }} />
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>ScripPilot</span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2.5 font-semibold transition-colors"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              borderRadius: '8px'
            }}
          >
            Sign In
          </button>
        </div>
      </header>

      <section className="px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Build, Reuse, and Send Scripts in Seconds
          </h1>
          <p className="text-xl md:text-2xl mb-12" style={{ color: '#808080' }}>
            ScripPilot makes repetitive messages effortless for anyone
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 text-lg font-semibold transition-colors"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              borderRadius: '8px'
            }}
          >
            Get Started Free
          </button>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: '#FFFFFF' }}>
            Everything you need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <Zap size={40} style={{ color: '#FFFFFF', marginBottom: '16px' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                Script Creation
              </h3>
              <p style={{ color: '#808080' }}>
                Build custom scripts with dynamic variables and reuse them instantly
              </p>
            </div>
            <div className="p-8" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <Copy size={40} style={{ color: '#FFFFFF', marginBottom: '16px' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                Run & Copy
              </h3>
              <p style={{ color: '#808080' }}>
                Execute scripts with one click and copy to clipboard or export
              </p>
            </div>
            <div className="p-8" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <TrendingUp size={40} style={{ color: '#FFFFFF', marginBottom: '16px' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                Credit Tracking
              </h3>
              <p style={{ color: '#808080' }}>
                Monitor usage and credits with transparent tracking and limits
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Simple, transparent pricing
            </h2>
            <p className="text-lg" style={{ color: '#808080' }}>
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 relative"
                style={{
                  backgroundColor: tier.highlighted ? '#1A1A1A' : '#0F0F0F',
                  border: tier.highlighted ? '2px solid #FFFFFF' : '1px solid #1A1A1A',
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
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                    {tier.price}
                  </span>
                  <span className="text-sm ml-2" style={{ color: '#808080' }}>
                    /{tier.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={20} style={{ color: '#FFFFFF', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: '#808080' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    if (tier.link) {
                      window.open(tier.link, '_blank');
                    } else {
                      onGetStarted();
                    }
                  }}
                  className="w-full py-3 font-semibold transition-colors"
                  style={{
                    backgroundColor: tier.highlighted ? '#FFFFFF' : '#1A1A1A',
                    color: tier.highlighted ? '#0A0A0A' : '#FFFFFF',
                    border: tier.highlighted ? 'none' : '1px solid #333',
                    borderRadius: '8px'
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Ready to streamline your workflow?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#808080' }}>
            Join thousands of users saving time with ScripPilot
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 text-lg font-semibold transition-colors"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              borderRadius: '8px'
            }}
          >
            Get Started Free
          </button>
        </div>
      </section>

      <footer className="px-6 md:px-8 py-12" style={{ borderTop: '1px solid #1A1A1A' }}>
        <div className="max-w-7xl mx-auto text-center" style={{ color: '#808080' }}>
          <p>&copy; 2024 ScripPilot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
