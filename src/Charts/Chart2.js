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
      text: "Orders Value By Product",
      left: "center",
    },
    series: [
      {
        name: "Product",
        type: "pie",
        data: orderByProduct.map((e) => {
          return {
            value: e.orderValue,
            name: e.name,
          };
        }),
        radius: ["40%", "70%"],
      },
    ],

    tooltip: {
      trigger: "item",
    },
    radius: ["40%", "70%"],
  };
  return <ReactECharts option={options} />;
};

export default Chart2;
