import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' },
    { name: 'Portal', path: 'payment-portal' }
  ];

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 px-6 md:px-8 py-6"
      style={{
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1A1A1A'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => {
            navigateTo('home');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
          aria-label="ScriptPilot Home"
        >
          <Logo size={40} />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className="text-sm font-semibold transition-colors"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: currentPage === item.path ? '#FFFFFF' : '#808080',
                padding: 0
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.path) {
                  e.currentTarget.style.color = '#FFFFFF';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.path) {
                  e.currentTarget.style.color = '#808080';
                }
              }}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://calendly.com/contact-scriptpilot/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-6 py-2.5 no-underline"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              transition: 'all 0.2s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0A0A0A';
              e.currentTarget.style.borderColor = 'transparent';
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
            className="text-sm font-semibold px-6 py-2.5 no-underline"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#0A0A0A',
              transition: 'all 0.2s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0A0A0A';
              e.currentTarget.style.borderColor = 'transparent';
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
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-left text-base font-semibold transition-colors"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === item.path ? '#FFFFFF' : '#808080',
                  padding: 0
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
