import React, { useEffect, useRef } from 'react';
import { Zap, TrendingUp, Check, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';

interface LandingProps {
  onGetStarted: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      highlighted: false,
      accent: '#64748B'
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
      highlighted: false,
      accent: '#0EA5E9'
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
      highlighted: true,
      accent: '#06B6D4'
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
      highlighted: false,
      accent: '#10B981'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0A0F1E' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <header className="sticky top-0 z-50 px-6 md:px-8 py-4" style={{
        backgroundColor: 'rgba(10, 15, 30, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
              alt="ScriptPilot Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              ScriptPilot
            </span>
          </div>
          <button
            onClick={onGetStarted}
            className="group relative px-6 py-2.5 font-semibold text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
              boxShadow: '0 4px 20px rgba(6, 182, 212, 0.3)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Sign In
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </header>

      <section ref={heroRef} className="px-6 md:px-8 py-24 md:py-32 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-on-scroll" style={{
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.2)'
          }}>
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Generate scripts in seconds</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-on-scroll" style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Stop Rewriting.<br />Start Automating.
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-slate-400 max-w-3xl mx-auto animate-on-scroll">
            Create reusable message templates with smart variables. Save hours every week with AI-powered script generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll">
            <button
              onClick={onGetStarted}
              className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started Free
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="text-sm text-slate-500">
              No credit card required · 5 credits free
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              How It Works
            </h2>
            <p className="text-xl text-slate-400">
              Three simple steps to never write the same message twice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} className="text-cyan-400" />,
                title: '1. Create Your Script',
                description: 'Build message templates with {{placeholders}} for names, dates, or any custom info you need',
                gradient: 'from-cyan-500/10 to-sky-500/10'
              },
              {
                icon: <Sparkles size={32} className="text-sky-400" />,
                title: '2. Fill Variables',
                description: 'When you need to send a message, just fill in the blanks and your script is ready to go',
                gradient: 'from-sky-500/10 to-blue-500/10'
              },
              {
                icon: <TrendingUp size={32} className="text-teal-400" />,
                title: '3. Copy & Send',
                description: 'One click copies your personalized message. Paste it anywhere and send',
                gradient: 'from-teal-500/10 to-emerald-500/10'
              }
            ].map((step, i) => (
              <div
                key={i}
                className="group animate-on-scroll p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-400">
              Choose the plan that fits your needs. Upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className="animate-on-scroll relative group"
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              >
                <div
                  className="h-full p-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
                  style={{
                    backgroundColor: tier.highlighted ? 'rgba(6, 182, 212, 0.05)' : 'rgba(15, 23, 42, 0.6)',
                    border: tier.highlighted ? '2px solid rgba(6, 182, 212, 0.5)' : '1px solid rgba(148, 163, 184, 0.1)',
                    transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: tier.highlighted ? '0 20px 60px rgba(6, 182, 212, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full text-white" style={{
                      background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)'
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">
                        {tier.price}
                      </span>
                      <span className="text-slate-400">
                        /{tier.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => tier.link ? window.open(tier.link, '_blank') : onGetStarted()}
                    className="w-full py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    style={{
                      background: tier.highlighted
                        ? 'linear-gradient(135deg, #0EA5E9, #06B6D4)'
                        : 'rgba(148, 163, 184, 0.1)',
                      color: tier.highlighted ? '#FFFFFF' : tier.accent,
                      border: tier.highlighted ? 'none' : `1px solid ${tier.accent}40`,
                      boxShadow: tier.highlighted ? `0 8px 24px ${tier.accent}40` : 'none'
                    }}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl backdrop-blur-sm animate-on-scroll" style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)'
          }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Save Hours Every Week?
            </h2>
            <p className="text-xl mb-8 text-slate-400">
              Join hundreds of professionals already using ScriptPilot
            </p>
            <button
              onClick={onGetStarted}
              className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                boxShadow: '0 8px 32px rgba(6, 182, 212, 0.4)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Today
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-8 py-12 relative" style={{
        borderTop: '1px solid rgba(148, 163, 184, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto text-center text-slate-500">
          <p>&copy; 2024 ScriptPilot. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-on-scroll.animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
