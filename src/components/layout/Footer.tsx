import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Shield, Award } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer style={{ backgroundColor: '#1F2937', color: '#FFFFFF', padding: '4rem 1rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFFFFF' }}>
              Script Pilot
            </h3>
            <p style={{ color: '#D1D5DB', fontSize: '0.875rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Professional web development solutions for businesses that want to grow online.
              Delivering results through expert craftsmanship and innovative technology.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1D5DB' }}>
              <MapPin style={{ width: '1.25rem', height: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem' }}>Based in Missouri, serving nationwide</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D1D5DB', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Start Your Project
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="https://buy.stripe.com/7sY6oI3R29qI3CL7cP9EI07"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D1D5DB', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Launch Your Site
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a
                  href="https://buy.stripe.com/7sY5kEcnybyQc9hap19EI08"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#D1D5DB', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Keep It Running
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  style={{
                    color: '#D1D5DB',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Payment Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="mailto:contact@scriptpilot.us"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
              >
                <Mail style={{ width: '1.25rem', height: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Email Us</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>contact@scriptpilot.us</div>
                </div>
              </a>

              <a
                href="tel:4174010015"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
              >
                <Phone style={{ width: '1.25rem', height: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Call Us</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>(417) 401-0015</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1D5DB' }}>
                <Clock style={{ width: '1.25rem', height: '1.25rem', color: '#60A5FA', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Business Hours</div>
                  <div style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>Mon-Fri, 9AM-6PM CST</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem', color: '#FFFFFF' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => navigateTo('about')}
                  style={{
                    color: '#D1D5DB',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  About Us
                </button>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => navigateTo('services')}
                  style={{
                    color: '#D1D5DB',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Our Services
                </button>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => navigateTo('contact')}
                  style={{
                    color: '#D1D5DB',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Contact
                </button>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  style={{
                    color: '#D1D5DB',
                    fontSize: '0.875rem',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  Payment Portal
                </button>
              </li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB' }}>
                <Shield style={{ width: '1rem', height: '1rem', color: '#34D399' }} />
                <span style={{ fontSize: '0.75rem' }}>SSL Secured</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB' }}>
                <Award style={{ width: '1rem', height: '1rem', color: '#FBBF24' }} />
                <span style={{ fontSize: '0.75rem' }}>200+ Sites Built</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D1D5DB' }}>
                <Globe style={{ width: '1rem', height: '1rem', color: '#60A5FA' }} />
                <span style={{ fontSize: '0.75rem' }}>Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '3rem',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem', margin: 0 }}>
              © 2025 Script Pilot. All rights reserved.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem' }}>
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#60A5FA', textDecoration: 'none', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#93C5FD'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#60A5FA'}
            >
              Book Free Consultation
            </a>
            <span style={{ color: '#4B5563' }}>|</span>
            <span style={{ color: '#9CA3AF' }}>Response within 24 hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
