import { useState, useEffect } from "react";
import thailandDeathCause from "./thailand-death-cause.json";
import ReactECharts from "echarts-for-react";

export const useCharts = ({
  yearLists,
  deathCauseDatas,
  currentYear,
  setCurrentYear,
  totalDeath,
  setTotalDeath,
  deathByCauses,
  setDeathByCauses,
  deathByProvinces,
  setDeathByProvinces,
  _deathByYear

}) => {
  const [chartOption1, setChartOption1] = useState({});
  const [chartOption2, setChartOption2] = useState({});
  const [cause, setCause] = useState();

  useEffect(() => {
   
    //
    const _chartOption1 = {
      xAxis: {
        type: "category",
        data: _deathByYear?.map((r) => r.year),
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
          data: _deathByYear?.map((r) => r.death),
          type: "line",
          smooth: true,
          lineStyle: { color: "#bf444c", width: 5, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };

    const _deathBySex = deathCauseDatas?.reduce(
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
    console.log("_deathBySex", _deathBySex);
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
            { value: _deathBySex?.deathMale, name: "ชาย" },
            { value: _deathBySex?.deathFemale, name: "หญิง" },
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

    setChartOption1(_chartOption1);
    setChartOption2(_chartOption2);
  }, [currentYear]);

  return {
    currentYear,
    setCurrentYear,
    totalDeath,
    setTotalDeath,
    deathByCauses,
    setDeathByCauses,
    deathByProvinces,
    setDeathByProvinces,
    chartOption1,
    setChartOption1,
    chartOption2,
    setChartOption2,
    cause,
    setCause,
  };
};
