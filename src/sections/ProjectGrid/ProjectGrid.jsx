import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './ProjectGrid.module.css';

function ProjectGrid({ activeFilter }) {
  const gridRef = useRef(null);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('article');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'transform' }
    );
  }, [activeFilter]);

  return (
    <section className={styles.projectGrid}>
      <div className={styles.container}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>No projects in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className={styles.grid} ref={gridRef}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectGrid;
