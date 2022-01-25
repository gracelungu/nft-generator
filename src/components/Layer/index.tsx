import { Image } from "@/src/engine";
import {
  deleteImage,
  updateRarity as updateRarityAction,
} from "@/src/redux/actions/layers/layers";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

interface Props extends Image {
  layerIndex: number;
  imageIndex: number;
}

const Layer: React.FC<Props> = ({
  path,
  rarity,
  name,
  layerIndex,
  imageIndex,
}) => {
  const dispatch = useDispatch();
  const [itemRarity, setItemRarity] = React.useState(rarity);

  const updateRarity = (amount: number) => {
    updateRarityAction(layerIndex, imageIndex, amount)(dispatch);
  };

  useEffect(() => {
    setItemRarity(rarity);
  }, [rarity]);

  const onDeleteImage = () => {
    deleteImage(layerIndex, imageIndex)(dispatch);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__delete}>
        <img
          src="/static/images/delete.png"
          alt="delete"
          onClick={onDeleteImage}
        />
      </div>
      <img src={path} className={styles.container__image} />
      <div className={styles.container__name}>{name}</div>
      <div className={styles.container__rarity}>Rarity: {rarity}%</div>
      <input
        type="range"
        min="0"
        max="100"
        value={itemRarity}
        className={styles.container__slider}
        id="myRange"
        onChange={(e) => updateRarity(Number(e.target.value))}
      />
    </div>
  );
};

export default Layer;
