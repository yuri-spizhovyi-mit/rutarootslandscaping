import styles from "./TrustStrip.module.css";

function TrustStrip() {
  const credentials = [
    "15+ years landscaping experience",
    "3 years serving West Kelowna",
    "Built on repeat clients and referrals",
  ];

  return (
    <section className={styles.trustStrip}>
      <div className={styles.container}>
        <ul className={styles.credentialsList}>
          {credentials.map((credential, index) => (
            <li key={index} className={styles.credentialItem}>
              {credential}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustStrip;
