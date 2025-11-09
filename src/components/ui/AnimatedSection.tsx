import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const [ref, entry] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out will-change-transform ${
        entry?.isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: entry?.isIntersecting ? 'translate3d(0, 0, 0)' : 'translate3d(0, 24px, 0)'
      }}
    >
      {children}
    </div>
  );
};