import engine from "@/src/engine";
import initialData from "@/src/redux/initialStates/data";
import React from "react";
import Input from "../common/Input";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { setData as setDataAction } from "@/src/redux/actions/data/data";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import InitialState, { iData } from "@/src/redux/types/initialStates";

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

function Data() {
  const dispatch = useDispatch();
  const [data, setData] = React.useState<iData>(initialData);
  const state = typedUseSelectorHook((state) => state);
  const collageData = typedUseSelectorHook((state) => state?.data);

  useEffect(() => {
    setDataAction(data)(dispatch);
  }, [data]);

  const previewCollage = async () => {
    engine.setLayers(state.layers.items);
    const samplePreview = await engine.generateBannerCollage();
    setDataAction({ ...data, banner: samplePreview })(dispatch);
  };

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
          <div className={styles.container__items__item__actions}>
            <div
              className={styles.container__items__item__actions__prev_button}
              onClick={previewCollage}
            >
              Preview
            </div>
            <div
              className={styles.container__items__item__actions__prev_download}
              onClick={() => engine.downloadBannerCollage()}
            >
              Download
            </div>
          </div>
          <div className={styles.container__items__item__preview}>
            <img
              src={collageData?.banner}
              className={styles.container__items__item__preview__image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
