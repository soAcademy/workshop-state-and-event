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
      lineStyle: {color: "black"}
    },
    yAxis: {
      type: "value",
      name: "มูลค่าสั่งซื้อ",
    },
    series: [
      {
        data: orders.map((order) => order.orderValue),
        type: "line",
        areaStyle: {
          color: 'blue',
          opacity: 0.5
        }
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default Chart1;
