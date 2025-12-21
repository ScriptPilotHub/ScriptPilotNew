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
              Services
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{
              color: '#8B95A5',
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
                background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                color: '#FFFFFF',
                transition: 'all 0.3s ease',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(45, 156, 219, 0.3)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(45, 156, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 156, 219, 0.3)';
              }}
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
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
                  background: 'linear-gradient(135deg, rgba(45, 156, 219, 0.03) 0%, rgba(86, 204, 242, 0.03) 100%)',
                  borderBottom: '1px solid rgba(45, 156, 219, 0.1)',
                  borderLeft: '3px solid transparent',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 156, 219, 0.08) 0%, rgba(86, 204, 242, 0.08) 100%)';
                  e.currentTarget.style.borderLeftColor = '#2D9CDB';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 156, 219, 0.03) 0%, rgba(86, 204, 242, 0.03) 100%)';
                  e.currentTarget.style.borderLeftColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg" style={{ color: '#8B95A5', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold" style={{
                    background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {service.price}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="text-xs px-3 py-2"
                      style={{
                        backgroundColor: 'rgba(45, 156, 219, 0.1)',
                        color: '#56CCF2',
                        border: '1px solid rgba(45, 156, 219, 0.2)',
                        borderRadius: '4px'
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
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F2994A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Free photography
          </h2>
          <p className="text-lg md:text-xl mb-12" style={{ color: '#8B95A5' }}>
            Within 50 miles of Springfield, MO? We photograph your business at no charge.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Location photos",
              "Product shots",
              "Team photos"
            ].map((item, index) => (
              <div
                key={index}
                className="p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(242, 153, 74, 0.05) 0%, rgba(242, 153, 74, 0.08) 100%)',
                  border: '1px solid rgba(242, 153, 74, 0.3)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.6)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(242, 153, 74, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <p className="text-base font-semibold" style={{ color: '#FFFFFF' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(45, 156, 219, 0.1) 0%, transparent 70%)'
        }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12" style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Start your project
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                color: '#FFFFFF',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(45, 156, 219, 0.3)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(45, 156, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 156, 219, 0.3)';
              }}
            >
              Book a call
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                backgroundColor: 'transparent',
                color: '#56CCF2',
                border: '2px solid rgba(86, 204, 242, 0.3)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(86, 204, 242, 0.1)';
                e.currentTarget.style.borderColor = '#56CCF2';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(86, 204, 242, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Send email
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-base" style={{ color: '#8B95A5' }}>
              <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#56CCF2' }}>contact@scriptpilot.us</a>
            </p>
            <p className="text-base" style={{ color: '#8B95A5' }}>
              <a href="tel:4174010015" className="no-underline" style={{ color: '#56CCF2' }}>(417) 401-0015</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
