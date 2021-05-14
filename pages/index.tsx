import BottomNav from "@/src/components/common/BottomNav";
import Layout from "@/src/components/common/Layout";
import Exchange from "@/src/components/Exchange";
import Graph from "@/src/components/Graph";
import Landing from "@/src/components/Landing";
import Operations from "@/src/components/Operations";
import Rate from "@/src/components/Rates";

import styles from "./index.module.scss";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <Landing />
          <Operations />
          <Rate />
        </div>

        <div className={styles.container__right}>
          <Graph />
          <Exchange />
        </div>
      </div>

      <BottomNav />
    </Layout>
  );
}

export default HomePage;
