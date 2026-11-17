import type { CSSProperties } from "react";
import ConceptArt from "../../assets/AbyssHuntersConceptArt.png";

import styles from "./BackgroundLayer.module.css";



/**
 * Fixed visual layer: the hero art stays put while the page scrolls over it.
 * Purely decorative and pointer-events: none, so it never intercepts clicks.
 */
export default function BackgroundLayer() {
  const imageStyle: CSSProperties = ConceptArt
    ? ({ "--hero-background-image": `url(${JSON.stringify(ConceptArt)})` } as CSSProperties)
    : {};

  return (
    <div className={styles.layer} aria-hidden="true">
      <div className={styles.image} style={imageStyle} />
      <div className={styles.overlay} />
      <div className={styles.vignette} />
    </div>
  );
}