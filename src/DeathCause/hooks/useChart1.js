import { useState, useEffect } from "react";
import ThailandDeathCause from "../thailand-death-cause.json";

export const useChart1 = ({ yearLists, currentYear }) => {
  const [option1, setOption1] = useState({});

  useEffect(() => {
    const tempDeathByYear = yearLists?.map((year) => {
      const sum = ThailandDeathCause?.filter(
        (r) => r.year === Number(year)
      ).reduce((acc, r) => acc + r.deathFemale + r.deathMale, 0);
      console.log("sum", sum);

      return {
        year: year,
        sumDeath: sum,
      };
    });

    console.log("tempDeathByYear", tempDeathByYear);

    const tempOption1 = {
      xAxis: {
        type: "category",
        data: tempDeathByYear.map((r) => r.year),
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
          data: tempDeathByYear.map((r) => r.sumDeath),
          type: "line",
          smooth: true,
          lineStyle: { color: "blue", width: 3, type: "dashed" },
        },
      ],
      grid: {
        left: "5%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
      },
    };
    setOption1(tempOption1);
    console.log("tempOption1", tempOption1);
  }, [yearLists]);
  return { option1, setOption1 };
};
