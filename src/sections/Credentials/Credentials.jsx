import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Credentials.module.css';

const credentials = [
  {
    src: '/images/sections/about/credentials/bc-licence-logo.webp',
    alt: 'BC Business Licence',
    label: 'BC Licensed',
  },
  {
    src: '/images/sections/about/credentials/wcb-clearance-logo.webp',
    alt: 'WCB Clearance Certificate',
    label: 'WCB Clearance',
  },
  {
    src: '/images/sections/about/credentials/landscape-bc-logo.webp',
    alt: 'Landscape BC Member',
    label: 'Landscape BC',
  },
];

function Credentials() {
  const headingRef = useScrollReveal({ duration: 0.6, distance: 20 });

  return (
    <section className={styles.credentials}>
      <div className={styles.container}>
        <p className={styles.label} ref={headingRef}>
          Licensed, insured, and properly set up to work on your property
        </p>

        <div className={styles.logoRow}>
          {credentials.map((cred) => (
            <div key={cred.label} className={styles.logoItem}>
              <img
                src={cred.src}
                alt={cred.alt}
                className={styles.logo}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <span className={styles.logoFallback} style={{ display: 'none' }}>
                {cred.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
