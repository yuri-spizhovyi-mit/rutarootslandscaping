import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './CredibilityStats.module.css';

const stats = [
  { value: '15+', label: 'Years landscaping experience' },
  { value: '3', label: 'Years serving West Kelowna' },
  { value: 'Referrals', label: 'How most new clients find us' },
  { value: 'One person', label: 'You reach me directly' },
];

function CredibilityStats() {
  const statsRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const items = statsRef.current.querySelectorAll(`.${styles.statItem}`);
          gsap.fromTo(
            items,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out', clearProps: 'transform' }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.credibilityStats}>
      <div className={styles.container}>
        <div className={styles.statsRow} ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CredibilityStats;
