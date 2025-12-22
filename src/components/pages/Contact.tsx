import { SEO } from '../SEO';

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with ScriptPilot. Book a free 30 minute call or send us an email. We respond within 24 hours."
        path="/contact"
      />

      <article style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div style={{ color: '#666666', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
              CONTACT
            </div>
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-7">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '40px'
                }}>
                  Let's work<br/>together
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
                      color: '#0A0A0A',
                      backgroundColor: '#FFFFFF',
                      padding: '16px 40px',
                      textDecoration: 'none',
                      transition: 'all 0.15s',
                      marginRight: '16px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0A0A0A';
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
                  <a
                    href="mailto:contact@scriptpilot.us"
                    style={{
                      display: 'inline-block',
                      fontSize: '13px',
                      letterSpacing: '0.05em',
                      color: '#FFFFFF',
                      padding: '16px 40px',
                      textDecoration: 'none',
                      outline: '1px solid #333333',
                      transition: 'all 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.outlineColor = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.outlineColor = '#333333'}
                  >
                    SEND EMAIL
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 flex items-end">
                <div style={{ fontSize: '15px', lineHeight: 2, color: '#808080' }}>
                  <div style={{ marginBottom: '8px', color: '#666666' }}>Response time</div>
                  <div style={{ marginBottom: '32px', color: '#FFFFFF' }}>Within 24 hours</div>
                  
                  <div style={{ marginBottom: '8px', color: '#666666' }}>Typical timeline</div>
                  <div style={{ marginBottom: '32px', color: '#FFFFFF' }}>1–4 weeks</div>
                  
                  <div style={{ marginBottom: '8px', color: '#666666' }}>Free consultation</div>
                  <div style={{ color: '#FFFFFF' }}>30 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-0" style={{ borderTop: '1px solid #1A1A1A' }}>
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
                    borderRight: i < 2 ? '1px solid #1A1A1A' : 'none',
                    borderBottom: '1px solid #1A1A1A',
                    textDecoration: 'none',
                    backgroundColor: '#0A0A0A',
                    transition: 'background-color 0.15s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F0F0F'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0A0A0A'}
                >
                  <div style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    color: '#666666',
                    marginBottom: '20px'
                  }}>
                    {contact.label}
                  </div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em'
                  }}>
                    {contact.value}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#808080'
                  }}>
                    {contact.detail}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{ borderTop: '1px solid #1A1A1A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-6">
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '24px',
                  letterSpacing: '-0.01em'
                }}>
                  What happens next
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#999999' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#FFFFFF', marginBottom: '8px' }}>01 — We respond</div>
                    <div>Usually within a few hours. Always within 24 hours. We'll answer your questions and schedule a call if it makes sense.</div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#FFFFFF', marginBottom: '8px' }}>02 — Discovery call</div>
                    <div>30 minutes. We discuss your business, your goals, what you need. No sales pitch. Just conversation.</div>
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', marginBottom: '8px' }}>03 — Proposal</div>
                    <div>If we're a good fit, we send a detailed proposal. Clear scope. Fixed price. Estimated timeline.</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '24px',
                  letterSpacing: '-0.01em'
                }}>
                  About us
                </h2>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#999999',
                  marginBottom: '24px'
                }}>
                  Based in Missouri. Serving clients nationwide. We've built websites for businesses in retail, services, healthcare, and more.
                </p>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#999999'
                }}>
                  We don't use templates or page builders. Everything is custom coded. Clean. Fast. Built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-32 md:py-48" style={{ 
          borderTop: '1px solid #1A1A1A',
          backgroundColor: '#0F0F0F'
        }}>
          <div className="max-w-[1400px] mx-auto text-center">
            <div style={{
              fontSize: '96px',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
              color: '#1A1A1A'
            }}>
              417
            </div>
            <div style={{
              fontSize: '15px',
              color: '#808080',
              marginBottom: '48px'
            }}>
              Missouri area code. Where we're based.
            </div>
            <a
              href="tel:4174010015"
              style={{
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderBottom: '1px solid #FFFFFF',
                paddingBottom: '2px',
                transition: 'opacity 0.15s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              CALL (417) 401-0015
            </a>
          </div>
        </section>
      </article>
    </>
  );
};
