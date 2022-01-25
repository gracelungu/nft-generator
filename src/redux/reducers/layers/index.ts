import { Action } from "redux";
import { iLayers } from "../../types/initialStates";
import layers from "./layers";

export default (state: iLayers, action: Action) => {
  return {
    ...state,
    ...layers(state, action),
  };
};
