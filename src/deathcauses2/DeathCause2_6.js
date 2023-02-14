import React, { useState, useEffect } from "react";
import thailandDeathCause from "./thailand-death-cause.json";

const CausesOfDeath = (props) => {
  const { totalDeath, deathByCauses } = props;
  return (
    <div className="bg-red-300 w-1/3">
      <div className="font-bold m-4 ">Causes of Death</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td className="w-1/3">ทั้งหมด</td>
            <td className="w-1/3 text-right">{totalDeath.toLocaleString()}</td>
            <td className="w-1/3 text-center">100%</td>
          </tr>

          {deathByCauses.map((r, idx) => (
            <tr key={idx}>
              <td className="w-1/3">{r.cause}</td>
              <td className="w-1/3 text-right">{r.death.toLocaleString()}</td>
              <td className="w-1/3 text-center">
                {((r.death / totalDeath) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathByProvince = (props) => {
  const { deathByProvinces, totalDeath } = props;
  return (
    <div className="bg-yellow-300 w-1/3">
      <div className="font-bold m-4 ">Number of Deaths by Province</div>
      <table className="w-full m-4">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces.map((r, idx) => (
            <tr key={idx}>
              <td>{r.province}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathFilter = (props) => {
  const { currentYear, setCurrentYear, yearLists } = props;
  return (
    <div className="flex">
      <h2 className="mt-4 ">ปี พ.ศ {""} </h2>
      <select
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
        className="mt-4 "
      >
        {yearLists.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

const DeathChart = () => {
  return (
    <div className="bg-green-300 w-1/3">
      <div>Records of Death</div>
    </div>
  );
};

const DeathCause2_6 = () => {
  const [currentYear, setCurrentYear] = useState("2559");
  const [deathByCauses, setDeathByCauses] = useState([])
  const [deathByProvinces, setDeathByProvinces] = useState([])
  const [totalDeath, setTotalDeath] = useState(0)
  const yearLists = [...new Set(thailandDeathCause.map((r) => r.year))];

  useEffect(() => {
  
const deathCauseDatas = thailandDeathCause.filter((r) => r.year == currentYear)
  const causeOfDeathList = [
    ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
  ];
  console.log("causeofDeathList", causeOfDeathList);
  const _deathByCauses = causeOfDeathList.map((cause) => {
    const causeOfDeathFiltered = deathCauseDatas.filter(
      (r) => r.causeOfDeath === cause
    );
    console.log("causeOfDeathFiltered", causeOfDeathFiltered);
    const totalDeathCause = causeOfDeathFiltered.reduce(
      (acc, r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
      },
      { deathFemale: 0, deathMale: 0 }
    );

    return {
      cause,
      deathMale: totalDeathCause.deathMale,
      deathFemale: totalDeathCause.deathFemale,
      death: totalDeathCause.deathMale + totalDeathCause.deathFemale,
    };
  });

  const deathByProvinceList = [
    ...new Set(deathCauseDatas.map((r) => r.provinceName)),
  ];
  // console.log("causeofDeathList", causeOfDeathList)
  const _deathByProvinces = deathByProvinceList.map((province) => {
    const deathByProvinceFiltered = deathCauseDatas.filter(
      (r) => r.provinceName === province
    );
    // console.log("causeOfDeathFiltered", causeOfDeathFiltered)
    const totalDeathByProvince = deathByProvinceFiltered.reduce(
      (acc, r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
      },
      { deathFemale: 0, deathMale: 0 }
    );
    console.log("totalDeathByProvince", totalDeathByProvince);
    return {
      province,
      deathMale: totalDeathByProvince.deathMale,
      deathFemale: totalDeathByProvince.deathFemale,
      death: totalDeathByProvince.deathMale + totalDeathByProvince.deathFemale,
    };
  });

  const _totalDeath = deathCauseDatas.reduce(
    (acc, r) => (acc = acc + r.deathMale + r.deathFemale),
    0
  );

  console.log("totalDeath", totalDeath);
  setDeathByCauses(_deathByCauses)
  setDeathByProvinces(_deathByProvinces);
  setTotalDeath(_totalDeath);
}, [currentYear])
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        Total Number of Deaths and Causes of Death from 2554 - 2559
      </h1>
      <DeathFilter yearLists={yearLists} setCurrentYear={setCurrentYear} />
      <div className="flex space-x-4 mt-4 ">
        <CausesOfDeath totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause2_6;
