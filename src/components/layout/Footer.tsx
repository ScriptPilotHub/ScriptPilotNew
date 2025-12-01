import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Shield, Award, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Script Pilot</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Professional web development solutions for businesses that want to grow online. 
              Delivering results through expert craftsmanship and innovative technology.
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-gray-300">
            <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span className="text-sm">Based in Missouri, serving nationwide</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
          <ul className="space-y-3">
            {[
              { label: 'Business Websites', href: 'payment-portal', type: 'internal' },
              { label: 'E-commerce Stores', href: 'payment-portal', type: 'internal' }, 
              { label: 'Custom Applications', href: 'payment-portal', type: 'internal' },
              { label: 'Website Maintenance', href: 'https://buy.stripe.com/3cIdRaevGauMc9h8gT9EI05', type: 'external' }
            ].map((service, index) => (
              <li key={index}>
                {service.type === 'external' ? (
                  <a 
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </a>
                ) : (
                  <button 
                    onClick={() => window.location.hash = service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
          <div className="space-y-4">
            <a 
              href="mailto:contact@scriptpilot.us"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Email Us</div>
                <div className="text-xs text-gray-400">contact@scriptpilot.us</div>
              </div>
            </a>
            
            <a 
              href="tel:4174010015"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Call Us</div>
                <div className="text-xs text-gray-400">(417) 401-0015</div>
              </div>
            </a>
            
            <div className="flex items-center gap-3 text-gray-300">
              <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">Business Hours</div>
                <div className="text-xs text-gray-400">Mon-Fri, 9AM-6PM CST</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links & Trust */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
          <ul className="space-y-3 mb-6">
            {[
              { label: 'About Us', href: 'about' },
              { label: 'Our Services', href: 'services' },
              { label: 'Contact', href: 'contact' },
              { label: 'Payment Portal', href: 'payment-portal' }
            ].map((link, index) => (
              <li key={index}>
                <button 
                  onClick={() => window.location.hash = link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Trust Badges */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-xs">200+ Sites Built</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-xs">Nationwide Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Script Pilot. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://calendly.com/contact-scriptpilot/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Book Free Consultation
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Response within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);