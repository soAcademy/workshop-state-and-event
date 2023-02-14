import { useEffect, useState } from "react";
import ThailandDeathCause from "../thailand-death-cause.json"
import ReactECharts from "echarts-for-react";

export const useChartOption1 = ({ yearLists, currentYear, selectedCause }) => {
  const [chartOption1, setChartOption1] = useState({});
  useEffect(() => {
    const _deathByYears = yearLists
      .map((year) => {
        const totalDeath = ThailandDeathCause.filter(
          (r) => r.year == year
        ).reduce(
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
        return {
          year,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .sort((a, b) => a.year - b.year);

    console.log(_deathByYears);

    const _chartOption1 = {
      xAxis: {
        type: "category",
        data: _deathByYears.map((r) => r.year),
        name: "ปีพ.ศ.",
      },
      yAxis: {
        type: "value",
        name: "จำนวนผู้เสียชีวิต",
        max: "dataMax",
        min: "dataMin",
      },
      series: [
        {
          data: _deathByYears.map((r) => r.death),
          type: "line",
          smooth: true,
          lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };
    setChartOption1(_chartOption1);
  }, [currentYear, selectedCause]);
  return {
    chartOption1,
    setChartOption1,
  };
};