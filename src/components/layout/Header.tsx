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
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
    { href: "#payment-portal", label: "Client Portal" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          <a href="#home" className="flex items-center transition-transform duration-200 hover:scale-105">
            <Logo />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 rounded-lg hover:bg-slate-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50">
          <nav className="container py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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