import React from "react";
import Button from "../Button";
import styles from "./index.module.scss";

type Props = {
  items: Array<string>;
  dark?: boolean;
  price: string;
  assets: string;
};

const Plan: React.FC<Props> = ({ items = [], dark, price, assets }) => {
  return (
    <div className={`${styles.container} ${dark ? styles.dark : ""}`}>
      <div className={styles.container__titles}>
        <div className={styles.container__titles__title}>Generate</div>
        <div className={styles.container__titles__big_title}>{assets}</div>
        <div className={styles.container__titles__title}>Assets</div>
      </div>

      <div className={styles.container__items}>
        {items.map((item) => (
          <div className={styles.container__items__item}>
            <img
              src="/static/images/check.png"
              className={styles.container__items__item__icon}
            />
            <div className={styles.container__items__item__title}>{item}</div>
          </div>
        ))}

        <div className={styles.container__items__wrapper}>
          <Button
            title={price}
            className={styles.container__items__wrapper__action}
          />
          <span>Per collection</span>
        </div>
      </div>
    </div>
  );
};

export default Plan;
