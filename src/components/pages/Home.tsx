import React, { useEffect, useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ backgroundColor: '#0A0F1A' }}>
      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0F1A',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(45, 156, 219, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(242, 153, 74, 0.1) 0%, transparent 50%)',
          animation: 'float 20s ease-in-out infinite'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(45, 156, 219, 0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.1
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
                  background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  border: 'none',
                  boxShadow: '0 10px 30px rgba(45, 156, 219, 0.3)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(45, 156, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 156, 219, 0.3)';
                }}
              >
                Get started
              </a>

              <a
                href="mailto:contact@scriptpilot.us"
                className="text-base font-semibold px-8 py-4 no-underline text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#56CCF2',
                  border: '2px solid rgba(86, 204, 242, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(86, 204, 242, 0.1)';
                  e.currentTarget.style.borderColor = '#56CCF2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(86, 204, 242, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
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
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              One customer pays for it
            </h2>
            <p className="text-xl" style={{ color: '#8B95A5' }}>
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
              <div
                key={index}
                className="p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(86, 204, 242, 0.05) 100%)',
                  border: '1px solid rgba(45, 156, 219, 0.2)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(45, 156, 219, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(45, 156, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(45, 156, 219, 0.2)';
                }}
              >
                <div className="text-sm font-bold mb-4" style={{ color: '#2D9CDB' }}>
                  {item.num}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-base" style={{ color: '#8B95A5', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold" style={{
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
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
                  background: 'linear-gradient(135deg, rgba(45, 156, 219, 0.03) 0%, rgba(86, 204, 242, 0.03) 100%)',
                  borderBottom: '1px solid rgba(45, 156, 219, 0.1)',
                  borderLeft: '3px solid transparent',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 156, 219, 0.08) 0%, rgba(86, 204, 242, 0.08) 100%)';
                  e.currentTarget.style.borderLeftColor = '#2D9CDB';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(45, 156, 219, 0.03) 0%, rgba(86, 204, 242, 0.03) 100%)';
                  e.currentTarget.style.borderLeftColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg" style={{ color: '#8B95A5' }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold" style={{
                    background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Simple pricing
            </h2>
            <p className="text-xl" style={{ color: '#8B95A5' }}>
              Two payments. $700 total. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <div
              className="p-10 md:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(45, 156, 219, 0.05) 0%, rgba(86, 204, 242, 0.05) 100%)',
                border: '1px solid rgba(45, 156, 219, 0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45, 156, 219, 0.5)';
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(45, 156, 219, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(45, 156, 219, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#56CCF2' }}>
                START
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-6" style={{
                background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                $160
              </div>
              <p className="text-sm mb-8" style={{ color: '#8B95A5' }}>
                Strategy and planning
              </p>
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 no-underline block text-center"
                style={{
                  background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                  color: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(45, 156, 219, 0.3)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(45, 156, 219, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 156, 219, 0.3)';
                }}
              >
                Begin project
              </a>
            </div>

            <div
              className="p-10 md:p-12"
              style={{
                background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                border: '2px solid #56CCF2',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                transform: 'translateY(-10px) scale(1.05)',
                boxShadow: '0 25px 50px rgba(45, 156, 219, 0.3)'
              }}
            >
              <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                LAUNCH
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                $540
              </div>
              <p className="text-sm mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Due when site is complete
              </p>
              <a
                href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#2D9CDB',
                  transition: 'all 0.3s ease',
                  border: '2px solid #FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#2D9CDB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Pay at launch
              </a>
            </div>

            <div
              className="p-10 md:p-12"
              style={{
                background: 'linear-gradient(135deg, rgba(242, 153, 74, 0.05) 0%, rgba(242, 153, 74, 0.08) 100%)',
                border: '1px solid rgba(242, 153, 74, 0.3)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.6)';
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(242, 153, 74, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-xs font-bold mb-6 tracking-wider" style={{ color: '#F2994A' }}>
                MAINTAIN
              </div>
              <div className="text-6xl md:text-7xl font-bold mb-6" style={{
                background: 'linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                $150
              </div>
              <p className="text-sm mb-8" style={{ color: '#8B95A5' }}>
                Optional monthly plan
              </p>
              <a
                href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 no-underline block text-center"
                style={{
                  backgroundColor: 'transparent',
                  color: '#F2994A',
                  border: '2px solid rgba(242, 153, 74, 0.5)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(242, 153, 74, 0.1)';
                  e.currentTarget.style.borderColor = '#F2994A';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.5)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold" style={{
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
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
                <div className="text-5xl font-bold" style={{
                  background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.3
                }}>
                  {step.num}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: '#8B95A5' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-24 md:py-32" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)'
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{
            color: '#FFFFFF',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F2994A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Free photography
          </h2>
          <p className="text-lg md:text-xl mb-12" style={{ color: '#8B95A5' }}>
            Within 50 miles of Springfield, MO? We photograph your business at no charge.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Location photos",
              "Product shots",
              "Team photos"
            ].map((item, index) => (
              <div
                key={index}
                className="p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(242, 153, 74, 0.05) 0%, rgba(242, 153, 74, 0.08) 100%)',
                  border: '1px solid rgba(242, 153, 74, 0.3)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.6)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(242, 153, 74, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(242, 153, 74, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <p className="text-base font-semibold" style={{ color: '#FFFFFF' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-32 md:py-48" style={{
        backgroundColor: '#0A0F1A',
        borderTop: '1px solid rgba(45, 156, 219, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(45, 156, 219, 0.1) 0%, transparent 70%)'
        }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12" style={{
            color: '#FFFFFF',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #56CCF2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Start your project
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
                color: '#FFFFFF',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(45, 156, 219, 0.3)',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(45, 156, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(45, 156, 219, 0.3)';
              }}
            >
              Book a call
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-base font-semibold px-8 py-4 no-underline"
              style={{
                backgroundColor: 'transparent',
                color: '#56CCF2',
                border: '2px solid rgba(86, 204, 242, 0.3)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(86, 204, 242, 0.1)';
                e.currentTarget.style.borderColor = '#56CCF2';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(86, 204, 242, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Send email
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-base" style={{ color: '#8B95A5' }}>
              <a href="mailto:contact@scriptpilot.us" className="no-underline" style={{ color: '#56CCF2' }}>contact@scriptpilot.us</a>
            </p>
            <p className="text-base" style={{ color: '#8B95A5' }}>
              <a href="tel:4174010015" className="no-underline" style={{ color: '#56CCF2' }}>(417) 401-0015</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
