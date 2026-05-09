import styles from './ThankYouConfirmation.module.css';

function ThankYouConfirmation() {
  return (
    <section className={styles.confirmation}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <svg className={styles.checkmark} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h1 className={styles.heading}>Got it — we'll be in touch soon.</h1>

        <p className={styles.body}>
          Your request has been received. Someone from our team will call you within 1 business day to talk through your project.
        </p>

        <p className={styles.body}>
          If you need to reach us sooner, <a href="tel:+12508994954" className={styles.phoneLink}>call us directly at (250) 899-4954</a>.
        </p>
      </div>
    </section>
  );
}

export default ThankYouConfirmation;
