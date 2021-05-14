import React from "react";
import Button from "../common/Button";
import styles from "./index.module.scss";

function Rate() {
  const RateComponent = () => (
    <div className={styles.container__rate}>
      <div className={styles.container__rate__wrapper}>
        <img
          src="/static/images/btc.svg"
          className={styles.container__rate__coin}
        />
        <div>
          <div className={styles.container__rate__title}>Bitcoin</div>

          <div className={styles.container__rate__subtitle}>BTC</div>
        </div>
      </div>

      <div className={styles.container__rate__price}>
        <div className={styles.container__rate__title}>45,345,234</div>

        <div className={styles.container__rate__subtitleCurrency}>USD</div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div>
          <div className={styles.container__top__title}>Cryptocurrencies</div>
          <div className={styles.container__top__subtitle}>Exchange rates</div>
        </div>

        <div className={styles.container__top__label}>See all</div>
      </div>

      {[...new Array(3)].map(() => (
        <RateComponent />
      ))}

      <Button title="View all currencies" />
    </div>
  );
}

export default Rate;
