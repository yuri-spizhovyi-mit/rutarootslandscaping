import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import styles from './PostSubmitEngagement.module.css';

const engagementLinks = [
  {
    title: 'See our recent work',
    description: 'Browse before & after photos from completed projects in West Kelowna and Kelowna.',
    cta: 'View projects →',
    link: '/projects',
    isExternal: false,
  },
  {
    title: 'Read what our clients say',
    description: 'See why West Kelowna homeowners keep coming back to Ruta Roots.',
    cta: 'Read reviews →',
    link: '/about',
    isExternal: false,
  },
  {
    title: 'Follow us on Facebook',
    description: 'See work-in-progress photos, seasonal tips, and project reveals.',
    cta: 'Follow Ruta Roots →',
    link: 'https://www.facebook.com/profile.php?id=61566799927246',
    isExternal: true,
  },
];

function PostSubmitEngagement() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
          gsap.from(cards, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: 0.2,
            stagger: 0.12,
            ease: 'power2.out',
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.engagement}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className="sub-heading">Keep Going</div>
          <h2 className="heading-secondary">While you wait</h2>
        </div>

        <div className={styles.cardsGrid} ref={containerRef}>
          {engagementLinks.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              {item.isExternal ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                  {item.cta}
                </a>
              ) : (
                <Link to={item.link} className={styles.cardLink}>
                  {item.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostSubmitEngagement;
