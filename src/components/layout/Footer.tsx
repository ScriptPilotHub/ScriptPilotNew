import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => (
  <footer className="bg-slate-50 border-t border-slate-200 section-sm">
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="space-y-4 max-w-md">
          <Logo />
          <p className="body-small">
            Elite web development solutions for businesses that demand excellence. 
            Delivering results through innovative technology and expert craftsmanship.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-right">
          <div className="space-y-2">
            <p className="body-small font-medium">
              Serving businesses nationwide
            </p>
            <p className="body-small text-slate-500 dark:text-slate-500">
            <p className="body-small text-slate-500">
              © 2025 Script Pilot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
)