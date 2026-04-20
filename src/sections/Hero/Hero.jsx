import { useRef } from 'react';
import styles from "./Hero.module.css";
import { useGsapAnimation } from '../../hooks/useGsapAnimation';
import { createTitleInAnimation } from '../../utils/animations/titleAnimations';

function Hero() {
  const titleRef = useRef(null);

  useGsapAnimation(() => {
    createTitleInAnimation(titleRef);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.heroHeading} ref={titleRef}>
        <span>Gardening</span>
        <span>&</span>
        <span>Landscaping</span>
      </h1>
    </section>
  );
}

export default Hero;
