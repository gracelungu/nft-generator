import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import Button from "../common/Button";

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.container__info}>
        <span className={styles.container__info__title}>
          Generate <span className={styles.container__info__colored}>NFT </span>{" "}
          collections and corresponding contracts with no code
        </span>
        <span className={styles.container__info__subtitle}>
          A simple but useful tool to generate NFT collections and smart
          contracts without coding.
        </span>

        <div className={styles.container__info__actions}>
          <Link href="/generator">
            <a>
              <Button
                className={styles.container__info__button}
                title="START GENERATING"
              />
            </a>
          </Link>
        </div>

        <div className={styles.container__info__more_info}>
          <div className={styles.container__info__more_info__title}>
            Generate up to
          </div>
          <div className={styles.container__info__more_info__big_title}>
            <span className={styles.container__info__colored}>1,000</span>
          </div>
          <div className={styles.container__info__more_info__title}>
            Assets free of charge
          </div>
        </div>
      </div>

      <img
        src="/static/images/illustration.svg"
        className={styles.container__illustration}
      />
    </div>
  );
}

export default Landing;
