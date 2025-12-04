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
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
                color: currentPage === item.href ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)',
                fontWeight: currentPage === item.href ? '600' : '500',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseLeave={(e) => {
                if (currentPage !== item.href) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
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
              backgroundColor: '#FFFFFF',
              color: '#1e40af',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
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
            color: '#FFFFFF'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden" style={{
          backgroundColor: 'rgba(30, 64, 175, 0.95)',
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
                color: currentPage === item.href ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)',
                fontWeight: currentPage === item.href ? '600' : '500',
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
              backgroundColor: '#FFFFFF',
              color: '#1e40af',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
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
