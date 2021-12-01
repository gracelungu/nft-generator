import React from "react";
import Link from "next/link";
import Select from "react-select";
import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";

function Exchange() {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Save yourself some etherium</div>
      <Input label="Amount to be saved in (eth)" type="number" />

      <Input label="Minimum withdrawal date" type="date" />

      <div className={styles.container__disclaimer}>
        <h4>Disclaimer</h4>
        <p>
          If you wish to withdraw your funds before the minimum withdrawal date,
          you will be charged a fee of 1% of the amount you wish to withdraw.
        </p>
      </div>

      <Button title="Save your ETH" />

      <div className={styles.container__sell}>
        <Link href="/sell">
          <a>BUY THE LOCK TOKEN</a>
        </Link>
      </div>
    </div>
  );
}

export default Exchange;
