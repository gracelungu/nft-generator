import React from "react";
import Link from "next/link";

import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";

function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <div className={styles.container__left__title}>
          Buy and sell cryptocurrency instantly
        </div>
        <div className={styles.container__left__subtitle}>
          Use your local favorite payment methods to buy and sell coins
        </div>
        <img
          src="/static/images/coins.svg"
          className={styles.container__left__image}
        />
      </div>
      <div className={styles.container__right}>
        <div className={styles.container__right__title}>Sign up</div>
        <Input label="Full name" />
        <Input label="Email" />
        <Input label="Telephone" />
        <Input label="Password" type="password" />
        <Button title="Sign up" />

        <div className={styles.container__right__bottom}>
          <span>Already have an account? </span>
          <Link href="/login">
            <a>
              <span className={`${styles.text} ${styles.bold}`}>Login</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
