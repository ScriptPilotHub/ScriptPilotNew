import React, { useEffect, useState } from 'react';

interface HomeProps {
  navigateTo: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#0A0A0A' }}>
      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0A0A',
        position: 'relative'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 50%)'
        }} />

        <div
          className="max-w-6xl mx-auto relative z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out'
          }}
        >
          <div className="max-w-4xl">
            <h1
              className="mb-8 leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 0.95
              }}
            >
              Websites that<br />bring customers
            </h1>

            <div className="mb-12 max-w-2xl">
              <p className="text-xl md:text-2xl mb-2" style={{
                color: '#A0A0A0',
                lineHeight: 1.5
              }}>
                Fixed price. No surprises.
              </p>
              <p className="text-xl md:text-2xl" style={{
                color: '#A0A0A0',
                lineHeight: 1.5
              }}>
                Delivered in weeks, not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold px-8 py-4 no-underline text-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0A0A0A',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                Get started
              </a>

              <a
                href="mailto:contact@scriptpilot.us"
                className="text-base font-semibold px-8 py-4 no-underline text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#A0A0A0',
                  border: '2px solid #2A2A2A',
                  transition: 'all 0.2s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#404040';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A0A0A0';
                  e.currentTarget.style.borderColor = '#2A2A2A';
                }}
              >
                Send email
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "200+", label: "Sites built" },
                { value: "$700", label: "Fixed price" },
                { value: "1-4 weeks", label: "Timeline" },
                { value: "99%", label: "Client retention" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: '#FFFFFF' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: '#606060' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              One customer pays for it
            </h2>
            <p className="text-xl" style={{ color: '#606060' }}>
              Every customer after that is pure profit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                title: "Build trust",
                description: "Customers research you before buying. A professional site makes you credible."
              },
              {
                num: "02",
                title: "Get found",
                description: "Show up when people search. Get calls and inquiries from your area."
              },
              {
                num: "03",
                title: "Work 24/7",
                description: "Your site answers questions and brings in leads while you sleep."
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-sm font-bold mb-4" style={{ color: '#404040' }}>
                  {item.num}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-base" style={{ color: '#808080', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold" style={{ color: '#FFFFFF' }}>
              What you get
            </h2>
          </div>

          <div className="space-y-1">
            {[
              {
                title: "Business website",
                description: "Professional design that represents your brand and converts visitors into customers.",
                price: "$700"
              },
              {
                title: "E-commerce store",
                description: "Sell products online with secure payments and inventory management.",
                price: "$700"
              },
              {
                title: "Demo site",
                description: "See your site before you commit. No risk, no obligation.",
                price: "Free"
              },
              {
                title: "Site audit",
                description: "Get detailed feedback on your current website. What works, what needs fixing.",
                price: "Free"
              },
              {
                title: "Monthly maintenance",
                description: "Hosting, updates, security, and support. Keep your site running smoothly.",
                price: "$150/mo"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 md:p-10"
                style={{
                  backgroundColor: '#0F0F0F',
                  borderBottom: '1px solid #1A1A1A',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#141414';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F0F0F';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg" style={{ color: '#808080' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Simple pricing
            </h2>
            <p className="text-xl" style={{ color: '#606060' }}>
              Two payments. $700 total. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1 max-w-5xl">
            <div
              className="p-10 md:p-12"
              style={{
                backgroundColor: '#0F0F0F',
                border: '1px solid #1A1A1A',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2A2A2A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1A1A1A';
              }}
            >
              <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#606060' }}>
                START
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                $160
              </div>
              <p className="text-sm mb-8" style={{ color: '#808080' }}>
                Strategy and planning
              </p>
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0A0A0A',
                  transition: 'all 0.2s ease',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                Begin project
              </a>
            </div>

            <div
              className="p-10 md:p-12"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #FFFFFF'
              }}
            >
              <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#606060' }}>
                LAUNCH
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#0A0A0A' }}>
                $540
              </div>
              <p className="text-sm mb-8" style={{ color: '#404040' }}>
                Due when site is complete
              </p>
              <a
                href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: '#0A0A0A',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease',
                  border: '2px solid #0A0A0A'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A0A0A';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Pay at launch
              </a>
            </div>

            <div
              className="p-10 md:p-12"
              style={{
                backgroundColor: '#0F0F0F',
                border: '1px solid #1A1A1A',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2A2A2A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1A1A1A';
              }}
            >
              <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#606060' }}>
                MAINTAIN
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                $150
              </div>
              <p className="text-sm mb-8" style={{ color: '#808080' }}>
                Optional monthly plan
              </p>
              <a
                href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '2px solid #2A2A2A',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2A2A2A';
                }}
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold" style={{ color: '#FFFFFF' }}>
              How it works
            </h2>
          </div>

          <div className="space-y-12">
            {[
              { num: "1", title: "Call", desc: "Book a free 30 minute call. We discuss your business and goals." },
              { num: "2", title: "Plan", desc: "We create a plan for your site. You approve before we start building." },
              { num: "3", title: "Build", desc: "We build your site in 1-4 weeks. You get updates as we progress." },
              { num: "4", title: "Launch", desc: "Your site goes live. We handle all technical details." }
            ].map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="text-5xl font-bold" style={{ color: '#1A1A1A' }}>
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: '#808080' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Free photography
          </h2>
          <p className="text-lg md:text-xl mb-12" style={{ color: '#808080' }}>
            Within 50 miles of Springfield, MO? We photograph your business at no charge.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Location photos",
              "Product shots",
              "Team photos"
            ].map((item, index) => (
              <div key={index} className="p-6" style={{ backgroundColor: '#0F0F0F', border: '1px solid #1A1A1A' }}>
                <p className="text-base font-semibold" style={{ color: '#FFFFFF' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #1A1A1A'
      }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
            Start your project
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0A0A0A',
                transition: 'all 0.2s ease',
                display: 'inline-block',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#0A0A0A';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              Book a call
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                backgroundColor: 'transparent',
                color: '#A0A0A0',
                border: '2px solid #2A2A2A',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#404040';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#A0A0A0';
                e.currentTarget.style.borderColor = '#2A2A2A';
              }}
            >
              Send email
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-base" style={{ color: '#606060' }}>
              <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#A0A0A0' }}>contact@scriptpilot.us</a>
            </p>
            <p className="text-base" style={{ color: '#606060' }}>
              <a href="tel:4174010015" className="no-underline" style={{ color: '#A0A0A0' }}>(417) 401-0015</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
