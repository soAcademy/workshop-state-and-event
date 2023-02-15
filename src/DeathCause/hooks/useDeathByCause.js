import { useState, useEffect } from "react";

export const useDeathByCause = ({
  deathCauseDatas,
  currentYear,
  causeList,
}) => {
  const [deathByCauses, setDeathByCauses] = useState([]);

  useEffect(() => {
    const tempDeathByCauses = causeList
      .map((cause) => {
        const sum = deathCauseDatas
          ?.filter((r) => r.causeOfDeath === cause)
          ?.reduce(
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
          death: sum.death,
          deathFemale: sum.deathFemale,
          deathMale: sum.deathMale,
        };
      })
      .sort((a, b) => b.death - a.death);
    setDeathByCauses(tempDeathByCauses);
    console.log("tempDeathByCauses", tempDeathByCauses);
  }, [deathCauseDatas]);
  return { deathByCauses, setDeathByCauses };
};
