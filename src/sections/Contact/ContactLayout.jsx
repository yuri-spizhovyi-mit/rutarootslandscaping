import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import QuoteForm from "../../ui/QuoteForm/QuoteForm";
import ContactTrustColumn from "./ContactTrustColumn";
import styles from "./ContactLayout.module.css";

function ContactLayout() {
  const headingRef = useScrollReveal({ duration: 0.8, distance: 40 });

  return (
    <section className={styles.contactLayout}>
      <div className={styles.container}>
        <div className="sub-heading">Get Your Free Quote</div>
        <h2 className="heading-secondary" ref={headingRef}>
          Let's discuss your project
        </h2>

        <div className={styles.grid}>
          <div className={styles.formColumn}>
            <QuoteForm />
          </div>

          <div className={styles.trustColumn}>
            <ContactTrustColumn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactLayout;
