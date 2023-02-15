import { useState, useEffect } from "react";

export const useDeathByProvinces = ({
  deathCauseDatas,
  currentYear,
  provinceList,
}) => {
  const [deathByProvinces, setDeathByProvinces] = useState([]);

  useEffect(() => {
    const tempDeathByProvinces = provinceList
      ?.map((province) => {
        const sum = deathCauseDatas
          ?.filter((r) => r.provinceName === province)
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
          province,
          death: sum.death,
          deathFemale: sum.deathFemale,
          deathMale: sum.deathMale,
        };
      })
      .sort((a, b) => b.death - a.death);
    setDeathByProvinces(tempDeathByProvinces);
    console.log("tempDeathByProvinces", tempDeathByProvinces);
  }, [deathCauseDatas]);
  return { deathByProvinces, setDeathByProvinces };
};
