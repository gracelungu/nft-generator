import React from "react";

import styles from "./index.module.scss";
import Button from "../common/Button";

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.container__info}>
        <span className={styles.container__info__title}>
          A Decentralized Financial contract for locking your ETH in a temporal
          Safe
        </span>
        <span className={styles.container__info__subtitle}>
          A better way to lock your etherium savings away from traditional
          banks, locked for the desired amount of time. Protects you from
          undecided and uncertain actions.
        </span>

        <div className={styles.container__info__actions}>
          <Button
            className={styles.container__info__button}
            title="Get started"
          />

          <Button
            className={`${styles.container__info__button} ${styles.container__info__button__buy}`}
            title="Buy the LOCK token"
          />
        </div>
      </div>

      <img
        src="/static/images/Coins-bro.svg"
        className={styles.container__illustration}
      />
    </div>
  );
}

export default Landing;
