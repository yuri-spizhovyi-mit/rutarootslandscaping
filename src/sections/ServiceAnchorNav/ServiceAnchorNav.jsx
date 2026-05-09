import { useState, useEffect } from 'react';
import styles from './ServiceAnchorNav.module.css';

const navItems = [
  { label: 'Lawn care', anchor: 'lawn-care' },
  { label: 'Landscape design', anchor: 'landscape-design' },
  { label: 'Hardscaping', anchor: 'hardscaping' },
  { label: 'Seasonal cleanup', anchor: 'seasonal-cleanup' },
  { label: 'Irrigation', anchor: 'irrigation' },
];

function ServiceAnchorNav() {
  const [activeAnchor, setActiveAnchor] = useState('lawn-care');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveAnchor(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    navItems.forEach(({ anchor }) => {
      const el = document.getElementById(anchor);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, anchor) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.anchorNav} aria-label="Services navigation">
      <div className={styles.container}>
        <div className={styles.pills}>
          {navItems.map(({ label, anchor }) => (
            <a
              key={anchor}
              href={`#${anchor}`}
              onClick={(e) => handleClick(e, anchor)}
              className={`${styles.pill} ${activeAnchor === anchor ? styles.pillActive : ''}`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default ServiceAnchorNav;
