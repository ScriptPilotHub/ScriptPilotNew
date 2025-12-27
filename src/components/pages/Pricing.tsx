import { SEO } from '../SEO';
import { PricingCalculator } from '../ui/PricingCalculator';

export const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing"
        description="Script Pilot transparent, fixed pricing. $700 total for professional websites. $160 to start, $540 at launch. Optional $150/month maintenance."
        path="/pricing"
      />

      <article style={{ backgroundColor: '#0F1115', color: '#F5F7FA' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #161A22 0%, #0F1115 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div style={{ color: '#9AA0A6', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
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
                  color: '#5B6CFF'
                }}>
                  $700 total
                </h1>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#9AA0A6'
                }}>
                  Two payments. First when we start. Second when we launch. Includes lifetime hosting on our servers. No contracts. No recurring fees unless you want maintenance.
                </p>
              </div>
              <div className="md:col-span-6 flex items-end">
                <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#9AA0A6' }}>
                  <div style={{ marginBottom: '16px', color: '#9AA0A6' }}>→ Unlimited revisions</div>
                  <div style={{ marginBottom: '16px', color: '#9AA0A6' }}>→ 30 day support included</div>
                  <div style={{ marginBottom: '16px', color: '#9AA0A6' }}>→ You own everything</div>
                  <div style={{ color: '#9AA0A6' }}>→ Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-0" style={{ borderTop: '1px solid #2A2F3A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:border-r border-b" style={{
                padding: '64px 40px',
                borderColor: '#2A2F3A',
                backgroundColor: '#161A22'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#9AA0A6',
                  marginBottom: '24px'
                }}>
                  PAYMENT 01
                </div>
                <div style={{
                  fontSize: 'clamp(52px, 10vw, 72px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#5B6CFF'
                }}>
                  $160
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#9AA0A6',
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
                    color: '#F5F7FA',
                    backgroundColor: '#5B6CFF',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A5AE8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5B6CFF'}
                >
                  PAY NOW
                </a>
              </div>

              <div className="md:border-r border-b" style={{
                padding: '64px 40px',
                backgroundColor: '#5B6CFF',
                color: '#F5F7FA',
                borderColor: '#2A2F3A'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#F5F7FA',
                  marginBottom: '24px'
                }}>
                  PAYMENT 02
                </div>
                <div style={{
                  fontSize: 'clamp(52px, 10vw, 72px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px'
                }}>
                  $540
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#F5F7FA',
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
                    color: '#F5F7FA',
                    backgroundColor: '#0F1115',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#161A22'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F1115'}
                >
                  PAY AT LAUNCH
                </a>
              </div>

              <div className="border-b md:border-b" style={{
                padding: '64px 40px',
                borderColor: '#2A2F3A',
                backgroundColor: '#161A22'
              }}>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#9AA0A6',
                  marginBottom: '24px'
                }}>
                  MAINTENANCE (OPTIONAL)
                </div>
                <div style={{
                  fontSize: 'clamp(52px, 10vw, 72px)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#5B6CFF'
                }}>
                  $150
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#9AA0A6',
                  marginBottom: '40px',
                  lineHeight: 1.6
                }}>
                  Optional upgrade to lifetime hosting. Priority support, daily backups, proactive updates, content changes. Cancel anytime.
                </div>
                <a
                  href="https://buy.stripe.com/cNibJ2drCauM0qz7cP9EI09"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    letterSpacing: '0.05em',
                    color: '#F5F7FA',
                    padding: '14px 24px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    outline: '2px solid #2A2F3A',
                    transition: 'all 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.outlineColor = '#5B6CFF'}
                  onMouseLeave={(e) => e.currentTarget.style.outlineColor = '#2A2F3A'}
                >
                  SUBSCRIBE
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{ borderTop: '1px solid #2A2F3A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  marginBottom: '32px',
                  letterSpacing: '-0.01em',
                  color: '#5B6CFF'
                }}>
                  What is included
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 2.2, color: '#9AA0A6' }}>
                  {[
                    'Professional custom design',
                    'Mobile responsive layout',
                    'Contact form integration',
                    'SEO optimization',
                    'Fast page load speeds',
                    'SSL certificate',
                    'Google Analytics setup',
                    'Lifetime hosting included',
                    'Unlimited revision rounds',
                    '30 days post-launch support',
                    'Training documentation'
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ color: '#5B6CFF' }}>—</span>
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
                  color: '#5B6CFF'
                }}>
                  Common questions
                </h2>
                <div style={{ fontSize: '15px', lineHeight: 1.7, color: '#9AA0A6' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#F5F7FA', marginBottom: '8px', fontWeight: 600 }}>What if I am not happy?</div>
                    <div>We revise until you are satisfied. If we cannot deliver what we promised, you get a full refund.</div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ color: '#F5F7FA', marginBottom: '8px', fontWeight: 600 }}>Can I pay in full?</div>
                    <div>Yes. Contact us and we will send a single invoice for $700.</div>
                  </div>
                  <div>
                    <div style={{ color: '#F5F7FA', marginBottom: '8px', fontWeight: 600 }}>Do I need maintenance?</div>
                    <div>No. We host your site for life even without maintenance. The optional plan adds priority support, daily backups, and ongoing updates.</div>
                  </div>
                </div>
              </div>
            </div>

            <PricingCalculator />
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
              More questions?
            </h2>
            <a
              href="https://wellpin.io/scriptpilot"
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
          </div>
        </section>
      </article>
    </>
  );
};
