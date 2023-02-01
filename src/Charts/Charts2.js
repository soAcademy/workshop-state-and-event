import ReactECharts from "echarts-for-react";

const orderByProduct = [
  {
    name: "Collagen",
    orderValue: 13500,
  },
  {
    name: "Serum",
    orderValue: 8500,
  },
  {
    name: "Vitamin C",
    orderValue: 10200,
  },
  {
    name: "Fiber",
    orderValue: 8300,
  },
];

const Charts2 = () => {
  const option = {
    title: {
      text: "Orders by product",
    },
    legend: {
      orient: "vertical",
      left: "left",
      center: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: orderByProduct.map((order) => ({
          value: order.orderValue,
          name: order.name,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return <ReactECharts option={option} />;
};

export default Charts2;
