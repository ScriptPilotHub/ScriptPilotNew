import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex items-center">
    <img
      src="/IMG_2131-Picsart-BackgroundRemover.jpeg"
      alt="Script Pilot - Web Development"
      className="h-32 sm:h-40 w-auto"
      style={{
        filter: 'grayscale(100%) contrast(1.1)',
        transition: 'filter 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'grayscale(0%) contrast(1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1)';
      }}
    />
  </div>
);
