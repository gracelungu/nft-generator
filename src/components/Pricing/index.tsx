import React from "react";
import Plan from "../common/Plan";
import styles from "./index.module.scss";

function Pricing() {
  const freePlan = [
    "Generate smart contracts",
    "Banner collage",
    "ETH and SOL metadata",
    "No watermark",
  ];

  return (
    <div className={styles.container} id="pricing">
      <div className={styles.container__title}>
        Flexible <span className={styles.container__colored}>Plans</span>
      </div>
      <div className={styles.container__subtitle}>
        Choose a plan that works for you
      </div>

      <div className={styles.container__plans}>
        <Plan items={freePlan} assets="1,000" price="FREE" />
        <Plan items={freePlan} assets="5,000" price="100$" dark />
        <Plan items={freePlan} assets="10,000" price="200$" />
      </div>
    </div>
  );
}

export default Pricing;
