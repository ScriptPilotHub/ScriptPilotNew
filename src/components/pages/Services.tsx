import { SEO } from '../SEO';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <>
      <SEO
        title="Web Design Services"
        description="Professional websites, e-commerce stores, site audits, and maintenance. Fixed pricing, transparent process."
        path="/services"
      />

      <article style={{ backgroundColor: '#0A0A0A' }}>
        <section className="px-6 md:px-12 py-32 md:py-48">
          <div className="max-w-5xl mx-auto">
            <h1
              className="mb-8 leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.1
              }}
            >
              Services
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.5
            }}>
              Everything you need to get online and start bringing in customers.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-5xl mx-auto space-y-1">
            {[
              {
                title: "Business website",
                description: "Professional site built for your business. Everything you need to get customers online.",
                price: "$700",
                features: ["5-10 pages", "Mobile responsive", "Contact forms", "SEO setup", "Fast loading"]
              },
              {
                title: "E-commerce store",
                description: "Complete online store. Sell products, manage orders, process payments.",
                price: "$700",
                features: ["Product catalog", "Shopping cart", "Secure checkout", "Order management", "Inventory"]
              },
              {
                title: "Demo site",
                description: "See your site before you commit. We build a working demo. No obligation.",
                price: "Free",
                features: ["No commitment", "Working demo", "Real preview", "Early feedback"]
              },
              {
                title: "Site audit",
                description: "Detailed review of your current website. Get clear feedback on what works and what doesn't.",
                price: "Free",
                features: ["Performance review", "SEO analysis", "Design feedback", "Priority fixes"]
              },
              {
                title: "Monthly maintenance",
                description: "Keep your site secure, fast, and running smooth. Includes hosting and support.",
                price: "$150/mo",
                features: ["Hosting included", "Security updates", "Daily backups", "Priority support"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-10 md:p-12"
                style={{
                  backgroundColor: '#0F0F0F',
                  borderBottom: '1px solid #1A1A1A'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg mb-6" style={{ color: '#808080', lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5"
                          style={{
                            backgroundColor: '#1A1A1A',
                            color: '#999999'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: '#FFFFFF' }}>
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-32" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
              Ready to start?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-8 py-4 no-underline"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0A0A0A',
                  transition: 'all 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outline = '1px solid #FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.outline = 'none';
                }}
              >
                Book a call
              </a>

              <Link
                to="/contact"
                className="text-base font-medium px-8 py-4 no-underline"
                style={{
                  backgroundColor: 'transparent',
                  color: '#999999',
                  outline: '1px solid #2A2A2A',
                  transition: 'all 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outlineColor = '#404040';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999999';
                  e.currentTarget.style.outlineColor = '#2A2A2A';
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
