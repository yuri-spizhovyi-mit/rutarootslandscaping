import { useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

import { NAVIGATION_ITEMS } from "../../data/navigationItems";
import { Link } from "react-router-dom";

import Hamburger from "./Hamburger";

function Navigation({ isNavOpen, closeNav }) {
  const location = useLocation();
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
          const isActive = location.pathname === item.path;
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`${styles.navigationLink} ${isActive ? styles.navigationLinkActive : ""}`}
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
