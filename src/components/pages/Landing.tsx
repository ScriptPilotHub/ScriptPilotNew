import React from 'react';
import { Zap, Code, Copy, TrendingUp, Check, Sparkles } from 'lucide-react';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: 'month',
      features: [
        'Unlimited scripts',
        '100 credits per month',
        'Dynamic variables',
        'Copy to clipboard',
        'Script library',
        'Email support'
      ],
      cta: 'Get Started',
      link: 'https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$79',
      period: 'month',
      features: [
        'Everything in Starter',
        '500 credits per month',
        'Priority support',
        'Advanced analytics',
        'Export to file',
        'Custom categories'
      ],
      cta: 'Get Started',
      link: 'https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b',
      highlighted: true
    },
    {
      name: 'Agency',
      price: '$199',
      period: 'month',
      features: [
        'Everything in Pro',
        '2000 credits per month',
        'Team collaboration',
        'Dedicated support',
        'API access',
        'White-label options'
      ],
      cta: 'Get Started',
      link: 'https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c',
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
            Stop Rewriting. Start Automating.
          </h1>
          <p className="text-xl md:text-2xl mb-12" style={{ color: '#808080' }}>
            Create reusable message templates with smart variables. Save hours every week.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              borderRadius: '8px'
            }}
          >
            Get Started Now
          </button>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#FFFFFF' }}>
            How It Works
          </h2>
          <p className="text-center mb-16 text-lg" style={{ color: '#808080' }}>
            Three simple steps to never write the same message twice
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4" style={{ backgroundColor: '#0A0A0A', borderRadius: '50%' }}>
                <Zap size={32} style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                1. Create Your Script
              </h3>
              <p style={{ color: '#808080' }}>
                Build message templates with {'{{placeholders}}'} for names, dates, or any custom info you need
              </p>
            </div>
            <div className="p-8 text-center" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4" style={{ backgroundColor: '#0A0A0A', borderRadius: '50%' }}>
                <Sparkles size={32} style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                2. Fill Variables
              </h3>
              <p style={{ color: '#808080' }}>
                When you need to send a message, just fill in the blanks and your script is ready to go
              </p>
            </div>
            <div className="p-8 text-center" style={{ backgroundColor: '#1A1A1A', borderRadius: '12px' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4" style={{ backgroundColor: '#0A0A0A', borderRadius: '50%' }}>
                <Copy size={32} style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                3. Copy & Send
              </h3>
              <p style={{ color: '#808080' }}>
                One click copies your personalized message. Paste it anywhere and send
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 relative"
                style={{
                  backgroundColor: tier.highlighted ? '#1A1A1A' : '#0F0F0F',
                  border: tier.highlighted ? '2px solid #FFFFFF' : '1px solid #1A1A1A',
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
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold" style={{ color: '#FFFFFF' }}>
                    {tier.price}
                  </span>
                  <span className="text-lg ml-2" style={{ color: '#808080' }}>
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
                  onClick={() => window.open(tier.link, '_blank')}
                  className="w-full py-3 font-semibold transition-all hover:scale-105"
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
            Ready to Save Hours Every Week?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#808080' }}>
            Stop copying and pasting. Start using ScripPilot.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              borderRadius: '8px'
            }}
          >
            Choose Your Plan
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
