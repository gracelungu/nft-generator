import React from "react";
import Assets from "../Assets";
import Generate from "../Generate";
import LayersItems from "../LayersItems";
import styles from "./index.module.scss";

const Layers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <LayersItems />
        <Generate />
      </div>
      <Assets />
    </div>
  );
};

export default Layers;
