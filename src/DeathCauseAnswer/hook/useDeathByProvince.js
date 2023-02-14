import { useEffect, useState } from "react";
import ThailandDeathCause from "../thailand-death-cause.json";

export const useDeathByProvinces = ({ currentYear, selectedCause }) => {
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    const provinceLists = [
      ...new Set(deathCauseDatas.map((r) => r.provinceName)),
    ];
    // console.log(_provinceLists);

    const _deathByProvinces = provinceLists
      .map((province) => {
        const totalDeath = deathCauseDatas
          .filter(
            (r) =>
              r.provinceName === province &&
              (selectedCause === undefined
                ? true
                : r.causeOfDeath === selectedCause)
          )
          .reduce(
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
          province,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log(_deathByProvinces);
    setDeathByProvinces(_deathByProvinces);
  }, [currentYear, selectedCause]);
  return {
    deathByProvinces,
    setDeathByProvinces,
  };
};