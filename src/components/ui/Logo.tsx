import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <div className="w-10 sm:w-11 h-10 sm:h-11 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center shadow-lg">
        <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-sm flex items-center justify-center">
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-slate-800 rounded-sm transform rotate-45"></div>
        </div>
      </div>
      <div className="absolute -top-1 -right-1 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-amber-500 rounded-full shadow-sm"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-['Space_Grotesk'] leading-none">
        Script Pilot
      </span>
      <span className="text-xs sm:text-xs text-slate-600 font-semibold tracking-wider uppercase">
        WEB DEVELOPMENT
      </span>
    </div>
  </div>
);