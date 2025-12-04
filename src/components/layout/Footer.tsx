import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer style={{ backgroundColor: '#1E293B' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 border-t" style={{ borderColor: '#475569' }}>
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
                  className="text-sm font-light transition-opacity hover:opacity-60"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#F8FAFC' }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-sm font-light transition-opacity hover:opacity-60"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#F8FAFC' }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-sm font-light transition-opacity hover:opacity-60"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#F8FAFC' }}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  className="text-sm font-light transition-opacity hover:opacity-60"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#F8FAFC' }}
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
                  className="text-sm font-light transition-opacity hover:opacity-60 no-underline"
                  style={{ color: '#F8FAFC' }}
                >
                  contact@scriptpilot.us
                </a>
              </li>
              <li>
                <a
                  href="tel:4174010015"
                  className="text-sm font-light transition-opacity hover:opacity-60 no-underline"
                  style={{ color: '#F8FAFC' }}
                >
                  (417) 401-0015
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light transition-opacity hover:opacity-60 no-underline"
                  style={{ color: '#F8FAFC' }}
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

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: '#475569' }}>
          <p className="text-xs font-light opacity-60" style={{ color: '#CBD5E1' }}>
            © 2025 Script Pilot
          </p>
          <a
            href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-light tracking-widest transition-opacity hover:opacity-60 no-underline"
            style={{ color: '#F8FAFC' }}
          >
            START PROJECT →
          </a>
        </div>
      </div>
    </footer>
  );
};
