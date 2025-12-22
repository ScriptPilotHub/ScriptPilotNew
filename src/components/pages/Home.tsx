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

      <article style={{ backgroundColor: '#0A0A0A' }}>
        <section className="px-6 md:px-12 py-48 md:py-64">
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
              Websites that bring in customers
            </h1>

            <p className="text-xl md:text-2xl mb-16 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.5,
              fontWeight: 400
            }}>
              Fixed price. Fixed timeline. Built for small businesses that want results.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-8 py-4 no-underline"
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

              <Link
                to="/pricing"
                className="text-base font-medium px-8 py-4 no-underline"
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
                View pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-32" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              {[
                {
                  title: "$700 total",
                  description: "One payment to start. One at launch. No hidden fees."
                },
                {
                  title: "1-4 weeks",
                  description: "Most sites launch within a month. You get updates as we build."
                },
                {
                  title: "Yours forever",
                  description: "You own everything. Host it yourself or use our maintenance plan."
                }
              ].map((item, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                    {item.title}
                  </h2>
                  <p className="text-base" style={{ color: '#808080', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-32" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-20" style={{
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}>
              What you get
            </h2>

            <div className="space-y-1">
              {[
                {
                  title: "Business website",
                  description: "Professional design. Fast loading. Works on every device.",
                  price: "$700"
                },
                {
                  title: "E-commerce store",
                  description: "Sell products online. Secure checkout. Order management.",
                  price: "$700"
                },
                {
                  title: "Monthly maintenance",
                  description: "Hosting, updates, security. Keep your site running smooth.",
                  price: "$150/mo"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-10 md:p-12"
                  style={{
                    backgroundColor: '#0F0F0F',
                    borderBottom: '1px solid #1A1A1A'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg" style={{ color: '#808080' }}>
                        {item.description}
                      </p>
                    </div>
                    <div className="text-2xl md:text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/services"
                className="text-base font-medium no-underline"
                style={{
                  color: '#999999',
                  transition: 'color 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#999999';
                }}
              >
                View all services →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-48" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}>
              Start your project
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-8 py-4 no-underline"
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
                className="text-base font-medium px-8 py-4 no-underline"
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

            <div className="space-y-1">
              <p className="text-base" style={{ color: '#606060' }}>
                <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#808080' }}>contact@scriptpilot.us</a>
              </p>
              <p className="text-base" style={{ color: '#606060' }}>
                <a href="tel:4174010015" className="no-underline" style={{ color: '#808080' }}>(417) 401-0015</a>
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
