import React from "react";
import Link from "next/link";
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
            The Lock Save Token (LOCK) is an ERC20 token for the Lock Save
            Protocol. This token can be purchased with ETH or swapped on the
            pancake exchange. During our upcoming ICO the token shall be used
            for investment in the Lock Save Protocol.
          </div>

          <div className={styles.container__top__actions}>
            <Link href="/sell">
              <a>
                <Button
                  className={`${styles.container__top__button} ${styles.container__top__button__buy}`}
                  title="Buy the LOCK token"
                />
              </a>
            </Link>
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
