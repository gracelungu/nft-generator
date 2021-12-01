import Layout from "@/src/components/common/Layout";
import Exchange from "@/src/components/Exchange";
import styles from "./index.module.scss";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info__title}>Lock your savings</div>
          <div className={styles.info__subtitle}>
            Your Etherium shall be locked in the smart contract until the date
            of withdrawal has come to pass. Then you will be able to withdraw
            your Etherium.
            <br />
            <br />
            The address will still be able to withdraw its savings before the
            predefined date, but <b>1% of the saving</b> will be deducted from
            the amount initially locked. This deduction is to{" "}
            <b>incentivize the user</b> to keep their funds in the contract to
            help them achieve their savings goals.
          </div>
        </div>

        <div className={styles.save}>
          <Exchange />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
