import React from "react";

import styles from "./index.module.scss";
import Button from "../common/Button";

function Landing() {
  return (
    <div className={styles.container}>
      <img
        src="/static/images/mainIllustration.svg"
        className={styles.container__illustration}
      />

      <div className={styles.container__info}>
        <span className={styles.container__info__title}>
          Buy and sell cryptocurrency
        </span>
        <span className={styles.container__info__subtitle}>
          We support a variety of payment methods ranging from local to
          international
        </span>

        <div>
          <img
            src="/static/images/mtnLogo.svg"
            className={styles.container__info__telecom}
          />
          <img
            src="/static/images/airtelLogo.svg"
            className={styles.container__info__telecom}
          />
        </div>

        <Button
          className={styles.container__info__button}
          color="#333"
          title="Get started"
        />
      </div>
    </div>
  );
}

export default Landing;
