import * as React from "react";
import Navbar from "../Navbar";

import styles from "./index.module.scss";

type Props = {
  title?: string;
  description?: string;
  author?: string;
  image?: string;
  link?: string;
  headerClassName?: string;
  className?: string;
  noNavBar?: boolean;
  dullBackground?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "NFTooze, NFT generator",
  headerClassName,
  className,
  description,
  author,
  image,
  link,
  noNavBar,
  dullBackground,
}) => (
  <>
    {!noNavBar && (
      <Navbar
        title={title}
        description={description}
        author={author}
        className={headerClassName}
        link={link}
        image={image}
      />
    )}
    <div
      className={`${styles.layout} ${
        dullBackground ? styles.dullBackground : ""
      }`}
    >
      {children}
    </div>
  </>
);

export default Layout;
