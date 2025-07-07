import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  Icon, 
  color,
  delay = 0 
}) => {
  return (
    <div 
      className={`group bg-gradient-to-br from-slate-800/60 to-slate-900/50 rounded-xl shadow-lg border border-slate-700/50 p-8 h-full flex flex-col hover:border-${color}-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}-500/10 transform-gpu`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
        <Icon className={`w-16 h-16 text-${color}-400 group-hover:text-${color}-300 transition-colors duration-300`} />
      </div>
      <h3 className={`text-2xl font-semibold text-${color}-300 mb-4 group-hover:text-${color}-200 transition-colors duration-300`}>
        {title}
      </h3>
      <p className="text-slate-400 flex-grow group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>
      <div className={`mt-6 w-full h-0.5 bg-gradient-to-r from-${color}-500/0 via-${color}-500/50 to-${color}-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};