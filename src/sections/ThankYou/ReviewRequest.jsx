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
          href="https://www.google.com/maps/place/Ruta+Roots+Landscaping/@49.8820454,-119.7245954,11z/data=!3m1!4b1!4m6!3m5!1s0xa9bab20c0a1bbff3:0x787b25a6a1"
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
