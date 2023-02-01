// import ReactECharts from "echarts-for-react";

import thailandDeathCause from "./thailand-death-cause.json";

const YEAR = 2557;

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

// console.log(tdcByProvince(tdcByYear(YEAR)));

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

// console.log(tdcByCOD(tdcByYear(YEAR)));

const Dashboard1 = () => {
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
    <div className="flex flex-row gap-8 font-nstl">
      {/* <ReactECharts option={option} /> */}
      <div className="flex flex-col gap-4">
        {tdcByProvince(tdcByYear(YEAR)).map((cause, idx) => (
          <div key={idx} className="flex flex-row gap-4">
            <div>{cause.provinceName}</div>
            <div>{cause.deathTotal.toLocaleString("TH")}</div>
            <div>
              {(
                (cause.deathTotal * 100) /
                tdcDeathTotal(tdcByYear(YEAR))
              ).toFixed(2)}
              %
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {tdcByCOD(tdcByYear(YEAR)).map((cause, idx) => (
          <div key={idx} className="flex flex-row gap-4">
            <div>{cause.causeOfDeath}</div>
            <div>{cause.deathTotal.toLocaleString("TH")}</div>
            <div>
              {(
                (cause.deathTotal * 100) /
                tdcDeathTotal(tdcByYear(YEAR))
              ).toFixed(2)}
              %
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard1;
