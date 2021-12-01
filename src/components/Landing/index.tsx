import React from "react";
import Link from "next/link";
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
          Commit to your saving goals by locking your Etherium for a predefined
          amount of time, and be protected from unplanned and undecided
          transactions that result in the shrinkage of your savings.
        </span>

        <div className={styles.container__info__actions}>
          <Link href="/save">
            <a>
              <Button
                className={styles.container__info__button}
                title="SAVE NOW"
              />
            </a>
          </Link>

          <Link href="/sell">
            <a>
              <Button
                className={`${styles.container__info__button} ${styles.container__info__button__buy}`}
                title="Buy the LOCK token"
              />
            </a>
          </Link>
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
