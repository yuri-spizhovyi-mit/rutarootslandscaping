import { useEffect } from 'react';

export const useCursorGlow = (containerRef, selector) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cards = container.querySelectorAll(selector);
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) / (rect.width / 2);
          const dy = (e.clientY - cy) / (rect.height / 2);
          card.style.setProperty('--shadow-x', `${dx * 12}px`);
          card.style.setProperty('--shadow-y', `${dy * 12}px`);
        });
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId);
      const cards = container.querySelectorAll(selector);
      cards.forEach((card) => {
        card.style.removeProperty('--shadow-x');
        card.style.removeProperty('--shadow-y');
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef, selector]);
};
