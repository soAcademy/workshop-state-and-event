import { useEffect, useState } from "react";
import ThailandDeathCause from "../thailand-death-cause.json";
import ReactECharts from "echarts-for-react";

export const useChartOption2 = ({ currentYear, selectedCause }) => {
  const [chartOption2, setChartOption2] = useState({});
  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    const _deathBySex = deathCauseDatas.reduce(
      (acc, r) => ({
        death: acc.death + r.deathFemale + r.deathMale,
        deathFemale: acc.deathFemale + r.deathFemale,
        deathMale: acc.deathMale + r.deathMale,
      }),
      {
        death: 0,
        deathFemale: 0,
        deathMale: 0,
      }
    );
    console.log(_deathBySex);

    const _chartOption2 = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          type: "pie",
          radius: "50%",
          data: [
            { value: _deathBySex.deathMale, name: "ชาย" },
            { value: _deathBySex.deathFemale, name: "หญิง" },
          ],
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
    setChartOption2(_chartOption2);
  }, [currentYear, selectedCause]);
  return {
    chartOption2,
    setChartOption2,
  };
};