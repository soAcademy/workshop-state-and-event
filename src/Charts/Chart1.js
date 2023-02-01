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
      data: orders.map((e) => e.date),
      name: "วันที่",
    },
    yAxis: {
      type: "value",
      name: "มูลค่าสั่งซื้อ",
      max: 26000,
      min: 22000
    },
    series: [
      {
        name: 'Order Value',
        data: orders.map((e) => e.orderValue),
        type: "line",
        smooth: true,
        lineStyle: {
          color: "red",
          width: 2
        },
        label: {
          show: true,
          textStyle: {
            color: "blue"
          },
        },
        areaStyle: {},

      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={options} />;
};

export default Chart1;
