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

      <article style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <div style={{ color: '#666666', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
                  SERVICES
                </div>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em'
                }}>
                  What we build
                </h1>
              </div>
              <div className="md:col-span-5 flex items-end">
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#999999'
                }}>
                  We specialize in websites that generate revenue. Everything is built custom. No templates. No page builders. Just clean code and clear strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-20" style={{ borderTop: '1px solid #1A1A1A' }}>
          <div className="max-w-[1400px] mx-auto">
            {[
              {
                num: '01',
                title: 'Business website',
                desc: 'Professional site built for your business. Clean design. Fast loading. Mobile responsive. Optimized for search engines.',
                features: ['5-10 pages', 'Contact forms', 'SEO setup', 'Google Analytics', '30 day support'],
                price: '$700'
              },
              {
                num: '02',
                title: 'E-commerce store',
                desc: 'Complete online store. Sell physical or digital products. Secure payment processing. Inventory management. Order tracking.',
                features: ['Product catalog', 'Shopping cart', 'Secure checkout', 'Order management', 'Customer accounts'],
                price: '$700'
              },
              {
                num: '03',
                title: 'Demo site',
                desc: 'See your site before committing. We build a working demo based on your requirements. No obligation. No risk.',
                features: ['Working prototype', 'Real content', 'Interactive demo', 'Early feedback'],
                price: 'Free'
              },
              {
                num: '04',
                title: 'Site audit',
                desc: 'Detailed analysis of your current website. Performance review. SEO evaluation. Design critique. Prioritized recommendations.',
                features: ['Performance test', 'SEO analysis', 'Security scan', 'Usability review', 'Action plan'],
                price: 'Free'
              },
              {
                num: '05',
                title: 'Monthly maintenance',
                desc: 'Keep your site secure and running smooth. Includes hosting, security updates, daily backups, and priority support.',
                features: ['Managed hosting', 'Security updates', 'Daily backups', 'Uptime monitoring', 'Priority support'],
                price: '$150/mo'
              }
            ].map((service, i) => (
              <div key={i} style={{
                borderBottom: '1px solid #1A1A1A',
                paddingTop: '48px',
                paddingBottom: '48px'
              }}>
                <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-1">
                    <span style={{ fontSize: '14px', color: '#333333', fontWeight: 700 }}>
                      {service.num}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      marginBottom: '16px',
                      letterSpacing: '-0.01em'
                    }}>
                      {service.title}
                    </h2>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#999999',
                      marginBottom: '24px'
                    }}>
                      {service.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {service.features.map((feature, idx) => (
                        <span key={idx} style={{
                          fontSize: '12px',
                          padding: '6px 12px',
                          backgroundColor: '#1A1A1A',
                          color: '#808080'
                        }}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-5 flex md:justify-end items-start">
                    <div style={{
                      fontSize: '42px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em'
                    }}>
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{ 
          borderTop: '1px solid #1A1A1A',
          backgroundColor: '#0F0F0F'
        }}>
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '32px',
              letterSpacing: '-0.02em'
            }}>
              Ready to start?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  color: '#0A0A0A',
                  backgroundColor: '#FFFFFF',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F0F0F';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outline = '1px solid #FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.outline = 'none';
                }}
              >
                BOOK A CALL
              </a>
              <Link
                to="/contact"
                style={{
                  display: 'inline-block',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  outline: '1px solid #333333',
                  transition: 'all 0.15s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.outlineColor = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.outlineColor = '#333333'}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
