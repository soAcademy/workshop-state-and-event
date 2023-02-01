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
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'bottom'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          label: {
            show: true,
            fontSize: '10',
            fontWeight: 'bold',
            formatter: '{b}: {@2012} ({d}%)'
          },
          focus: 'self',
        },
      },
    ],
    legend: {
      position: 'left',
      left: 0,
      orient: 'vertical'
    },
  };
  return <ReactECharts option={options} />;
};

export default Chart2;
