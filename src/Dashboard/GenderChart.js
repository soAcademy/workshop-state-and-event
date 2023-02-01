import ReactECharts from "echarts-for-react";

const GenderChart = ({ datasByYear }) => {
  // console.log(datasByYear);
  const sumGender = datasByYear.reduce(
    (acc, r) => {
      // console.log(acc);
      acc.male += r.gender.male;
      acc.female += r.gender.female;
      return acc;
    },
    { male: 0, female: 0 }
  );
  // console.log(sumGender);

  const reStructGender = Object.keys(sumGender).map((r) => ({
    name: r === "male" ? "ชาย" : "หญิง",
    value: sumGender[r],
  }));
  // console.log(reStructGender);

  const options = {
    title: {
      subtext: `ชาย: ${sumGender.male} คน\nหญิง: ${sumGender.female} คน`,
      left: "left",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "50",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: reStructGender,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="deathByGender w-full h-fit">
      <h1 className="text-lg font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามเพศ</h1>
      <ReactECharts option={options} />
    </div>
  );
};

export default GenderChart;
