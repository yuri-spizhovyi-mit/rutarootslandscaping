import { useRef } from "react";
import styles from "./ContactPageHero.module.css";
import { useGsapAnimation } from "../../hooks/useGsapAnimation";
import { useParallax } from "../../hooks/useParallax";
import { createTitleInAnimation } from "../../utils/animations/titleAnimations";

function ContactPageHero() {
  const titleRef = useRef(null);
  const bgRef = useParallax(0.5);

  useGsapAnimation(() => {
    createTitleInAnimation(titleRef);
  }, []);

  return (
    <section className={styles.contactHero}>
      <div className={styles.heroBg} ref={bgRef} />
      <div className={styles.heroOverlay} />
      <div className={styles.container}>
        <h1 className={styles.heading} ref={titleRef}>
          {['Tell', 'us', 'about', 'your', 'project'].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h1>
      </div>
    </section>
  );
}

export default ContactPageHero;
