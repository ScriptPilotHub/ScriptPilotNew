import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer
      className="px-6 md:px-8 py-16"
      style={{
        backgroundColor: '#0D1B2A',
        borderTop: '1px solid rgba(120, 141, 169, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={32} />
              <span className="text-base font-bold" style={{ color: '#F4F3EE' }}>
                ScriptPilot
              </span>
            </div>
            <p className="text-sm" style={{ color: '#778DA9' }}>
              Websites that bring in customers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#E8B4B8' }}>
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
                    color: '#B8C5D6',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E8B4B8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8C5D6';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#E8B4B8' }}>
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {['Business websites', 'E-commerce', 'Site audits', 'Maintenance'].map((service) => (
                <p key={service} className="text-sm" style={{ color: '#778DA9' }}>
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#E8B4B8' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@scriptpilot.us"
                className="text-sm no-underline"
                style={{ color: '#B8C5D6', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E8B4B8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B8C5D6';
                }}
              >
                contact@scriptpilot.us
              </a>
              <a
                href="tel:4174010015"
                className="text-sm no-underline"
                style={{ color: '#B8C5D6', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E8B4B8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B8C5D6';
                }}
              >
                (417) 401-0015
              </a>
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline"
                style={{ color: '#B8C5D6', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E8B4B8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#B8C5D6';
                }}
              >
                Book a call
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(120, 141, 169, 0.2)' }}
        >
          <p className="text-sm" style={{ color: '#778DA9' }}>
            © {new Date().getFullYear()} ScriptPilot. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#778DA9' }}>
            Missouri. Serving nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
