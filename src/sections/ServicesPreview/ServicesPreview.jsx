import { Link } from "react-router-dom";
import { useRef } from "react";
import styles from "./ServicesPreview.module.css";
import { useCursorGlow } from "../../hooks/useCursorGlow";

const LawnmowerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="8" width="20" height="10" rx="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M12 8V4" />
  </svg>
);

const LandscapeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h18M3 17h18M6 7l3-3 3 3 3-3 3 3 3-3" />
    <circle cx="7" cy="11" r="1" />
    <circle cx="17" cy="13" r="1" />
  </svg>
);

const HardscapeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="5" height="5" />
    <rect x="11" y="6" width="5" height="5" />
    <rect x="16" y="6" width="5" height="5" />
    <rect x="3" y="14" width="5" height="5" />
    <rect x="11" y="14" width="5" height="5" />
    <rect x="16" y="14" width="5" height="5" />
  </svg>
);

function ServicesPreview() {
  const cardsGridRef = useRef(null);
  useCursorGlow(cardsGridRef, `.${styles.card}`);

  const services = [
    {
      id: 1,
      icon: <LawnmowerIcon />,
      name: "Lawn care & maintenance",
      description: "Weekly or one-time lawn mowing, edging, fertilizing, and weed control — keeping Okanagan lawns at their best through the full season.",
      link: "/services#lawn-care",
    },
    {
      id: 2,
      icon: <LandscapeIcon />,
      name: "Landscape design & installation",
      description: "Landscape improvements designed for how you use your outdoor space and suited to the BC Interior climate. Practical planning, careful work, and attention to detail from start to finish.",
      link: "/services#landscape-design",
    },
    {
      id: 3,
      icon: <HardscapeIcon />,
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
        <div className={styles.cardsGrid} ref={cardsGridRef}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>{service.icon}</div>
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
