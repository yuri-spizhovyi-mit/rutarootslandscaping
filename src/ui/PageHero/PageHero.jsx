import { useRef } from 'react';
import { useParallax } from '../../hooks/useParallax';
import { useGsapAnimation } from '../../hooks/useGsapAnimation';
import { createTitleInAnimation, createSubtitleInAnimation } from '../../utils/animations/titleAnimations';
import styles from './PageHero.module.css';

const DEFAULT_BG = '/images/sections/hero/hero-1920.webp';

function PageHero({ h1, subHeading, bgImage = DEFAULT_BG }) {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const bgRef = useParallax(0.5);

  useGsapAnimation(() => {
    createTitleInAnimation(titleRef);
    if (subRef.current) createSubtitleInAnimation(subRef, 0.4);
  }, []);

  const words = h1.split(' ');

  return (
    <section className={styles.pageHero}>
      <div
        className={styles.bg}
        ref={bgRef}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h1 className={styles.heading} ref={titleRef}>
          {words.map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h1>
        {subHeading && (
          <p className={styles.subHeading} ref={subRef}>{subHeading}</p>
        )}
      </div>
    </section>
  );
}

export default PageHero;
