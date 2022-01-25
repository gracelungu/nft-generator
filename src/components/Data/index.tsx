import { iData } from "@/src/redux/types/initialStates";
import initialData from "@/src/redux/initialStates/data";
import React from "react";
import Input from "../common/Input";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { setData as setDataAction } from "@/src/redux/actions/data/data";

function Data() {
  const [data, setData] = React.useState<iData>(initialData);

  useEffect(() => {
    setDataAction(data);
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>NFT collection generator</div>
      <div className={styles.container__description}>
        The fields below are used to generate your NFT collection metadata and
        smart contract
      </div>

      <div className={styles.container__items}>
        <div className={styles.container__items__item}>
          <Input
            label="Collection name"
            value={data?.name}
            onChange={({ target: { value } }: any) =>
              setData({ ...data, name: value })
            }
          />
          <Input
            textarea
            label="Collection description"
            className={styles.container__items__item__textarea}
            value={data?.description}
            onChange={({ target: { value } }: any) =>
              setData({ ...data, description: value })
            }
          />
        </div>

        <div className={styles.container__items__item}>
          <Input
            label="Width"
            type="number"
            value={data?.width}
            onChange={({ target: { value } }: any) =>
              setData({ ...data, width: value })
            }
          />
          <Input
            label="Height"
            type="number"
            value={data?.height}
            onChange={({ target: { value } }: any) =>
              setData({ ...data, height: value })
            }
          />
          <Input
            label="Date"
            type="date"
            value={new Date(data?.date).toISOString().split("T")[0]}
            onChange={({ target: { value } }: any) =>
              setData({ ...data, date: value })
            }
          />
        </div>

        <div className={styles.container__items__item}>
          <span className={styles.container__items__item__title}>
            Collage preview
          </span>
          <div className={styles.container__items__item__preview}></div>
        </div>
      </div>
    </div>
  );
}

export default Data;
