import React from "react";
import Link from "next/link";

import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";

function Login() {
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
        <div className={styles.container__right__title}>Log in</div>
        <Input label="Email" />
        <Input label="Password" type="password" />
        <Button title="Log in" />

        <div className={styles.container__right__bottom}>
          <span>Don't have an account? </span>
          <Link href="/signup">
            <a>
              <span className={`${styles.text} ${styles.bold}`}>Signup</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
