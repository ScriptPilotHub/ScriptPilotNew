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
            Services
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed" style={{
            color: '#64748B',
            fontWeight: 300
          }}>
            Everything you need to get your business online and growing.
          </p>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium px-8 py-4 no-underline rounded-lg inline-block"
            style={{
              backgroundColor: '#1E293B',
              color: '#ffffff',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#334155';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1E293B';
            }}
          >
            Get started
          </a>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#1E293B' }}>
              What we build
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Business website",
                description: "Clean, professional design that represents your brand and converts visitors into customers. Includes all pages, contact forms, and basic SEO setup.",
                price: "$700",
                features: ["5-10 pages", "Mobile responsive", "Contact forms", "SEO setup", "Fast loading"]
              },
              {
                title: "E-commerce store",
                description: "Sell products online with secure payments, inventory management, and order tracking. Everything you need to start selling today.",
                price: "$700",
                features: ["Product catalog", "Shopping cart", "Secure checkout", "Order management", "Payment processing"]
              },
              {
                title: "Demo site",
                description: "See your site before you commit. We build a working demo based on your requirements so you know exactly what you're getting.",
                price: "Free",
                features: ["No commitment", "See before you buy", "Real working demo", "Make changes early", "Risk free"]
              },
              {
                title: "Site audit",
                description: "Already have a website? We'll review it and provide a detailed report on what's working and what needs improvement.",
                price: "$150",
                features: ["Performance review", "SEO analysis", "Design feedback", "Action items", "Priority recommendations"]
              },
              {
                title: "Monthly maintenance",
                description: "Keep your site updated, secure, and running smoothly. Includes hosting, security updates, backups, and priority support.",
                price: "$150/mo",
                features: ["Hosting included", "Security updates", "Regular backups", "Priority support", "Performance monitoring"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 md:p-10 rounded-lg"
                style={{
                  backgroundColor: '#F8FAFC',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-medium mb-3" style={{ color: '#1E293B' }}>
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg mb-4" style={{ color: '#64748B' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-3xl md:text-4xl font-normal" style={{ color: '#1E293B' }}>
                    {service.price}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 rounded"
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#64748B'
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#ffffff' }}>
            Free photography
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12" style={{ color: '#CBD5E1', fontWeight: 300 }}>
            Within 50 miles of Springfield, MO? We'll photograph your business at no extra charge.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Location photos" },
              { title: "Product shots" },
              { title: "Team photos" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl md:text-2xl font-medium" style={{ color: '#ffffff' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8" style={{ color: '#1E293B' }}>
            Ready to start?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
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
                backgroundColor: '#F1F5F9',
                color: '#1E293B',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E2E8F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F1F5F9';
              }}
            >
              Send email
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-lg md:text-xl" style={{ color: '#64748B' }}>
              <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#1E293B' }}>contact@scriptpilot.us</a>
            </p>
            <p className="text-lg md:text-xl" style={{ color: '#64748B' }}>
              <a href="tel:4174010015" className="no-underline" style={{ color: '#1E293B' }}>(417) 401-0015</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
