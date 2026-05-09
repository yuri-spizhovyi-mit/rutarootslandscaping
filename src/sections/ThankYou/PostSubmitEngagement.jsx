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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Read what our clients say',
    description: 'See why West Kelowna homeowners keep coming back to Ruta Roots.',
    cta: 'Read reviews →',
    link: '/about',
    isExternal: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Follow us on Facebook',
    description: 'See work-in-progress photos, seasonal tips, and project reveals.',
    cta: 'Follow Ruta Roots →',
    link: 'https://www.facebook.com/profile.php?id=61566799927246',
    isExternal: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
              <div className={styles.iconWrapper}>{item.icon}</div>
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
