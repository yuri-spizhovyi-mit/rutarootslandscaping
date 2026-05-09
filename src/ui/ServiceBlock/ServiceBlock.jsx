import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './ServiceBlock.module.css';

function ServiceBlock({ service, altBg = false }) {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 30 });
  const contentRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const items = contentRef.current.querySelectorAll('[data-reveal]');
          gsap.fromTo(
            items,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out', clearProps: 'transform' }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const isImageRight = service.imageRight;

  return (
    <section
      id={service.anchor}
      className={`${styles.block} ${altBg ? styles.blockAlt : ''}`}
    >
      <div className={styles.container}>
        <div className={`${styles.blockGrid} ${isImageRight ? styles.blockImageRight : styles.blockImageLeft}`}>

          <div className={styles.contentSide} ref={contentRef}>
            <div data-reveal>
              <div className="sub-heading">{service.label}</div>
              <h2 className={`heading-secondary ${styles.serviceHeading}`} ref={headingRef}>
                {service.h2}
              </h2>
            </div>

            <p className={styles.description} data-reveal>{service.description}</p>

            {service.okanaganNote && (
              <div className={styles.okanaganCallout} data-reveal>
                <div className={styles.okanaganIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 12H12V16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className={styles.okanaganText}>{service.okanaganNote}</p>
              </div>
            )}

            {service.processSteps && (
              <div className={styles.processSteps} data-reveal>
                {service.processSteps.map((step) => (
                  <div key={step.step} className={styles.processStep}>
                    <div className={styles.processStepNum}>{step.step}</div>
                    <div className={styles.processStepContent}>
                      <h4 className={styles.processStepTitle}>{step.title}</h4>
                      <p className={styles.processStepBody}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {service.urgencyNote && (
              <div className={styles.urgencyBadge} data-reveal>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {service.urgencyNote}
              </div>
            )}

            {service.splitInclusions ? (
              <div className={styles.splitInclusions} data-reveal>
                <div className={styles.splitColumn}>
                  <h4 className={styles.splitColumnTitle}>Spring cleanup</h4>
                  <ul className={styles.inclusionsList}>
                    {service.splitInclusions.spring.map((item, i) => (
                      <li key={i} className={styles.inclusionItem}>
                        <span className={styles.checkIcon}>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.splitColumn}>
                  <h4 className={styles.splitColumnTitle}>Fall cleanup</h4>
                  <ul className={styles.inclusionsList}>
                    {service.splitInclusions.fall.map((item, i) => (
                      <li key={i} className={styles.inclusionItem}>
                        <span className={styles.checkIcon}>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              service.inclusions && (
                <ul className={styles.inclusionsList} data-reveal>
                  {service.inclusions.map((item, i) => (
                    <li key={i} className={styles.inclusionItem}>
                      <span className={styles.checkIcon}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )
            )}

            {service.reassuranceItems && (
              <div className={styles.reassuranceBar} data-reveal>
                {service.reassuranceItems.map((item, i) => (
                  <div key={i} className={styles.reassuranceItem}>
                    <span className={styles.reassuranceLabel}>{item.label}</span>
                    <span className={styles.reassuranceSublabel}>{item.sublabel}</span>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.ctaRow} data-reveal>
              <Link to={service.ctaLink} className={styles.ctaButton}>
                {service.ctaLabel} →
              </Link>
              {service.upsellNote && (
                <p className={styles.upsellNote}>{service.upsellNote}</p>
              )}
            </div>
          </div>

          <div className={styles.imageSide}>
            <div className={styles.imageWrapper}>
              <picture>
                <source media="(max-width: 768px)" srcSet={service.imageMobile} />
                <img
                  src={service.imageDesktop}
                  alt={service.imageAlt}
                  className={styles.serviceImage}
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </picture>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServiceBlock;
