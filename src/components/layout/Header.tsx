import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { usePathname } from '../../hooks/usePathname';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#payment-portal", label: "Payment Portal" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md shadow-lg border-b border-gray-700/60' 
        : 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-20' : 'h-24'
        }`}>
         <a href="#home" className="flex items-center transition-all duration-300 hover:scale-105 transform hover:-translate-y-0.5 flex-shrink-0">
            <Logo />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 whitespace-nowrap ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'text-white bg-gray-700' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-200 hover:text-white transition-colors duration-200 rounded-md hover:bg-gray-700/50 flex-shrink-0"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-gray-900/98 via-gray-800/98 to-gray-900/98 backdrop-blur-xl border-t border-gray-700/60 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-semibold transition-all duration-200 ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};