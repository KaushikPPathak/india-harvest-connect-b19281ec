import { useState, useEffect, useRef, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

/**
 * Custom hook for animated count-up effect triggered by intersection observer
 */
export const useCountUp = ({
  end,
  duration = 2000,
  start = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const animate = useCallback(() => {
    if (hasAnimated) return;
    
    setHasAnimated(true);
    const startTime = performance.now();
    const diff = end - start;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + diff * easeOutQuart;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start, hasAnimated]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animate]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, displayValue, count };
};

export default useCountUp;
