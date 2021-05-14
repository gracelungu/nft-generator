import React from "react";
import styles from "./index.module.scss";

const Input = ({ label, ...props }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__label}>{label}</div>
      <input
        {...props}
        className={`${styles.container__input} ${props.className}`}
      />
    </div>
  );
};

export default Input;
