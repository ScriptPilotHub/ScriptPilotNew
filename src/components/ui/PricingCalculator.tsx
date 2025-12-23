import { motion } from 'framer-motion';
import { Store, Briefcase, Wrench, Calendar } from 'lucide-react';

interface ProjectExample {
  icon: typeof Store;
  title: string;
  description: string;
  examples: string[];
}

const projects: ProjectExample[] = [
  {
    icon: Store,
    title: 'E-commerce',
    description: 'Full online stores with payment processing',
    examples: ['Product catalogs', 'Shopping carts', 'Secure checkout', 'Order management']
  },
  {
    icon: Briefcase,
    title: 'Business sites',
    description: 'Professional sites that bring in customers',
    examples: ['Service pages', 'Contact forms', 'Lead generation', 'Customer testimonials']
  },
  {
    icon: Wrench,
    title: 'Combination',
    description: 'Business site with e-commerce features',
    examples: ['Service pages + shop', 'Book appointments + products', 'Portfolio + store']
  },
  {
    icon: Calendar,
    title: 'Booking sites',
    description: 'Schedule appointments and take payments',
    examples: ['Calendar integration', 'Automated reminders', 'Payment collection', 'Client management']
  }
];

export const PricingCalculator = () => {
  return (
    <div style={{ marginTop: '48px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ marginBottom: '32px' }}
      >
        <h3 style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#F5F7FA',
          marginBottom: '12px',
          letterSpacing: '-0.01em'
        }}>
          What we build
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#9AA0A6',
          lineHeight: 1.6
        }}>
          All projects are $700 total. Includes lifetime hosting on our servers. No upsells. No hidden fees.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1px',
        backgroundColor: '#2A2F3A'
      }}>
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              style={{
                padding: '40px 32px',
                backgroundColor: '#161A22',
                cursor: 'pointer'
              }}
            >
              <Icon size={32} color="#5B6CFF" style={{ marginBottom: '24px' }} />

              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#F5F7FA',
                marginBottom: '8px',
                letterSpacing: '-0.01em'
              }}>
                {project.title}
              </h4>

              <p style={{
                fontSize: '14px',
                color: '#9AA0A6',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}>
                {project.description}
              </p>

              <div style={{
                fontSize: '13px',
                color: '#9AA0A6',
                lineHeight: 1.8
              }}>
                {project.examples.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px'
                    }}
                  >
                    <span style={{ color: '#5B6CFF' }}>—</span>
                    <span>{example}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        style={{
          marginTop: '32px',
          padding: '32px',
          backgroundColor: '#0F1115',
          border: '2px solid #5B6CFF',
          textAlign: 'center'
        }}
      >
        <div style={{
          fontSize: '13px',
          letterSpacing: '0.08em',
          color: '#9AA0A6',
          marginBottom: '16px'
        }}>
          ALL PROJECTS
        </div>
        <div style={{
          fontSize: '48px',
          fontWeight: 700,
          color: '#5B6CFF',
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          $700
        </div>
        <p style={{
          fontSize: '14px',
          color: '#9AA0A6',
          marginBottom: '24px',
          lineHeight: 1.6
        }}>
          $160 to start, $540 at launch. Unlimited revisions. Lifetime hosting included. 30 day support. Money-back guarantee.
        </p>
        <a
          href="https://calendly.com/contact-scriptpilot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontSize: '12px',
            letterSpacing: '0.05em',
            color: '#F5F7FA',
            backgroundColor: '#5B6CFF',
            padding: '14px 32px',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4A5AE8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5B6CFF'}
        >
          GET STARTED
        </a>
      </motion.div>
    </div>
  );
};
