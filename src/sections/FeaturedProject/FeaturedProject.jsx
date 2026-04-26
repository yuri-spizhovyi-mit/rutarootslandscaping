import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import styles from "./FeaturedProject.module.css";

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function FeaturedProject() {
  const [currentProject, setCurrentProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      before: "/images/sections/projects/cards/project-01-before.webp",
      after: "/images/sections/projects/cards/project-01-after.webp",
      location: "West Kelowna, 2024",
      type: "Landscape design & installation",
      description: "This West Kelowna backyard had a steep slope, poor drainage, and no usable space. We installed a dry-stack retaining wall, levelled the lawn, and added a planted border that suits the Okanagan climate.",
      days: 4,
      featured: true,
    },
    {
      id: 2,
      before: "/images/sections/projects/cards/project-02-before.webp",
      after: "/images/sections/projects/cards/project-02-after.webp",
      location: "Peachland, 2024",
      type: "Hardscaping & patio design",
      description: "Complete patio installation with natural stone and modern landscaping design.",
      days: 5,
      featured: false,
    },
    {
      id: 3,
      before: "/images/sections/projects/cards/project-03-before.webp",
      after: "/images/sections/projects/cards/project-03-after.webp",
      location: "Kelowna, 2024",
      type: "Spring & fall cleanup",
      description: "Seasonal maintenance and garden refresh for spring renewal.",
      days: 2,
      featured: false,
    },
  ];

  const project = projects[currentProject];

  const handlePrevious = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleSliderMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((touch.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <section className={styles.featuredProject}>
      <div className={styles.container}>
        <div className="sub-heading">Project Showcase</div>
        <h2 className="heading-secondary">Recent work</h2>

        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statNumber} ${styles.statNumberAccent}`}>5★</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>On-Time Delivery</span>
          </div>
        </div>

        <div className={styles.projectContent}>
          <div className={styles.imagesWrapper}>
            {/* Before/After Slider */}
            <div
              ref={containerRef}
              className={styles.sliderContainer}
              onMouseMove={handleSliderMove}
              onTouchMove={handleTouchMove}
            >
              <div
                className={styles.beforeImage}
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <img
                  src={project.before}
                  alt="Before landscaping project"
                  className={styles.projectImage}
                />
                <div className={styles.label}>Before</div>
              </div>

              <div
                className={styles.afterImage}
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={project.after}
                  alt="After landscaping project"
                  className={styles.projectImage}
                />
                <div className={styles.label}>After</div>
              </div>

              <div
                className={styles.sliderHandle}
                style={{ left: `${sliderPosition}%` }}
              >
                <div className={styles.sliderHandleIcon}>
                  <ChevronLeftIcon />
                  <ChevronRightIcon />
                </div>
              </div>

              <div className={styles.sliderHint}>Drag to compare</div>
            </div>

            {/* Carousel Navigation */}
            {projects.length > 1 && (
              <div className={styles.carouselNav}>
                <button
                  onClick={handlePrevious}
                  className={styles.navButton}
                  aria-label="Previous project"
                >
                  <ChevronLeftIcon />
                </button>

                <div className={styles.dots}>
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${index === currentProject ? styles.active : ''}`}
                      onClick={() => setCurrentProject(index)}
                      aria-label={`Project ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className={styles.navButton}
                  aria-label="Next project"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            )}
          </div>

          <div className={styles.projectDetails}>
            <div className={styles.tags}>
              <span className={styles.tag}>{project.location}</span>
              <span className={styles.tag}>{project.type}</span>
            </div>

            <div className={styles.projectStats}>
              <div className={styles.projectStat}>
                <span className={styles.statIcon}>⏱️</span>
                <span>{project.days} days</span>
              </div>
            </div>

            <p className={styles.description}>
              {project.description}
            </p>

            <div className={styles.ctaButtons}>
              <Link to="/projects" className={styles.primaryButton}>
                View Gallery
              </Link>
              <a href="#contacts" className={styles.secondaryButton}>
                Start Your Project
              </a>
            </div>

            <div className={styles.projectCounter}>
              Project {currentProject + 1} of {projects.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
