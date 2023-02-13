import EChartsReact from "echarts-for-react";
import React, { useState } from 'react';

const FxChart = ({ chartData }) => {
  const [timeframe, setTimeframe] = useState("1 Day");
  const interval =
    timeframe === 1
      ? 60000
      : timeframe === 2
      ? 600000
      : timeframe === 3
      ? 900000
      : timeframe === 4
      ? 3600000
      : 86400000;
  const data = chartData["batchList"].find((e) => e.interval === interval);
  const timestamp = data?.startTime;
  const timeArray = data?.rates
    ?.slice(1)
    .map((e, idx) => {
      const _timeStamp = timestamp - interval - idx * interval;
      const dateref = new Date(_timeStamp).toLocaleString("TH");
      return dateref;
    })
    .reverse();
  const options = chartData && {
    xAxis: {
      type: "category",
      data: timeArray?.map((e) => e),
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true,
        },
        splitNumber: 6,
      },
    ],
    grid: [
      {
        left: "10%",
        right: "8%",
        height: "50%",
      },
    ],
    series: [
      {
        name: "Rates",
        type: "line",
        smooth: true,
        data: data?.rates.slice(1).map((e) => e),
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
  };
  return (
    <>
      <div className="mx-auto w-4/5">
        <p>Timeframe</p>
        <select
          onChange={(e) => {
            setTimeframe(Number(e.target.value));
          }}
        >
          <option value={1}>1 Minute</option>
          <option value={2}>10 Minutes</option>
          <option value={3}>15 Minutes</option>
          <option value={4}>1 Hour</option>
          <option value={5}>1 Day</option>
        </select>
      </div>
      <EChartsReact option={options} />
    </>
  );
};

export default FxChart;
