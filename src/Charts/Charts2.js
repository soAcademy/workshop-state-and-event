import ReactECharts from "echarts-for-react";

const Chart2 = () => {
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

  const options = {
    title: {
      text: "Order by Product",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      left: "right",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: orderByProduct.map((r) => ({
          value: r.orderValue,
          name: r.name,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    roseType: "area",
  };
  return <ReactECharts option={options} />;
};

export default Chart2;
