import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";

export const DeathGenderPie = ({ data }) => {
  const [totalDeathMale, setTotalDeathMale] = useState(0);
  const [totalDeathFemale, setTotalDeathFemale] = useState(0);
  useEffect(() => {
    const _totalDeathMale = data.reduce((acc, i) => {
      acc += i.deathMale;
      return acc;
    }, 0);
    const _totalDeathFemale = data.reduce((acc, i) => {
      acc += i.deathFemale;
      return acc;
    }, 0);
    setTotalDeathFemale(_totalDeathFemale);
    setTotalDeathMale(_totalDeathMale);
  }, [data]);
  const options = {
    textStyle: {
      fontFamily: "Kanit",
    },
    grid: {
      containLabel: true,
      width: "50%",
      height: "50%",
      left: "0%",
    },
    series: [
      {
        name: "Gender",
        type: "pie",
        data: [
          {
            value: totalDeathMale,
            name: "ชาย",
          },
          {
            value: totalDeathFemale,
            name: "หญิง",
          },
        ],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        radius: ["40%", "70%"],
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
            formatter: "{b} ({d}%)",
            // position: 'outside'
          },
          focus: "self",
        },
      },
    ],
    legend: {
      position: "left",
      left: 0,
      orient: "vertical",
    },
  };
  return (
    <div>
      <p>ชาย : {totalDeathMale.toLocaleString()}</p>
      <p>หญิง : {totalDeathFemale.toLocaleString()}</p>
      <ReactECharts option={options} />
    </div>
  );
};
