import { useCharts, useCalculateDeath } from "./hooks"
import thailandDeathCause from "../DeathCauseAnswer/thailand-death-cause.json";
import ReactECharts from "echarts-for-react";


//render
const DeathByCause = ({ totalDeath, deathByCauses, cause, setCause }) => (
  <div className="bg-blue-100 w-1/3 p-4">
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByCauses?.map((r, idx) => (
          <tr key={idx}>
            <td
              onClick={() => setCause(r)}
              className="cursor-pointer hover:bg-teal-300 active:bg-red-300"
            >
              {r.cause}
            </td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
//render
const DeathByProvince = ({ totalDeath, deathByProvinces }) => (
  <div className="bg-amber-100 w-1/3 p-4">
    <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces?.map((r, idx) => (
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
//render
const DeathChart = ({ chartOption1, chartOption2 }) => (
  <div className="bg-green-100 w-1/3 p-4">
    <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
    <ReactECharts option={chartOption1} />
    <div className="font-bold mb-2">การเสียชีวิตตามเพศ</div>
    <ReactECharts option={chartOption2} />
  </div>
);
//render
const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => {
  return (
    <div>
      <div className="mt-4">
        เลือกปีพ.ศ.
        <select
          onChange={(e) => setCurrentYear(e.target.value)}
          value={currentYear}
        >
          {yearLists.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>การเสียชีวิตของปีพ.ศ.{currentYear}</div>
    </div>
  );
};
//home page
const DeathCauseHome = () => {
  //const data
  const yearLists = [...new Set(thailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  );
  //use hook1 useCharts
  const {
    chartOption1,
    chartOption2,
  } = useCharts({ yearLists });

  //use hook2  useCalculateDeath
  const {
    currentYear,
    setCurrentYear,
    totalDeath,
    deathByCauses,  
    deathByProvinces,

  } = useCalculateDeath({ thailandDeathCause,yearLists });
  console.log("thailandDeathCause",thailandDeathCause);
  console.log("yearLists,currentYear, totalDeath, deathByCauses",yearLists,currentYear, totalDeath, deathByCauses);
  //render
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="flex space-x-4 mt-4">
        <DeathByCause totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince
          totalDeath={totalDeath}
          deathByProvinces={deathByProvinces}
        />
        <DeathChart chartOption1={chartOption1} chartOption2={chartOption2} />
      </div>
    </div>
  );
};

export default DeathCauseHome;
