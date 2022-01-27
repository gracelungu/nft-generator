import { SET_DATA } from "@/src/redux/constants/data/data";
import { iData } from "../../types/initialStates";

export default (state: iData, { type, payload }: any) => {
  switch (type) {
    case SET_DATA:
      return { ...state, ...payload };
    default:
      return null;
  }
};
