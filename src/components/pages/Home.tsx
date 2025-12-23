import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../SEO';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { useParallax } from '../../hooks/useParallax';
import { fadeInUp, slideInLeft } from '../../utils/animations';

export const Home = () => {
  const parallaxOffset = useParallax(0.3);

  return (
    <>
      <SEO
        title="Professional Websites That Bring In Customers"
        description="Script Pilot builds clean, professional websites for small businesses. Fixed price, fixed timeline. Based in Missouri, serving nationwide."
        path="/"
      />

      <article style={{ backgroundColor: '#0F1115', color: '#F5F7FA' }}>
        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          background: 'linear-gradient(135deg, #161A22 0%, #0F1115 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #161A22 0%, #0F1115 100%)',
              transform: `translateY(${parallaxOffset}px)`,
              zIndex: 0
            }}
          />
          <div className="max-w-[1400px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-end">
              <motion.div
                className="md:col-span-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <motion.div
                  className="mb-6"
                  style={{ color: '#9AA0A6', fontSize: '13px', letterSpacing: '0.1em' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  SCRIPTPILOT
                </motion.div>
                <h1 style={{
                  fontSize: 'clamp(3rem, 9vw, 8rem)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.04em',
                  marginBottom: '0',
                  background: 'linear-gradient(to bottom, #F5F7FA 0%, #9AA0A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Websites<br/>that work
                </h1>
              </motion.div>
              <motion.div
                className="md:col-span-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: '#9AA0A6',
                  marginBottom: '32px'
                }}>
                  Professional sites for businesses that need customers. Not brochures. Not portfolios. Real tools that bring in revenue.
                </p>
                <motion.a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    color: '#5B6CFF',
                    textDecoration: 'none',
                    borderBottom: '2px solid #5B6CFF',
                    paddingBottom: '2px',
                    transition: 'color 0.2s, border-color 0.2s',
                    fontWeight: 600
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4A5AE8';
                    e.currentTarget.style.borderColor = '#4A5AE8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#5B6CFF';
                    e.currentTarget.style.borderColor = '#5B6CFF';
                  }}
                >
                  BOOK A CALL
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-24" style={{ borderTop: '1px solid #2A2F3A' }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                { label: 'Price', value: '$700' },
                { label: 'Timeline', value: '1–4 wks' },
                { label: 'Ownership', value: 'Yours' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`${i < 2 ? 'md:border-r' : ''} border-b md:border-b-0`}
                  style={{
                    padding: '48px 32px',
                    backgroundColor: '#161A22',
                    borderColor: '#2A2F3A'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4, backgroundColor: '#1A1F2B' }}
                >
                  <div style={{
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    color: '#9AA0A6',
                    marginBottom: '16px'
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: '42px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#5B6CFF'
                  }}>
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-16 md:py-24" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#161A22'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { label: 'Sites Built', value: 150, suffix: '+' },
                { label: 'Avg Load Time', value: 2.1, suffix: 's', decimals: 1 },
                { label: 'Client Satisfaction', value: 98, suffix: '%' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{
                    fontSize: '48px',
                    fontWeight: 700,
                    color: '#5B6CFF',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em'
                  }}>
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <div style={{
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#9AA0A6',
                    textTransform: 'uppercase'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-40" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#0F1115'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '32px',
                  color: '#F5F7FA'
                }}>
                  One customer pays for the entire site
                </h2>
              </motion.div>
              <div className="md:col-span-7">
                <div className="space-y-16">
                  {[
                    {
                      num: '01',
                      title: 'Most websites fail',
                      body: 'They look nice but bring in zero customers. Design without strategy is decoration. We build sites that convert visitors into paying customers.'
                    },
                    {
                      num: '02',
                      title: 'Speed matters',
                      body: 'People leave slow sites. Search engines rank them lower. We build fast, clean sites that load in under 2 seconds. No bloat. No unnecessary code.'
                    },
                    {
                      num: '03',
                      title: 'You own everything',
                      body: 'No platform lock-in. No recurring fees unless you want maintenance. Take your site anywhere. Switch hosts anytime. Full ownership from day one.'
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="grid grid-cols-12 gap-6"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="col-span-2">
                        <span style={{
                          fontSize: '14px',
                          color: '#2A2F3A',
                          fontWeight: 700
                        }}>
                          {item.num}
                        </span>
                      </div>
                      <div className="col-span-10">
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: 700,
                          marginBottom: '12px',
                          letterSpacing: '-0.01em',
                          color: '#5B6CFF'
                        }}>
                          {item.title}
                        </h3>
                        <p style={{
                          fontSize: '15px',
                          lineHeight: 1.7,
                          color: '#9AA0A6'
                        }}>
                          {item.body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-24 md:py-32" style={{
          borderTop: '1px solid #2A2F3A',
          background: 'linear-gradient(to bottom, #161A22 0%, #0F1115 100%)'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#F5F7FA'
              }}>
                Services
              </h2>
            </motion.div>

            <div className="space-y-1">
              {[
                {
                  title: 'Complete website',
                  desc: 'Business sites, e-commerce stores, or both. We handle the whole deal from start to finish.',
                  price: '$700'
                },
                {
                  title: 'Maintenance',
                  desc: 'Hosting. Updates. Security. Backups. Priority support.',
                  price: '$150/mo'
                },
                {
                  title: 'Event photography',
                  desc: 'Professional photos for events, storefronts, products. Available as an add-on.',
                  price: '$150'
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8"
                  style={{
                    padding: '40px 0',
                    borderBottom: '1px solid #2A2F3A',
                    alignItems: 'start'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div>
                    <motion.h3
                      style={{
                        fontSize: 'clamp(22px, 4vw, 28px)',
                        fontWeight: 700,
                        marginBottom: '8px',
                        letterSpacing: '-0.01em',
                        color: '#F5F7FA'
                      }}
                      whileHover={{ color: '#5B6CFF' }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p style={{
                      fontSize: '15px',
                      color: '#9AA0A6',
                      lineHeight: 1.6
                    }}>
                      {service.desc}
                    </p>
                  </div>
                  <div style={{
                    fontSize: 'clamp(22px, 4vw, 28px)',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    color: '#5B6CFF'
                  }}>
                    {service.price}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              style={{ marginTop: '48px' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.div
                style={{ display: 'inline-block' }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/services"
                  style={{
                    display: 'inline-block',
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    color: '#5B6CFF',
                    textDecoration: 'none',
                    borderBottom: '2px solid #5B6CFF',
                    paddingBottom: '2px',
                    transition: 'color 0.2s, border-color 0.2s',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4A5AE8';
                    e.currentTarget.style.borderColor = '#4A5AE8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#5B6CFF';
                    e.currentTarget.style.borderColor = '#5B6CFF';
                  }}
                >
                  VIEW ALL SERVICES
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-32 md:py-48" style={{
          borderTop: '1px solid #2A2F3A',
          backgroundColor: '#161A22'
        }}>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  marginBottom: '24px',
                  color: '#F5F7FA'
                }}>
                  Start your project
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  color: '#9AA0A6',
                  marginBottom: '40px'
                }}>
                  Book a 30 minute call. No pressure. No commitment. We discuss your business and whether we are a good fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
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
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                    whileHover={{ scale: 1.02, y: -2, backgroundColor: '#4A5AE8' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    BOOK A CALL
                  </motion.a>
                  <motion.div style={{ display: 'inline-block' }}>
                    <Link
                      to="/pricing"
                      style={{
                        display: 'inline-block',
                        fontSize: '13px',
                        letterSpacing: '0.05em',
                        color: '#F5F7FA',
                        padding: '16px 32px',
                        textDecoration: 'none',
                        outline: '2px solid #2A2F3A',
                        transition: 'all 0.2s',
                        textAlign: 'center',
                        fontWeight: 600
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.outlineColor = '#5B6CFF';
                        e.currentTarget.style.color = '#5B6CFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.outlineColor = '#2A2F3A';
                        e.currentTarget.style.color = '#F5F7FA';
                      }}
                    >
                      VIEW PRICING
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                style={{
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: '#9AA0A6'
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ color: '#F5F7FA', marginBottom: '12px', fontWeight: 600, fontSize: '15px' }}>What happens next</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>We discuss your business needs and goals</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>You get a clear timeline and deliverables list</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Work begins within 48 hours of agreement</div>
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <div style={{ color: '#F5F7FA', marginBottom: '12px', fontWeight: 600, fontSize: '15px' }}>Response time</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Email replies within 4 business hours</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Emergency support for active projects</div>
                </div>
                <div>
                  <div style={{ color: '#F5F7FA', marginBottom: '12px', fontWeight: 600, fontSize: '15px' }}>Based in Missouri</div>
                  <div style={{ color: '#9AA0A6', marginBottom: '8px' }}>Serving businesses nationwide</div>
                  <div style={{ color: '#9AA0A6' }}>Central time zone, flexible scheduling</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
