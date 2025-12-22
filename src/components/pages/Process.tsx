import { SEO } from '../SEO';
import { Link } from 'react-router-dom';

export const Process = () => {
  return (
    <>
      <SEO
        title="How It Works"
        description="Our straightforward process: book a call, approve the plan, we build it, you launch it. 1-4 weeks from start to finish."
        path="/process"
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
              How it works
            </h1>

            <p className="text-xl md:text-2xl mb-12 max-w-2xl" style={{
              color: '#999999',
              lineHeight: 1.5
            }}>
              Simple process. No surprises. Launch in 1-4 weeks.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-12 py-24" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                num: "01",
                title: "Book a call",
                description: "30 minute call. We talk about your business, your goals, what you need from a website."
              },
              {
                num: "02",
                title: "Approve the plan",
                description: "We create a plan for your site. You see exactly what you're getting before we start building."
              },
              {
                num: "03",
                title: "We build it",
                description: "1-4 weeks depending on complexity. You get progress updates. We make revisions until you're happy."
              },
              {
                num: "04",
                title: "You launch it",
                description: "Site goes live. We handle all the technical details. You own everything."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-12 items-start">
                <div
                  className="text-6xl font-bold flex-shrink-0"
                  style={{
                    color: '#1A1A1A'
                  }}
                >
                  {step.num}
                </div>
                <div className="flex-1 pt-3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
                    {step.title}
                  </h2>
                  <p className="text-lg" style={{ color: '#808080', lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 py-32" style={{
          borderTop: '1px solid #1A1A1A'
        }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#FFFFFF' }}>
              Ready to start?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </article>
    </>
  );
};
