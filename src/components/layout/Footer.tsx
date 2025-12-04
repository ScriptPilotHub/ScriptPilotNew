import React from 'react';

interface FooterProps {
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="text-xs font-light tracking-widest mb-4 text-slate-400">
              SCRIPT PILOT
            </div>
            <p className="text-sm font-light leading-relaxed text-slate-300">
              Professional web development for businesses.
            </p>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-6 text-slate-400">
              NAVIGATE
            </div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 bg-transparent border-0 p-0 cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 bg-transparent border-0 p-0 cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 bg-transparent border-0 p-0 cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('payment-portal')}
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 bg-transparent border-0 p-0 cursor-pointer"
                >
                  Portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-6 text-slate-400">
              CONTACT
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@scriptpilot.us"
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 no-underline inline-block"
                >
                  contact@scriptpilot.us
                </a>
              </li>
              <li>
                <a
                  href="tel:4174010015"
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 no-underline inline-block"
                >
                  (417) 401-0015
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-scriptpilot/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-slate-100 hover:text-slate-300 hover:translate-x-1 transition-all duration-300 no-underline inline-block"
                >
                  Book consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-light tracking-widest mb-6 text-slate-400">
              LOCATION
            </div>
            <p className="text-sm font-light leading-relaxed text-slate-100">
              Based in Missouri
              <br />
              Serving nationwide
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-slate-400">
            © 2025 Script Pilot
          </p>
          <button
            onClick={() => navigateTo('contact')}
            className="text-xs font-light tracking-widest text-slate-100 px-8 py-3 border border-slate-600 rounded-lg hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-transparent cursor-pointer"
          >
            START PROJECT →
          </button>
        </div>
      </div>
    </footer>
  );
};
