import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "services", label: "Services" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
    { href: "payment-portal", label: "Payment Portal" }
  ];

  const handleNavClick = (href: string) => {
    navigateTo(href);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-b from-gray-900 via-gray-700 to-white/80 backdrop-blur-xl shadow-2xl' 
        : 'bg-gradient-to-b from-gray-900 via-gray-700 to-white/60 backdrop-blur-lg'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-20' : 'h-24'
        }`}>
         <button onClick={() => handleNavClick('home')} className="flex items-center transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 flex-shrink-0">
            <Logo />
          </button>
          
          <nav className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap ${
                  currentPage === link.href
                    ? 'text-white bg-white/20 backdrop-blur-sm shadow-lg' 
                    : 'text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-200 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/10 hover:backdrop-blur-sm flex-shrink-0"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-gray-800/98 via-gray-700/95 to-white/10 backdrop-blur-xl border-t border-white/20 shadow-2xl">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-4 py-3 rounded-md text-base font-semibold transition-all duration-200 w-full text-left ${
                  currentPage === link.href
                    ? 'bg-white/20 text-white backdrop-blur-sm shadow-lg' 
                    : 'text-gray-200 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};