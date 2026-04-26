import { useRef } from 'react';
import Picture from "../../ui/Picture/Picture";
import { useParallax } from '../../hooks/useParallax';
import styles from "./Poster.module.css";

function Poster() {
  const bgRef = useParallax(0.5);

  return (
    <section className={styles.posterSection}>
      <div className={styles.posterWrapper} ref={bgRef}>
        <Picture
          srcSets={[
            "/images/sections/poster/poster-480.webp",
            "/images/sections/poster/poster-768.webp",
            "/images/sections/poster/poster-1400.webp",
            "/images/sections/poster/poster-1600.webp",
            "/images/sections/poster/poster-1920.webp",
          ]}
          mediaSizes={[480, 768, 1400, 1600]}
          className={styles.poster}
          alt="Wet grass"
        />
      </div>
    </section>
  );
}

export default Poster;
