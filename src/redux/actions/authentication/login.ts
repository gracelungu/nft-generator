import { Dispatch } from "redux";
import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "@/src/redux/constants/authentication/login";

export default () => (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN_START,
  });

  try {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_ERROR,
    });
  }
};
