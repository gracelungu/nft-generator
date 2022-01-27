import engine from "@/src/engine";
import InitialState from "@/src/redux/types/initialStates";
import React, { useEffect } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./index.module.scss";

const typedUseSelectorHook: TypedUseSelectorHook<InitialState> = useSelector;

function Generate() {
  const [collectionSize, setCollectionSize] = React.useState<number>(1);
  const [maxCollectionSize, setMaxCollectionSize] = React.useState<number>(1);
  const [ipfsURI, setIpfsURI] = React.useState<string>("");
  const data = typedUseSelectorHook((state) => state.data);
  const layers = typedUseSelectorHook((state) => state.layers);

  useEffect(() => {
    const maxCollectionSize =
      engine.layersCartesianProduct(layers.items)?.length || 0;
    setMaxCollectionSize(maxCollectionSize);
  }, [layers.items]);

  const onGenerate = () => {
    engine.setSize({ width: data?.width || 512, height: data?.height || 512 });
    engine.setLayers(layers.items);
    engine.setCollectionSize(collectionSize || 1);
    engine.generateNFTs(data, ipfsURI);
  };

  return (
    <div className={styles.container}>
      <Input
        className={styles.container__input}
        label="IPFS URI"
        placeholder="ipfs://..."
        value={ipfsURI}
        onChange={({ target: { value } }: any) => setIpfsURI(value)}
      />
      <div className={styles.container__max}></div>
      <Input
        className={styles.container__input}
        label="Collection size"
        value={collectionSize}
        max={maxCollectionSize}
        type="number"
        onChange={({ target: { value } }: any) => setCollectionSize(value)}
      />
      <div className={styles.container__max}>
        Maximum collection size for provided layers: {maxCollectionSize}
      </div>
      <Button
        title="Generate collection"
        onClick={onGenerate}
        disabled={maxCollectionSize < collectionSize || maxCollectionSize === 0}
      />
    </div>
  );
}

export default Generate;
