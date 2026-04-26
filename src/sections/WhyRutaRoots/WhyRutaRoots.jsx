import styles from "./WhyRutaRoots.module.css";

function WhyRutaRoots() {
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
        <h2 className="heading-secondary">Why homeowners choose Ruta Roots</h2>

        <div className={styles.grid}>
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
