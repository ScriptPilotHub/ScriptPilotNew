import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">SP</span>
    </div>
    <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
      Script Pilot
    </span>
  </div>
);