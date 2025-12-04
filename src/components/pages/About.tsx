import React, { useEffect, useState } from 'react';

interface AboutProps {
  navigateTo: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <section className="min-h-screen flex items-center px-4 md:px-6" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
      }}>
        <div
          className="max-w-7xl mx-auto w-full py-20 md:py-32"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div className="max-w-5xl">
            <div className="text-xs font-light tracking-widest mb-8 md:mb-12 opacity-60" style={{ color: '#475569' }}>
              SCRIPT PILOT
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter mb-8 md:mb-12 leading-none" style={{
              color: '#1E293B'
            }}>
              About
              <br />
              us
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-extralight mb-12 md:mb-20 max-w-2xl leading-tight" style={{
              color: '#475569'
            }}>
              Web development company based in Missouri.
              <br />
              Serving businesses nationwide since 2020.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 md:gap-x-16 gap-y-8 mt-16 md:mt-32 pt-16 md:pt-32 border-t max-w-4xl" style={{
            borderColor: '#CBD5E1'
          }}>
            {[
              { value: "200+", label: "Projects" },
              { value: "99%", label: "Retained" },
              { value: "1-4wk", label: "Timeline" },
              { value: "4yr", label: "Est. 2020" }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-2 md:mb-3" style={{ color: '#1E293B' }}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-light opacity-60" style={{ color: '#475569' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-40" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 md:mb-24">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#475569' }}>
              OUR STORY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight mb-12 md:mb-16" style={{ color: '#1E293B' }}>
              How we started
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl font-extralight leading-relaxed" style={{ color: '#475569' }}>
            <p>
              Back in 2020, we were freelancers frustrated with how complicated web development had become.
              Clients paid thousands for websites that took months and didn't help their business.
            </p>
            <p>
              We decided to do things differently. Fixed pricing. Clear timelines. No technical jargon.
              Just good websites that help businesses get customers.
            </p>
            <p>
              200+ websites since then. Every project teaches us something new about what works for businesses online.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-40" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-32 text-center">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              TEAM
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight" style={{ color: '#F8FAFC' }}>
              Who we are
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
            {[
              {
                initials: "DT",
                name: "David Tackett",
                role: "Co-Founder & Lead Developer"
              },
              {
                initials: "TW",
                name: "Tyler Wells",
                role: "Co-Founder & Business Strategy"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8"
                  style={{
                    backgroundColor: '#475569'
                  }}
                >
                  <span className="text-3xl sm:text-4xl font-light" style={{ color: '#F8FAFC' }}>
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light mb-2 md:mb-3" style={{ color: '#F8FAFC' }}>
                  {member.name}
                </h3>
                <p className="text-base sm:text-lg font-extralight" style={{ color: '#CBD5E1' }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-40" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight mb-12 md:mb-16" style={{ color: '#1E293B' }}>
            Work with us
          </h2>

          <div className="flex flex-col items-center gap-8 md:gap-12">
            <a
              href="mailto:contact@scriptpilot.us"
              className="text-xl sm:text-2xl md:text-3xl font-light no-underline"
              style={{
                color: '#1E293B',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.color = '#475569';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#1E293B';
              }}
            >
              contact@scriptpilot.us
            </a>

            <a
              href="tel:4174010015"
              className="text-xl sm:text-2xl md:text-3xl font-light no-underline"
              style={{
                color: '#1E293B',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.color = '#475569';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#1E293B';
              }}
            >
              (417) 401-0015
            </a>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl md:text-3xl font-light border-b-2 no-underline"
              style={{
                color: '#1E293B',
                borderColor: '#1E293B',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px) scale(1.05)';
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              Book consultation →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
