import styles from "./Hamburger.module.css";

import Icon from "../../ui/Icon/Icon";

function Hamburger({ hamburgerIcon = "", onClick = null, className = "" }) {
  const classField = className
    ? `${styles.hamburger} ${className}`
    : styles.hamburger;

  return (
    <button
      className={classField}
      onClick={onClick}
      aria-label="Hamburger menu"
    >
      <Icon name={hamburgerIcon} />
    </button>
  );
}

export default Hamburger;
