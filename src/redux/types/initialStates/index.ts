import { Layer } from "@/src/engine";

export type iLayers = {
  selectedLayer: number;
  items: Array<Layer>;
};

export type iData = {
  name: string;
  description: string;
  width: number;
  height: number;
  date: number;
  banner: string;
};

interface InitialState {
  layers: iLayers;
  data: iData;
}

export default InitialState;
