import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactPageHero.module.css";
import { useGsapAnimation } from "../../hooks/useGsapAnimation";
import { createTitleInAnimation } from "../../utils/animations/titleAnimations";

function ContactPageHero() {
  const titleRef = useRef(null);

  useGsapAnimation(() => {
    createTitleInAnimation(titleRef);
  }, []);

  return (
    <section className={styles.contactHero}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span> → </span>
          <span>Contact</span>
        </div>

        <h1 className={styles.heading} ref={titleRef}>
          <span>Tell us about</span>
          <span>your project</span>
        </h1>

        <p className={styles.subheading}>
          Reach out to discuss your landscaping needs. We respond within 1
          business day.
        </p>
      </div>
    </section>
  );
}

export default ContactPageHero;
