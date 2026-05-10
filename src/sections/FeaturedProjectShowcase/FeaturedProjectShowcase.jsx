import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { featuredProject } from '../../data/projects';
import styles from './FeaturedProjectShowcase.module.css';

function FeaturedProjectShowcase() {
  const [activePhoto, setActivePhoto] = useState(0);
  const headingRef = useScrollReveal({ duration: 0.7, distance: 28 });

  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>
          <div className="sub-heading">Featured project</div>
          <h2 className="heading-secondary" ref={headingRef}>{featuredProject.title}</h2>
          <div className={styles.tags}>
            <span className={styles.tag}>{featuredProject.category}</span>
            <span className={styles.tag}>{featuredProject.location}</span>
            <span className={styles.tag}>{featuredProject.year}</span>
          </div>
        </div>

        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img
              src={featuredProject.images[activePhoto]}
              alt={`${featuredProject.title} — photo ${activePhoto + 1}`}
              className={styles.mainPhoto}
              loading="lazy"
            />
            <div className={styles.photoCounter}>
              {activePhoto + 1} / {featuredProject.images.length}
            </div>
          </div>

          <div className={styles.thumbnails}>
            {featuredProject.images.map((src, index) => (
              <button
                key={index}
                className={`${styles.thumb} ${activePhoto === index ? styles.thumbActive : ''}`}
                onClick={() => setActivePhoto(index)}
                aria-label={`View photo ${index + 1}`}
              >
                <img src={src} alt={`Thumbnail ${index + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <p className={styles.description}>{featuredProject.description}</p>
      </div>
    </section>
  );
}

export default FeaturedProjectShowcase;
