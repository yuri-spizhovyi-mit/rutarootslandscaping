import { filterCategories, projects } from '../../data/projects';
import styles from './ProjectFilterBar.module.css';

function ProjectFilterBar({ activeFilter, onFilterChange }) {
  const getCount = (value) => {
    if (value === 'all') return projects.length;
    return projects.filter((p) => p.category === value).length;
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.container}>
        <div className={styles.pills}>
          {filterCategories.map(({ value, label }) => {
            const count = getCount(value);
            return (
              <button
                key={value}
                className={`${styles.pill} ${activeFilter === value ? styles.pillActive : ''}`}
                onClick={() => onFilterChange(value)}
              >
                {label}
                <span className={styles.count}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectFilterBar;
