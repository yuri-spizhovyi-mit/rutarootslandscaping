import { Link } from "react-router-dom";
import styles from "./ServicesPreview.module.css";

function ServicesPreview() {
  const services = [
    {
      id: 1,
      name: "Lawn care & maintenance",
      description: "Weekly or one-time lawn mowing, edging, fertilizing, and weed control — keeping Okanagan lawns at their best through the full season.",
      link: "/services#lawn-care",
    },
    {
      id: 2,
      name: "Landscape design & installation",
      description: "Landscape improvements designed for how you use your outdoor space and suited to the BC Interior climate. Practical planning, careful work, and attention to detail from start to finish.",
      link: "/services#landscape-design",
    },
    {
      id: 3,
      name: "Hardscaping & seasonal cleanup",
      description: "Patios, retaining walls, spring & fall cleanups — everything your yard needs beyond the lawn itself.",
      link: "/services#hardscaping",
    },
  ];

  return (
    <section className={styles.servicesPreview}>
      <div className={styles.container}>
        <div className="sub-heading">Our Services</div>
        <h2 className="heading-secondary">What we do</h2>
        <div className={styles.cardsGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.name}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <Link to={service.link} className={styles.cardLink}>
                Explore {service.name.split('&')[0].trim()} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
