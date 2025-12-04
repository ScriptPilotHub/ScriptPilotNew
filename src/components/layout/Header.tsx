import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

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
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(226, 232, 240, 0.95) 100%)',
      borderBottom: '1px solid #CBD5E1',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 1.5rem',
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
            transition: 'opacity 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <Logo />
        </button>

        <div style={{ display: 'none' }} className="hidden md:flex items-center gap-12">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => navigateTo(item.href)}
              style={{
                color: currentPage === item.href ? '#1E293B' : '#475569',
                fontWeight: currentPage === item.href ? '600' : '500',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontSize: '1rem',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1E293B'}
              onMouseLeave={(e) => e.currentTarget.style.color = currentPage === item.href ? '#1E293B' : '#475569'}
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
            color: '#000000'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden" style={{
          background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.98) 0%, rgba(226, 232, 240, 0.98) 100%)',
          borderTop: '1px solid #CBD5E1',
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
                fontWeight: currentPage === item.href ? '600' : '500',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.125rem',
                transition: 'color 0.3s ease'
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
