import styles from "./ContactsList.module.css";

import { FOOTER_CONTACTS_LINKS } from "../../data/footerContactsLinks";

import ContactsItem from "./ContactsItem";

function ContactsList() {
  return (
    <ul className={styles.contactsList}>
      {FOOTER_CONTACTS_LINKS.map((contact) => {
        return <ContactsItem contact={contact} key={contact.title} />;
      })}
    </ul>
  );
}

export default ContactsList;
