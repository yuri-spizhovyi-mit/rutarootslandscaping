import { Link } from "react-router-dom";
import styles from "./FeaturedProject.module.css";

function FeaturedProject() {
  return (
    <section className={styles.featuredProject}>
      <div className={styles.container}>
        <div className="sub-heading">Project Showcase</div>
        <h2 className="heading-secondary">Recent work</h2>

        <div className={styles.projectContent}>
          <div className={styles.imagesWrapper}>
            <div className={styles.imageColumn}>
              <div className={styles.label}>Before</div>
              <img
                src="/images/sections/projects/cards/project-01-before.webp"
                alt="Before landscaping project"
                className={styles.projectImage}
              />
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.label}>After</div>
              <img
                src="/images/sections/projects/cards/project-01-after.webp"
                alt="After landscaping project"
                className={styles.projectImage}
              />
            </div>
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.tags}>
              <span className={styles.tag}>West Kelowna, 2024</span>
              <span className={styles.tag}>Landscape design & installation</span>
            </div>

            <p className={styles.description}>
              This West Kelowna backyard had a steep slope, poor drainage, and no usable space. We installed a dry-stack retaining wall, levelled the lawn, and added a planted border that suits the Okanagan climate. The project took four days from start to finish.
            </p>

            <Link to="/projects" className={styles.seeAllLink}>
              See all projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
