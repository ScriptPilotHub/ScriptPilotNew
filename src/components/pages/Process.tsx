import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../SEO';
import { ChevronDown, Check } from 'lucide-react';

export const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="How It Works"
        description="Script Pilot's straightforward process: book a call, approve the plan, we build it, you launch it. 1-4 weeks from start to finish."
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
                outcome: 'Clear understanding of your needs',
                details: [
                  'Understand your business model and target audience',
                  'Identify key features and functionality needs',
                  'Discuss design preferences and brand guidelines',
                  'Set clear expectations and timelines'
                ]
              },
              {
                num: '02',
                title: 'Strategy & approval',
                timeline: 'Days 2-3',
                desc: 'We create a detailed plan. Site structure. Page layouts. Content strategy. You review everything. We revise until you approve.',
                outcome: 'Approved plan before any building starts',
                details: [
                  'Create detailed sitemap and page structure',
                  'Design wireframes for all major pages',
                  'Plan content strategy and SEO approach',
                  'Get your approval before development begins'
                ]
              },
              {
                num: '03',
                title: 'Build & review',
                timeline: 'Weeks 1-4',
                desc: 'We build your site. You get progress updates. We send review links. You request changes. We iterate until you are completely satisfied.',
                outcome: 'Finished site ready to launch',
                details: [
                  'Build all pages with mobile-responsive design',
                  'Implement forms, animations, and functionality',
                  'Regular progress updates with review links',
                  'Unlimited revision rounds until perfect'
                ]
              },
              {
                num: '04',
                title: 'Launch & handoff',
                timeline: 'Final day',
                desc: 'Site goes live. We handle all technical details. DNS. SSL. Hosting. You get training materials. Support for 30 days included.',
                outcome: 'Live site with full ownership',
                details: [
                  'Configure domain, hosting, and SSL certificate',
                  'Final testing across all devices and browsers',
                  'Provide training materials and documentation',
                  '30 days of post-launch support included'
                ]
              }
            ].map((step, i) => {
              const isActive = activeStep === i;
              const isCompleted = activeStep !== null && activeStep > i;

              return (
                <motion.div
                  key={i}
                  style={{
                    borderBottom: '1px solid #2A2F3A',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActiveStep(isActive ? null : i)}
                >
                  <div
                    style={{
                      padding: '40px 0',
                      backgroundColor: isActive ? '#161A22' : 'transparent',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-1">
                        <motion.div
                          style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            border: `2px solid ${isActive ? '#5B6CFF' : isCompleted ? '#5B6CFF' : '#2A2F3A'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: isCompleted ? '#5B6CFF' : 'transparent',
                            transition: 'all 0.3s'
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {isCompleted ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, type: 'spring' }}
                            >
                              <Check size={24} color="#F5F7FA" />
                            </motion.div>
                          ) : (
                            <span style={{
                              fontSize: '18px',
                              fontWeight: 700,
                              color: isActive ? '#5B6CFF' : '#9AA0A6'
                            }}>
                              {step.num}
                            </span>
                          )}
                        </motion.div>
                      </div>
                      <div className="md:col-span-10">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                          <div className="md:col-span-4">
                            <h2 style={{
                              fontSize: 'clamp(22px, 4vw, 28px)',
                              fontWeight: 700,
                              marginBottom: '8px',
                              letterSpacing: '-0.01em',
                              color: isActive ? '#5B6CFF' : '#F5F7FA',
                              transition: 'color 0.3s'
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
                          <div className="md:col-span-7">
                            <p style={{
                              fontSize: '15px',
                              lineHeight: 1.7,
                              color: '#9AA0A6'
                            }}>
                              {step.desc}
                            </p>
                          </div>
                          <div className="md:col-span-1 flex justify-end">
                            <motion.div
                              animate={{ rotate: isActive ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={24} color="#9AA0A6" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8" style={{ marginTop: '32px' }}>
                            <div className="md:col-span-1"></div>
                            <div className="md:col-span-11">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{
                                padding: '32px',
                                backgroundColor: '#0F1115',
                                border: '1px solid #2A2F3A'
                              }}>
                                <div>
                                  <h3 style={{
                                    fontSize: '14px',
                                    letterSpacing: '0.05em',
                                    color: '#5B6CFF',
                                    marginBottom: '16px',
                                    fontWeight: 600
                                  }}>
                                    WHAT WE DO
                                  </h3>
                                  <div style={{ fontSize: '14px', lineHeight: 1.8, color: '#9AA0A6' }}>
                                    {step.details.map((detail, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                        style={{
                                          display: 'flex',
                                          gap: '12px',
                                          marginBottom: '12px',
                                          alignItems: 'flex-start'
                                        }}
                                      >
                                        <span style={{ color: '#5B6CFF', marginTop: '4px' }}>•</span>
                                        <span>{detail}</span>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h3 style={{
                                    fontSize: '14px',
                                    letterSpacing: '0.05em',
                                    color: '#5B6CFF',
                                    marginBottom: '16px',
                                    fontWeight: 600
                                  }}>
                                    OUTCOME
                                  </h3>
                                  <div style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#F5F7FA',
                                    lineHeight: 1.5
                                  }}>
                                    {step.outcome}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
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
