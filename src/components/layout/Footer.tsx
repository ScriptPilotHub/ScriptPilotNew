import React from 'react';
import { Logo } from '../ui/Logo';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-gray-400 text-sm mt-6 leading-relaxed">
              Professional web development solutions for businesses that want to grow online.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  E-commerce Stores
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Custom Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Payment Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@scriptpilot.us"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  contact@scriptpilot.us
                </a>
              </li>
              <li>
                <a
                  href="tel:4174010015"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  (417) 401-0015
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-xs">
                Based in Missouri<br />
                Serving Nationwide
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Script Pilot. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://buy.stripe.com/00wcN64V6fP65KTeFh9EI06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Start Your Project
              </a>
              <span className="text-gray-700">|</span>
              <span className="text-gray-500 text-sm">Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
