import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

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
        '5 credits per month',
        'Basic script generation',
        'Script library access',
        'Copy to clipboard',
        'Community support'
      ],
      cta: 'Start Free',
      link: null,
      highlighted: false
    },
    {
      name: 'Starter',
      price: '$25',
      period: 'month',
      features: [
        '100 credits per month',
        'Priority generation',
        'Advanced variables',
        'Export to file',
        'Email support',
        'Usage analytics'
      ],
      cta: 'Start Now',
      link: 'https://buy.stripe.com/aFa6oIcnyeL28X59kX9EI0a',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$50',
      period: 'month',
      features: [
        '500 credits per month',
        'Everything in Starter',
        'Custom categories',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      cta: 'Go Pro',
      link: 'https://buy.stripe.com/bJe9AU5ZagTaflt2Wz9EI0b',
      highlighted: true
    },
    {
      name: 'Agency',
      price: '$299',
      period: 'month',
      features: [
        '2000 credits per month',
        'Everything in Pro',
        'Team collaboration',
        'Revenue tracking',
        'Dedicated support',
        'White-label options'
      ],
      cta: 'Scale Up',
      link: 'https://buy.stripe.com/6oU5kEfzK7iAgpxdBd9EI0c',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <header className="bg-black border-b border-neutral-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
          <img
            src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
            alt="ScriptPilot Logo"
            className="h-16 w-auto"
          />
          <button
            onClick={onGetStarted}
            className="px-6 py-2.5 bg-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-700 transition-colors flex items-center gap-2"
          >
            Sign In
            <ArrowRight size={16} />
          </button>
        </div>
      </header>

      <section className="px-6 md:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Message templates for sales teams
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Create reusable scripts with custom variables. Stop rewriting the same messages.
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors text-lg"
          >
            Get Started Free
          </button>
          <p className="mt-4 text-sm text-neutral-500">No credit card required</p>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-neutral-800 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Create your script</h3>
              <p className="text-neutral-400 leading-relaxed">
                Build message templates with variables like name, company, or product
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-neutral-800 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fill in the blanks</h3>
              <p className="text-neutral-400 leading-relaxed">
                Enter the specific information for each prospect when you need it
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-neutral-800 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Copy and send</h3>
              <p className="text-neutral-400 leading-relaxed">
                Your personalized message is ready to paste anywhere
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
            <p className="text-xl text-neutral-400">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-8 ${
                  tier.highlighted
                    ? 'bg-white text-black shadow-xl border-2 border-white'
                    : 'bg-neutral-800 border border-neutral-700'
                }`}
              >
                {tier.highlighted && (
                  <div className="text-xs font-bold uppercase tracking-wider mb-4 text-neutral-500">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? 'text-black' : 'text-white'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-bold ${tier.highlighted ? 'text-black' : 'text-white'}`}>
                      {tier.price}
                    </span>
                    <span className={tier.highlighted ? 'text-neutral-600' : 'text-neutral-400'}>
                      /{tier.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 ${tier.highlighted ? 'text-black' : 'text-white'}`}
                      />
                      <span className={`text-sm ${tier.highlighted ? 'text-neutral-700' : 'text-neutral-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => tier.link ? window.open(tier.link, '_blank') : onGetStarted()}
                  className={`w-full py-3 font-semibold rounded-lg transition-colors ${
                    tier.highlighted
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'bg-white text-black hover:bg-neutral-200'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop wasting time on repetitive messages
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Start using templates today
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors text-lg"
          >
            Get Started Free
          </button>
        </div>
      </section>

      <footer className="px-6 md:px-8 py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto text-center text-neutral-500">
          <p>&copy; 2024 ScriptPilot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
