import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useCursorGlow } from '../../hooks/useCursorGlow';
import styles from './NextSteps.module.css';

const steps = [
  {
    number: 1,
    title: 'We review your request',
    description: 'We look at the service you selected and any details you provided before we call — so we come prepared, not cold.',
  },
  {
    number: 2,
    title: 'We call you within 1 business day',
    description: 'One of our team will call you at the number you provided. We\'ll ask a few questions about the project and give you a ballpark on what to expect.',
  },
  {
    number: 3,
    title: 'We schedule a site visit if needed',
    description: 'For design, installation, and hardscaping projects, we\'ll schedule a site visit to properly assess the space before providing a written plan.',
  },
];

function NextSteps() {
  const containerRef = useRef(null);
  const animatedRef = useRef(false);
  useCursorGlow(containerRef, `.${styles.step}`);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const stepEls = containerRef.current.querySelectorAll(`.${styles.step}`);
          gsap.fromTo(
            stepEls,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.2, stagger: 0.15, ease: 'power2.out', clearProps: 'transform' }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.nextSteps}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className="sub-heading">Process</div>
          <h2 className="heading-secondary">What happens next</h2>
        </div>

        <div className={styles.stepsGrid} ref={containerRef}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.iconWrapper}>
                {step.number === 1 && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {step.number === 2 && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 3L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {step.number === 3 && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NextSteps;
