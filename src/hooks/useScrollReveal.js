import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useScrollReveal = (options = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    distance = 30,
    opacity = 0,
    stagger = 0,
    once = true,
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.from(element, {
          opacity,
          y: distance,
          duration,
          delay,
          ease: 'power2.out',
          stagger,
        });

        if (once) {
          observer.unobserve(element);
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [duration, delay, distance, opacity, stagger, once]);

  return ref;
};
