import React, { useEffect, useState } from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#0A0A0A' }}>
      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0A0A',
        position: 'relative'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)'
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
                color: '#FFFFFF',
                lineHeight: 0.95
              }}
            >
              Services
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{
              color: '#A0A0A0',
              lineHeight: 1.5
            }}>
              Everything you need to get your business online and growing.
            </p>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-8 py-4 no-underline inline-block"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                transition: 'all 0.2s ease',
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
              Get started
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-1">
            {[
              {
                title: "Business website",
                description: "Professional design built to represent your brand and convert visitors into customers. Includes all essential pages, contact forms, and SEO setup.",
                price: "$700",
                features: ["5-10 pages", "Mobile responsive", "Contact forms", "SEO ready", "Fast loading", "Free hosting first month"]
              },
              {
                title: "E-commerce store",
                description: "Complete online store with secure checkout, inventory management, and order tracking. Start selling in weeks.",
                price: "$700",
                features: ["Product catalog", "Shopping cart", "Secure payments", "Order management", "Inventory tracking", "Customer accounts"]
              },
              {
                title: "Demo site",
                description: "See your site before you commit. We build a working demo based on your requirements. No obligation.",
                price: "Free",
                features: ["No commitment", "See before buying", "Working demo", "Early feedback", "Risk free", "Full preview"]
              },
              {
                title: "Site audit",
                description: "Detailed analysis of your current website. Get actionable feedback on performance, design, and conversion.",
                price: "Free",
                features: ["Performance review", "SEO analysis", "Design feedback", "Priority fixes", "Action plan", "Expert insights"]
              },
              {
                title: "Monthly maintenance",
                description: "Keep your site secure, updated, and running fast. Includes hosting, backups, and priority support.",
                price: "$150/mo",
                features: ["Hosting included", "Security updates", "Daily backups", "Priority support", "Performance monitoring", "Content updates"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 md:p-12"
                style={{
                  backgroundColor: '#0F0F0F',
                  borderBottom: '1px solid #1A1A1A',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#141414';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F0F0F';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg" style={{ color: '#808080', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                    {service.price}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-xs px-3 py-2"
                      style={{
                        backgroundColor: '#0A0A0A',
                        color: '#606060',
                        border: '1px solid #1A1A1A'
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Free photography
          </h2>
          <p className="text-lg md:text-xl mb-12" style={{ color: '#808080' }}>
            Within 50 miles of Springfield, MO? We photograph your business at no charge.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Location photos",
              "Product shots",
              "Team photos"
            ].map((item, index) => (
              <div key={index} className="p-6" style={{ backgroundColor: '#0F0F0F', border: '1px solid #1A1A1A' }}>
                <p className="text-base font-semibold" style={{ color: '#FFFFFF' }}>
                  {item}
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
