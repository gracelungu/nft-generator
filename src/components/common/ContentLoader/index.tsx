import React from "react";
import ContentLoaderComponent from "react-content-loader";

const ContentLoader = (props) => (
  <ContentLoaderComponent
    viewBox="0 0 400 130"
    height={130}
    width={400}
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
    <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
    <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
  </ContentLoaderComponent>
);

export default ContentLoader;
