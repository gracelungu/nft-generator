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
            The Lock Save Token (LOCK) is an ERC20 token for the Lock Save
            Protocol. This token can be purchased with ETH or swapped on the
            pancake exchange. During our upcoming ICO the token shall be used
            for investment in the Lock Save Protocol.
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
