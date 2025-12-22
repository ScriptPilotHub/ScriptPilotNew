import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/process', label: 'Process' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: '#0D1B2A',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40px',
        background: 'linear-gradient(to bottom, transparent, rgba(13, 27, 42, 0.3))',
        pointerEvents: 'none'
      }} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-16" style={{ position: 'relative', zIndex: 1 }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px'
        }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Link>

          <div className="hidden md:flex" style={{ gap: '40px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.03em',
                  color: location.pathname === link.path ? '#E8B4B8' : '#B8C5D6',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E8B4B8'}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = '#B8C5D6';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px',
                letterSpacing: '0.05em',
                color: '#0D1B2A',
                backgroundColor: '#E8B4B8',
                padding: '10px 20px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C89BA0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E8B4B8';
              }}
            >
              BOOK CALL
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#B8C5D6',
              cursor: 'pointer',
              padding: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: '#0D1B2A',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '14px',
                    letterSpacing: '0.03em',
                    color: location.pathname === link.path ? '#E8B4B8' : '#B8C5D6',
                    textDecoration: 'none',
                    fontWeight: 500
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://calendly.com/contact-scriptpilot/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  color: '#0D1B2A',
                  backgroundColor: '#E8B4B8',
                  padding: '12px 20px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 600
                }}
              >
                BOOK CALL
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
