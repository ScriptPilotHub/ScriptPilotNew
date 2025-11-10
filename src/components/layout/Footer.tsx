import React from 'react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => (
  <footer className="bg-slate-900 border-t border-slate-700 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm transform rotate-45"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                Script Pilot
              </span>
              <span className="text-sm text-blue-300 font-medium tracking-wider">
                WEB DEVELOPMENT
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Elite web development solutions for businesses that demand excellence. 
            Delivering results through innovative technology and expert craftsmanship.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-right">
          <div className="space-y-2">
            <p className="text-sm font-medium text-white">
              Serving businesses nationwide
            </p>
            <p className="text-sm text-slate-400">
              © 2025 Script Pilot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);