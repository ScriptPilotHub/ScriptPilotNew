import React from 'react';
import { Logo } from '../ui/Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      className="px-6 md:px-8 py-12"
      style={{
        backgroundColor: '#050811',
        borderTop: '1px solid rgba(45, 156, 219, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={28} />
              <span className="text-base font-bold" style={{ color: '#FFFFFF' }}>
                ScriptPilot
              </span>
            </div>
            <p className="text-sm" style={{ color: '#8B95A5' }}>
              Websites that bring in customers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="text-left text-sm transition-colors"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#8B95A5',
                    padding: 0,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#56CCF2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8B95A5';
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {['Business websites', 'E-commerce stores', 'Demo sites', 'Site audits', 'Maintenance'].map((service) => (
                <p key={service} className="text-sm" style={{ color: '#8B95A5' }}>
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@scriptpilot.us"
                className="text-sm no-underline transition-colors"
                style={{ color: '#8B95A5', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#56CCF2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B95A5';
                }}
              >
                contact@scriptpilot.us
              </a>
              <a
                href="tel:4174010015"
                className="text-sm no-underline transition-colors"
                style={{ color: '#8B95A5', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#56CCF2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B95A5';
                }}
              >
                (417) 401-0015
              </a>
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline transition-colors"
                style={{ color: '#8B95A5', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#56CCF2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B95A5';
                }}
              >
                Book a call
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(45, 156, 219, 0.1)' }}
        >
          <p className="text-sm" style={{ color: '#8B95A5' }}>
            © {new Date().getFullYear()} ScriptPilot. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#8B95A5' }}>
            Based in Missouri. Serving clients nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
