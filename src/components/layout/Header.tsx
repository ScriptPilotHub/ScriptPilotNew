import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { usePathname } from '../../hooks/usePathname';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
    { href: "#payment-portal", label: "Payment Portal" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled ? 'h-16' : 'h-24'
        }`}>
          <a href="#home" className="flex items-center group">
            <div className="transform group-hover:scale-110 transition-transform duration-300 ease-out">
              <Logo />
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-base font-medium transition-all duration-300 group ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'text-teal-300' 
                    : 'text-slate-300 hover:text-white hover:scale-105'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 ease-out ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none transform hover:scale-110 transition-transform duration-300 ease-out"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  pathname === link.href.substring(1) || (pathname === '' && link.href === '#home')
                    ? 'bg-slate-800 text-teal-300' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
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