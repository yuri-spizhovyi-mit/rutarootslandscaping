import styles from "./Reviews.module.css";

function ReviewsSection() {
  return (
    <section className={styles.reviews}>
      <div className={styles.container}>
        <div className="sub-heading">Client Testimonials</div>
        <h2 className="heading-secondary">What clients say</h2>

        <div className={styles.reviewCard}>
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
