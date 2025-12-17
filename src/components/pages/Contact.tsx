import React, { useEffect, useState } from 'react';

interface ContactProps {
  navigateTo: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#0A0A0A' }}>
      <section className="px-6 md:px-8 py-40 md:py-56" style={{
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%)'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.15
        }} />

        <div
          className="max-w-6xl mx-auto relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="max-w-4xl">
            <h1
              className="mb-10 leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 0.95,
                letterSpacing: '-0.02em'
              }}
            >
              Let's talk
            </h1>

            <p className="text-xl md:text-2xl mb-14 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              Book a free call or send an email. We respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold px-9 py-4 no-underline text-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0A0A0A',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-block',
                  border: '2px solid transparent',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Book a call
              </a>

              <a
                href="mailto:contact@scriptpilot.us"
                className="text-base font-semibold px-9 py-4 no-underline text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#999999',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-block',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999999';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Send email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-28 md:py-40" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                title: "Email",
                content: "contact@scriptpilot.us",
                detail: "24 hour response time",
                href: "mailto:contact@scriptpilot.us"
              },
              {
                title: "Phone",
                content: "(417) 401-0015",
                detail: "Mon-Fri, 9am-6pm CST",
                href: "tel:4174010015"
              },
              {
                title: "Schedule",
                content: "Book 30 min call",
                detail: "Free consultation",
                href: "https://calendly.com/contact-scriptpilot/30min",
                external: true
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="p-10 md:p-12 no-underline block text-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#606060' }}>
                  {item.title}
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold mb-3 tracking-tight"
                  style={{
                    color: '#FFFFFF',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.content}
                </h3>
                <p className="text-sm" style={{ color: '#808080' }}>
                  {item.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-28 md:py-40" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              What to expect
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-20">
            {[
              {
                num: "01",
                title: "Location",
                content: "Based in Missouri. Serving clients nationwide."
              },
              {
                num: "02",
                title: "Response time",
                content: "All inquiries answered within 24 hours. Usually faster."
              },
              {
                num: "03",
                title: "Timeline",
                content: "Most websites launch in 1-4 weeks from start to finish."
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-xs font-bold mb-5 tracking-widest" style={{ color: '#404040' }}>
                  {item.num}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p className="text-base md:text-lg" style={{ color: '#808080', lineHeight: 1.7 }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
            Ready to start?
          </h2>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#808080', lineHeight: 1.6 }}>
            Book a free call. No pressure. No commitment.
          </p>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold px-9 py-4 no-underline inline-block"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '2px solid transparent',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0A0A0A';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book a call
          </a>
        </div>
      </section>
    </div>
  );
};
