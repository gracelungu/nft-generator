import { createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from ".";
import initialStates from "../initialStates";
import InitialState from "../types/initialStates";

const makeStore: MakeStore<InitialState> = () =>
  createStore(
    rootReducer,
    initialStates,
    composeWithDevTools(applyMiddleware(thunk))
  );

export const wrapper = createWrapper(makeStore);
