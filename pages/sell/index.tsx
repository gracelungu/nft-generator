import Layout from "@/src/components/common/Layout";
import SellToken from "@/src/components/SellToken";
import styles from "./index.module.scss";

function Sell() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info__title}>Buy the LOCK token</div>
          <div className={styles.info__subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptatum dignissimos asperiores vitae molestiae nam id vel
            temporibus, sapiente error quibusdam harum officia minus, illum,
            deserunt quasi facilis distinctio magnam?
          </div>
        </div>

        <div className={styles.save}>
          <SellToken />
        </div>
      </div>
    </Layout>
  );
}

export default Sell;
