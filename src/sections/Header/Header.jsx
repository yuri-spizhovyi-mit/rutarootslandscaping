import styles from "./Header.module.css";

import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
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

      <Navigation isNavOpen={isNavOpen} closeNav={closeNav} />

      <div className={styles.headerRight}>
        <a href="tel:+12508994954" className={styles.phone}>
          (250) 899-4954
        </a>
        <RouterLink to="/contact" className={styles.ctaButton}>
          Get in touch
        </RouterLink>
      </div>

      <Hamburger hamburgerIcon="icon-hamburger-open" onClick={openNav} />
    </header>
  );
}

export default Header;
