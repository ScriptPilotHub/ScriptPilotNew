import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-sm transform rotate-45"></div>
        </div>
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-['Space_Grotesk']">
        Script Pilot
      </span>
      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
        WEB DEVELOPMENT
      </span>
    </div>
  </div>
);