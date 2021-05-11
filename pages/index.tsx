import Layout from "@/src/components/common/Layout";
import Exchange from "@/src/components/Exchange";
import Landing from "@/src/components/Landing";

import styles from "./index.module.scss";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <Landing />
          <div className={styles.exchange}></div>
        </div>

        <div className={styles.container__right}>
          <Exchange />
          <div className={styles.currencies}></div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
