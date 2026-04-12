import Picture from "../../ui/Picture/Picture";
import styles from "./Poster.module.css";

function Poster() {
  return (
    <section>
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
    </section>
  );
}

export default Poster;
