import Layout from "@/src/components/common/Layout";
import styles from "./index.module.scss";
import Link from "next/link";
import Button from "@/src/components/common/Button";

function Sell() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info__title}>The LOCK token</div>
          <div className={styles.info__subtitle}>
            The Lock Save Token (LOCK) is an ERC20 token for the Lock Save
            Protocol. This token can be purchased with ETH or swapped on the
            pancake exchange. During our upcoming ICO the token shall be used
            for investment in the Lock Save Protocol.
          </div>

          <div className={styles.info__title}>Buy on the Pancake Swap DEX</div>
          <div className={styles.info__subtitle}>
            You can purchase the token from the Pancake Swap exchange.
            <br /> Before you can trade, you will need a Binance Smart
            Chain-compatible wallet Learn more about the Pancake Swap DEX and
            how to swap your tokens{" "}
            <Link href="https://docs.pancakeswap.finance/products/pancakeswap-exchange/trade-guide">
              <b>
                <a>here</a>
              </b>
            </Link>
          </div>

          <Link href="https://pancakeswap.finance/swap">
            <a>
              <Button
                title="Buy on Pancake Swap"
                className={styles.info__button}
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Sell;
