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
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: '#0F1115',
      borderBottom: '1px solid #2A2F3A',
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: 0,
        right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, rgba(15, 17, 21, 0.9) 0%, rgba(15, 17, 21, 0.6) 40%, transparent 100%)',
        pointerEvents: 'none'
      }} />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16" style={{ position: 'relative', zIndex: 1 }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '90px'
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
                  fontSize: '14px',
                  letterSpacing: '0.03em',
                  color: location.pathname === link.path ? '#5B6CFF' : '#F5F7FA',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#5B6CFF'}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = '#F5F7FA';
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
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: '#F5F7FA',
                backgroundColor: '#5B6CFF',
                padding: '12px 24px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                fontWeight: 600,
                borderRadius: '2px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4A5AE8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5B6CFF';
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
              color: '#F5F7FA',
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
            top: '90px',
            left: 0,
            right: 0,
            backgroundColor: '#0F1115',
            borderBottom: '1px solid #2A2F3A',
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
                    color: location.pathname === link.path ? '#5B6CFF' : '#F5F7FA',
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
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  color: '#F5F7FA',
                  backgroundColor: '#5B6CFF',
                  padding: '12px 20px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 600,
                  borderRadius: '2px'
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
