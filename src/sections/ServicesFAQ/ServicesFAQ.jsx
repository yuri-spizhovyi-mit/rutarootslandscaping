import { Helmet } from 'react-helmet-async';
import Accordion from '../../ui/Accordion/Accordion';
import AccordionItem from '../../ui/Accordion/AccordionItem';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { faqItems } from '../../data/services';
import styles from './ServicesFAQ.module.css';

function ServicesFAQ() {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 30 });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <div className="sub-heading">FAQ</div>
            <h2 className="heading-secondary" ref={headingRef}>Common questions</h2>
          </div>

          <div className={styles.accordionWrapper}>
            <Accordion>
              {faqItems.map((item, index) => (
                <AccordionItem key={index} indexItem={index} title={item.question}>
                  <p className={styles.answer}>{item.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesFAQ;
