import ReactECharts from "echarts-for-react";

import thailandDeathCause from "./thailand-death-cause.json";

const tdc2557 = thailandDeathCause
  .filter((entry) => entry.year === 2557)
  .map((entry) => ({
    ...entry,
    deathTotal: entry.deathMale + entry.deathFemale,
  }))
  .sort((a, b) => b.deathTotal - a.deathTotal);

// console.log(JSON.stringify(tdc2557, null, 2));

const tdc2557total = tdc2557.reduce((acc, cur) => acc + cur.deathTotal, 0);

const provinceList = [...new Set(tdc2557.map((entry) => entry.provinceName))];

// console.log(provinceList);

// const tdc2557byProvince = tdc2557.reduce((acc, cur) => {
//   console.log(cur);

//   const newEntry = acc
//     .filter((entry) => entry.provinceName === cur.provinceName)
//     .pop() || { provinceName: cur.provinceName, deathTotal: 0 };

//   // console.log("newEntry:");
//   // console.log(newEntry);

//   // newEntry.deathMale = newEntry.deathMale + cur.deathMale;
//   // newEntry.deathFemale = newEntry.deathFemale + cur.deathFemale;
//   newEntry.deathTotal = newEntry.deathTotal + cur.deathTotal;

//   acc.push(newEntry);
//   // console.log("acc:");
//   // console.log(acc);

//   return acc;
// }, []);

const tdc2557byProvince = provinceList
  .map((province) => ({
    provinceName: province,
    deathTotal: tdc2557
      .filter((entry) => entry.provinceName === province)
      .reduce((acc, cur) => acc + cur.deathTotal, 0),
  }))
  .sort((a, b) => b.deathTotal - a.deathTotal);

// console.log(tdc2557);
console.log(tdc2557byProvince);

const codList = [...new Set(tdc2557.map((entry) => entry.causeOfDeath))];

// console.log(codList);

// const tdc2557byCod = tdc2557

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
      {tdc2557byProvince.map((cause) => (
        <>
          <div>{cause.provinceName}</div>
          <div>{cause.deathTotal}</div>
          <div>{((cause.deathTotal * 100) / tdc2557total).toFixed(2)}%</div>
        </>
      ))}
    </>
  );
};

export default Dashboard1;
