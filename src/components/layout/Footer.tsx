import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer
      className="px-6 md:px-8 py-16"
      style={{
        backgroundColor: '#0B0D12',
        borderTop: '1px solid #2A2F3A'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Logo size={32} />
            </div>
            <p className="text-sm" style={{ color: '#9AA0A6' }}>
              Websites that bring in customers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#F5F7FA' }}>
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Process', path: '/process' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm no-underline"
                  style={{
                    color: '#9AA0A6',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5B6CFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9AA0A6';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#F5F7FA' }}>
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {['Business websites', 'E-commerce', 'Site audits', 'Maintenance'].map((service) => (
                <p key={service} className="text-sm" style={{ color: '#9AA0A6' }}>
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4" style={{ color: '#F5F7FA' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@scriptpilot.us"
                className="text-sm no-underline"
                style={{ color: '#9AA0A6', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#5B6CFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9AA0A6';
                }}
              >
                contact@scriptpilot.us
              </a>
              <a
                href="tel:4174131978"
                className="text-sm no-underline"
                style={{ color: '#9AA0A6', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#5B6CFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9AA0A6';
                }}
              >
                (417) 413-1978
              </a>
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline"
                style={{ color: '#9AA0A6', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#5B6CFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9AA0A6';
                }}
              >
                Book a call
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #2A2F3A' }}
        >
          <p className="text-sm" style={{ color: '#9AA0A6' }}>
            © {new Date().getFullYear()} ScriptPilot. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: '#9AA0A6' }}>
            Missouri. Serving nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
};
