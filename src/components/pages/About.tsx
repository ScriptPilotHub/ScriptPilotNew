import React, { useEffect, useState } from 'react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#0A0F1A' }}>
      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0F1A',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(45, 156, 219, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(242, 153, 74, 0.1) 0%, transparent 50%)'
        }} />

        <div
          className="max-w-6xl mx-auto relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out'
          }}
        >
          <div className="max-w-4xl">
            <h1
              className="mb-8 leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 0.95
              }}
            >
              About ScriptPilot
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{
              color: '#8B95A5',
              lineHeight: 1.5
            }}>
              We build websites that bring in customers. Simple as that.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                What we do
              </h2>
              <p className="text-lg md:text-xl" style={{ color: '#808080', lineHeight: 1.7 }}>
                We build clean, professional websites for small businesses. No jargon. No complexity. Just sites that work and bring in customers.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                How we work
              </h2>
              <p className="text-lg md:text-xl mb-8" style={{ color: '#808080', lineHeight: 1.7 }}>
                Fixed price. Fixed timeline. You know what you're getting before we start. No surprises, no scope creep, no excuses.
              </p>
              <p className="text-lg md:text-xl" style={{ color: '#808080', lineHeight: 1.7 }}>
                We start with a free call to understand your business. Then we build a plan. You approve it. We build it. You launch it.
              </p>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                Why it works
              </h2>
              <p className="text-lg md:text-xl mb-8" style={{ color: '#808080', lineHeight: 1.7 }}>
                Every business needs a professional web presence. Not to look fancy. To bring in customers.
              </p>
              <p className="text-lg md:text-xl" style={{ color: '#808080', lineHeight: 1.7 }}>
                Your website is an investment that pays for itself. One new customer covers the cost. Every customer after that is profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
            By the numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                stat: "200+",
                label: "Websites built"
              },
              {
                num: "02",
                stat: "1-4 weeks",
                label: "Average timeline"
              },
              {
                num: "03",
                stat: "99%",
                label: "Client retention"
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-sm font-bold mb-4" style={{ color: '#404040' }}>
                  {item.num}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.stat}
                </div>
                <p className="text-base" style={{ color: '#808080' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
            Start your project
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                transition: 'all 0.2s ease',
                display: 'inline-block',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A0A0A';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Book a call
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                backgroundColor: 'transparent',
                color: '#A0A0A0',
                border: '2px solid #2A2A2A',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#404040';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#A0A0A0';
                e.currentTarget.style.borderColor = '#2A2A2A';
              }}
            >
              Send email
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-base" style={{ color: '#606060' }}>
              <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#A0A0A0' }}>contact@scriptpilot.us</a>
            </p>
            <p className="text-base" style={{ color: '#606060' }}>
              <a href="tel:4174010015" className="no-underline" style={{ color: '#A0A0A0' }}>(417) 401-0015</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
