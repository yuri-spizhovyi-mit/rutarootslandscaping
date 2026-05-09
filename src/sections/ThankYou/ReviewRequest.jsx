import styles from './ReviewRequest.module.css';

function ReviewRequest() {
  return (
    <section className={styles.reviewRequest}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Already worked with us?</h2>
        <p className={styles.body}>
          If you've used Ruta Roots before and had a good experience, we'd really appreciate a Google review. It takes about 2 minutes and helps other West Kelowna homeowners find us.
        </p>
        <a
          href="https://www.google.com/maps/place/Ruta+Roots+Landscaping"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.reviewLink}
        >
          Leave a Google review →
        </a>
      </div>
    </section>
  );
}

export default ReviewRequest;
