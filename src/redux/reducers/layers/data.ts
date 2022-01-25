import { SET_DATA } from "@/src/redux/constants/data/data";
import { Layer } from "@/src/engine";

type state = {
  items: Array<Layer>;
};

export default (state: state, { type, payload }: any) => {
  switch (type) {
    case SET_DATA:
      return { ...state, ...payload };
    default:
      return null;
  }
};
