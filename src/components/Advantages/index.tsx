import React from "react";
import styles from "./index.module.scss";

function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Generate</div>
        <div className={styles.container__item__subtitle}>Collection</div>
      </div>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Unlimited</div>
        <div className={styles.container__item__subtitle}>Assets</div>
      </div>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Rarity</div>
        <div className={styles.container__item__subtitle}>Adjustment</div>
      </div>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Banner</div>
        <div className={styles.container__item__subtitle}>Collage</div>
      </div>
    </div>
  );
}

export default Advantages;
