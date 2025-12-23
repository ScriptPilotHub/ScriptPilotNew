import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export const AnimatedButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  style = {},
  target,
  rel,
}: AnimatedButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    onClick?.();
  };

  const baseStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    fontSize: '13px',
    letterSpacing: '0.05em',
    padding: '16px 32px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    ...style,
  };

  const primaryStyle: React.CSSProperties = {
    color: '#F5F7FA',
    backgroundColor: '#5B6CFF',
  };

  const secondaryStyle: React.CSSProperties = {
    color: '#F5F7FA',
    outline: '2px solid #2A2F3A',
    backgroundColor: 'transparent',
  };

  const combinedStyle = {
    ...baseStyle,
    ...(variant === 'primary' ? primaryStyle : secondaryStyle),
  };

  const MotionComponent = motion(href ? 'a' : 'button');

  return (
    <MotionComponent
      className={className}
      style={combinedStyle}
      onClick={handleClick}
      href={href}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            pointerEvents: 'none',
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </MotionComponent>
  );
};
