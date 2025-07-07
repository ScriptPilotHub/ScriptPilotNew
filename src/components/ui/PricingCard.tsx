import React from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  timeline: string;
  color: string;
  features?: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  originalPrice,
  timeline,
  color,
  features = []
}) => {
  return (
    <div className={`group bg-slate-800/30 rounded-xl border-2 border-${color}-400/30 p-6 hover:border-${color}-400/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}-500/10 transform-gpu`}>
      <h3 className={`text-2xl font-bold text-${color}-300 mb-2 group-hover:text-${color}-200 transition-colors duration-300`}>
        {title}
      </h3>
      <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
        {description}
      </p>
      
      <div className="bg-slate-700/50 rounded-lg p-4 mb-4 group-hover:bg-slate-700/70 transition-colors duration-300">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-bold text-white">Price:</span>
          {originalPrice && (
            <span className="text-slate-400 text-base line-through">{originalPrice}</span>
          )}
          <span className={`text-${color}-300 font-bold text-xl group-hover:text-${color}-200 transition-colors duration-300`}>
            {price}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">Timeline:</span>
          <span className="text-slate-300 font-semibold group-hover:text-white transition-colors duration-300">
            {timeline}
          </span>
        </div>
      </div>

      {features.length > 0 && (
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
              <div className={`w-2 h-2 bg-${color}-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
              {feature}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};