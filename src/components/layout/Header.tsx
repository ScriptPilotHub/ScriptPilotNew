import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className="sticky top-0 z-50 px-6 md:px-8 py-6"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.98)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #1A1A1A'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center"
          aria-label="ScriptPilot Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Logo size={40} />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium no-underline"
              style={{
                color: location.pathname === item.path ? '#FFFFFF' : '#808080',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.color = '#808080';
                }
              }}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2.5 no-underline"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.outline = '1px solid #FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0A0A0A';
              e.currentTarget.style.outline = 'none';
            }}
          >
            Get started
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2.5 no-underline"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A'
            }}
          >
            Start
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#FFFFFF'
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden mt-6 pt-6" style={{ borderTop: '1px solid #1A1A1A' }}>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium no-underline"
                style={{
                  color: location.pathname === item.path ? '#FFFFFF' : '#808080'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
