import { Dispatch } from "redux";
import { SET_DATA } from "@/src/redux/constants/data/data";

export const setData = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};
