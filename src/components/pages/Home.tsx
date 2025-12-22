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

      <article style={{ backgroundColor: '#0F1115', color: '#F5F7FA' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #161A22 0%, #0F1115 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-end">
              <div className="md:col-span-8">
                <div className="mb-6" style={{ color: '#9AA0A6', fontSize: '13px', letterSpacing: '0.1em' }}>
                  SCRIPTPILOT
                </div>
                <h1 style={{
                  fontSize: 'clamp(3rem, 9vw, 8rem)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  marginBottom: '0',
                  background: 'linear-gradient(to bottom, #F5F7FA 0%, #9AA0A6 100%)',
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
                  color: '#9AA0A6',
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
                    color: '#5B6CFF',
                    textDecoration: 'none',
                    borderBottom: '2px solid #5B6CFF',
                    paddingBottom: '2px',
                    transition: 'color 0.2s, border-color 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4A5AE8';
                    e.currentTarget.style.borderColor = '#4A5AE8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#5B6CFF';
                    e.currentTarget.style.borderColor = '#5B6CFF';
                  }}
                >
                  BOOK A CALL
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-24" style={{ borderTop: '1px solid #2A2F3A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                { label: 'Price', value: '$700' },
                { label: 'Timeline', value: '1–4 wks' },
                { label: 'Ownership', value: 'Yours' }
              ].map((item, i) => (
                <div key={i} className={`${i < 2 ? 'md:border-r' : ''} border-b md:border-b-0`} style={{
                  padding: '48px 32px',
                  backgroundColor: '#161A22',
                  borderColor: '#2A2F3A'
                }}>
                  <div style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    color: '#9AA0A6',
                    marginBottom: '16px'
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#5B6CFF'
                  }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-40" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#0F1115'
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
                  color: '#F5F7FA'
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
                          color: '#2A2F3A',
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
                          color: '#5B6CFF'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{
                          fontSize: '15px',
                          lineHeight: 1.7,
                          color: '#9AA0A6'
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
          borderTop: '1px solid #2A2F3A',
          background: 'linear-gradient(to bottom, #161A22 0%, #0F1115 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20">
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F5F7FA'
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
                <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8" style={{
                  padding: '40px 0',
                  borderBottom: '1px solid #2A2F3A',
                  alignItems: 'start'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      fontWeight: 700,
                      marginBottom: '8px',
                      letterSpacing: '-0.01em',
                      color: '#F5F7FA'
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      color: '#9AA0A6',
                      lineHeight: 1.6
                    }}>
                      {service.desc}
                    </p>
                  </div>
                  <div style={{
                    fontSize: 'clamp(22px, 4vw, 28px)',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    color: '#5B6CFF'
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
                  color: '#5B6CFF',
                  textDecoration: 'none',
                  borderBottom: '2px solid #5B6CFF',
                  paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4A5AE8';
                  e.currentTarget.style.borderColor = '#4A5AE8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#5B6CFF';
                  e.currentTarget.style.borderColor = '#5B6CFF';
                }}
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-32 md:py-48" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#161A22'
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
                  color: '#F5F7FA'
                }}>
                  Start your project
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: '#9AA0A6',
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
                      color: '#F5F7FA',
                      backgroundColor: '#5B6CFF',
                      padding: '16px 32px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#4A5AE8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#5B6CFF';
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
                      color: '#F5F7FA',
                      padding: '16px 32px',
                      textDecoration: 'none',
                      outline: '2px solid #2A2F3A',
                      transition: 'all 0.2s',
                      textAlign: 'center',
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
                    VIEW PRICING
                  </Link>
                </div>
              </div>
              <div style={{
                fontSize: '14px',
                lineHeight: 1.8,
                color: '#9AA0A6'
              }}>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ color: '#F5F7FA', marginBottom: '12px', fontWeight: 600, fontSize: '15px' }}>What happens next</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>We discuss your business needs and goals</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>You get a clear timeline and deliverables list</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Work begins within 48 hours of agreement</div>
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ color: '#F5F7FA', marginBottom: '12px', fontWeight: 600, fontSize: '15px' }}>Response time</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Email replies within 4 business hours</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Emergency support for active projects</div>
                </div>
                <div>
                  <div style={{ color: '#F5F7FA', marginBottom: '12px', fontWeight: 600, fontSize: '15px' }}>Based in Missouri</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Serving businesses nationwide</div>
                  <div style={{ color: '#9AA0A6' }}>Central time zone, flexible scheduling</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
