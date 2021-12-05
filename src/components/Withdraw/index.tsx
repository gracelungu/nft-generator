import React, { useEffect } from "react";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import web3 from "@/src/services/web3";
import ContentLoader from "react-content-loader";

function Withdraw() {
  const [savings, setSavings] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getSavings = async () => {
    try {
      setIsLoading(true);
      await web3.setMetaMaskAccount();

      const accounts = await web3.getAccounts();
      const data = await web3.getUserSavings(accounts[0]);
      setSavings(data);
      console.log({ data });

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getSavings();
  }, []);

  const withdrawSaving = async (savingTimestamp: number) => {
    try {
      setIsLoading(true);
      await web3.setMetaMaskAccount();

      const accounts = await web3.getAccounts();
      await web3.withdrawSavings(accounts[0], savingTimestamp);

      await getSavings();
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const WithdrawComponent = ({ data: saving }) => {
    const savingDate = new Date(
      Number(saving["timestamp"]) * 1000
    ).toDateString();
    const withdrawalDate = new Date(
      Number(saving["withdrawTimestamp"])
    ).toDateString();
    const amount = web3.web3.utils.fromWei(saving["amount"]);

    return (
      <div className={styles.container__withdraw}>
        <div className={styles.container__withdraw__wrapper}>
          <img
            src="/static/images/eth.png"
            className={styles.container__withdraw__coin}
          />
          <div>
            <div className={styles.container__withdraw__subtitle}>Amount</div>
            <div className={styles.container__withdraw__title}>
              {amount} ETH
            </div>
            <div
              className={`${styles.container__withdraw__subtitleCurrency} ${styles.container__action}`}
              onClick={() => withdrawSaving(Number(saving["timestamp"]))}
            >
              <FontAwesomeIcon icon={faArrowCircleUp} /> Withdraw
            </div>
          </div>
        </div>

        <div className={styles.container__withdraw__price}>
          <div className={styles.container__withdraw__subtitle}>
            Saving time
          </div>
          <div className={styles.container__withdraw__title}>{savingDate}</div>
        </div>

        <div className={styles.container__withdraw__price}>
          <div className={styles.container__withdraw__subtitle}>
            Withdrawal time
          </div>
          <div className={styles.container__withdraw__title}>
            {withdrawalDate}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <div>
          <div className={styles.container__top__title}>Savings</div>
          <div className={styles.container__top__subtitle}>
            Refresh or give it a minute for your latest saving to appear!
          </div>
        </div>
      </div>

      {!isLoading &&
        savings
          ?.filter((saving) => saving["amount"] > 0)
          .map((data) => <WithdrawComponent data={data} />)}

      {isLoading && <ContentLoader />}

      {!isLoading && savings?.length === 0 && (
        <div>
          <h3>The current address does not have any savings yet!</h3>
          <p>Your savings will appear here!</p>
        </div>
      )}
    </div>
  );
}

export default Withdraw;
