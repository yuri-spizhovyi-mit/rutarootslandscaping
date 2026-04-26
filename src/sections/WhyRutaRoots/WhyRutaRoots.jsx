import { useRef, useEffect } from "react";
import gsap from "gsap";
import styles from "./WhyRutaRoots.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";

function WhyRutaRoots() {
  const headingRef = useScrollReveal({ duration: 0.8, distance: 40, delay: 0 });
  const blocksContainerRef = useRef(null);

  useEffect(() => {
    if (!blocksContainerRef.current) return;

    const blocks = blocksContainerRef.current.querySelectorAll(`.${styles.block}`);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.from(blocks, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.12,
          ease: 'power2.out',
        });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(blocksContainerRef.current);
    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      id: 1,
      title: "Clear communication throughout the project",
      description: "You have direct communication from start to finish and know what to expect every step of the way.",
    },
    {
      id: 2,
      title: "Properly insured and responsible",
      description: "Ruta Roots carries liability insurance and operates with proper business practices that protect your property.",
    },
    {
      id: 3,
      title: "Focus on doing the job right",
      description: "Work is done properly with proper preparation, careful execution, and attention to detail that makes projects last.",
    },
    {
      id: 4,
      title: "Reliable from start to finish",
      description: "You can count on consistent service, follow-through, and commitment to completing projects you're satisfied with.",
    },
  ];

  return (
    <section className={styles.whyRutaRoots}>
      <div className={styles.container}>
        <div className="sub-heading">Why Choose Us</div>
        <h2 className="heading-secondary" ref={headingRef}>Why homeowners choose Ruta Roots</h2>

        <div className={styles.grid} ref={blocksContainerRef}>
          {differentiators.map((diff) => (
            <div key={diff.id} className={styles.block}>
              <h3 className={styles.blockTitle}>{diff.title}</h3>
              <p className={styles.blockDescription}>{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRutaRoots;
