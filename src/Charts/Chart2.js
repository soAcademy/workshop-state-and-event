import ReactECharts from "echarts-for-react";

import React from "react";

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
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access Form",
        type: "pie",
        radius: "50%",
        data: orderByProduct.map((r) => ({
          value: r.orderValue,
          name: r.name,
        })),
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default Chart2;
