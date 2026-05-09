import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import styles from './PageHero.module.css';

function PageHero({ h1, subHeading, breadcrumbs }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const elements = heroRef.current.querySelectorAll('[data-animate]');
    gsap.fromTo(
      elements,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className={styles.pageHero} ref={heroRef}>
      <div className={styles.container}>
        {breadcrumbs && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb" data-animate>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className={styles.crumbWrapper}>
                {index > 0 && <span className={styles.separator}>›</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className={styles.crumbLink}>{crumb.label}</Link>
                ) : (
                  <span className={styles.crumbCurrent}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className={styles.heading} data-animate>{h1}</h1>
        {subHeading && <p className={styles.subHeading} data-animate>{subHeading}</p>}
      </div>
    </section>
  );
}

export default PageHero;
