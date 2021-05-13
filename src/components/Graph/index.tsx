import React, { useEffect, useRef, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./index.module.scss";

function Graph() {
  const data = [
    {
      name: "01/21",
      pv: 1528,
    },
    {
      name: "02/21",
      pv: 45528,
    },
    {
      name: "03/21",
      pv: 30528,
    },
    {
      name: "04/21",
      pv: 49528,
    },
    {
      name: "05/21",
      pv: 35528,
    },
  ];

  const containerRef = useRef() as any;
  const [containerSize, setContainerSize] = useState<Record<string, any>>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setContainerSize({
      width: containerRef?.current?.offsetWidth,
      height: containerRef?.current?.offsetHeight,
    });
  }, [containerRef.current]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.container__top}>
        <div className={styles.container__top__title}>BTC</div>
        <div className={styles.container__top__price}>
          54,345,234{" "}
          <span className={styles.container__top__currency}>USD</span>
        </div>
      </div>

      <LineChart
        data={data}
        width={containerSize?.width}
        height={containerSize?.width - containerSize?.width / 1.5}
        margin={{ top: 0, right: 0, left: 20, bottom: 0 }}
        style={{ fontSize: "12px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis orientation="right" axisLine={false} />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Graph;
