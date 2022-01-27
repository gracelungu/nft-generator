import { combineReducers } from "redux";
import layers from "./layers";
import data from "./data";

const rootReducer = combineReducers({
  layers,
  data,
});

export default rootReducer;
