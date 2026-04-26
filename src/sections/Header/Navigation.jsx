import styles from "./Navigation.module.css";

import { NAVIGATION_ITEMS } from "../../data/navigationItems";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

function Navigation({ isNavOpen, closeNav }) {
  const navigationState = isNavOpen ? styles.openNav : styles.closeNav;

  return (
    <nav className={`${styles.navigation} ${navigationState}`}>
      <Hamburger
        className={styles.navCloseButton}
        onClick={closeNav}
        hamburgerIcon="icon-hamburger-close"
      />
      <ul className={styles.navigationList}>
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={styles.navigationLink}
                onClick={closeNav}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
