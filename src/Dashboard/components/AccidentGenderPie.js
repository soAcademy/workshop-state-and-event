import ReactECharts from "echarts-for-react";

export const AccidentGenderPie = ({ genderStat }) => {
  const options = {
    series: [
      {
        name: "Gender",
        type: "pie",
        data: [
          {
            value: genderStat.male,
            name: "ชาย",
          },
          {
            value: genderStat.female,
            name: "หญิง",
          },
        ],
        label: {
          show: false,
          position: "center",
        },
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
          label: {
            show: true,
            fontSize: "10",
            fontWeight: "bold",
            formatter: "{b}: {@2012} ({d}%)",
          },
          focus: "self",
        },
        tooltip: {
          trigger: "items",
        },
      },
    ],
  };
  return <ReactECharts option={options} />;
};
