import React from 'react';

interface HomeProps {
  navigateTo: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => (
  <div style={{ backgroundColor: '#F8FAFC' }}>

    <section className="min-h-screen flex items-center px-6" style={{
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 100%)'
    }}>
      <div className="max-w-7xl mx-auto w-full py-32">
        <div className="max-w-5xl">
          <div className="text-xs font-light tracking-widest mb-12 opacity-60" style={{ color: '#475569' }}>
            SCRIPT PILOT
          </div>

          <h1 className="text-8xl sm:text-9xl font-extralight tracking-tighter mb-12 leading-none" style={{
            color: '#1E293B'
          }}>
            Websites
            <br />
            Built Right
          </h1>

          <p className="text-3xl font-extralight mb-20 max-w-2xl leading-tight" style={{
            color: '#475569'
          }}>
            Custom web development for businesses.
            <br />
            $160 to start. 1-4 weeks.
          </p>

          <div className="flex gap-8 items-center">
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-light px-0 py-3 border-b-2 transition-all duration-300 no-underline hover:opacity-60"
              style={{
                color: '#1E293B',
                borderColor: '#1E293B'
              }}
            >
              Book consultation →
            </a>

            <a
              href="mailto:contact@scriptpilot.us"
              className="text-lg font-light px-0 py-3 transition-all duration-300 no-underline hover:opacity-60"
              style={{
                color: '#475569'
              }}
            >
              contact@scriptpilot.us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-16 mt-32 pt-32 border-t max-w-4xl" style={{
          borderColor: '#CBD5E1'
        }}>
          {[
            { value: "200+", label: "Projects" },
            { value: "99%", label: "Retained" },
            { value: "1-4wk", label: "Timeline" },
            { value: "4yr", label: "Est. 2020" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-extralight mb-3" style={{ color: '#1E293B' }}>
                {stat.value}
              </div>
              <div className="text-sm font-light opacity-60" style={{ color: '#475569' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-40" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#475569' }}>
            SERVICES
          </div>
          <h2 className="text-7xl font-extralight tracking-tight" style={{ color: '#1E293B' }}>
            What we build
          </h2>
        </div>

        <div className="space-y-1">
          {[
            {
              title: "Business websites",
              description: "Professional sites that convert",
              price: "$600"
            },
            {
              title: "E-commerce",
              description: "Complete online stores",
              price: "$600"
            },
            {
              title: "Custom applications",
              description: "Tailored solutions",
              price: "Custom"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-12 border-b transition-all duration-500 cursor-pointer hover:bg-opacity-50"
              style={{
                borderColor: '#E5E7EB'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-4xl font-light mb-2" style={{ color: '#1E293B' }}>
                    {service.title}
                  </h3>
                  <p className="text-xl font-extralight" style={{ color: '#475569' }}>
                    {service.description}
                  </p>
                </div>
                <div className="text-4xl font-extralight" style={{ color: '#1E293B' }}>
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-40" style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
            PROCESS
          </div>
          <h2 className="text-7xl font-extralight tracking-tight" style={{ color: '#F8FAFC' }}>
            How we work
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-x-20 gap-y-16 max-w-6xl">
          {[
            { num: "01", title: "Discovery", desc: "Understanding requirements" },
            { num: "02", title: "Planning", desc: "Strategy and architecture" },
            { num: "03", title: "Development", desc: "Building the solution" },
            { num: "04", title: "Launch", desc: "Deployment and support" }
          ].map((step, index) => (
            <div key={index}>
              <div className="text-6xl font-extralight mb-8 opacity-20" style={{ color: '#F8FAFC' }}>
                {step.num}
              </div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#F8FAFC' }}>
                {step.title}
              </h3>
              <p className="text-lg font-extralight opacity-70" style={{ color: '#F8FAFC' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-40" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#475569' }}>
            PRICING
          </div>
          <h2 className="text-7xl font-extralight tracking-tight mb-8" style={{ color: '#1E293B' }}>
            Transparent
          </h2>
          <p className="text-2xl font-extralight" style={{ color: '#475569' }}>
            Two payments. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-1">
          <div className="p-16 border" style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E5E7EB'
          }}>
            <div className="text-xs font-light tracking-widest mb-12 opacity-60" style={{ color: '#475569' }}>
              START
            </div>
            <div className="text-7xl font-extralight mb-6" style={{ color: '#1E293B' }}>
              $160
            </div>
            <p className="text-xl font-extralight mb-16" style={{ color: '#475569' }}>
              Strategy and planning
            </p>
            <a
              href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-light border-b-2 transition-all duration-300 no-underline hover:opacity-60 inline-block"
              style={{
                color: '#1E293B',
                borderColor: '#1E293B'
              }}
            >
              Begin project →
            </a>
          </div>

          <div className="p-16 border" style={{
            backgroundColor: '#1E293B',
            borderColor: '#475569'
          }}>
            <div className="text-xs font-light tracking-widest mb-12 opacity-60" style={{ color: '#CBD5E1' }}>
              LAUNCH
            </div>
            <div className="text-7xl font-extralight mb-6" style={{ color: '#F8FAFC' }}>
              $540
            </div>
            <p className="text-xl font-extralight mb-16" style={{ color: '#CBD5E1' }}>
              Due at completion
            </p>
            <a
              href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-light border-b-2 transition-all duration-300 no-underline hover:opacity-60 inline-block"
              style={{
                color: '#F8FAFC',
                borderColor: '#F8FAFC'
              }}
            >
              Payment link →
            </a>
          </div>

          <div className="p-16 border" style={{
            backgroundColor: '#F8FAFC',
            borderColor: '#E5E7EB'
          }}>
            <div className="text-xs font-light tracking-widest mb-12 opacity-60" style={{ color: '#475569' }}>
              MAINTAIN
            </div>
            <div className="text-7xl font-extralight mb-6" style={{ color: '#1E293B' }}>
              $150
            </div>
            <p className="text-xl font-extralight mb-16" style={{ color: '#475569' }}>
              Monthly (optional)
            </p>
            <a
              href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-light border-b-2 transition-all duration-300 no-underline hover:opacity-60 inline-block"
              style={{
                color: '#1E293B',
                borderColor: '#1E293B'
              }}
            >
              Subscribe →
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 py-40" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-7xl font-extralight tracking-tight mb-16 text-center" style={{ color: '#1E293B' }}>
          Get started
        </h2>

        <div className="flex flex-col items-center gap-12 text-center">
          <a
            href="mailto:contact@scriptpilot.us"
            className="text-3xl font-light transition-all duration-300 no-underline hover:opacity-60"
            style={{ color: '#1E293B' }}
          >
            contact@scriptpilot.us
          </a>

          <a
            href="tel:4174010015"
            className="text-3xl font-light transition-all duration-300 no-underline hover:opacity-60"
            style={{ color: '#1E293B' }}
          >
            (417) 401-0015
          </a>

          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-light border-b-2 transition-all duration-300 no-underline hover:opacity-60"
            style={{
              color: '#1E293B',
              borderColor: '#1E293B'
            }}
          >
            Book consultation →
          </a>
        </div>
      </div>
    </section>

    <section className="px-6 py-20 border-t" style={{
      backgroundColor: '#F8FAFC',
      borderColor: '#E5E7EB'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <div className="text-xs font-light tracking-widest mb-4 opacity-60" style={{ color: '#475569' }}>
              SPRINGFIELD AREA
            </div>
            <p className="text-lg font-light" style={{ color: '#475569' }}>
              Complimentary photography within 50 miles of Springfield, MO
            </p>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-4 opacity-60" style={{ color: '#475569' }}>
              LOCATION
            </div>
            <p className="text-lg font-light" style={{ color: '#475569' }}>
              Based in Missouri
              <br />
              Serving nationwide
            </p>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-4 opacity-60" style={{ color: '#475569' }}>
              RESPONSE TIME
            </div>
            <p className="text-lg font-light" style={{ color: '#475569' }}>
              24 hour reply
              <br />
              Usually much faster
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
);
