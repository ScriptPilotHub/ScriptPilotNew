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
    <div style={{ backgroundColor: '#F8FAFC' }}>
      <section className="min-h-screen flex items-center px-6" style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
      }}>
        <div
          className="max-w-7xl mx-auto w-full py-32"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div className="max-w-5xl">
            <div className="text-xs font-light tracking-widest mb-12 opacity-60" style={{ color: '#475569' }}>
              CONTACT
            </div>

            <h1 className="text-8xl sm:text-9xl font-extralight tracking-tighter mb-12 leading-none" style={{
              color: '#1E293B'
            }}>
              Let's
              <br />
              talk
            </h1>

            <p className="text-3xl font-extralight mb-20 max-w-2xl leading-tight" style={{
              color: '#475569'
            }}>
              Start your project today.
            </p>

            <div className="flex flex-col gap-12 max-w-2xl">
              <a
                href="mailto:contact@scriptpilot.us"
                className="text-5xl font-extralight no-underline group"
                style={{
                  color: '#1E293B',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.color = '#475569';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.color = '#1E293B';
                }}
              >
                contact@scriptpilot.us
              </a>

              <a
                href="tel:4174010015"
                className="text-5xl font-extralight no-underline"
                style={{
                  color: '#1E293B',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.color = '#475569';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.color = '#1E293B';
                }}
              >
                (417) 401-0015
              </a>

              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl font-extralight border-b-2 no-underline inline-block"
                style={{
                  color: '#1E293B',
                  borderColor: '#1E293B',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Book consultation →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-40" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#475569' }}>
              INFORMATION
            </div>
            <h2 className="text-7xl font-extralight tracking-tight" style={{ color: '#1E293B' }}>
              Details
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-20 max-w-5xl">
            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1E293B' }}>
                Location
              </h3>
              <p className="text-xl font-extralight leading-relaxed" style={{ color: '#475569' }}>
                Based in Missouri
                <br />
                Serving nationwide
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1E293B' }}>
                Response time
              </h3>
              <p className="text-xl font-extralight leading-relaxed" style={{ color: '#475569' }}>
                24 hour reply
                <br />
                Usually faster
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#1E293B' }}>
                Timeline
              </h3>
              <p className="text-xl font-extralight leading-relaxed" style={{ color: '#475569' }}>
                Most sites launch
                <br />
                in 1-4 weeks
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-40" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              READY TO START?
            </div>
            <h2 className="text-7xl font-extralight tracking-tight" style={{ color: '#F8FAFC' }}>
              Get in touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-1 max-w-5xl mx-auto">
            {[
              {
                title: "Email",
                content: "contact@scriptpilot.us",
                detail: "24hr response",
                href: "mailto:contact@scriptpilot.us"
              },
              {
                title: "Phone",
                content: "(417) 401-0015",
                detail: "Mon-Fri 9-6 CST",
                href: "tel:4174010015"
              },
              {
                title: "Schedule",
                content: "Book consultation",
                detail: "30 minutes free",
                href: "https://calendly.com/contact-scriptpilot/30min",
                external: true
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="p-12 border-b no-underline block"
                style={{
                  borderColor: '#475569',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateX(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#475569';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="text-xs font-light tracking-widest mb-4 opacity-60" style={{ color: '#CBD5E1' }}>
                  {item.title}
                </div>
                <h3 className="text-2xl font-light mb-2" style={{ color: '#F8FAFC' }}>
                  {item.content}
                </h3>
                <p className="text-sm font-extralight" style={{ color: '#CBD5E1' }}>
                  {item.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
