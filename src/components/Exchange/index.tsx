import React from "react";
import Link from "next/link";
import Select from "react-select";

import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";

function Exchange() {
  const options = [{ value: "MTN", label: "MTN" }];

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Buy crypto</div>

      <div className={styles.container__select_wrapper}>
        <div className={styles.container__label}>Payment method</div>
        <Select options={options} />
      </div>

      <Input label="Spend" />
      <Input label="Receive" />
      <Input label="Phone number" />

      <Button title="Purchase crypto" />

      <div className={styles.container__sell}>
        <Link href="">
          <a>Sell crypto instead</a>
        </Link>
      </div>
    </div>
  );
}

export default Exchange;
