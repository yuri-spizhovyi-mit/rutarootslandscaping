import Composition from "./Composition";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className="container-lg">
        <span className="sub-heading mb-xs">Gallery</span>
        <h2 className="heading-primary mb-lg">
          Showcasing Our Landscaping Projects
        </h2>
      </div>

      <Composition />
    </section>
  );
}

export default Gallery;
