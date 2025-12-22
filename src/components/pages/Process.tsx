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

      <article style={{ backgroundColor: '#0F1115', color: '#F5F7FA' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #161A22 0%, #0F1115 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div style={{ color: '#9AA0A6', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px' }}>
              PROCESS
            </div>
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-8">
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '32px',
                  color: '#F5F7FA'
                }}>
                  Simple.<br/>Transparent.<br/>Effective.
                </h1>
              </div>
              <div className="md:col-span-4 flex items-end">
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#9AA0A6'
                }}>
                  Four steps from first call to launch. No surprises. No hidden steps. Everything clearly defined upfront.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-24" style={{ borderTop: '1px solid #2A2F3A' }}>
          <div className="max-w-[1400px] mx-auto">
            {[
              {
                num: '01',
                title: 'Discovery call',
                timeline: 'Day 1',
                desc: '30 minute call. We discuss your business, your goals, your target customers. No sales pitch. Just conversation to see if we are a good fit.',
                outcome: 'Clear understanding of your needs'
              },
              {
                num: '02',
                title: 'Strategy & approval',
                timeline: 'Days 2-3',
                desc: 'We create a detailed plan. Site structure. Page layouts. Content strategy. You review everything. We revise until you approve.',
                outcome: 'Approved plan before any building starts'
              },
              {
                num: '03',
                title: 'Build & review',
                timeline: 'Weeks 1-4',
                desc: 'We build your site. You get progress updates. We send review links. You request changes. We iterate until you are completely satisfied.',
                outcome: 'Finished site ready to launch'
              },
              {
                num: '04',
                title: 'Launch & handoff',
                timeline: 'Final day',
                desc: 'Site goes live. We handle all technical details. DNS. SSL. Hosting. You get training materials. Support for 30 days included.',
                outcome: 'Live site with full ownership'
              }
            ].map((step, i) => (
              <div key={i} style={{
                borderBottom: '1px solid #2A2F3A',
                paddingTop: '56px',
                paddingBottom: '56px',
                backgroundColor: i % 2 === 1 ? '#161A22' : 'transparent'
              }}>
                <div className="grid md:grid-cols-12 gap-8" style={{ padding: i % 2 === 1 ? '32px' : '0' }}>
                  <div className="md:col-span-1">
                    <span style={{
                      fontSize: '56px',
                      fontWeight: 700,
                      color: '#161A22',
                      lineHeight: 1,
                      WebkitTextStroke: '1px #2A2F3A'
                    }}>
                      {step.num}
                    </span>
                  </div>
                  <div className="md:col-span-11">
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4">
                        <h2 style={{
                          fontSize: '32px',
                          fontWeight: 700,
                          marginBottom: '12px',
                          letterSpacing: '-0.01em',
                          color: '#5B6CFF'
                        }}>
                          {step.title}
                        </h2>
                        <div style={{
                          fontSize: '12px',
                          letterSpacing: '0.05em',
                          color: '#9AA0A6'
                        }}>
                          {step.timeline}
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <p style={{
                          fontSize: '15px',
                          lineHeight: 1.7,
                          color: '#9AA0A6',
                          marginBottom: '20px'
                        }}>
                          {step.desc}
                        </p>
                        <div style={{
                          fontSize: '13px',
                          color: '#9AA0A6',
                          paddingTop: '16px',
                          borderTop: '1px solid #2A2F3A'
                        }}>
                          → {step.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#161A22'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  marginBottom: '24px',
                  letterSpacing: '-0.02em',
                  color: '#F5F7FA'
                }}>
                  Questions about the process?
                </h2>
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#9AA0A6',
                  marginBottom: '32px'
                }}>
                  Book a call and we will walk through exactly how it works for your specific project.
                </p>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
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
              <div style={{ paddingTop: '40px' }}>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: '#9AA0A6', marginBottom: '8px' }}>
                    TYPICAL TIMELINE
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#5B6CFF' }}>
                    1–4 weeks
                  </div>
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: '#9AA0A6', marginBottom: '8px' }}>
                    REVISION ROUNDS
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#5B6CFF' }}>
                    Unlimited
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', letterSpacing: '0.05em', color: '#9AA0A6', marginBottom: '8px' }}>
                    POST-LAUNCH SUPPORT
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: '#5B6CFF' }}>
                    30 days included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
