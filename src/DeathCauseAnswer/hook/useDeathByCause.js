import { useEffect, useState } from "react";
import ThailandDeathCause from "../thailand-death-cause.json";

export const useDeathByCause = ({ currentYear, selectedCause }) => {
  const [deathByCauses, setDeathByCauses] = useState([]);
  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );

    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
    ];
    // console.log(_deathCauseLists);

    const _deathByCauses = deathCauseLists
      .map((cause) => {
        const totalDeath = deathCauseDatas
          .filter((r) => r.causeOfDeath === cause)
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
          cause,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log(_deathByCauses);
    setDeathByCauses(_deathByCauses);
  }, [currentYear, selectedCause]);
  return {
    deathByCauses,
    setDeathByCauses,
  };
};
