import { useEffect, useState } from 'react';

export const useCountUp = (end: number, duration = 2000, start = 0, isTriggered = false) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isTriggered) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.floor(start + (end - start) * easedProgress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, start, isTriggered]);

  return count;
};
