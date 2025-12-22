import { SEO } from '../SEO';

export const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent, fixed pricing. $700 total for professional websites. $160 to start, $540 at launch. Optional $150/month maintenance."
        path="/pricing"
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
              Simple pricing
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.5
            }}>
              $700 total. Two payments. No hidden fees.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-1">
            <div
              className="p-12"
              style={{
                backgroundColor: '#0F0F0F',
                borderRight: '1px solid #1A1A1A'
              }}
            >
              <div className="text-xs font-bold mb-8 tracking-wider" style={{ color: '#606060' }}>
                START
              </div>
              <div className="text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                $160
              </div>
              <p className="text-sm mb-12" style={{ color: '#808080' }}>
                Strategy and planning
              </p>
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-6 py-3 no-underline block text-center"
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
                Begin project
              </a>
            </div>

            <div
              className="p-12"
              style={{
                backgroundColor: '#FFFFFF',
                borderRight: '1px solid #E0E0E0'
              }}
            >
              <div className="text-xs font-bold mb-8 tracking-wider" style={{ color: '#606060' }}>
                LAUNCH
              </div>
              <div className="text-7xl font-bold mb-6" style={{ color: '#0A0A0A' }}>
                $540
              </div>
              <p className="text-sm mb-12" style={{ color: '#404040' }}>
                Due when site is complete
              </p>
              <a
                href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: '#0A0A0A',
                  color: '#FFFFFF',
                  transition: 'all 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.outline = '1px solid #0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outline = 'none';
                }}
              >
                Pay at launch
              </a>
            </div>

            <div
              className="p-12"
              style={{
                backgroundColor: '#0F0F0F'
              }}
            >
              <div className="text-xs font-bold mb-8 tracking-wider" style={{ color: '#606060' }}>
                MAINTAIN
              </div>
              <div className="text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                $150
              </div>
              <p className="text-sm mb-12" style={{ color: '#808080' }}>
                Optional monthly plan
              </p>
              <a
                href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  outline: '1px solid #2A2A2A',
                  transition: 'all 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outlineColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outlineColor = '#2A2A2A';
                }}
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
              What's included
            </h2>
            
            <div className="space-y-6">
              {[
                "Professional design",
                "Mobile responsive",
                "Contact forms",
                "SEO setup",
                "Fast loading",
                "First month hosting free",
                "Revisions until you're happy"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div style={{ color: '#FFFFFF', fontSize: '20px' }}>✓</div>
                  <p className="text-lg" style={{ color: '#808080' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-32" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
              Questions?
            </h2>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium px-8 py-4 no-underline inline-block"
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
          </div>
        </section>
      </article>
    </>
  );
};
