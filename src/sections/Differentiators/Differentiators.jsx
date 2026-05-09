import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useCursorGlow } from '../../hooks/useCursorGlow';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Differentiators.module.css';

const differentiators = [
  {
    title: 'Clear, direct communication',
    body: 'You have direct communication throughout your project. You know what to expect, receive regular updates, and can reach Ruta Roots with questions anytime.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.5 2 2 0 013.62 1.34h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Insured and responsible',
    body: 'Ruta Roots carries liability insurance and operates with proper business practices. Your property is protected during all work.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Quality work, done properly',
    body: 'Ruta Roots takes proper time for preparation, execution, and finishing. That attention to detail is what makes projects last.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'We stand behind our work',
    body: "Ruta Roots is committed to completing projects you're satisfied with. Quality results are the standard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Differentiators() {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 30 });
  const containerRef = useRef(null);
  const animatedRef = useRef(false);
  useCursorGlow(containerRef, `.${styles.card}`);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2, stagger: 0.12, ease: 'power2.out', clearProps: 'transform' }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.differentiators}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className="sub-heading">Why us</div>
          <h2 className="heading-secondary" ref={headingRef}>What makes us different</h2>
        </div>

        <div className={styles.cardsGrid} ref={containerRef}>
          {differentiators.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
