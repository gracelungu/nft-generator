import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BottomNav() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div>
          <h2>LOCK SAVE</h2>
          <p>COPYRIGHT © LOCK SAVE {new Date().getFullYear()}</p>
          <br />
          <small>
            <a href="https://storyset.com/money">
              Money illustrations by Storyset
            </a>
          </small>
        </div>

        <div>
          <Link href="https://www.linkedin.com/in/grace-lungu-262306190/">
            <a>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className={styles.footer__container__icon}
              />
            </a>
          </Link>
          <Link href="https://twitter.com/gracelubw">
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className={styles.footer__container__icon}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
