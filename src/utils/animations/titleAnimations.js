import gsap from 'gsap';

export const createTitleInAnimation = (containerRef, staggerDelay = 0.12) => {
  if (!containerRef.current) return;

  const spans = containerRef.current.querySelectorAll('span');

  gsap.fromTo(
    spans,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: 'power3.out',
    }
  );
};

export const createSubtitleInAnimation = (elementRef, delay = 0.3) => {
  if (!elementRef.current) return;

  gsap.fromTo(
    elementRef.current,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    }
  );
};
