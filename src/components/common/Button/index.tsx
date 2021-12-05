import React from "react";
import styles from "./Button.module.scss";

type Props = {
  title: string;
  onClick?: () => void;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

const Button: React.FC<Props> = ({
  title,
  onClick,
  color,
  disabled,
  loading,
  className,
}) => {
  return (
    <div
      className={`${styles.button} ${className}`}
      onClick={!disabled ? onClick : () => null}
      style={{ backgroundColor: !disabled ? color : "gray" }}
    >
      {!loading && <p className={styles.title}>{title}</p>}
      {loading && <div className={styles.spinner} />}
    </div>
  );
};

export default Button;
