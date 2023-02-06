import React from "react";

const Dashboard2 = ({ datas }) => {
  // find all provinces
  const allProvinces = datas.map((data) => data.provinceName);
  console.log("All Provinces : ", allProvinces);

  // find unique province names
  const provinces = [...new Set(allProvinces)];
  console.log("unique province names : ", provinces);

  //  filter datas by unique province names
  const dataDeathByProvinces = provinces
    .map((province) => {
      const filterDeathByProvinces = datas.filter(
        (r) => r.provinceName === province
      );
      console.log("filterDeathByProvinces : ", filterDeathByProvinces);
      const sumOfDeath = filterDeathByProvinces.reduce(
        (acc, r) => {
          acc.deathFemale += r.deathFemale;
          acc.deathMale += r.deathMale;
          return acc;
        },
        { deathFemale: 0, deathMale: 0 }
      );
      console.log("sumOfDeath 2 : ", sumOfDeath);
      return {
        province,
        deathFemale: sumOfDeath.deathFemale,
        deathMale: sumOfDeath.deathMale,
        deathTotal: sumOfDeath.deathFemale + sumOfDeath.deathMale,
      };
    })
    .sort((a, b) => b.deathTotal - a.deathTotal);
  console.log("dataDeathByProvinces : ", dataDeathByProvinces);

  const sumDeath = dataDeathByProvinces.reduce(
    (acc, r) => {
      // acc + r.deathFemale;
      // acc + r.deathMale;
      acc = {
        deathFemale: acc.deathFemale + r.deathFemale,
        deathMale: acc.deathMale + r.deathMale,
        deathTotal: acc.deathTotal + r.deathTotal,
      };
      return acc;
    },
    { deathFemale: 0, deathMale: 0, deathTotal: 0 }
  );
  console.log("sumDeath : ", sumDeath);

  // render below v v v v v v v v v v v v v
  return <>
  <div className="m-2 w-1/3 border-2"> <h1 className="font-bold text-xl pt-3 px-3">จำนวนผู้เสียชีวิตแยกตามจังหวัด ปี 2558</h1>
        <div className="flex px-2">
          <div className="w-2/3 mx-2">ทั้งหมด</div>
          <div className="w-1/6 mx-2">{(sumDeath.deathTotal).toLocaleString("TH")}</div>
          <div className="w-1/6 mx-2">{(sumDeath.deathTotal * 100) / sumDeath.deathTotal}%</div>
        </div>

        {dataDeathByProvinces.map((r) => (
          <div className="flex px-2">
            <div className="w-2/3 mx-2">{(r.province)}</div>
            <div className="w-1/6 mx-2">{(r.deathTotal).toLocaleString("TH")}</div>
            <div className="w-1/6 mx-2">{((r.deathTotal * 100) / sumDeath.deathTotal).toFixed(2)}%</div>
          </div>
        ))}</div>
  
  </>
};

export default Dashboard2;
