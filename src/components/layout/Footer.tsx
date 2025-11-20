import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-slate-800 rounded-sm transform rotate-45"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-['Space_Grotesk']">
                Script Pilot
              </span>
              <span className="text-sm text-slate-600 font-semibold tracking-wider uppercase">
                WEB DEVELOPMENT
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Elite web development solutions for businesses that demand excellence. 
            Delivering results through innovative technology and expert craftsmanship.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-right">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">
              Serving businesses nationwide
            </p>
            <p className="text-sm text-slate-500">
              © 2025 Script Pilot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);