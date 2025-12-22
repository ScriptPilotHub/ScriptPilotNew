import { Link } from 'react-router-dom';
import { SEO } from '../SEO';

export const Home = () => {
  return (
    <>
      <SEO
        title="Professional Websites That Bring In Customers"
        description="ScriptPilot builds clean, professional websites for small businesses. Fixed price, fixed timeline. Based in Missouri, serving nationwide."
        path="/"
      />

      <article style={{ backgroundColor: '#0D1B2A', color: '#F4F3EE' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #1B263B 0%, #0D1B2A 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-end">
              <div className="md:col-span-8">
                <div className="mb-6" style={{ color: '#778DA9', fontSize: '13px', letterSpacing: '0.1em' }}>
                  SCRIPTPILOT
                </div>
                <h1 style={{
                  fontSize: 'clamp(3rem, 9vw, 8rem)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  marginBottom: '0',
                  background: 'linear-gradient(to bottom, #F4F3EE 0%, #B8C5D6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Websites<br/>that work
                </h1>
              </div>
              <div className="md:col-span-4">
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#B8C5D6',
                  marginBottom: '32px'
                }}>
                  Professional sites for businesses that need customers. Not brochures. Not portfolios. Real tools that bring in revenue.
                </p>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    color: '#E8B4B8',
                    textDecoration: 'none',
                    borderBottom: '2px solid #E8B4B8',
                    paddingBottom: '2px',
                    transition: 'color 0.2s, border-color 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C1666B';
                    e.currentTarget.style.borderColor = '#C1666B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E8B4B8';
                    e.currentTarget.style.borderColor = '#E8B4B8';
                  }}
                >
                  BOOK A CALL
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-24" style={{ borderTop: '1px solid rgba(120, 141, 169, 0.2)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3 gap-1">
              {[
                { label: 'Price', value: '$700' },
                { label: 'Timeline', value: '1–4 wks' },
                { label: 'Ownership', value: 'Yours' }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '48px 32px',
                  backgroundColor: '#1B263B',
                  borderRight: i < 2 ? '1px solid rgba(120, 141, 169, 0.15)' : 'none'
                }}>
                  <div style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    color: '#778DA9',
                    marginBottom: '16px'
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#E8B4B8'
                  }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-40" style={{
          borderTop: '1px solid rgba(120, 141, 169, 0.2)',
          backgroundColor: '#0D1B2A'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '32px',
                  color: '#F4F3EE'
                }}>
                  One customer pays for the entire site
                </h2>
              </div>
              <div className="md:col-span-7">
                <div className="space-y-16">
                  {[
                    {
                      num: '01',
                      title: 'Most websites fail',
                      body: 'They look nice but bring in zero customers. Design without strategy is decoration. We build sites that convert visitors into paying customers.'
                    },
                    {
                      num: '02',
                      title: 'Speed matters',
                      body: 'People leave slow sites. Search engines rank them lower. We build fast, clean sites that load in under 2 seconds. No bloat. No unnecessary code.'
                    },
                    {
                      num: '03',
                      title: 'You own everything',
                      body: 'No platform lock-in. No recurring fees unless you want maintenance. Take your site anywhere. Switch hosts anytime. Full ownership from day one.'
                    }
                  ].map((item, i) => (
                    <div key={i} className="grid grid-cols-12 gap-6">
                      <div className="col-span-2">
                        <span style={{
                          fontSize: '14px',
                          color: '#415A77',
                          fontWeight: 700
                        }}>
                          {item.num}
                        </span>
                      </div>
                      <div className="col-span-10">
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: 700,
                          marginBottom: '12px',
                          letterSpacing: '-0.01em',
                          color: '#E8B4B8'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{
                          fontSize: '15px',
                          lineHeight: 1.7,
                          color: '#B8C5D6'
                        }}>
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          borderTop: '1px solid rgba(120, 141, 169, 0.2)',
          background: 'linear-gradient(to bottom, #1B263B 0%, #0D1B2A 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20">
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F4F3EE'
              }}>
                Services
              </h2>
            </div>

            <div className="space-y-1">
              {[
                {
                  title: 'Business website',
                  desc: 'Professional design. Mobile responsive. Contact forms. SEO setup.',
                  price: '$700'
                },
                {
                  title: 'E-commerce',
                  desc: 'Complete online store. Product catalog. Secure payments. Order management.',
                  price: '$700'
                },
                {
                  title: 'Maintenance',
                  desc: 'Hosting. Updates. Security. Backups. Priority support.',
                  price: '$150/mo'
                }
              ].map((service, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '32px',
                  padding: '40px 0',
                  borderBottom: '1px solid rgba(120, 141, 169, 0.2)',
                  alignItems: 'start'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      marginBottom: '8px',
                      letterSpacing: '-0.01em',
                      color: '#F4F3EE'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      color: '#B8C5D6',
                      lineHeight: 1.6
                    }}>
                      {service.desc}
                    </p>
                  </div>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    color: '#E8B4B8'
                  }}>
                    {service.price}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '48px' }}>
              <Link
                to="/services"
                style={{
                  display: 'inline-block',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  color: '#E8B4B8',
                  textDecoration: 'none',
                  borderBottom: '2px solid #E8B4B8',
                  paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C1666B';
                  e.currentTarget.style.borderColor = '#C1666B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#E8B4B8';
                  e.currentTarget.style.borderColor = '#E8B4B8';
                }}
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-32 md:py-48" style={{
          borderTop: '1px solid rgba(120, 141, 169, 0.2)',
          backgroundColor: '#1B263B'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#F4F3EE'
                }}>
                  Start your project
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: '#B8C5D6',
                  marginBottom: '40px'
                }}>
                  Book a 30 minute call. No pressure. No commitment. We discuss your business and whether we are a good fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/contact-scriptpilot/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      fontSize: '13px',
                      letterSpacing: '0.05em',
                      color: '#0D1B2A',
                      backgroundColor: '#E8B4B8',
                      padding: '16px 32px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C1666B';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#E8B4B8';
                    }}
                  >
                    BOOK A CALL
                  </a>
                  <Link
                    to="/pricing"
                    style={{
                      display: 'inline-block',
                      fontSize: '13px',
                      letterSpacing: '0.05em',
                      color: '#F4F3EE',
                      padding: '16px 32px',
                      textDecoration: 'none',
                      outline: '2px solid #415A77',
                      transition: 'all 0.2s',
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.outlineColor = '#E8B4B8';
                      e.currentTarget.style.color = '#E8B4B8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.outlineColor = '#415A77';
                      e.currentTarget.style.color = '#F4F3EE';
                    }}
                  >
                    VIEW PRICING
                  </Link>
                </div>
              </div>
              <div style={{
                fontSize: '13px',
                lineHeight: 2,
                color: '#778DA9'
              }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ color: '#B8C5D6', marginBottom: '8px' }}>Email</div>
                  <a href="mailto:contact@scriptpilot.us" style={{ color: '#E8B4B8', textDecoration: 'none' }}>
                    contact@scriptpilot.us
                  </a>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ color: '#B8C5D6', marginBottom: '8px' }}>Phone</div>
                  <a href="tel:4174010015" style={{ color: '#E8B4B8', textDecoration: 'none' }}>
                    (417) 401-0015
                  </a>
                </div>
                <div>
                  <div style={{ color: '#B8C5D6', marginBottom: '8px' }}>Location</div>
                  <div style={{ color: '#E8B4B8' }}>Missouri, USA</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
