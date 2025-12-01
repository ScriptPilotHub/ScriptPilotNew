import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-gray-50 border-t border-gray-200 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center lg:items-start space-y-4 max-w-md">
          <div className="flex items-center">
            <img 
              src="/IMG_2131-Picsart-BackgroundRemover.jpeg" 
              alt="Script Pilot - Web Development" 
              className="h-14 w-auto"
            />
          </div>
          <p className="text-gray-600 leading-relaxed text-center lg:text-left text-sm">
            Professional web development solutions for businesses that want to grow online. 
            Delivering results through expert craftsmanship and innovative technology.
          </p>
        </div>
        
        <div className="flex flex-col items-center lg:items-end gap-4">
          <div className="text-center lg:text-right space-y-2">
            <p className="font-semibold text-gray-900 text-sm">
              Serving businesses nationwide
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Script Pilot. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);