import { useState, useEffect } from "react";

export const useChart2 = ({ deathCauseDatas, currentYear }) => {
  const [option2, setOption2] = useState({});

  useEffect(() => {
    const tempDeathBySex = deathCauseDatas?.reduce(
      (acc, r) => ({
        deathMale: acc.deathMale + r.deathMale,
        deathFemale: acc.deathFemale + r.deathFemale,
      }),
      { deathMale: 0, deathFemale: 0 }
    );

    console.log("tempDeathBySex", tempDeathBySex);

    const tempOption2 = {
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
            { value: tempDeathBySex.deathMale, name: "ชาย" },
            { value: tempDeathBySex.deathFemale, name: "หญิง" },
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
    setOption2(tempOption2);
  }, [deathCauseDatas]);
  return { option2, setOption2 };
};
