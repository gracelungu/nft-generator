import React from "react";
import { wrapper } from "@/src/redux/reducers/store";

import "../styles/global.scss";

const App = ({ Component, pageProps }: any) => <Component {...pageProps} />;

export default wrapper.withRedux(App);
