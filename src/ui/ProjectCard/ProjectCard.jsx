import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageRow}>
        <div className={styles.imageHalf}>
          <img
            src={project.beforeImage}
            alt={`Before — ${project.title}`}
            className={styles.photo}
            loading="lazy"
          />
          <span className={styles.photoLabel}>Before</span>
        </div>
        <div className={styles.imageHalf}>
          <img
            src={project.afterImage}
            alt={`After — ${project.title}`}
            className={styles.photo}
            loading="lazy"
          />
          <span className={styles.photoLabel}>After</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          <span className={styles.tag}>{project.categoryLabel}</span>
          <span className={styles.tag}>{project.location}</span>
          <span className={styles.tag}>{project.year}</span>
        </div>

        <h3 className={styles.title}>{project.title}</h3>

        <p className={styles.outcome}>{project.outcome}</p>

        <Link to={`/contact?service=${project.category}`} className={styles.microCta}>
          Want results like this? Get a quote →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
