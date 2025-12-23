import { SEO } from '../SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Services = () => {
  return (
    <>
      <SEO
        title="Web Design Services"
        description="Script Pilot offers professional websites, e-commerce stores, site audits, maintenance, and event photography. Fixed pricing, transparent process."
        path="/services"
      />

      <article style={{ backgroundColor: '#0F1115', color: '#F5F7FA' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #161A22 0%, #0F1115 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <div style={{ color: '#9AA0A6', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
                  SERVICES
                </div>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#F5F7FA'
                }}>
                  What we build
                </h1>
              </div>
              <div className="md:col-span-5 flex items-end">
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#9AA0A6'
                }}>
                  We specialize in websites that generate revenue. Everything is built custom. No templates. No page builders. Just clean code and clear strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-20" style={{ borderTop: '1px solid #2A2F3A' }}>
          <div className="max-w-[1400px] mx-auto">
            {[
              {
                num: '01',
                title: 'Complete website',
                desc: 'Full-service web design from start to finish. Business sites, e-commerce stores, or both - we handle everything. Professional design, clean code, and built to convert visitors into customers. Includes lifetime hosting.',
                features: ['Business or e-commerce', 'Custom design', 'Mobile responsive', 'SEO optimized', 'Payment processing', 'Product catalogs', 'Contact forms', 'Lifetime hosting', '30 day support'],
                price: '$700'
              },
              {
                num: '02',
                title: 'Demo site',
                desc: 'See your site before committing. We build a working demo based on your requirements. No obligation. No risk.',
                features: ['Working prototype', 'Real content', 'Interactive demo', 'Early feedback'],
                price: 'Free'
              },
              {
                num: '03',
                title: 'Site audit',
                desc: 'Detailed analysis of your current website. Performance review. SEO evaluation. Design critique. Prioritized recommendations.',
                features: ['Performance test', 'SEO analysis', 'Security scan', 'Usability review', 'Action plan'],
                price: 'Free'
              },
              {
                num: '04',
                title: 'Monthly maintenance',
                desc: 'Optional upgrade to your lifetime hosting. Adds priority support, daily backups, proactive monitoring, and ongoing content updates.',
                features: ['Priority support', 'Daily backups', 'Security updates', 'Uptime monitoring', 'Content updates'],
                price: '$150/mo'
              },
              {
                num: '05',
                title: 'Event photography',
                desc: 'Professional photography for business events, storefronts, and product shots. Available bundled with web design or as a standalone service.',
                features: ['Event coverage', 'Storefront photos', 'Product photography', 'Food & beverage', 'Professional editing', 'High resolution files'],
                price: '$150'
              }
            ].map((service, i) => (
              <div key={i} style={{
                borderBottom: '1px solid #2A2F3A',
                paddingTop: '48px',
                paddingBottom: '48px',
                backgroundColor: i % 2 === 1 ? '#161A22' : 'transparent'
              }}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12" style={{ padding: i % 2 === 1 ? '16px' : '0', paddingTop: 0, paddingBottom: 0 }}>
                  <div className="md:col-span-1">
                    <span style={{ fontSize: '14px', color: '#2A2F3A', fontWeight: 700 }}>
                      {service.num}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 style={{
                      fontSize: 'clamp(24px, 5vw, 32px)',
                      fontWeight: 700,
                      marginBottom: '16px',
                      letterSpacing: '-0.01em',
                      color: '#5B6CFF'
                    }}>
                      {service.title}
                    </h2>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#9AA0A6',
                      marginBottom: '24px'
                    }}>
                      {service.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {service.features.map((feature, idx) => (
                        <span key={idx} style={{
                          fontSize: '12px',
                          padding: '6px 12px',
                          backgroundColor: '#0F1115',
                          color: '#9AA0A6',
                          border: '1px solid #2A2F3A'
                        }}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-5 flex md:justify-end items-start mt-4 md:mt-0">
                    <div style={{
                      fontSize: 'clamp(32px, 6vw, 42px)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: '#5B6CFF'
                    }}>
                      {service.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-16 py-20 md:py-32" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#0F1115'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              style={{ marginBottom: '64px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#9AA0A6',
                marginBottom: '16px'
              }}>
                PHOTOGRAPHY PORTFOLIO
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-end">
                <div>
                  <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#F5F7FA',
                    marginBottom: '16px',
                    lineHeight: 1.1
                  }}>
                    Professional event photography
                  </h2>
                  <p style={{
                    fontSize: '15px',
                    color: '#9AA0A6',
                    lineHeight: 1.7
                  }}>
                    Showcase from The 1906 featuring craft cocktails, artisan food, and live jazz performance.
                  </p>
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#9AA0A6',
                  lineHeight: 1.8
                }}>
                  <p style={{ marginBottom: '12px' }}>
                    Available bundled with web design services or as a standalone offering.
                  </p>
                  <p style={{ color: '#5B6CFF', fontWeight: 600 }}>
                    Perfect for businesses needing quality photos for their website, social media, or marketing materials.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  src: '/photography-examples/guitar.jpg',
                  alt: 'Live jazz performance',
                  delay: 0.1
                },
                {
                  src: '/photography-examples/brushata.jpg',
                  alt: 'Artisan food',
                  delay: 0.2
                },
                {
                  src: '/photography-examples/drink_2.jpg',
                  alt: 'Craft cocktails',
                  delay: 0.3
                },
                {
                  src: '/photography-examples/p1050094-enhanced-nr.jpg',
                  alt: 'Signature drinks',
                  delay: 0.4
                }
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    aspectRatio: '1/1',
                    backgroundColor: '#161A22',
                    border: '1px solid #2A2F3A'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: photo.delay }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: '#5B6CFF',
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    src={photo.src}
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '16px',
                      background: 'linear-gradient(to top, rgba(15, 17, 21, 0.95), transparent)',
                      color: '#F5F7FA',
                      fontSize: '12px',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {photo.alt}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              style={{
                marginTop: '32px',
                textAlign: 'center',
                padding: '24px',
                backgroundColor: '#161A22',
                border: '1px solid #2A2F3A'
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p style={{
                fontSize: '15px',
                color: '#F5F7FA',
                fontWeight: 600
              }}>
                $150 per session
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#161A22'
        }}>
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '32px',
              letterSpacing: '-0.02em',
              color: '#F5F7FA'
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
                  color: '#F5F7FA',
                  backgroundColor: '#5B6CFF',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A5AE8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5B6CFF'}
              >
                BOOK A CALL
              </a>
              <Link
                to="/contact"
                style={{
                  display: 'inline-block',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  color: '#F5F7FA',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  outline: '2px solid #2A2F3A',
                  transition: 'all 0.2s',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.outlineColor = '#5B6CFF';
                  e.currentTarget.style.color = '#5B6CFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.outlineColor = '#2A2F3A';
                  e.currentTarget.style.color = '#F5F7FA';
                }}
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
