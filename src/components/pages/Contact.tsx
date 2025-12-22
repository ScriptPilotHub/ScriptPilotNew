import { SEO } from '../SEO';

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with ScriptPilot. Book a free 30 minute call or send us an email. We respond within 24 hours."
        path="/contact"
      />

      <article style={{ backgroundColor: '#0D1B2A', color: '#F4F3EE' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #1B263B 0%, #0D1B2A 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div style={{ color: '#778DA9', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
              CONTACT
            </div>
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '40px',
                  color: '#F4F3EE'
                }}>
                  Let us work<br/>together
                </h1>
                <div className="space-y-6">
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
                      padding: '16px 40px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      marginRight: '16px',
                      fontWeight: 600
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C1666B'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8B4B8'}
                  >
                    BOOK A CALL
                  </a>
                  <a
                    href="mailto:contact@scriptpilot.us"
                    style={{
                      display: 'inline-block',
                      fontSize: '13px',
                      letterSpacing: '0.05em',
                      color: '#F4F3EE',
                      padding: '16px 40px',
                      textDecoration: 'none',
                      outline: '2px solid #415A77',
                      transition: 'all 0.2s',
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
                    SEND EMAIL
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 flex items-end">
                <div style={{ fontSize: '15px', lineHeight: 2, color: '#778DA9' }}>
                  <div style={{ marginBottom: '8px', color: '#778DA9' }}>Response time</div>
                  <div style={{ marginBottom: '32px', color: '#E8B4B8' }}>Within 24 hours</div>
                  
                  <div style={{ marginBottom: '8px', color: '#778DA9' }}>Typical timeline</div>
                  <div style={{ marginBottom: '32px', color: '#E8B4B8' }}>1–4 weeks</div>
                  
                  <div style={{ marginBottom: '8px', color: '#778DA9' }}>Free consultation</div>
                  <div style={{ color: '#E8B4B8' }}>30 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-0" style={{ borderTop: '1px solid rgba(120, 141, 169, 0.2)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3">
              {[
                {
                  label: 'Email',
                  value: 'contact@scriptpilot.us',
                  detail: '24 hour response',
                  href: 'mailto:contact@scriptpilot.us'
                },
                {
                  label: 'Phone',
                  value: '(417) 401-0015',
                  detail: 'Mon–Fri, 9am–6pm CST',
                  href: 'tel:4174010015'
                },
                {
                  label: 'Schedule',
                  value: 'Book 30 min call',
                  detail: 'Free consultation',
                  href: 'https://calendly.com/contact-scriptpilot/30min',
                  external: true
                }
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'block',
                    padding: '56px 32px',
                    borderRight: i < 2 ? '1px solid rgba(120, 141, 169, 0.2)' : 'none',
                    borderBottom: '1px solid rgba(120, 141, 169, 0.2)',
                    textDecoration: 'none',
                    backgroundColor: '#0D1B2A',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1B263B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D1B2A'}
                >
                  <div style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    color: '#778DA9',
                    marginBottom: '20px'
                  }}>
                    {contact.label}
                  </div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#E8B4B8',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em'
                  }}>
                    {contact.value}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#778DA9'
                  }}>
                    {contact.detail}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{ borderTop: '1px solid rgba(120, 141, 169, 0.2)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-6">
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '24px',
                  letterSpacing: '-0.01em',
                  color: '#E8B4B8'
                }}>
                  What happens next
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#B8C5D6' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#F4F3EE', marginBottom: '8px', fontWeight: 600 }}>01 — We respond</div>
                    <div>Usually within a few hours. Always within 24 hours. We will answer your questions and schedule a call if it makes sense.</div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#F4F3EE', marginBottom: '8px', fontWeight: 600 }}>02 — Discovery call</div>
                    <div>30 minutes. We discuss your business, your goals, what you need. No sales pitch. Just conversation.</div>
                  </div>
                  <div>
                    <div style={{ color: '#F4F3EE', marginBottom: '8px', fontWeight: 600 }}>03 — Proposal</div>
                    <div>If we are a good fit, we send a detailed proposal. Clear scope. Fixed price. Estimated timeline.</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '24px',
                  letterSpacing: '-0.01em',
                  color: '#E8B4B8'
                }}>
                  About us
                </h2>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#B8C5D6',
                  marginBottom: '24px'
                }}>
                  Based in Missouri. Serving clients nationwide. We have built websites for businesses in retail, services, healthcare, and more.
                </p>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#B8C5D6'
                }}>
                  We do not use templates or page builders. Everything is custom coded. Clean. Fast. Built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-32 md:py-48" style={{
          borderTop: '1px solid rgba(120, 141, 169, 0.2)',
          backgroundColor: '#1B263B'
        }}>
          <div className="max-w-[1400px] mx-auto text-center">
            <div style={{
              fontSize: '96px',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
              color: 'transparent',
              WebkitTextStroke: '2px #415A77'
            }}>
              417
            </div>
            <div style={{
              fontSize: '15px',
              color: '#778DA9',
              marginBottom: '48px'
            }}>
              Missouri area code. Where we are based.
            </div>
            <a
              href="tel:4174010015"
              style={{
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
              CALL (417) 401-0015
            </a>
          </div>
        </section>
      </article>
    </>
  );
};
