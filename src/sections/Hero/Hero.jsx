import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Hero.module.css";
import { useGsapAnimation } from '../../hooks/useGsapAnimation';
import { useParallax } from '../../hooks/useParallax';
import { createTitleInAnimation } from '../../utils/animations/titleAnimations';
import ScrollChevron from '../../ui/ScrollChevron/ScrollChevron';

function Hero() {
  const titleRef = useRef(null);
  const bgRef = useParallax(0.5);

  useGsapAnimation(() => {
    createTitleInAnimation(titleRef);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg} ref={bgRef} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading} ref={titleRef}>
          <span>Gardening</span>
          <span>&</span>
          <span>Landscaping</span>
        </h1>
        <p className={styles.heroSubheading}>
          Lawn care, landscape design & seasonal cleanup — serving West Kelowna, Kelowna & surrounding areas
        </p>
        <div className={styles.heroCtaGroup}>
          <Link to="/contact" className={styles.heroCTAPrimary}>
            Get in touch
          </Link>
          <a href="tel:+12508994954" className={styles.heroCTASecondary}>
            Call us now — (250) 899-4954
          </a>
        </div>
      </div>

      <ScrollChevron />
    </section>
  );
}

export default Hero;
