import React from "react";
import Button from "../common/Button";
import styles from "./index.module.scss";

function Operations() {
  return (
    <div className={styles.container} id="howitworks">
      <div className={styles.container__top}>
        <img
          src="/static/images/piggy.svg"
          className={styles.container__top__illustration}
        />

        <div className={styles.container__top__info}>
          <div className={styles.container__top__title}>How it works</div>

          <div className={styles.container__top__subtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            ratione saepe laboriosam, sequi esse dolore minima omnis consectetur
            perferendis voluptas dolores, rem exercitationem ipsam laudantium,
            est quia voluptatem nemo. Ratione.
          </div>

          <div className={styles.container__top__actions}>
            <Button
              className={styles.container__top__button}
              title="Get started"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
