import styles from "./Composition.module.css";

import { COMPOSITION_ITEMS } from "../../data/compositionItems";
import CompositionItem from "./CompositionItem";

function Composition() {
  return (
    <div className="container-lg">
      <div className={styles.composition}>
        {COMPOSITION_ITEMS.map((item) => (
          <CompositionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Composition;
