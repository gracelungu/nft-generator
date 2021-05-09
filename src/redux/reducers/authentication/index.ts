import { Action } from "redux";
import IAuthentication from "../../types/initialStates/authentication";
import login from "./login";

export default (state: IAuthentication, action: Action) => {
  return {
    ...state,
    ...login(state, action),
  };
};
