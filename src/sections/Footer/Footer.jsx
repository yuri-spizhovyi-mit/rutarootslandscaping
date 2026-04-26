import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { NAVIGATION_ITEMS } from "../../data/navigationItems";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.162c2.718 0 3.04.01 4.111.06 1.063.049 1.718.218 2.12.37.533.207.912.485 1.313.885.4.4.678.78.885 1.313.152.402.321 1.057.37 2.12.05 1.071.06 1.393.06 4.111s-.01 3.04-.06 4.111c-.049 1.063-.218 1.718-.37 2.12-.207.533-.485.912-.885 1.313-.4.4-.78.678-1.313.885-.402.152-1.057.321-2.12.37-1.071.05-1.393.06-4.111.06s-3.04-.01-4.111-.06c-1.063-.049-1.718-.218-2.12-.37-.533-.207-.912-.485-1.313-.885-.4-.4-.678-.78-.885-1.313-.152-.402-.321-1.057-.37-2.12-.05-1.071-.06-1.393-.06-4.111s.01-3.04.06-4.111c.049-1.063.218-1.718.37-2.12.207-.533.485-.912.885-1.313.4-.4.78-.678 1.313-.885.402-.152 1.057-.321 2.12-.37 1.071-.05 1.393-.06 4.111-.06z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.column}>
            <img
              src="/images/logotype/logo.png"
              alt="Ruta Roots logo"
              className={styles.logo}
            />
            <p className={styles.tagline}>West Kelowna's local landscaping crew</p>

            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <CheckIcon />
                <span>Insured & Licensed</span>
              </div>
              <div className={styles.badge}>
                <span>5★ Rated</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <nav className={styles.navLinks}>
              {NAVIGATION_ITEMS.map((item) => (
                <Link key={item.id} to={item.path} className={styles.navLink}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Service Area</h3>
            <div className={styles.serviceAreaBadges}>
              {["West Kelowna", "Kelowna", "Peachland", "Lake Country"].map((area) => (
                <span key={area} className={styles.areaBadge}>{area}</span>
              ))}
            </div>

            <h3 className={styles.columnTitle} style={{ marginTop: '2.4rem' }}>Business Hours</h3>
            <p className={styles.businessHours}>
              Mon - Fri: 8:00am - 6:00pm<br />
              Sat: 9:00am - 5:00pm<br />
              Sun: Closed
            </p>
          </div>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Get in Touch</h3>
            <a href="tel:+12508994954" className={styles.callButton}>
              <PhoneIcon />
              <span>(250) 899-4954</span>
            </a>
            <a href="mailto:rutarootslandscaping@gmail.com" className={styles.contactLink}>
              rutarootslandscaping@gmail.com
            </a>
          </div>

          <div className={styles.socialColumn}>
            <h3 className={styles.columnTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=61566799927246"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Ruta Roots Landscaping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
