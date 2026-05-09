import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './MidPageCTA.module.css';

function MidPageCTA() {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 24 });

  return (
    <section className={styles.midCta}>
      <div className={styles.container}>
        <h2 className={styles.heading} ref={headingRef}>
          Not sure which service you need?
        </h2>
        <p className={styles.subHeading}>
          We'll figure it out together. Call us or send a message.
        </p>
        <div className={styles.ctaGroup}>
          <a href="tel:+12508994954" className={styles.ctaPrimary}>
            Call us — (250) 899-4954
          </a>
          <Link to="/contact" className={styles.ctaSecondary}>
            Or get in touch →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MidPageCTA;
