import React from "react";
import styles from "./index.module.scss";

function Layer() {
  return (
    <div className={styles.container}>
      <img
        src="/static/images/illustration.svg"
        className={styles.container__image}
      />
      <input
        type="range"
        min="1"
        max="100"
        className={styles.container__slider}
        id="myRange"
      />
    </div>
  );
}

export default Layer;
