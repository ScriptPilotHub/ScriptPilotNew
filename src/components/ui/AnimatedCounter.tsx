import { useCountUp } from '../../hooks/useCountUp';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0
}: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollReveal(0.3);
  const count = useCountUp(end, duration, 0, isVisible);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : count;

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};
