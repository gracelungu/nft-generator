import React from "react";
import Layer from "../Layer";
import styles from "./index.module.scss";

function Assets() {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div className={styles.container__top__upload}>
          <span className={styles.container__top__upload__title}>
            Click to upload your images
          </span>
        </div>
        <div className={styles.container__top__preview}>
          <div className={styles.container__top__preview__title}>Preview</div>
        </div>
      </div>

      <div className={styles.container__bottom}>
        <Layer />
        <Layer />
      </div>
    </div>
  );
}

export default Assets;
