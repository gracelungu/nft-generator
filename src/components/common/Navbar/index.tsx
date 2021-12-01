import Head from "next/head";
import Link from "next/link";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import styles from "./Navbar.module.scss";
import Button from "../Button";

config.autoAddCss = false;

type Props = {
  title?: string;
  description?: string;
  author?: string;
  className?: string;
  link?: string;
  image?: string;
};

const Navbar: React.FunctionComponent<Props> = ({
  title = "Lock Save",
  description = "A Decentralized Financial contract for locking your ETH in a temporal Safe",
  author,
  link = "locksave.io",
  image = "/static/images/piggy.svg",
}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/images/favicon.ico" />
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <link rel="canonical" href={link} />

        <meta property="og:site_name" content="Lock Save" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:url" content={link} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <style>{dom.css()}</style>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Link href="/">
            <a>
              <div className={styles.logoWrapper}>
                <img src="/static/images/logo2.svg" className={styles.logo} />
              </div>
            </a>
          </Link>

          <div className={styles.menu}>
            <span className={styles.link}>
              <Link href="/#howitworks">
                <a>
                  <span>
                    <b>HOW IT WORKS</b>
                  </span>
                </a>
              </Link>
            </span>
            <span className={styles.link}>
              <Link href="/sell">
                <a>
                  <span>
                    <b>BUY THE LOCK TOKEN</b>
                  </span>
                </a>
              </Link>
            </span>
            <span className={styles.link}>
              <Link href="/withdraw">
                <a>
                  <span>
                    <b>WITHDRAW</b>
                  </span>
                </a>
              </Link>
            </span>
            <span className={styles.link}>
              <Link href="/save">
                <a>
                  <Button title="SAVE NOW" className={styles.navbar__button} />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
