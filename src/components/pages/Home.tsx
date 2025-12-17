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
    <div style={{ backgroundColor: '#ffffff' }}>
      <section className="min-h-screen flex items-center px-4 md:px-6 py-24 md:py-32" style={{
        backgroundColor: '#ffffff'
      }}>
        <div
          className="max-w-5xl mx-auto w-full text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-6 md:mb-8 leading-tight" style={{
            color: '#1E293B'
          }}>
            Websites that bring in customers
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            color: '#64748B',
            fontWeight: 300
          }}>
            A professional website for your business. Fixed price. No surprises. Delivered in weeks, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium px-8 py-4 no-underline rounded-lg"
              style={{
                backgroundColor: '#1E293B',
                color: '#ffffff',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#334155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1E293B';
              }}
            >
              Get started
            </a>

            <a
              href="#pricing"
              className="text-lg font-medium px-8 py-4 no-underline rounded-lg"
              style={{
                backgroundColor: '#F1F5F9',
                color: '#1E293B',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E2E8F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F1F5F9';
              }}
            >
              See pricing
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Sites built" },
              { value: "$700", label: "Fixed price" },
              { value: "1-4 weeks", label: "Timeline" },
              { value: "99%", label: "Client retention" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-normal mb-2" style={{ color: '#1E293B' }}>
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base" style={{ color: '#64748B' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#1E293B' }}>
              Your website pays for itself
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl" style={{ color: '#64748B', fontWeight: 300 }}>
              One new customer covers the cost. Every customer after that is profit.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Build trust",
                description: "Customers check you out online before buying. A professional site makes you credible."
              },
              {
                title: "Get found",
                description: "Show up when people search for what you do. Get calls and inquiries from your area."
              },
              {
                title: "Work 24/7",
                description: "Your website answers questions and brings in leads while you sleep. No extra effort required."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg"
                style={{
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 className="text-xl md:text-2xl font-medium mb-4" style={{ color: '#1E293B' }}>
                  {item.title}
                </h3>
                <p className="text-base md:text-lg" style={{ color: '#64748B' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#1E293B' }}>
              What you get
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl" style={{ color: '#64748B', fontWeight: 300 }}>
              Everything your business needs to succeed online.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Business website",
                description: "Clean, professional design that represents your brand and converts visitors into customers.",
                price: "$700"
              },
              {
                title: "E-commerce store",
                description: "Sell products online with secure payments, inventory management, and order tracking.",
                price: "$700"
              },
              {
                title: "Demo site",
                description: "See your site before you commit. We build a working demo so you know exactly what you're getting.",
                price: "Free"
              },
              {
                title: "Site audit",
                description: "Already have a website? We'll review it and tell you what's working and what needs to improve.",
                price: "$150"
              },
              {
                title: "Monthly maintenance",
                description: "Keep your site updated, secure, and fast. Includes hosting, updates, and priority support.",
                price: "$150/mo"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                style={{
                  backgroundColor: '#F8FAFC',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F8FAFC';
                }}
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-2" style={{ color: '#1E293B' }}>
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: '#64748B' }}>
                    {service.description}
                  </p>
                </div>
                <div className="text-2xl md:text-3xl font-normal" style={{ color: '#1E293B' }}>
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#1E293B' }}>
              Simple pricing
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl" style={{ color: '#64748B', fontWeight: 300 }}>
              Two payments. No hidden fees. No monthly contracts.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div
              className="p-8 md:p-10 rounded-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E2E8F0',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-sm font-medium mb-4" style={{ color: '#64748B' }}>
                START
              </div>
              <div className="text-5xl md:text-6xl font-normal mb-4" style={{ color: '#1E293B' }}>
                $160
              </div>
              <p className="text-base md:text-lg mb-8" style={{ color: '#64748B' }}>
                Strategy and planning phase
              </p>
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-6 py-3 no-underline rounded-lg block text-center"
                style={{
                  backgroundColor: '#1E293B',
                  color: '#ffffff',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#334155';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E293B';
                }}
              >
                Begin project
              </a>
            </div>

            <div
              className="p-8 md:p-10 rounded-lg"
              style={{
                backgroundColor: '#1E293B',
                border: '2px solid #1E293B',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-sm font-medium mb-4" style={{ color: '#94A3B8' }}>
                LAUNCH
              </div>
              <div className="text-5xl md:text-6xl font-normal mb-4" style={{ color: '#ffffff' }}>
                $540
              </div>
              <p className="text-base md:text-lg mb-8" style={{ color: '#CBD5E1' }}>
                Due when site is complete
              </p>
              <a
                href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-6 py-3 no-underline rounded-lg block text-center"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1E293B',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                Pay at launch
              </a>
            </div>

            <div
              className="p-8 md:p-10 rounded-lg"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E2E8F0',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-sm font-medium mb-4" style={{ color: '#64748B' }}>
                MAINTAIN
              </div>
              <div className="text-5xl md:text-6xl font-normal mb-4" style={{ color: '#1E293B' }}>
                $150
              </div>
              <p className="text-base md:text-lg mb-8" style={{ color: '#64748B' }}>
                Optional monthly maintenance
              </p>
              <a
                href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium px-6 py-3 no-underline rounded-lg block text-center"
                style={{
                  backgroundColor: '#F1F5F9',
                  color: '#1E293B',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E2E8F0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F1F5F9';
                }}
              >
                Subscribe
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg md:text-xl" style={{ color: '#64748B' }}>
              Total: $700 for a complete website. Split into two easy payments.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#1E293B' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#ffffff' }}>
              How it works
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl" style={{ color: '#CBD5E1', fontWeight: 300 }}>
              Simple process. No confusing steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: "1", title: "Call", desc: "Book a free 30 minute call. We'll discuss your business and goals." },
              { num: "2", title: "Plan", desc: "We create a plan for your site. You review and approve before we start." },
              { num: "3", title: "Build", desc: "We build your site in 1-4 weeks. You get updates along the way." },
              { num: "4", title: "Launch", desc: "Your site goes live. We handle all the technical details." }
            ].map((step, index) => (
              <div key={index}>
                <div className="text-5xl font-normal mb-6" style={{ color: '#64748B' }}>
                  {step.num}
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3" style={{ color: '#ffffff' }}>
                  {step.title}
                </h3>
                <p className="text-base md:text-lg" style={{ color: '#CBD5E1' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6" style={{ color: '#1E293B' }}>
            Free photography included
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12" style={{ color: '#64748B', fontWeight: 300 }}>
            Within 50 miles of Springfield, MO? We'll photograph your business at no extra charge. Save $500+ on professional photos.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Location photos", desc: "Storefront, interior, and workspace" },
              { title: "Product shots", desc: "High quality images of what you sell" },
              { title: "Team photos", desc: "Professional headshots of your people" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                <h3 className="text-lg md:text-xl font-medium mb-2" style={{ color: '#1E293B' }}>
                  {item.title}
                </h3>
                <p className="text-base" style={{ color: '#64748B' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-20 md:py-32" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-8" style={{ color: '#1E293B' }}>
            Ready to get started?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium px-8 py-4 no-underline rounded-lg"
              style={{
                backgroundColor: '#1E293B',
                color: '#ffffff',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#334155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1E293B';
              }}
            >
              Book a call
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-lg font-medium px-8 py-4 no-underline rounded-lg"
              style={{
                backgroundColor: '#ffffff',
                color: '#1E293B',
                border: '1px solid #E2E8F0',
                transition: 'all 0.2s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
              }}
            >
              Send email
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-lg md:text-xl" style={{ color: '#64748B' }}>
              <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#1E293B' }}>contact@scriptpilot.us</a>
            </p>
            <p className="text-lg md:text-xl" style={{ color: '#64748B' }}>
              <a href="tel:4174010015" className="no-underline" style={{ color: '#1E293B' }}>(417) 401-0015</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
