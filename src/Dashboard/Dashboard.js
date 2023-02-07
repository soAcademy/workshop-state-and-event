import ReactECharts from "echarts-for-react";
import jsonData from "./thailand-death-cause.json";

// ...new Set เพื่อแยกสาเหตุการตายที่ไม่ซ้ำ
// filter ข้อมูล เพื่อหาคนตายด้วยโรคนั้น
// reduce หายอดรวมสาเหตุการตาย แยก ช ฐ
// ทำไม .map อยู่ครอบทั้งหมด
// filter ค่า uniqueDeathCause ที่เป็น array ได้หรือไม่

const Dashboard = () => {
  const data = jsonData.thailand;
  const uniqueDeathCause = [...new Set(data.map((r) => r.causeOfDeath))];
  // console.log("uniqueDeathCause", uniqueDeathCause);

  // const uniqueProvice = [...new Set(data.map((r) => r.provinceName))];
  // // console.log("uniqueProvice", uniqueProvice);

  // const deathByPrice = uniqueProvice.map((d)=> {
  //   const filterData1 = data.filter((r) => r.provinceName === d );
  //   // console.log(filterData1)
  // })

  const deathByCause = uniqueDeathCause.map((d) => {
    const filterData = data.filter((r) => r.causeOfDeath === d);
    // console.log("filterData 1", filterData);

    const sumOfDeaths = filterData.reduce(
      (acc, r) => {
        // acc.deathFemale =+ r.deathFemale;
        // acc.deathMale =+ r.deathMale;
        // return acc;

        return {
          deathFemale: acc.deathFemale + r.deathFemale,
          deathMale: acc.deathMale + r.deathMale,
        }
      },
      { deathFemale: 0, deathMale: 0 }
    );
    // console.log("sumOfDeaths", sumOfDeaths);

    return {
      causeOfDeath: d,
      deathFemale: sumOfDeaths.deathFemale,
      deathMale: sumOfDeaths.deathMale,
      death: sumOfDeaths.deathFemale + sumOfDeaths.deathMale,
    };
  });
  console.log(deathByCause);
};

export default Dashboard;
