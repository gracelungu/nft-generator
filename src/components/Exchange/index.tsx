import React from "react";
import Link from "next/link";
import web3 from "@/src/services/web3";
import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";
import ContentLoader from "react-content-loader";
import Router from "next/router";

function Exchange() {
  const [date, setDate] = React.useState();
  const [amount, setAmount] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const d = new Date();

  const handleSave = async () => {
    try {
      if (amount && date) {
        setIsLoading(true);
        await web3.setMetaMaskAccount();

        const accounts = await web3.getAccounts();
        web3.receiveSavings(accounts[0], amount, new Date(date).getTime());
        setIsLoading(false);
        Router.push("/");
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Save yourself some ethereum</div>

      {!isLoading && (
        <>
          <Input
            label="Amount to be saved in (eth)"
            type="number"
            onChange={({ target: { value } }: Record<string, any>) =>
              setAmount(value)
            }
          />

          <Input
            label="Minimum withdrawal date"
            type="date"
            min={d.toISOString().split("T")[0]}
            onChange={({ target: { value } }: Record<string, any>) =>
              setDate(value)
            }
          />
        </>
      )}

      {isLoading && <ContentLoader />}

      <div className={styles.container__disclaimer}>
        <h4>Disclaimer</h4>
        <p>
          If you wish to withdraw your funds before the minimum withdrawal date,
          you will be charged a fee of 1% of the amount you wish to withdraw.
        </p>
      </div>

      <Button
        title="Save your ETH"
        onClick={handleSave}
        loading={isLoading}
        disabled={!amount || !date || isLoading}
      />

      <div className={styles.container__sell}>
        <Link href="/sell">
          <a>BUY THE LOCK TOKEN</a>
        </Link>
      </div>
    </div>
  );
}

export default Exchange;
