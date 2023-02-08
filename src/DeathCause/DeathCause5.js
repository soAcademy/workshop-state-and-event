import { useState } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";

const DeathByCause = ({ currentYear, deathByCauses, totalDeath }) => (
  <div className="bg-gray-100 w-1/3 mr-2 p-2">
    <div className="text-center font-bold mb-2">
      สาเหตุการเสียชีวิตปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByCauses.map((r) => (
          <tr>
            <td>{r.cause}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathByProvince = ({ currentYear, deathByProvinces, totalDeath }) => (
  <div className="bg-gray-200 w-1/3 mx-2 p-2">
    <div className="text-center font-bold mb-2">
      จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces.map((r) => (
          <tr>
            <td>{r.province}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathChart = () => (
  <div className="bg-gray-300 w-1/3 ml-2 p-2">
    <div className="text-center font-bold mb-2">แนวโน้มการเสียชีวิต</div>
  </div>
);

const YearFilter = ({ yearList, setCurrentYear, currentYear }) => (
  <div className="mt-4 flex">
    <div className="">เลือกปี</div>
    <select
      className="ml-2"
      onChange={(e) => setCurrentYear(e.target.value)}
      value={currentYear}
    >
      {yearList.map((r) => (
        <option>{r}</option>
      ))}
    </select>
  </div>
);

const DeathCause5 = () => {
  const [currentYear, setCurrentYear] = useState(2559);
  console.log("currentYear", currentYear);

  const deathCauseDatas = ThailandDeathCause;

  const yearList = [...new Set(deathCauseDatas.map((r) => r.year))].sort(
    (a, b) => a - b
  );
  console.log("yearList", yearList);

  const totalDeath = deathCauseDatas.reduce(
    (acc, r) => acc + r.deathMale + r.deathFemale,
    0
  );
  console.log("totalDeath", totalDeath);

  const causeList = [...new Set(deathCauseDatas.map((r) => r.causeOfDeath))];
  console.log("causeList", causeList);

  const deathByCauses = causeList
    .map((cause) => {
      const sum = deathCauseDatas
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
        death: sum.death,
        deathFemale: sum.deathFemale,
        deathMale: sum.deathMale,
      };
    })
    .sort((a, b) => b.death - a.death);
  console.log("deathByCauses", deathByCauses);

  const provinceList = [...new Set(deathCauseDatas.map((r) => r.provinceName))];
  console.log("provinceList", provinceList);

  const deathByProvinces = provinceList
    .map((province) => {
      const sum = deathCauseDatas
        .filter((r) => r.provinceName === province)
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
        province,
        death: sum.death,
        deathFemale: sum.deathFemale,
        deathMale: sum.deathMale,
      };
    })
    .sort((a, b) => b.death - a.death);
  console.log("deathByProvinces", deathByProvinces);
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <YearFilter
        yearList={yearList}
        setCurrentYear={setCurrentYear}
        currentYear={currentYear}
      />
      <div className="mt-4">ปี {currentYear}</div>
      <div className="flex mt-4">
        <DeathByCause
          currentYear={currentYear}
          deathByCauses={deathByCauses}
          totalDeath={totalDeath}
        />
        <DeathByProvince
          currentYear={currentYear}
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause5;
