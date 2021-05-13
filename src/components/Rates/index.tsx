import React from "react";
import styles from "./index.module.scss";

function Rate() {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div>
          <div className={styles.container__top__title}>Cryptocurrencies</div>
          <div className={styles.container__top__subtitle}>Exchange rates</div>
        </div>

        <div className={styles.container__top__label}>See all</div>
      </div>
    </div>
  );
}

export default Rate;
