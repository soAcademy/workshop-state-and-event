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
      console.log("sumOfDeath 1 : ", sumOfDeath);
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
      <div className="m-2 w-1/3 border-2">
        <h1 className="font-bold text-xl pt-3 px-3">สาเหตุการเสียชีวิต ปี 2558</h1>
        <div className="flex px-2">
          <div className="w-2/3 mx-2">ทั้งหมด</div>
          <div className="w-1/6 mx-2 bg-sky-400">{(totalDeath).toLocaleString("TH")}</div>
          <div className="w-1/6 mx-2 bg-sky-400">{(totalDeath * 100) / totalDeath}%</div>
        </div>

        {dataByUniqueDeathCauses.map((r) => (
          <div className="flex px-2">
            <div className="w-2/3 mx-2">{(r.causeOfDeath)}</div>
            <div className="w-1/6 mx-2 bg-sky-400">{(r.deathTotal).toLocaleString("TH")}</div>
            <div className="w-1/6 mx-2 bg-sky-400">{((r.deathTotal * 100) / totalDeath).toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
