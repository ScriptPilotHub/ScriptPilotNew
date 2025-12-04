import React, { useEffect, useState } from 'react';

interface ServicesProps {
  navigateTo: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ navigateTo }) => {
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
              SERVICES
            </div>

            <h1 className="text-8xl sm:text-9xl font-extralight tracking-tighter mb-12 leading-none" style={{
              color: '#1E293B'
            }}>
              What we
              <br />
              build
            </h1>

            <p className="text-3xl font-extralight mb-20 max-w-2xl leading-tight" style={{
              color: '#475569'
            }}>
              Professional websites and custom applications.
              <br />
              Fixed pricing. Fast delivery.
            </p>

            <div className="flex gap-8 items-center">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-light px-0 py-3 border-b-2 no-underline group"
                style={{
                  color: '#1E293B',
                  borderColor: '#1E293B',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
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
              WHAT WE BUILD
            </div>
            <h2 className="text-7xl font-extralight tracking-tight" style={{ color: '#1E293B' }}>
              Services
            </h2>
          </div>

          <div className="space-y-1">
            {[
              {
                title: "Business & E-commerce Sites",
                description: "Professional websites and online stores that convert",
                price: "$600",
                features: ["Mobile responsive", "SEO optimized", "Payment processing", "Analytics"]
              },
              {
                title: "Custom applications",
                description: "Tailored solutions for unique requirements",
                price: "Custom",
                features: ["Custom functionality", "Database integration", "API connections", "Scalable"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-12 border-b cursor-pointer"
                style={{
                  borderColor: '#E5E7EB',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateX(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                onClick={() => navigateTo('contact')}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-4xl font-light mb-2" style={{ color: '#1E293B' }}>
                      {service.title}
                    </h3>
                    <p className="text-xl font-extralight" style={{ color: '#475569' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-4xl font-extralight" style={{ color: '#1E293B' }}>
                    {service.price}
                  </div>
                </div>
                <div className="flex gap-6 text-sm font-light" style={{ color: '#475569' }}>
                  {service.features.map((feature, idx) => (
                    <span key={idx}>• {feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-40" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              FREE PHOTOGRAPHY
            </div>
            <h2 className="text-7xl font-extralight tracking-tight mb-8" style={{ color: '#F8FAFC' }}>
              Professional Photos
              <br />
              Included
            </h2>
            <p className="text-2xl font-extralight max-w-3xl mx-auto" style={{ color: '#CBD5E1' }}>
              Within 50 miles of Springfield, MO
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-20 max-w-5xl mx-auto">
            {[
              { title: "Storefront & Interior" },
              { title: "Product Photography" },
              { title: "Team Photos" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 className="text-2xl font-light" style={{ color: '#F8FAFC' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-40" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-extralight tracking-tight mb-16" style={{ color: '#1E293B' }}>
            Get started
          </h2>

          <div className="flex flex-col items-center gap-12">
            <a
              href="mailto:contact@scriptpilot.us"
              className="text-3xl font-light no-underline"
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
              className="text-3xl font-light no-underline"
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
              className="text-3xl font-light border-b-2 no-underline"
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
