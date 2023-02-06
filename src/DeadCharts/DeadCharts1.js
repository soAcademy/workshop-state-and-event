import ReactECharts from "echarts-for-react";
import DeathData from "./thailand-death-casue.json"
import { getToPathname } from "@remix-run/router";


//   const DeathData = 
// [
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 53,
//       "causeOfDeath": "มะเร็ง และเนื้องอกทุกชนิด",
//       "year": 2557,
//       "deathMale": 384,
//       "deathFemale": 284,
//       "deathRatePer100000MalePopulation": 123.2,
//       "deathRatePer100000FemalePopulation": 89.1
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 116,
//       "causeOfDeath": "อุบัติเหตุจากการขนส่ง",
//       "year": 2557,
//       "deathMale": 104,
//       "deathFemale": 24,
//       "deathRatePer100000MalePopulation": 33.4,
//       "deathRatePer100000FemalePopulation": 7.5
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 29,
//       "causeOfDeath": "ความดันเลือดสูง",
//       "year": 2557,
//       "deathMale": 22,
//       "deathFemale": 28,
//       "deathRatePer100000MalePopulation": 7.1,
//       "deathRatePer100000FemalePopulation": 8.8
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 90,
//       "causeOfDeath": "โรคหลอดเลือดในสมอง",
//       "year": 2557,
//       "deathMale": 195,
//       "deathFemale": 141,
//       "deathRatePer100000MalePopulation": 62.5,
//       "deathRatePer100000FemalePopulation": 44.2
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 93,
//       "causeOfDeath": "โรคหัวใจขาดเลือด",
//       "year": 2557,
//       "deathMale": 184,
//       "deathFemale": 141,
//       "deathRatePer100000MalePopulation": 59,
//       "deathRatePer100000FemalePopulation": 44.2
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 48,
//       "causeOfDeath": "ปอดอักเสบและโรคอื่นๆ ของปอด",
//       "year": 2557,
//       "deathMale": 270,
//       "deathFemale": 200,
//       "deathRatePer100000MalePopulation": 86.6,
//       "deathRatePer100000FemalePopulation": 62.7
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 5,
//       "causeOfDeath": "ไตอักเสบ กลุ่มอาการของไตพิการ และไตพิการ",
//       "year": 2557,
//       "deathMale": 57,
//       "deathFemale": 53,
//       "deathRatePer100000MalePopulation": 18.3,
//       "deathRatePer100000FemalePopulation": 16.6
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 10,
//       "causeOfDeath": "โรคเกี่ยวกับตับและตับอ่อน",
//       "year": 2557,
//       "deathMale": 73,
//       "deathFemale": 50,
//       "deathRatePer100000MalePopulation": 23.4,
//       "deathRatePer100000FemalePopulation": 15.7
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 23,
//       "causeOfDeath": "การฆ่าตัวตาย ถูกฆ่าตาย",
//       "year": 2557,
//       "deathMale": 36,
//       "deathFemale": 10,
//       "deathRatePer100000MalePopulation": 11.5,
//       "deathRatePer100000FemalePopulation": 3.1
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 42,
//       "causeOfDeath": "เบาหวาน",
//       "year": 2557,
//       "deathMale": 41,
//       "deathFemale": 32,
//       "deathRatePer100000MalePopulation": 13.1,
//       "deathRatePer100000FemalePopulation": 10
//   },
//   {
//       "provinceKey": 19,
//       "provinceName": "สระบุรี",
//       "pronvinceNameEng": "Saraburi",
//       "regionKey": 3,
//       "region": "ภาคเหนือ",
//       "regionEng": "Northern",
//       "diseaseCauseDeathKey": 17,
//       "causeOfDeath": "วัณโรคทุกชนิด",
//       "year": 2557,
//       "deathMale": 60,
//       "deathFemale": 15,
//       "deathRatePer100000MalePopulation": 19.2,
//       "deathRatePer100000FemalePopulation": 4.7
//   }
// ];
// const result = DeathData.reduce((acc, item) => {
//   acc.deathMale += item.deathMale;
//   acc.deathFemale += item.deathFemale;
//   return acc;
// }, { deathMale: 0, deathFemale: 0 });

// console.log(result);
const Deadboard = () => {
  const data = DeathData;
  
  const deathcausesList = [...new Set(data.map((r) => r.causeOfDeath))];
  // ...new Set เพื่อแยกหาสาเหต์การตาย
  
  console.log("deathcausesList", deathcausesList);

  // const filterData = data.filter

   const deathByCauses = deathcausesList.map((deathcause) => {
    const filterData = data.filter(
      (r) => r.causeOfDeath === deathcausesList
    ); 
    // filter ข้อมูล เพื่อหาการตายจากโรคนั้นๆ

    console.log("filterData", filterData);

    // reduce เพื่อหายอดรวมชายเเละหญิง
    
    const totalDeath = filterData.reduce(
      (acc, r) => { 
        acc.deathMale += r.deathMale;
        acc.deathFemale += r.deathFemale;
        return acc;
      },
      { deathMale: 0, deathFemale: 0 }


    );
    return {
      cause: ,
      totalDeath: totalDeath.deathFemale + totalDeath.deathFemale
    }
   });

   const output = [
    {
      cause: "Cancer",
      totalDeath: 300
    },
    {
      cause: "Pnuemonia",
      totalDeath: 500
    }
   ]

    return <div></div>;
    // const sum = filteredData.reduce(
    //   (acc, r) => { 
    //     acc.deathMale += r.deathMale;
    //     acc.deathFemale += r.deathFemale;
    //     return acc;
    //   },
    //   { deathMale: 0, deathFemale: 0 }
    // );
    // return {
    //   causeDeath: deathcausesList,
    //   deathMale: sum.deathMale,
    //   deathFemale: sum.deathFemale,
    //   death: sum.deathMale + sum.deathFemale,
    // };
//   });

}
  console.log(DeathData);
  
  export default Deadboard;