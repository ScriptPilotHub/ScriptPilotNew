import { SEO } from '../SEO';

export const Contact = () => {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with ScriptPilot. Book a free 30 minute call or send us an email. We respond within 24 hours."
        path="/contact"
      />

      <article style={{ backgroundColor: '#0A0A0A' }}>
        <section className="px-6 md:px-12 py-40 md:py-56">
          <div className="max-w-5xl mx-auto">
            <h1
              className="mb-12 leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.1
              }}
            >
              Let's talk
            </h1>

            <p className="text-xl md:text-2xl mb-16 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.6
            }}>
              Book a free call or send an email. We respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-9 py-4 no-underline text-center"
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

              <a
                href="mailto:contact@scriptpilot.us"
                className="text-base font-medium px-9 py-4 no-underline text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#999999',
                  outline: '1px solid #2A2A2A',
                  transition: 'all 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.outlineColor = '#404040';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999999';
                  e.currentTarget.style.outlineColor = '#2A2A2A';
                }}
              >
                Send email
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-28" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-1">
              {[
                {
                  title: "Email",
                  content: "contact@scriptpilot.us",
                  detail: "24 hour response time",
                  href: "mailto:contact@scriptpilot.us"
                },
                {
                  title: "Phone",
                  content: "(417) 401-0015",
                  detail: "Mon-Fri, 9am-6pm CST",
                  href: "tel:4174010015"
                },
                {
                  title: "Schedule",
                  content: "Book 30 min call",
                  detail: "Free consultation",
                  href: "https://calendly.com/contact-scriptpilot/30min",
                  external: true
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="p-10 md:p-12 no-underline block text-center"
                  style={{
                    backgroundColor: '#0F0F0F',
                    borderBottom: '1px solid #1A1A1A'
                  }}
                >
                  <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#606060' }}>
                    {item.title}
                  </div>
                  <h2
                    className="text-xl md:text-2xl font-bold mb-3 tracking-tight"
                    style={{
                      color: '#FFFFFF',
                      wordBreak: 'break-word'
                    }}
                  >
                    {item.content}
                  </h2>
                  <p className="text-sm" style={{ color: '#808080' }}>
                    {item.detail}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-28" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              What to expect
            </h2>

            <div className="grid md:grid-cols-3 gap-12 md:gap-20">
              {[
                {
                  num: "01",
                  title: "Location",
                  content: "Based in Missouri. Serving clients nationwide."
                },
                {
                  num: "02",
                  title: "Response time",
                  content: "All inquiries answered within 24 hours."
                },
                {
                  num: "03",
                  title: "Timeline",
                  content: "Most websites launch in 1-4 weeks."
                }
              ].map((item, index) => (
                <div key={index}>
                  <div className="text-xs font-bold mb-5 tracking-widest" style={{ color: '#404040' }}>
                    {item.num}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: '#808080', lineHeight: 1.7 }}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-32 md:py-48" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight" style={{ color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Ready to start?
            </h2>

            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#808080', lineHeight: 1.6 }}>
              Book a free call. No pressure. No commitment.
            </p>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium px-9 py-4 no-underline inline-block"
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
