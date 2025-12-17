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
    <div style={{ backgroundColor: '#ffffff' }}>
      <section className="min-h-screen flex items-center px-4 md:px-6 py-24 md:py-32" style={{
        backgroundColor: '#F8FAFC'
      }}>
        <div
          className="max-w-5xl mx-auto w-full text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 md:mb-8 leading-tight" style={{
            color: '#1E293B'
          }}>
            Let's talk about your project
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed" style={{
            color: '#64748B',
            fontWeight: 300
          }}>
            Book a free 30 minute call or send us an email. We usually respond within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium px-8 py-4 no-underline rounded-lg"
              style={{
                backgroundColor: '#1E293B',
                color: '#ffffff',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#334155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1E293B';
              }}
            >
              Book a call
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-lg font-medium px-8 py-4 no-underline rounded-lg"
              style={{
                backgroundColor: '#ffffff',
                color: '#1E293B',
                border: '1px solid #E2E8F0',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              Send email
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Email",
                content: "contact@scriptpilot.us",
                detail: "We respond within 24 hours",
                href: "mailto:contact@scriptpilot.us"
              },
              {
                title: "Phone",
                content: "(417) 401-0015",
                detail: "Monday to Friday, 9am to 6pm CST",
                href: "tel:4174010015"
              },
              {
                title: "Schedule",
                content: "Book a call",
                detail: "Free 30 minute consultation",
                href: "https://calendly.com/contact-scriptpilot/30min",
                external: true
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="p-8 rounded-lg no-underline block text-center"
                style={{
                  backgroundColor: '#F8FAFC',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="text-sm font-medium mb-4" style={{ color: '#64748B' }}>
                  {item.title}
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-2" style={{ color: '#1E293B' }}>
                  {item.content}
                </h3>
                <p className="text-sm" style={{ color: '#64748B' }}>
                  {item.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#1E293B' }}>
              What to expect
            </h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Location",
                content: "Based in Missouri. Serving clients nationwide."
              },
              {
                title: "Response time",
                content: "We respond to all inquiries within 24 hours. Usually faster."
              },
              {
                title: "Timeline",
                content: "Most websites launch in 1-4 weeks from start to finish."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg md:text-xl font-medium mb-3" style={{ color: '#1E293B' }}>
                  {item.title}
                </h3>
                <p className="text-base" style={{ color: '#64748B' }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8" style={{ color: '#ffffff' }}>
            Ready to get started?
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto" style={{ color: '#CBD5E1', fontWeight: 300 }}>
            Book a free call to discuss your project. No pressure, no commitment.
          </p>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium px-8 py-4 no-underline rounded-lg inline-block"
            style={{
              backgroundColor: '#ffffff',
              color: '#1E293B',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F1F5F9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            Book a call
          </a>
        </div>
      </section>
    </div>
  );
};
