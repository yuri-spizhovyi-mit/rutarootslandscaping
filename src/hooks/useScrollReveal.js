import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useScrollReveal = ({
  duration = 0.8,
  distance = 40,
  delay = 0,
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.from(element, {
            opacity: 0,
            y: distance,
            duration,
            delay,
            ease: 'power2.out',
          });
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [duration, distance, delay]);

  return ref;
};
