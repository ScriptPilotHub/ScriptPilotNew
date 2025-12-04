import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      backgroundColor: '#FFFFFF'
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
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#111827',
            background: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          Script Pilot
        </button>

        <div style={{ display: 'none' }} className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => navigateTo(item.href)}
              style={{
                color: currentPage === item.href ? '#111827' : '#6B7280',
                fontWeight: currentPage === item.href ? '600' : '500',
                background: 'none',
                cursor: 'pointer',
                padding: '0.5rem 0',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
              onMouseLeave={(e) => {
                if (currentPage !== item.href) e.currentTarget.style.color = '#6B7280';
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
              backgroundColor: '#111827',
              color: '#FFFFFF',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111827'}
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            background: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#111827'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden" style={{
          backgroundColor: '#FFFFFF',
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
                color: currentPage === item.href ? '#111827' : '#6B7280',
                fontWeight: currentPage === item.href ? '600' : '500',
                background: 'none',
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
              backgroundColor: '#111827',
              color: '#FFFFFF',
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
