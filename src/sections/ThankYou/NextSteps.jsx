import { useRef, useEffect } from 'react';
import gsap from 'gsap';
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

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const steps = containerRef.current.querySelectorAll(`.${styles.step}`);
          gsap.from(steps, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: 0.2,
            stagger: 0.15,
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
    <section className={styles.nextSteps}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className="sub-heading">Process</div>
          <h2 className="heading-secondary">What happens next</h2>
        </div>

        <div className={styles.stepsGrid} ref={containerRef}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
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
