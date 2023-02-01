import ReactECharts from "echarts-for-react";

const TrendChart = ({ sumTrendByYear }) => {
  const options = {
    grid: { top: "30", left: "60", right: "60", bottom: "80" },
    xAxis: {
      type: "category",
      data: sumTrendByYear.map((r) => r.year),
      name: "ปี(พ.ศ.)",
    },
    yAxis: {
      type: "value",
      name: "จำนวน(คน)",
    },
    series: [
      {
        data: sumTrendByYear.map((r) => r.amount),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="trendDeath w-full h-fit">
      <h1 className="text-lg font-bold mb-2">แนวโน้มการเสียชีวิต</h1>
      <ReactECharts option={options} />
    </div>
  );
};

export default TrendChart;
