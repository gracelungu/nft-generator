import BottomNav from "@/src/components/common/BottomNav";
import Layout from "@/src/components/common/Layout";
import Data from "@/src/components/Data";
import Layers from "@/src/components/Layers";
import styles from "./index.module.scss";

function Generator() {
  return (
    <Layout dullBackground>
      <div className={styles.container}>
        <Data />
        <Layers />
      </div>

      <BottomNav />
    </Layout>
  );
}

export default Generator;
