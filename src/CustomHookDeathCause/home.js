import thailandDeathCause from "../DeathCauseAnswer/thailand-death-cause.json";
import ReactECharts from "echarts-for-react";
import {
  useChartOption,
  useTotalDeath,
  useDeathByCause,
  useDeathByProvince,
} from "./hooks";

const DeathByCause = ({ totalDeath, deathByCauses, setCause }) => (
  <div className="bg-gradient-to-b from-red-400 to-blue-200 w-1/3 p-4 rounded-lg ">
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
    <table className="w-full ">
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
  <div className="bg-gradient-to-b from-slate-400 to-blue-200 w-1/3 p-4 rounded-lg  ">
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
  <div className="bg-red-100 w-1/3 p-4 rounded-lg">
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
      <div className="mt-4 ">
        <div><h1 className="text-white">เลือกปีพ.ศ.</h1></div>
        <select
          onChange={(e) => setCurrentYear(e.target.value)}
          value={currentYear}
        >
          {yearLists.map((year) => (
            <option key={year} value={year} className="text-black">
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="text-white">การเสียชีวิตของปีพ.ศ.{currentYear}</div>
    </div>
  );
};
//calculate
const DeathCause8 = () => {
  //const data
  const yearLists = [...new Set(thailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  );
  console.log(">>>>>>>>>>>", yearLists);

  const {
    deathByProvinces,
    currentYear,
    setCurrentYear,
  } = useDeathByProvince({ thailandDeathCause });
  const { totalDeath } = useTotalDeath({
    thailandDeathCause,
    currentYear,
  });
  const { deathByCauses } = useDeathByCause({
    currentYear,
    thailandDeathCause,
  });
  const { chartOption1, chartOption2 } = useChartOption({
    currentYear,
    yearLists,
    thailandDeathCause,
  }); 

  return (
    <div className="p-4 font-kanit bg-slate-800">
      <div>
      <h1 className="font-bold text-xl text-white">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <div><img src="Death-Dashboard.png"/></div>
      </div>
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="flex space-x-4 mt-4 ">
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

export default DeathCause8;
