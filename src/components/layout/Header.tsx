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
    { label: 'Home', href: 'home' },
    { label: 'Services', href: 'services' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
    { label: 'Payment Portal', href: 'payment-portal' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: '#F8FAFC',
      borderBottom: '1px solid #E5E7EB',
      backdropFilter: 'blur(8px)'
    }}>
      <nav style={{
        maxWidth: '1280px',
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
            padding: 0
          }}
        >
          <Logo />
        </button>

        <div style={{ display: 'none' }} className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => navigateTo(item.href)}
              style={{
                color: currentPage === item.href ? '#1E293B' : '#475569',
                fontWeight: currentPage === item.href ? '500' : '300',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#1E293B'}
              onMouseLeave={(e) => {
                if (currentPage !== item.href) e.currentTarget.style.color = '#475569';
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#1E293B',
              color: '#F8FAFC',
              padding: '0.625rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get Started
          </a>
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
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden" style={{
          backgroundColor: '#F8FAFC',
          borderTop: '1px solid #E5E7EB',
          padding: '1rem'
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
                padding: '0.75rem 0',
                color: currentPage === item.href ? '#1E293B' : '#475569',
                fontWeight: currentPage === item.href ? '500' : '300',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'block',
              backgroundColor: '#1E293B',
              color: '#F8FAFC',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              fontSize: '1rem',
              textAlign: 'center',
              textDecoration: 'none',
              marginTop: '1rem'
            }}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};
