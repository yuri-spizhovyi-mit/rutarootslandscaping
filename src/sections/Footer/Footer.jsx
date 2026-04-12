import styles from "./Footer.module.css";

import ContactsList from "./ContactsList";

function Footer() {
  return (
    <footer className={styles.footer} id="contacts">
      <div className="container-lg">
        <ContactsList />
      </div>
    </footer>
  );
}

export default Footer;
