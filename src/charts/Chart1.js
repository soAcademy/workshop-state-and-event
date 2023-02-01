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
      name: "date",
    },
    yAxis: {
      type: "value",
      name: "Order Price",
    },
    series: [
      {
        data: orders.map((order) => order.orderValue),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={options} />;
};

export default Chart1;