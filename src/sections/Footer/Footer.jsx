import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { NAVIGATION_ITEMS } from "../../data/navigationItems";

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
            <p className={styles.serviceArea}>
              Serving West Kelowna · Kelowna · Peachland · Lake Country
            </p>
          </div>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.contactColumn}>
            <h3 className={styles.columnTitle}>Get in Touch</h3>
            <a href="tel:+12508994954" className={styles.contactLink}>
              (250) 899-4954
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
              >
                Facebook
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
