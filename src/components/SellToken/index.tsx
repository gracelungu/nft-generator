import React from "react";
import Link from "next/link";
import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";

function SellToken() {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        Purchase the lock save token
      </div>
      <Input label="Amount of token in (LOCK)" type="number" />

      <div className={styles.container__disclaimer}>
        <p>The LOCK tokens will be sent to your ETH wallet.</p>
      </div>

      <Button title="BUY TOKEN" />

      <div className={styles.container__sell}>
        <Link href="/save">
          <a>SAVE YOUR ETH</a>
        </Link>
      </div>
    </div>
  );
}

export default SellToken;
