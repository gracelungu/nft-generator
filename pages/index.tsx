import Layout from "@/src/components/common/Layout";

import styles from "./index.module.scss";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.landing}></div>
          <div className={styles.exchange}></div>
        </div>

        <div className={styles.right}>
          <div className={styles.chart}></div>
          <div className={styles.currencies}></div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
