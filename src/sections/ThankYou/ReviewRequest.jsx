import styles from './ReviewRequest.module.css';

function ReviewRequest() {
  return (
    <section className={styles.reviewRequest}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Already worked with us?</h2>
          <p className={styles.body}>
            If you've used Ruta Roots before and had a good experience, we'd really appreciate a Google review. It takes about 2 minutes and helps other West Kelowna homeowners find us.
          </p>
          <a
            href="https://www.google.com/maps/place/Ruta+Roots+Landscaping/@49.8820454,-119.7245954,11z/data=!3m1!4b1!4m6!3m5!1s0xa9bab20c0a1bbff3:0x787b25a6a1591c16!8m2!3d49.881941!4d-119.559793!16s%2Fg%2F11wj74674r?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewLink}
          >
            Leave a Google review →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReviewRequest;
