import React from "react";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";

function Rate() {
  const RateComponent = () => (
    <div className={styles.container__rate}>
      <div className={styles.container__rate__wrapper}>
        <img
          src="/static/images/eth.png"
          className={styles.container__rate__coin}
        />
        <div>
          <div className={styles.container__rate__subtitle}>Amount</div>
          <div className={styles.container__rate__title}>123,456 ETH</div>
          <div
            className={`${styles.container__rate__subtitleCurrency} ${styles.container__action}`}
          >
            <FontAwesomeIcon icon={faArrowCircleUp} /> Withdraw
          </div>
        </div>
      </div>

      <div className={styles.container__rate__price}>
        <div className={styles.container__rate__subtitle}>Saving time</div>
        <div className={styles.container__rate__title}>Aug 24, 2022</div>
      </div>

      <div className={styles.container__rate__price}>
        <div className={styles.container__rate__subtitle}>Withdrawal time</div>
        <div className={styles.container__rate__title}>June 24, 2022</div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div>
          <div className={styles.container__top__title}>Savings</div>
          <div className={styles.container__top__subtitle}>All savings</div>
        </div>
      </div>

      {[...new Array(3)].map(() => (
        <RateComponent />
      ))}
    </div>
  );
}

export default Rate;
