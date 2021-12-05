import Layout from "@/src/components/common/Layout";
import Withdraw from "@/src/components/Withdraw";
import styles from "./index.module.scss";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info__title}>Withdraw your savings</div>
          <div className={styles.info__subtitle}>
            We advise you to perform your withdrawal after the set date has
            elapsed to be able to satisfy your goal.
            <br />
            <br />
            However you have the option to withdraw your savings at any time,
            but <b>1% of your savings</b> will be deducted for an early
            withdrawal as incentive to keep your initial goal.
          </div>
        </div>

        <div className={styles.save}>
          <Withdraw />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
