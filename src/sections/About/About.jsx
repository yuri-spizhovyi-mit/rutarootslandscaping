import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container-md">
        <span className="sub-heading mb-xs">Bringing Life to Every Leaf</span>
        <h2 className="heading-primary mb-md">
          Welcome to Ruta Roots Gardening!
        </h2>
        <p className="description-lg pl-lg">
          Ruta Roots Landscaping is a trusted provider of gardening and
          landscaping services in West Kelowna and Peachland. Our team is
          dedicated to delivering top-quality solutions, from gardening and
          planting to comprehensive landscape maintenance. We offer services
          such as large area mowing, fertilizing and weed control programs,
          seasonal cleanups, hedge trimming, tree pruning, and small tree
          removal. Our landscape installation services include design and
          consultation, removal of old landscapes, grading and site preparation,
          new sod installation, and planting with mulch or decorative rock. We
          also offer reliable snow removal services for commercial properties,
          ensuring your site is clear and safe during winter. Choose Ruta Roots
          Landscaping for all your outdoor needs, and let us help you create and
          maintain the perfect outdoor space.
        </p>
      </div>
    </section>
  );
}

export default About;
