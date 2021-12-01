import React from "react";
import Button from "../common/Button";
import styles from "./index.module.scss";

function Sale() {
  return (
    <div className={styles.container} id="locktoken">
      <div className={styles.container__top}>
        <div className={styles.container__top__info}>
          <div className={styles.container__top__title}>
            LOCK SAVE TOKEN (LOCK)
          </div>

          <div className={styles.container__top__subtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            ratione saepe laboriosam, sequi esse dolore minima omnis consectetur
            perferendis voluptas dolores, rem exercitationem ipsam laudantium,
            est quia voluptatem nemo. Ratione.
          </div>

          <div className={styles.container__top__actions}>
            <Button
              className={`${styles.container__top__button} ${styles.container__top__button__buy}`}
              title="Buy the LOCK token"
            />
          </div>
        </div>

        <img
          src="/static/images/pot.svg"
          className={styles.container__top__illustration}
        />
      </div>
    </div>
  );
}

export default Sale;
