import React from "react";
import styles from "./index.module.scss";

function Operations() {
  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div>
          <div className={styles.container__top__title}>
            Use your favorite platforms to buy crypto currency
          </div>
          <div className={styles.container__top__subtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            ratione saepe laboriosam, sequi esse dolore minima omnis consectetur
            perferendis voluptas dolores, rem exercitationem ipsam laudantium,
            est quia voluptatem nemo. Ratione.
          </div>
        </div>

        <img
          src="/static/images/Bitcoin-cuate.svg"
          className={styles.container__top__illustration}
        />
      </div>
    </div>
  );
}

export default Operations;
