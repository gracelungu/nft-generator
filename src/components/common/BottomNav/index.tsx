import React from "react";
import styles from "./index.module.scss";
import {
  faHome,
  faList,
  faSortAmountDownAlt,
  faSortAmountUp,
  faSortAmountUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomNav() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__menu}>
          <FontAwesomeIcon
            icon={faHome}
            className={styles.container__menu__icon}
          />
          <div className={styles.container__menu__name}>Home</div>
        </div>

        <div className={styles.container__menu}>
          <FontAwesomeIcon
            icon={faSortAmountUpAlt}
            className={`${styles.container__menu__icon} ${styles.green}`}
          />
          <div className={`${styles.container__menu__name} ${styles.green}`}>
            Buy
          </div>
        </div>

        <div className={styles.container__menu}>
          <FontAwesomeIcon
            icon={faSortAmountDownAlt}
            className={`${styles.container__menu__icon} ${styles.red}`}
          />
          <div className={`${styles.container__menu__name} ${styles.red}`}>
            Sell
          </div>
        </div>

        <div className={styles.container__menu}>
          <FontAwesomeIcon
            icon={faList}
            className={styles.container__menu__icon}
          />
          <div className={styles.container__menu__name}>Account</div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
