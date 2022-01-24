import React from "react";
import Input from "../common/Input";
import styles from "./index.module.scss";

function Data() {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>NFT collection generator</div>
      <div className={styles.container__description}>
        The fields below are used to generate your NFT collection metadata and
        smart contract
      </div>

      <div className={styles.container__items}>
        <div className={styles.container__items__item}>
          <Input label="Collection name" />
          <Input
            textarea
            label="Collection description"
            className={styles.container__items__item__textarea}
          />
        </div>

        <div className={styles.container__items__item}>
          <Input label="Width" />
          <Input label="Height" />
          <Input label="Date" />
        </div>

        <div className={styles.container__items__item}>
          <span className={styles.container__items__item__title}>
            Collage preview
          </span>
          <div className={styles.container__items__item__preview}></div>
        </div>
      </div>
    </div>
  );
}

export default Data;
