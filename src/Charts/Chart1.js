import React from "react";
import ReactECharts from "echarts-for-react";

const Chart1 = () => {
  const orders = [
    {
      date: "2022-01-13",
      orderValue: 23000,
    },
    {
      date: "2022-01-14",
      orderValue: 25000,
    },
    {
      date: "2022-01-15",
      orderValue: 24000,
    },
    {
      date: "2022-01-16",
      orderValue: 23000,
    },
  ];

  const options = {
    xAxis: {
      type: "category",
      data: orders.map((order) => order.date),
      name: "Date",
    },
    yAxis: {
      type: "value",
      name: "orderValue",
    },
    series: [
      {
        data: orders.map((order) => order.orderValue),
        type: "line",
        smooth: true,
        lineStyle: { color: "#EA047E" },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
};

export default Chart1;
