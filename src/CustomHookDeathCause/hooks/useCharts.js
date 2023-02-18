import { useState, useEffect } from "react";


export const useChartOption = ({ currentYear, yearLists,thailandDeathCause }) => {
  const [chartOption1, setChartOption1] = useState({});
  const [chartOption2, setChartOption2] = useState({});

  useEffect(() => {
    const _deathByYear = yearLists
      ?.map((year) => {
        const totalDeath = thailandDeathCause
          ?.filter((r) => r.year === year)
          .reduce(
            (acc, r) => ({
              death: acc.death + r.deathFemale + r.deathMale,
              deathFemale: acc.deathFemale + r.deathFemale,
              deathMale: acc.deathFemale + r.deathMale,
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
    console.log("deathByYear", _deathByYear);
    const _chartOption1 = {
      xAxis: {
        type: "category",
        data: _deathByYear.map((r) => r.year),
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
          data: _deathByYear.map((r) => r.death),
          type: "line",
          smooth: true,
          lineStyle: { color: "#bf444c", width: 5, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };
    setChartOption1(_chartOption1);

    const deathCauseDatas = thailandDeathCause.filter(
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
  }, [currentYear]);

  return {
    chartOption1,
    chartOption2,
  };
};
