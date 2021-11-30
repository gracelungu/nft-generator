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
  title = "Capitalmet",
  description,
  author,
  link,
  image,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content={author} />
        <meta name="description" content={description} />
        <link rel="canonical" href={link} />

        <meta property="og:site_name" content="Capitalmet" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:url" content={link} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <style>{dom.css()}</style>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <img src="/static/images/locklogo.svg" className={styles.logo} />{" "}
            <h5>LOCK SAVE</h5>
          </div>

          <div className={styles.menu}>
            <span className={styles.link}>
              <Link href="#howitworks">
                <a>
                  <b>HOW IT WORKS</b>
                </a>
              </Link>
            </span>
            <span className={styles.link}>
              <Link href="#locktoken">
                <a>
                  <b>BUY THE LOCK TOKEN</b>
                </a>
              </Link>
            </span>
            <span className={styles.link}>
              <Button title="Get started" className={styles.navbar__button} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
