import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";
import {
  useDeathByCause,
  usePrepDatas,
  useDeathByProvinces,
  useChart1,
  useChart2,
} from "./hooks";

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
const DeathChart = ({ currentYear, option1, option2 }) => (
  <div className="bg-gray-300 w-1/3 ml-2 p-2">
    <div className="text-center font-bold mb-2">แนวโน้มการเสียชีวิต</div>
    <ReactECharts option={option1} />
    <div className="font-bold mb-2">
      จำนวนผู้เสียเสียชีวิตแยกตามเพศปี {currentYear}
    </div>
    <ReactECharts option={option2} />
  </div>
);

const YearFilter = ({ yearLists, setCurrentYear, currentYear }) => (
  <div className="mt-4 flex">
    <div className="">เลือกปี</div>
    <select
      className="ml-2"
      onChange={(e) => setCurrentYear(Number(e.target.value))}
      value={currentYear}
    >
      {yearLists.map((r) => (
        <option>{r}</option>
      ))}
    </select>
  </div>
);

const DeathCause8_2 = () => {
  const {
    totalDeath,
    currentYear,
    setCurrentYear,
    deathCauseDatas,
    yearLists,
    causeList,
    setCauseList,
    provinceList,
    setProvinceList,
  } = usePrepDatas();

  const { deathByCauses } = useDeathByCause({
    deathCauseDatas,
    currentYear,
    causeList,
  });

  const { deathByProvinces } = useDeathByProvinces({
    deathCauseDatas,
    currentYear,
    provinceList,
  });
  const { option1 } = useChart1({ yearLists, currentYear });
  const { option2 } = useChart2({ deathCauseDatas, currentYear });

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <YearFilter
        yearLists={yearLists}
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
        <DeathChart
          currentYear={currentYear}
          option1={option1}
          option2={option2}
        />
      </div>
    </div>
  );
};

export default DeathCause8_2;
