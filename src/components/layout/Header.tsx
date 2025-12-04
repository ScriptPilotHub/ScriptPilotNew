import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
    { label: 'Portal', href: 'payment-portal' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(248, 250, 252, 0.8)',
      borderBottom: '1px solid #E5E7EB',
      backdropFilter: 'blur(12px)'
    }}>
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1.5rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={() => navigateTo('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontSize: '0.75rem',
            fontWeight: '300',
            letterSpacing: '0.15em',
            color: '#1E293B',
            transition: 'opacity 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          SCRIPT PILOT
        </button>

        <div style={{ display: 'none' }} className="hidden md:flex items-center gap-12">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => navigateTo(item.href)}
              style={{
                color: currentPage === item.href ? '#1E293B' : '#475569',
                fontWeight: '300',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontSize: '0.875rem',
                transition: 'opacity 0.3s',
                opacity: currentPage === item.href ? 1 : 0.6
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => {
                if (currentPage !== item.href) e.currentTarget.style.opacity = '0.6';
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#1E293B'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden" style={{
          backgroundColor: 'rgba(248, 250, 252, 0.95)',
          borderTop: '1px solid #E5E7EB',
          padding: '1.5rem',
          backdropFilter: 'blur(12px)'
        }}>
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => {
                navigateTo(item.href);
                setMobileMenuOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '1rem 0',
                color: currentPage === item.href ? '#1E293B' : '#475569',
                fontWeight: '300',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.125rem'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
