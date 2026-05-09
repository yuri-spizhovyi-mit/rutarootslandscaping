import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './BottomCTA.module.css';

function BottomCTA({
  heading = 'Ready to work with someone reliable?',
  subHeading = 'Get in touch to discuss your project. Same-day response, no pressure.',
  primaryLabel = 'Get in touch',
  primaryLink = '/contact',
  secondaryLabel = 'Or call us directly — (250) 899-4954',
  secondaryHref = 'tel:+12508994954',
}) {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 24 });

  return (
    <section className={styles.bottomCta}>
      <div className={styles.container}>
        <h2 className={styles.heading} ref={headingRef}>{heading}</h2>
        <p className={styles.subHeading}>{subHeading}</p>
        <div className={styles.ctaGroup}>
          <Link to={primaryLink} className={styles.ctaPrimary}>{primaryLabel}</Link>
          <a href={secondaryHref} className={styles.ctaSecondary}>{secondaryLabel}</a>
        </div>
      </div>
    </section>
  );
}

export default BottomCTA;
