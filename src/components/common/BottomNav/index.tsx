import React from "react";
import styles from "./index.module.scss";

function BottomNav() {
  return (
    <div className={styles.footer}>
      <p>COPYRIGHT © NFTooze {new Date().getFullYear()}</p>
    </div>
  );
}

export default BottomNav;
