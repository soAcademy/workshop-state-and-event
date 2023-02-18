import { useState, useEffect } from "react";

export const useDeathByCause = ({currentYear,thailandDeathCause})=>{
  const [deathByCauses, setDeathByCauses] = useState([]);
  useEffect(()=>{
   const deathCauseDatas = thailandDeathCause.filter(
     (r) => r.year == currentYear
   );

   const deathCauseLists = [
     ...new Set(deathCauseDatas.map((cause) => cause.causeOfDeath)),
   ];
   console.log("deathCauseLists", deathCauseLists);

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
   console.log("deathByCause", _deathByCauses);

   setDeathByCauses(_deathByCauses);

  },[currentYear])
 return {
   deathByCauses, 
   setDeathByCauses
 };
};