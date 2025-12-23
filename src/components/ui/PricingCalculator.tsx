import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProjectPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const packages: ProjectPackage[] = [
  {
    name: 'Basic Site',
    price: '$700',
    description: 'Perfect for local businesses and service providers',
    features: [
      '5 custom pages',
      'Mobile responsive',
      'Contact form',
      'SEO optimization',
      'Fast load times',
      'SSL certificate'
    ]
  },
  {
    name: 'Business Site',
    price: '$900',
    description: 'For businesses needing advanced features',
    features: [
      'Everything in Basic',
      'Blog / CMS',
      'Advanced forms',
      '10+ pages',
      'Social integration',
      'Analytics dashboard'
    ],
    popular: true
  },
  {
    name: 'E-commerce',
    price: '$1,100',
    description: 'Full online store with payment processing',
    features: [
      'Everything in Business',
      'Product catalog',
      'Shopping cart',
      'Payment processing',
      'Inventory management',
      'Order tracking'
    ]
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
          Common projects
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#9AA0A6',
          lineHeight: 1.6
        }}>
          Most projects fit one of these packages. Custom pricing available for unique needs.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1px',
        backgroundColor: '#2A2F3A'
      }}>
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            style={{
              padding: '40px',
              backgroundColor: pkg.popular ? '#1A1F2B' : '#161A22',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            {pkg.popular && (
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: '#5B6CFF',
                fontWeight: 600,
                padding: '4px 12px',
                border: '1px solid #5B6CFF'
              }}>
                POPULAR
              </div>
            )}

            <div style={{
              fontSize: '13px',
              letterSpacing: '0.08em',
              color: '#9AA0A6',
              marginBottom: '8px',
              textTransform: 'uppercase'
            }}>
              {pkg.name}
            </div>

            <div style={{
              fontSize: '48px',
              fontWeight: 700,
              color: '#5B6CFF',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              {pkg.price}
            </div>

            <p style={{
              fontSize: '14px',
              color: '#9AA0A6',
              lineHeight: 1.6,
              marginBottom: '32px',
              paddingBottom: '24px',
              borderBottom: '1px solid #2A2F3A'
            }}>
              {pkg.description}
            </p>

            <div style={{ marginBottom: '32px' }}>
              {pkg.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 + idx * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '12px'
                  }}
                >
                  <Check size={16} color="#5B6CFF" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{
                    fontSize: '14px',
                    color: '#9AA0A6',
                    lineHeight: 1.5
                  }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontSize: '12px',
                letterSpacing: '0.05em',
                color: '#F5F7FA',
                backgroundColor: pkg.popular ? '#5B6CFF' : 'transparent',
                padding: '14px 24px',
                textDecoration: 'none',
                textAlign: 'center',
                fontWeight: 600,
                outline: pkg.popular ? 'none' : '1px solid #2A2F3A',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (pkg.popular) {
                  e.currentTarget.style.backgroundColor = '#4A5AE8';
                } else {
                  e.currentTarget.style.outlineColor = '#5B6CFF';
                  e.currentTarget.style.color = '#5B6CFF';
                }
              }}
              onMouseLeave={(e) => {
                if (pkg.popular) {
                  e.currentTarget.style.backgroundColor = '#5B6CFF';
                } else {
                  e.currentTarget.style.outlineColor = '#2A2F3A';
                  e.currentTarget.style.color = '#F5F7FA';
                }
              }}
            >
              GET STARTED
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        style={{
          marginTop: '24px',
          textAlign: 'center',
          fontSize: '13px',
          color: '#9AA0A6'
        }}
      >
        Need something different?{' '}
        <a
          href="https://calendly.com/contact-scriptpilot/30min"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#5B6CFF',
            textDecoration: 'none',
            borderBottom: '1px solid #5B6CFF',
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#4A5AE8'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#5B6CFF'}
        >
          Let's discuss your custom project
        </a>
      </motion.div>
    </div>
  );
};
