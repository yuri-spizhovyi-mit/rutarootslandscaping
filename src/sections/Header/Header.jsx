import styles from "./Header.module.css";

import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const closeNav = () => setNavOpen(false);
  const openNav = () => setNavOpen(true);

  return (
    <header className={styles.header}>
      <RouterLink to="/" className={styles.logoLink}>
        <img
          src="/images/logotype/logo.png"
          className={styles.logotype}
          alt="Ruta Roots logo"
        />
      </RouterLink>

      {!isContactPage && <Navigation isNavOpen={isNavOpen} closeNav={closeNav} />}

      <div className={styles.headerRight}>
        <a href="tel:+12508994954" className={styles.phone}>
          (250) 899-4954
        </a>
        {!isContactPage && (
          <RouterLink to="/contact" className={styles.ctaButton}>
            Get in touch
          </RouterLink>
        )}
      </div>

      {!isContactPage && <Hamburger hamburgerIcon="icon-hamburger-open" onClick={openNav} />}
    </header>
  );
}

export default Header;
