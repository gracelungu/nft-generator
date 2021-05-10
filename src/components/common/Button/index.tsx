import React from "react";
import styles from "./Button.module.scss";

type Props = {
  title: string;
  onClick?: () => void;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<Props> = ({
  title,
  onClick,
  color,
  disabled,
  loading,
}) => {
  return (
    <div
      className={styles.button}
      onClick={!disabled ? () => null : onClick}
      style={{ backgroundColor: color }}
    >
      {!loading && <p className={styles.title}>{title}</p>}
      {loading && <div className={styles.spinner} />}
    </div>
  );
};

export default Button;
