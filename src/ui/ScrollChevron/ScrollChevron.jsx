import styles from './ScrollChevron.module.css';

function ScrollChevron() {
  return (
    <div className={styles.scrollChevron}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
}

export default ScrollChevron;
