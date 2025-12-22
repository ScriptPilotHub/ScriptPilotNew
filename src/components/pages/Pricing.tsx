import { SEO } from '../SEO';

export const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent, fixed pricing. $700 total for professional websites. $160 to start, $540 at launch. Optional $150/month maintenance."
        path="/pricing"
      />

      <article style={{ backgroundColor: '#0D1B2A', color: '#F4F3EE' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #1B263B 0%, #0D1B2A 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div style={{ color: '#778DA9', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
              PRICING
            </div>
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-6">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '32px',
                  color: '#E8B4B8'
                }}>
                  $700 total
                </h1>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#B8C5D6'
                }}>
                  Two payments. First when we start. Second when we launch. No contracts. No recurring fees unless you want maintenance.
                </p>
              </div>
              <div className="md:col-span-6 flex items-end">
                <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#778DA9' }}>
                  <div style={{ marginBottom: '16px', color: '#B8C5D6' }}>→ Unlimited revisions</div>
                  <div style={{ marginBottom: '16px', color: '#B8C5D6' }}>→ 30 day support included</div>
                  <div style={{ marginBottom: '16px', color: '#B8C5D6' }}>→ You own everything</div>
                  <div style={{ color: '#B8C5D6' }}>→ Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-0" style={{ borderTop: '1px solid rgba(120, 141, 169, 0.2)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3">
              <div style={{
                padding: '64px 40px',
                borderRight: '1px solid rgba(120, 141, 169, 0.2)',
                borderBottom: '1px solid rgba(120, 141, 169, 0.2)',
                backgroundColor: '#1B263B'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#778DA9',
                  marginBottom: '24px'
                }}>
                  PAYMENT 01
                </div>
                <div style={{
                  fontSize: '72px',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#E8B4B8'
                }}>
                  $160
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#778DA9',
                  marginBottom: '40px',
                  lineHeight: 1.6
                }}>
                  Strategy session and project kickoff. Refundable if we cancel within 48 hours.
                </div>
                <a
                  href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    letterSpacing: '0.05em',
                    color: '#0D1B2A',
                    backgroundColor: '#E8B4B8',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C1666B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8B4B8'}
                >
                  PAY NOW
                </a>
              </div>

              <div style={{
                padding: '64px 40px',
                backgroundColor: '#E8B4B8',
                color: '#0D1B2A',
                borderRight: '1px solid rgba(13, 27, 42, 0.1)',
                borderBottom: '1px solid rgba(13, 27, 42, 0.1)'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#1B263B',
                  marginBottom: '24px'
                }}>
                  PAYMENT 02
                </div>
                <div style={{
                  fontSize: '72px',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px'
                }}>
                  $540
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#415A77',
                  marginBottom: '40px',
                  lineHeight: 1.6
                }}>
                  Due when your site is complete and approved. You review everything before paying.
                </div>
                <a
                  href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    letterSpacing: '0.05em',
                    color: '#F4F3EE',
                    backgroundColor: '#0D1B2A',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1B263B'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D1B2A'}
                >
                  PAY AT LAUNCH
                </a>
              </div>

              <div style={{
                padding: '64px 40px',
                borderBottom: '1px solid rgba(120, 141, 169, 0.2)',
                backgroundColor: '#1B263B'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#778DA9',
                  marginBottom: '24px'
                }}>
                  MAINTENANCE (OPTIONAL)
                </div>
                <div style={{
                  fontSize: '72px',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#C1666B'
                }}>
                  $150
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#778DA9',
                  marginBottom: '40px',
                  lineHeight: 1.6
                }}>
                  Monthly plan. Hosting, updates, security, backups. Cancel anytime.
                </div>
                <a
                  href="https://buy.stripe.com/cNibJ2drCauM0qz7cP9EI09"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    letterSpacing: '0.05em',
                    color: '#F4F3EE',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    outline: '2px solid #415A77',
                    transition: 'all 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.outlineColor = '#E8B4B8'}
                  onMouseLeave={(e) => e.currentTarget.style.outlineColor = '#415A77'}
                >
                  SUBSCRIBE
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{ borderTop: '1px solid rgba(120, 141, 169, 0.2)' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '32px',
                  letterSpacing: '-0.01em',
                  color: '#E8B4B8'
                }}>
                  What is included
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 2.2, color: '#B8C5D6' }}>
                  {[
                    'Professional custom design',
                    'Mobile responsive layout',
                    'Contact form integration',
                    'SEO optimization',
                    'Fast page load speeds',
                    'SSL certificate',
                    'Google Analytics setup',
                    'First month hosting free',
                    'Unlimited revision rounds',
                    '30 days post-launch support',
                    'Training documentation'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#C1666B' }}>—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '32px',
                  letterSpacing: '-0.01em',
                  color: '#E8B4B8'
                }}>
                  Common questions
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#B8C5D6' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#F4F3EE', marginBottom: '8px', fontWeight: 600 }}>What if I am not happy?</div>
                    <div>We revise until you are satisfied. If we cannot deliver what we promised, you get a full refund.</div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#F4F3EE', marginBottom: '8px', fontWeight: 600 }}>Can I pay in full?</div>
                    <div>Yes. Contact us and we will send a single invoice for $700.</div>
                  </div>
                  <div>
                    <div style={{ color: '#F4F3EE', marginBottom: '8px', fontWeight: 600 }}>Do I need maintenance?</div>
                    <div>No. You can host and manage it yourself. Maintenance is optional but recommended.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          borderTop: '1px solid rgba(120, 141, 169, 0.2)',
          backgroundColor: '#1B263B'
        }}>
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              marginBottom: '32px',
              letterSpacing: '-0.02em',
              color: '#F4F3EE'
            }}>
              More questions?
            </h2>
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
                fontWeight: 600
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C1666B'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E8B4B8'}
            >
              BOOK A CALL
            </a>
          </div>
        </section>
      </article>
    </>
  );
};
