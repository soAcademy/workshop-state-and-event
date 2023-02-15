import { useEffect,useState } from "react";
export const useCalculateDeath = ({thailandDeathCause,yearLists})=>{

  const [currentYear, setCurrentYear] = useState(2559);  
  const [totalDeath, setTotalDeath] = useState(0);       
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  const [cause, setCause] = useState();

  useEffect(()=>{
    // console.log("useCalculateDeath>>>>>>>",thailandDeathCause,yearLists);
    const deathCauseDatas = thailandDeathCause.filter(
      (r) => r.year == currentYear
    );
     
    const _totalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );
    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((cause) => cause.causeOfDeath)),
    ];
    // console.log("deathCauseLists", deathCauseLists);
    const _deathByCauses = deathCauseLists
      .map((cause) => {
        const _totalDeath = thailandDeathCause
          .filter((r) => r.causeOfDeath === cause)
          // console.log("totalDeath by cause",totalDeath)
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
          death: _totalDeath.death,
          deathFemale: _totalDeath.deathFemale,
          deathMale: _totalDeath.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log("deathByCause", _deathByCauses);

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
        // console.log("totalDeath after reduce", totalDeath);
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
    // console.log("deathByYear", _deathByYear);

    setTotalDeath(_totalDeath);
    setDeathByCauses(_deathByCauses);
    setDeathByProvinces(_deathByProvinces);

  },[currentYear]);
  return {

    currentYear,setCurrentYear,
    totalDeath, setTotalDeath,
    deathByCauses, setDeathByCauses,
    deathByProvinces, setDeathByProvinces,
    cause, setCause,
  };
};
