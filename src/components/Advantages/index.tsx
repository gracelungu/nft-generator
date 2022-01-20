import React from "react";
import styles from "./index.module.scss";

function Advantages() {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Generate</div>
        <div className={styles.container__item__subtitle}>Smart contracts</div>
      </div>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Assets up to</div>
        <div className={styles.container__item__subtitle}>10,000</div>
      </div>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>Rarity</div>
        <div className={styles.container__item__subtitle}>Adjustment</div>
      </div>
      <div className={styles.container__item}>
        <div className={styles.container__item__title}>All</div>
        <div className={styles.container__item__subtitle}>Free of charge</div>
      </div>
    </div>
  );
}

export default Advantages;
