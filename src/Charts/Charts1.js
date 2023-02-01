import ReactECharts from "echarts-for-react";

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

const Charts1 = () => {
  const option = {
    title: {
      text: "Order value by date",
    },
    xAxis: {
      type: "category",
      data: orders.map((order) => order.date),
      name: "Date",
    },
    yAxis: {
      type: "value",
      name: "Order value",
    },
    series: [
      {
        data: orders.map((order) => order.orderValue),
        type: "line",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={option} />;
};

export default Charts1;
