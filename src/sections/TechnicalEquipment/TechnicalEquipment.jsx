import styles from "./TechnicalEquipment.module.css";

function TechnicalEquipment() {
  return (
    <section className={styles.techSetup}>
      <div className="container-md">
        <span className="sub-heading mb-xs">Equipment</span>
        <h2 className="heading-primary mb-md">Our Landscaping Equipment</h2>
        <p className="description-lg pl-lg">
          At Ruta Roots Landscaping, we are fully equipped to handle a wide
          range of landscaping and maintenance projects. Our equipment features
          mowers for large areas, hedge trimmers, tree pruning tools, and all
          the necessary tools for fertilizing, weed control, and seasonal
          cleanups. We also have grading tools, sod installation equipment, and
          specialized machinery for snow removal, ensuring we can meet your
          landscaping and maintenance needs year-round.
        </p>
      </div>
    </section>
  );
}

export default TechnicalEquipment;
