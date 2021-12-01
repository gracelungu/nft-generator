import Layout from "@/src/components/common/Layout";
import Rate from "@/src/components/Rates";
import styles from "./index.module.scss";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info__title}>Lock your savings</div>
          <div className={styles.info__subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptatum dignissimos asperiores vitae molestiae nam id vel
            temporibus, sapiente error quibusdam harum officia minus, illum,
            deserunt quasi facilis distinctio magnam?
          </div>
        </div>

        <div className={styles.save}>
          <Rate />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
