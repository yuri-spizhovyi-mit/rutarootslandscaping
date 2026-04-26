import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./ServicesPreview.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function ServicesPreview() {
  const headingRef = useScrollReveal({ duration: 0.8, distance: 40, delay: 0 });
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll(`.${styles.card}`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.15,
          ease: 'power2.out',
        });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(cardsContainerRef.current);
    return () => observer.disconnect();
  }, []);

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
        <h2 className="heading-secondary" ref={headingRef}>What we do</h2>
        <div className={styles.cardsGrid} ref={cardsContainerRef}>
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
