import { SEO } from '../SEO';

export const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent, fixed pricing. $700 total for professional websites. $160 to start, $540 at launch. Optional $150/month maintenance."
        path="/pricing"
      />

      <article style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        <section className="px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto">
            <div style={{ color: '#666666', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
              PRICING
            </div>
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-6">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '32px'
                }}>
                  $700 total
                </h1>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#999999'
                }}>
                  Two payments. First when we start. Second when we launch. No contracts. No recurring fees unless you want maintenance.
                </p>
              </div>
              <div className="md:col-span-6 flex items-end">
                <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#808080' }}>
                  <div style={{ marginBottom: '16px' }}>→ Unlimited revisions</div>
                  <div style={{ marginBottom: '16px' }}>→ 30 day support included</div>
                  <div style={{ marginBottom: '16px' }}>→ You own everything</div>
                  <div>→ Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-0" style={{ borderTop: '1px solid #1A1A1A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-3">
              <div style={{
                padding: '64px 40px',
                borderRight: '1px solid #1A1A1A',
                borderBottom: '1px solid #1A1A1A'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#666666',
                  marginBottom: '24px'
                }}>
                  PAYMENT 01
                </div>
                <div style={{
                  fontSize: '72px',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px'
                }}>
                  $160
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#808080',
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
                    color: '#0A0A0A',
                    backgroundColor: '#FFFFFF',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.15s'
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
                  PAY NOW
                </a>
              </div>

              <div style={{
                padding: '64px 40px',
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                borderRight: '1px solid #E0E0E0',
                borderBottom: '1px solid #E0E0E0'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#666666',
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
                  color: '#404040',
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
                    color: '#FFFFFF',
                    backgroundColor: '#0A0A0A',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#0A0A0A';
                    e.currentTarget.style.outline = '1px solid #0A0A0A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A0A0A';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  PAY AT LAUNCH
                </a>
              </div>

              <div style={{
                padding: '64px 40px',
                borderBottom: '1px solid #1A1A1A'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#666666',
                  marginBottom: '24px'
                }}>
                  MAINTENANCE (OPTIONAL)
                </div>
                <div style={{
                  fontSize: '72px',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px'
                }}>
                  $150
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#808080',
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
                    color: '#FFFFFF',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    outline: '1px solid #333333',
                    transition: 'all 0.15s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.outlineColor = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.outlineColor = '#333333';
                  }}
                >
                  SUBSCRIBE
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{ borderTop: '1px solid #1A1A1A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '32px',
                  letterSpacing: '-0.01em'
                }}>
                  What's included
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 2.2, color: '#999999' }}>
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
                      <span style={{ color: '#FFFFFF' }}>—</span>
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
                  letterSpacing: '-0.01em'
                }}>
                  Common questions
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#999999' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#FFFFFF', marginBottom: '8px' }}>What if I'm not happy?</div>
                    <div>We revise until you're satisfied. If we can't deliver what we promised, you get a full refund.</div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#FFFFFF', marginBottom: '8px' }}>Can I pay in full?</div>
                    <div>Yes. Contact us and we'll send a single invoice for $700.</div>
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', marginBottom: '8px' }}>Do I need maintenance?</div>
                    <div>No. You can host and manage it yourself. Maintenance is optional but recommended.</div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </section>
      </article>
    </>
  );
};
