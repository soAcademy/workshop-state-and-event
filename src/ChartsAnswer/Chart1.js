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
      name: "วันที่",
    },
    yAxis: {
      type: "value",
      name: "มูลค่าสั่งซื้อ",
      // max: "dataMax",
      // min: "dataMin",
      max: 28000,
      min: 20000
    },
    series: [
      {
        data: orders.map((order) => order.orderValue),
        type: "line",
        smooth: true,
        lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default Chart1;
