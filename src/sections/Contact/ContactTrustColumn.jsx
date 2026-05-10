import styles from "./ContactTrustColumn.module.css";

function ContactTrustColumn() {
  return (
    <div className={styles.trustColumn}>
      <div className={styles.card}>
        <div className={styles.phoneBlock}>
          <div className={styles.phoneLabel}>Prefer to talk? Call us now</div>
          <a href="tel:+12508994954" className={styles.phoneNumber}>
            (250) 899-4954
          </a>
          <div className={styles.hours}>Mon–Fri 8am–6pm · West Kelowna, BC</div>
        </div>

        <div className={styles.divider} />

        <div className={styles.serviceArea}>
          <div className={styles.serviceAreaLabel}>Serving:</div>
          <div className="description-sm">
            West Kelowna · Kelowna
            <br />
            Peachland · Lake Country
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTrustColumn;
