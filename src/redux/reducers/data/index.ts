import { Action } from "redux";
import { iData } from "../../types/initialStates";
import data from "./data";

export default (state: iData, action: Action) => {
  return {
    ...state,
    ...data(state, action),
  };
};
