import React from 'react';
import { Logo } from '../ui/Logo';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-sm mt-6 leading-relaxed font-light" style={{ color: '#CBD5E1' }}>
              Professional web development solutions for businesses that want to grow online.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4" style={{ color: '#F8FAFC' }}>Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4" style={{ color: '#F8FAFC' }}>Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  E-commerce Stores
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  Custom Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  className="transition-colors text-sm font-light hover:opacity-80"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#CBD5E1' }}
                >
                  Payment Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4" style={{ color: '#F8FAFC' }}>Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@scriptpilot.us"
                  className="transition-opacity text-sm font-light hover:opacity-80 no-underline"
                  style={{ color: '#CBD5E1' }}
                >
                  contact@scriptpilot.us
                </a>
              </li>
              <li>
                <a
                  href="tel:4174010015"
                  className="transition-opacity text-sm font-light hover:opacity-80 no-underline"
                  style={{ color: '#CBD5E1' }}
                >
                  (417) 401-0015
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity text-sm font-medium hover:opacity-80 no-underline"
                  style={{ color: '#F8FAFC' }}
                >
                  Book Consultation
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-light" style={{ color: '#CBD5E1' }}>
                Based in Missouri<br />
                Serving Nationwide
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid #475569' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light" style={{ color: '#CBD5E1' }}>
              © 2025 Script Pilot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity text-sm font-medium hover:opacity-80 no-underline"
                style={{ color: '#F8FAFC' }}
              >
                Start Your Project
              </a>
              <span style={{ color: '#475569' }}>|</span>
              <span className="text-sm font-light" style={{ color: '#CBD5E1' }}>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
