import styles from "./Navigation.module.css";

import { NAVIGATION_ITEMS } from "../../data/navigationItems";
import { Link } from "react-scroll";

import Hamburger from "./Hamburger";

function Navigation({ isNavOpen, closeNav }) {
  const navigationState = isNavOpen ? styles.openNav : styles.closeNav;

  return (
    <nav className={`${styles.navigation} ${navigationState}`}>
      <Hamburger
        className="mb-md"
        onClick={closeNav}
        hamburgerIcon="icon-hamburger-close"
      />
      <ul className={styles.navigationList}>
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <li key={item.id}>
              <Link
                duration={250}
                spy={true}
                to={item.scrollTo}
                className={styles.navigationLink}
                onClick={closeNav}
                href={`#${item.scrollTo}-section`}
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
