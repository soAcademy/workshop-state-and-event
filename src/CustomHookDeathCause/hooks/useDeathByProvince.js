import {useState,useEffect} from 'react'

export const useDeathByProvince = ({thailandDeathCause })=>{
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  const [cause, setCause] = useState();
  const [currentYear, setCurrentYear] = useState(2559);

  useEffect(() => {
    const deathCauseDatas = thailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    const provinceLists = [
      ...new Set(thailandDeathCause.map((r) => r.provinceName)),
    ];
    const _deathByProvinces = provinceLists
      .map((province) => {
        const totalDeath = deathCauseDatas
          .filter(
            (r) =>
              r.provinceName === province &&
              (cause === undefined || cause === r.causeOfDeath)
          )
          // console.log("filter",totalDeath);
          .reduce(
            (acc, r) => ({
              death: acc.death + r.deathFemale + r.deathMale,
              deathFemale: acc.deathFemale + r.deathFemale,
              deathMale: acc.deathMale + r.deathMale,
            }),
            { death: 0, deathFemale: 0, deathMale: 0 }
          );
        console.log("totalDeath after reduce", totalDeath);
        return {
          province,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log(deathByProvinces);

    setDeathByProvinces(_deathByProvinces);
  }, [currentYear]);
  return{
    currentYear,
    deathByProvinces, 
    setDeathByProvinces
  }
};