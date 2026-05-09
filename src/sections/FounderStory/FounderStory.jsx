import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './FounderStory.module.css';

function FounderStory() {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 30 });
  const contentRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const items = contentRef.current.querySelectorAll('[data-reveal]');
          gsap.fromTo(
            items,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out', clearProps: 'transform' }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.founderStory}>
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img
                src="/images/sections/about/founder/founder-portrait.webp"
                alt="Alex, founder of Ruta Roots Landscaping"
                className={styles.portrait}
                loading="lazy"
                width="400"
                height="500"
              />
            </div>
          </div>

          <div className={styles.storyCol} ref={contentRef}>
            <div data-reveal>
              <div className="sub-heading">The person behind the work</div>
              <h2 className={`heading-secondary ${styles.founderHeading}`} ref={headingRef}>
                Alex, founder
              </h2>
            </div>

            <p className={styles.storyBody} data-reveal>
              I've been working in landscaping for over 15 years. After moving to West Kelowna three years ago, I started Ruta Roots to offer a straightforward, reliable service focused on doing the job properly.
            </p>

            <p className={styles.storyBody} data-reveal>
              I handle projects directly and stay involved throughout the work on-site. This approach keeps the quality consistent and ensures that every detail is done right.
            </p>

            <p className={styles.storyBody} data-reveal>
              The goal is simple — to provide landscaping work that homeowners can rely on, with results that hold up over time.
            </p>

            <div className={styles.contactStrip} data-reveal>
              <a href="tel:+12508994954" className={styles.phoneLink}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 12 19.79 19.79 0 011.64 3.5 2 2 0 013.62 1.34h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                (250) 899-4954
              </a>
              <span className={styles.contactDivider}>·</span>
              <span className={styles.contactNote}>West Kelowna based, calls answered directly</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FounderStory;
