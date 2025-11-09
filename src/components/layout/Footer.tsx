import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => (
  <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Professional web development solutions for businesses that demand excellence. 
            Delivering results through innovative technology and expert craftsmanship.
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
            Serving businesses nationwide
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2025 Script Pilot. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);