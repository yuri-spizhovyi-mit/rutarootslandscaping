import { useEffect, useRef } from "react";
import styles from "./TrustStrip.module.css";

function TrustStrip() {
  const credentials = [
    { stat: "15+", label: "years of landscaping experience" },
    { stat: "3", label: "years serving West Kelowna" },
    { stat: "5★", label: "built on referrals & repeat clients" },
  ];

  const listRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const listEl = listRef.current;
    if (!listEl || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;
          const statElements = listEl.querySelectorAll(`.${styles.stat}`);

          statElements.forEach((el, index) => {
            const text = credentials[index].stat;
            const isNumeric = /^\d+/.test(text);

            if (isNumeric) {
              const targetNum = parseInt(text);
              const suffix = text.replace(/^\d+/, "");
              animateCountUp(el, targetNum, suffix);
            } else {
              animateStarPop(el);
            }
          });

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(listEl);
    return () => observer.disconnect();
  }, []);

  const animateCountUp = (el, target, suffix, duration = 1200) => {
    const start = performance.now();
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };

  const animateStarPop = (el) => {
    el.style.animation = "starPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
  };

  return (
    <section className={styles.trustStrip}>
      <div className={styles.container}>
        <ul className={styles.credentialsList} ref={listRef}>
          {credentials.map((cred, index) => (
            <li key={index} className={styles.credentialItem}>
              <div className={styles.stat}>{cred.stat}</div>
              <div className={styles.label}>{cred.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustStrip;
