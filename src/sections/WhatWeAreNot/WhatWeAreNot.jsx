import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './WhatWeAreNot.module.css';

function WhatWeAreNot() {
  const headingRef = useScrollReveal({ duration: 0.7, distance: 24 });
  const blockRef = useScrollReveal({ duration: 0.7, distance: 20, delay: 0.15 });

  return (
    <section className={styles.whatWeAreNot}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.headingCol}>
            <div className="sub-heading">Honest fit</div>
            <h2 className={`heading-secondary ${styles.sectionHeading}`} ref={headingRef}>
              What we're not
            </h2>
          </div>

          <div className={styles.contentCol} ref={blockRef}>
            <p className={styles.body}>
              Ruta Roots is built around doing the work properly — with consistent quality, clear communication, and follow-through from start to finish.
            </p>
            <p className={styles.body}>
              This isn't a high-volume operation where projects are rushed or handed off without oversight. Each job is approached with attention to detail and a focus on long-term results.
            </p>
            <p className={styles.body}>
              If you're looking for a straightforward process, reliable communication, and work that's done right the first time, we're a good fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeAreNot;
