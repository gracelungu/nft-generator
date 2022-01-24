import React from "react";
import Button from "../common/Button";
import styles from "./index.module.scss";

function Generate() {
  return (
    <div className={styles.container}>
      <Button title="Generate" />
    </div>
  );
}

export default Generate;
