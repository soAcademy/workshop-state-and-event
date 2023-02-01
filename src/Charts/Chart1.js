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
    // grid: { top: 10, right: 8, bottom: 24, left: 50 },
    xAxis: {
      type: "category",
      data: orders.map((r) => r.date),
      name: "วันที่",
    },
    yAxis: {
      type: "value",
      name: "มูลค่าสั่งซื้อ",
      min: 22000,
      max: 26000
    },
    series: [
      {
        data: orders.map((r) => r.orderValue),
        type: "line",
        smooth: true,
        lineStyle : { width: 2, color: "#f11"}
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[800px]">
        <ReactECharts option={options} />
      </div>
    </div>
  );
};

export default Chart1;
