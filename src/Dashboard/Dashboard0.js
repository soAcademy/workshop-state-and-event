import React from "react";

const Dashboard = ({ datas }) => {
  // find all death cause
  const deathCauses = datas.map((data) => data.causeOfDeath);
  console.log("deathCauses", deathCauses);

  //  find unique death cause
  const uniqueDeathCauses = [...new Set(deathCauses)];
  console.log("uniqueDeathCauses", uniqueDeathCauses);

  //  filter datas by unique death cause
  const dataByUniqueDeathCauses = uniqueDeathCauses
    .map((uniqueDeathCause) => {
      const filteredDeathCause = datas.filter(
        (r) => r.causeOfDeath === uniqueDeathCause
      );
      console.log("filteredDeathCause", filteredDeathCause);
      const sumOfDeath = filteredDeathCause.reduce(
        (acc, r) => {
          acc.deathFemale += r.deathFemale;
          acc.deathMale += r.deathMale;
          return acc;
        },
        { deathFemale: 0, deathMale: 0 }
      );
      console.log("sumOfDeath : ", sumOfDeath);
      return {
        causeOfDeath: uniqueDeathCause,
        deathFemale: sumOfDeath.deathFemale,
        deathMale: sumOfDeath.deathMale,
        deathTotal: sumOfDeath.deathFemale + sumOfDeath.deathMale,
      };
    })
    .sort((a, b) => b.deathTotal - a.deathTotal);
  console.log("dataByUniqueDeathCauses : ", dataByUniqueDeathCauses);

  const sumDeathByGender = dataByUniqueDeathCauses.reduce(
    (acc, r) => {
      // acc + r.deathFemale;
      // acc + r.deathMale;
      acc = {
        deathFemale: acc.deathFemale + r.deathFemale,
        deathMale: acc.deathMale + r.deathMale,
      };
      return acc;
    },
    { deathFemale: 0, deathMale: 0 }
  );
  console.log("sumDeathByGender : ", sumDeathByGender);
  const totalDeath = sumDeathByGender.deathFemale + sumDeathByGender.deathMale;

  return (
    <>
      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-xl">Cause of Death 2558</h1>
        <div className="flex mx-auto w-full">
          <div className="w-7/12">ทั้งหมด</div>
          <div className="w-1/12">{(totalDeath).toLocaleString("TH")}</div>
          <div className="w-1/12">{(totalDeath * 100) / totalDeath}%</div>
        </div>

        {dataByUniqueDeathCauses.map((r) => (
          <div className="flex">
            <div className="w-7/12">{(r.causeOfDeath)}</div>
            <div className="w-1/12">{(r.deathTotal).toLocaleString("TH")}</div>
            <div className="w-1/12">{((r.deathMale * 100) / totalDeath).toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
