import { useState } from "react";
// import ReactECharts from "echarts-for-react";

import thailandDeathCause from "./thailand-death-cause.json";

const yearList = (tdc) => [...new Set(tdc.map((entry) => entry.year))].sort();

const tdcByYear = (year) =>
  thailandDeathCause
    .filter((entry) => entry.year === year)
    .map((entry) => ({
      ...entry,
      deathTotal: entry.deathMale + entry.deathFemale,
    }))
    .sort((a, b) => b.deathTotal - a.deathTotal);

const tdcDeathTotal = (tdc) =>
  tdc.reduce((acc, cur) => acc + cur.deathTotal, 0);

const provinceList = (tdc) => [
  ...new Set(tdc.map((entry) => entry.provinceName)),
];

const tdcByProvince = (tdc) =>
  provinceList(tdc)
    .map((province) => ({
      provinceName: province,
      deathTotal: tdc
        .filter((entry) => entry.provinceName === province)
        .reduce((acc, cur) => acc + cur.deathTotal, 0),
    }))
    .sort((a, b) => b.deathTotal - a.deathTotal);

const codList = (tdc) => [...new Set(tdc.map((entry) => entry.causeOfDeath))];

const tdcByCOD = (tdc) =>
  codList(tdc)
    .map((cod) => ({
      causeOfDeath: cod,
      deathTotal: tdc
        .filter((entry) => entry.causeOfDeath === cod)
        .reduce((acc, cur) => acc + cur.deathTotal, 0),
    }))
    .sort((a, b) => b.deathTotal - a.deathTotal);

const Dashboard1 = () => {
  const [year, setYear] = useState(Math.min(...yearList(thailandDeathCause)));

  const handleYearSelect = (e) => {
    e.preventDefault();

    setYear(Number(e.target.options[e.target.options.selectedIndex].value));
  };

  // const option = {
  //   title: {
  //     text: "Order value by date",
  //   },
  //   grid: {
  //     containLabel: true,
  //   },
  //   yAxis: {
  //     type: "category",
  //     data: tdc2557.map((cause) => cause.causeOfDeath),
  //     name: "causeOfDeath",
  //   },
  //   xAxis: {
  //     type: "value",
  //     name: "Number",
  //   },
  //   series: [
  //     {
  //       data: tdc2557.map((cause) => cause.deathMale),
  //       type: "bar",
  //       // lineStyle: { color: "#123456", width: 2, type: "dashed" },
  //     },
  //   ],
  //   tooltip: {
  //     trigger: "axis",
  //   },
  // };

  return (
    <>
      <div>
        <label
          htmlFor="year"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          เลือกปี :
        </label>
        <select
          id="year"
          onChange={(e) => handleYearSelect(e)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        >
          {yearList(thailandDeathCause).map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-row gap-8 font-nstl">
        <div className="flex flex-col gap-4">
          {tdcByProvince(tdcByYear(year)).map((cause, idx) => (
            <div key={idx} className="flex flex-row gap-4">
              <div>{cause.provinceName}</div>
              <div>{cause.deathTotal.toLocaleString("TH")}</div>
              <div>
                {(
                  (cause.deathTotal * 100) /
                  tdcDeathTotal(tdcByYear(year))
                ).toFixed(2)}
                %
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {tdcByCOD(tdcByYear(year)).map((cause, idx) => (
            <div key={idx} className="flex flex-row gap-4">
              <div>{cause.causeOfDeath}</div>
              <div>{cause.deathTotal.toLocaleString("TH")}</div>
              <div>
                {(
                  (cause.deathTotal * 100) /
                  tdcDeathTotal(tdcByYear(year))
                ).toFixed(2)}
                %
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <ReactECharts option={option} /> */}
    </>
  );
};

export default Dashboard1;
