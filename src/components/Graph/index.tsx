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
  const data = [...new Array(20)].map((_i, index) => ({
    name: String(index + 1),
    pv: Math.floor(Math.random() * 65000) + 10000,
  }));

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
        height={containerSize?.width - containerSize?.width / 2}
        margin={{ top: 0, right: 0, left: 20, bottom: 0 }}
        style={{ fontSize: "12px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tick={false} />
        <YAxis orientation="right" axisLine={false} />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Graph;
