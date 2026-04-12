import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.heroHeading}>
        <span>Gardening</span>
        <span>&</span>
        <span>Landscaping</span>
      </h1>
    </section>
  );
}

export default Hero;
