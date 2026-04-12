import styles from "./Header.module.css";

import { useState } from "react";
import { Link } from "react-scroll";

import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const closeNav = () => setNavOpen(false);
  const openNav = () => setNavOpen(true);

  return (
    <header className={styles.header}>
      <Link to="hero" duration={250} spy={true} href="#hero-section">
        <img
          src="/images/logotype/logo.png"
          className={styles.logotype}
          alt="Ruta Roots logo"
        />
      </Link>

      <Navigation isNavOpen={isNavOpen} closeNav={closeNav} />

      <Hamburger hamburgerIcon="icon-hamburger-open" onClick={openNav} />
    </header>
  );
}

export default Header;
