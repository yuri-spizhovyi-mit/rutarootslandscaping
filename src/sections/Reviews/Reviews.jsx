import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./Reviews.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ReviewsSection() {
  const headingRef = useScrollReveal({ duration: 0.8, distance: 40, delay: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
        });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className="sub-heading">Client Testimonials</div>
        <h2 className="heading-secondary" ref={headingRef}>What clients say</h2>

        <div className={styles.reviewCard} ref={cardRef}>
          <div className={styles.stars}>★★★★★</div>

          <p className={styles.reviewText}>
            I'm very happy to find Alex at Ruta Roots Landscaping to redefine my garden issues having just moved to Kelowna in April. I recommend him for a thorough job! Well done Alex, I am glad to find you!
          </p>

          <div className={styles.reviewer}>
            <strong>Darlene S.</strong>
            <span className={styles.date}>10 months ago</span>
          </div>

          <div className={styles.viaLabel}>via Google</div>
        </div>

        <a
          href="https://www.google.com/search?q=Ruta+Roots+Landscaping"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMoreLink}
        >
          Read review on Google →
        </a>
      </div>
    </section>
  );
}

export default ReviewsSection;
