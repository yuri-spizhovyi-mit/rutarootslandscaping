import styles from "./CompositionItem.module.css";

import Picture from "../../ui/Picture/Picture";

function CompositionItem({ item }) {
  return (
    <div className={styles.compositionItem}>
      <Picture
        className={`${styles.compositionImage} ${styles[item.className]}`}
        srcSets={[
          `/images/sections/gallery/480/kelowna_peachland_landscaping-${item.imageOrder}.webp`,
          `/images/sections/gallery/768/kelowna_peachland_landscaping-${item.imageOrder}.webp`,
          `/images/sections/gallery/1200/kelowna_peachland_landscaping-${item.imageOrder}.webp`,
        ]}
        mediaSizes={[480, 768, 1200]}
        alt={item.alt}
      />
    </div>
  );
}

export default CompositionItem;
