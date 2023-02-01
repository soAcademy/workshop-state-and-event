import ReactECharts from "echarts-for-react";

import thailandDeathCause from "./thailand-death-cause.json";

const tdc2557 = thailandDeathCause
  .filter((entry) => entry.year === 2557 && entry.provinceKey === 19)
  .map((entry) => ({
    ...entry,
    deathTotal: entry.deathMale + entry.deathFemale,
  }))
  .sort((a, b) => b.deathTotal - a.deathTotal);

// console.log(JSON.stringify(tdc2557, null, 2));

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
    <>
      {/* <ReactECharts option={option} /> */}
      {tdc2557.map((cause) => (
        <>
          <div>{cause.causeOfDeath}</div>
          <div>{cause.deathTotal}</div>
        </>
      ))}
    </>
  );
};

export default Dashboard1;
