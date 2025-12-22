import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer
      className="px-6 md:px-8 py-16"
      style={{
        backgroundColor: '#050505',
        borderTop: '1px solid #1A1A1A'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <span className="text-base font-bold" style={{ color: '#FFFFFF' }}>
                ScriptPilot
              </span>
            </div>
            <p className="text-sm" style={{ color: '#606060' }}>
              Websites that bring in customers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Process', path: '/process' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm no-underline"
                  style={{
                    color: '#808080',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#808080';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {['Business websites', 'E-commerce', 'Site audits', 'Maintenance'].map((service) => (
                <p key={service} className="text-sm" style={{ color: '#606060' }}>
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
                className="text-sm no-underline"
                style={{ color: '#808080', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#808080';
                }}
              >
                contact@scriptpilot.us
              </a>
              <a
                href="tel:4174010015"
                className="text-sm no-underline"
                style={{ color: '#808080', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#808080';
                }}
              >
                (417) 401-0015
              </a>
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline"
                style={{ color: '#808080', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#808080';
                }}
              >
                Book a call
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #1A1A1A' }}
        >
          <p className="text-sm" style={{ color: '#606060' }}>
            © {new Date().getFullYear()} ScriptPilot. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#606060' }}>
            Missouri. Serving nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
