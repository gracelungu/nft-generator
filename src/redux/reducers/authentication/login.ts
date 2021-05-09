import { Action } from "redux";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
} from "@/src/redux/constants/authentication/login";
import IAuthentication from "@/src/redux/types/initialStates/authentication";

export default (state: IAuthentication, { type }: Action) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        login: { ...state.login, loading: true },
      };
      break;
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: { ...state.login, loading: false },
      };
      break;
    default:
      return null;
  }
};
