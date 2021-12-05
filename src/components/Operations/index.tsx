import React from "react";
import Link from "next/link";
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
            Lock Save is an <b>Ethereum smart contract</b>, allowing it's users
            to save their coins and choose when these coins should be available
            to be withdrawn. The saving is done by locking the coins in the
            smart contract using the current platform. <br /> <br /> The
            platform gives to the user an intuitive interface to input the
            amount of coins they want to save, and the date they wish to
            withdraw.
            <br /> <br />
            The address will still be able to withdraw its savings before the
            predefined date, but <b>1% of the saving</b> will be deducted from
            the amount initially locked. This deduction is to{" "}
            <b>incentivize the user</b> to keep their funds in the contract to
            help them achieve their savings goals.
          </div>

          <div className={styles.container__top__actions}>
            <Link href="/save">
              <a>
                <Button
                  className={styles.container__top__button}
                  title="SAVE NOW"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
