import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => (
  <footer className="bg-gradient-to-t from-slate-950 to-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800/50 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-purple-500/5"></div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
      <div className="group">
        <a href="#home" className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <div className="transform group-hover:scale-125 group-hover:rotate-3 transition-transform duration-500 ease-out">
            <Logo />
          </div>
        </a>
        <p className="text-sm group-hover:text-slate-200 transition-colors duration-500 relative z-10">
          Crafting Digital Excellence, One Line at a Time.
        </p>
      </div>
      <div className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-500 relative z-10">
        <p>Serving businesses nationwide.</p>
      </div>
    </div>
  </footer>
);