import * as React from "react";
import BottomNav from "../BottomNav";
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
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Crypto-pay",
  headerClassName,
  className,
  description,
  author,
  image,
  link,
}) => (
  <>
    <Navbar
      title={title}
      description={description}
      author={author}
      className={headerClassName}
      link={link}
      image={image}
    />
    <div className={styles.layout}>{children}</div>

    <BottomNav />
  </>
);

export default Layout;
