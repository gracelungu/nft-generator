import React, { useEffect } from "react";
import { wrapper } from "@/src/redux/reducers/store";
import ReactGA from "react-ga";
import "../styles/global.scss";

const App = ({ Component, pageProps }: any) => {
  useEffect(() => {
    ReactGA.initialize("G-X35LBBMT97");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
