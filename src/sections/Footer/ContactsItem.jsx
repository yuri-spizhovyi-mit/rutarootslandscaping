import styles from "./ContactsItem.module.css";

import { isPhoneOrEmail } from "../../utils/helpers";

import Icon from "../../ui/Icon/Icon";

function ContactsItem({ contact }) {
  return (
    <li className={styles.contactsItem}>
      <Icon size="tertiary" name={contact.icon} />

      {isPhoneOrEmail(contact.href) ? (
        <a href={contact.href} className={styles.contactsLink}>
          {contact.title}
        </a>
      ) : (
        <a
          href={contact.href}
          className={styles.contactsLink}
          target="_blank"
          rel="noreferrer"
        >
          {contact.title}
        </a>
      )}
    </li>
  );
}

export default ContactsItem;
