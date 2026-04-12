import styles from "./Services.module.css";

import { LANDSCAPING_SERVICES } from "../../data/landscapingServices";

import Accordion from "../../ui/Accordion/Accordion";
import AccordionItem from "../../ui/Accordion/AccordionItem";

import Picture from "../../ui/Picture/Picture";
import FacebookSticker from "./FacebookSticker";

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container-lg grid grid--2-cols">
        <div className={styles.servicesImageContainer}>
          <Picture
            mediaSizes={[480]}
            srcSets={[
              "/images/sections/services/480/kelowna_landscaping_gardening_services.webp",
              "/images/sections/services/768/kelowna_landscaping_gardening_services.webp",
            ]}
            className={styles.servicesImage}
            alt="Ruta Roots Services Preview"
          />

          <FacebookSticker />
        </div>

        <div>
          <span className="sub-heading mb-xs">Services</span>
          <h3 className="heading-secondary mb-md">What we offer</h3>

          <Accordion>
            {LANDSCAPING_SERVICES.map((service, index) => {
              return (
                <AccordionItem
                  title={service.title}
                  indexItem={index}
                  key={service.id}
                >
                  <ul>
                    {service.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Services;
