import React from "react";
import styles from "./index.module.scss";

function BottomNav() {
  return (
    <div className={styles.footer}>
      <h2>LOCK SAVE</h2>
      <p>COPYRIGHT © LOCK SAVE {new Date().getFullYear()}</p>
      <br />
      <small>
        <a href="https://storyset.com/money">Money illustrations by Storyset</a>
      </small>
    </div>
  );
}

export default BottomNav;
