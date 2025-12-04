import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-20 border-t" style={{ borderColor: '#334155' }}>
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="text-xs font-light tracking-widest mb-4 opacity-60" style={{ color: '#CBD5E1' }}>
              SCRIPT PILOT
            </div>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#CBD5E1' }}>
              Professional web development for businesses.
            </p>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              NAVIGATE
            </div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-sm font-light"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-sm font-light"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-sm font-light"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  className="text-sm font-light"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              CONTACT
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@scriptpilot.us"
                  className="text-sm font-light no-underline"
                  style={{
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  contact@scriptpilot.us
                </a>
              </li>
              <li>
                <a
                  href="tel:4174010015"
                  className="text-sm font-light no-underline"
                  style={{
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  (417) 401-0015
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light no-underline"
                  style={{
                    color: '#F8FAFC',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#CBD5E1';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F8FAFC';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Book consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-6 opacity-60" style={{ color: '#CBD5E1' }}>
              LOCATION
            </div>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#F8FAFC' }}>
              Based in Missouri
              <br />
              Serving nationwide
            </p>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#334155' }}>
          <p className="text-xs font-light opacity-60" style={{ color: '#CBD5E1' }}>
            © 2025 Script Pilot
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="text-xs font-light tracking-widest"
            style={{
              color: '#F8FAFC',
              transition: 'all 0.3s ease',
              padding: '0.75rem 2rem',
              border: '1px solid #475569',
              borderRadius: '0.5rem',
              display: 'inline-block',
              background: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#475569';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            START PROJECT →
          </button>
        </div>
      </div>
    </footer>
  );
};
