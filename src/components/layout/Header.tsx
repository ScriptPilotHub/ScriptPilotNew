import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Services', path: 'services' },
    { name: 'About', path: 'about' },
    { name: 'Contact', path: 'contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 px-6 md:px-8 py-6"
      style={{
        backgroundColor: 'rgba(10, 15, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(45, 156, 219, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => {
            onNavigate('home');
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
              onClick={() => onNavigate(item.path)}
              className="text-sm font-semibold transition-colors"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: currentPage === item.path ? '#56CCF2' : '#8B95A5',
                padding: 0,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.path) {
                  e.currentTarget.style.color = '#56CCF2';
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.path) {
                  e.currentTarget.style.color = '#8B95A5';
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
              background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
              color: '#FFFFFF',
              transition: 'all 0.3s ease',
              border: 'none',
              borderRadius: '6px',
              boxShadow: '0 4px 15px rgba(45, 156, 219, 0.3)',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(45, 156, 219, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(45, 156, 219, 0.3)';
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
              background: 'linear-gradient(135deg, #2D9CDB 0%, #56CCF2 100%)',
              color: '#FFFFFF',
              transition: 'all 0.3s ease',
              border: 'none',
              borderRadius: '6px',
              boxShadow: '0 4px 15px rgba(45, 156, 219, 0.3)',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(45, 156, 219, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(45, 156, 219, 0.3)';
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
        <nav className="md:hidden mt-6 pt-6" style={{ borderTop: '1px solid rgba(45, 156, 219, 0.2)' }}>
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
                  color: currentPage === item.path ? '#56CCF2' : '#8B95A5',
                  padding: 0,
                  transition: 'all 0.2s ease'
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
