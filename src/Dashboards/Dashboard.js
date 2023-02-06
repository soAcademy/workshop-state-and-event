import ReactECharts from "echarts-for-react";
import DeathCausesData from "./thailand-death-cause.json";

const Dashboard = () => {
  const DeathCausesData = [
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 53,
      causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
      year: 2557,
      deathMale: 384,
      deathFemale: 284,
      deathRatePer100000MalePopulation: 123.2,
      deathRatePer100000FemalePopulation: 89.1,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 116,
      causeOfDeath: "อุบัติเหตุจากการขนส่ง",
      year: 2557,
      deathMale: 104,
      deathFemale: 24,
      deathRatePer100000MalePopulation: 33.4,
      deathRatePer100000FemalePopulation: 7.5,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 29,
      causeOfDeath: "ความดันเลือดสูง",
      year: 2557,
      deathMale: 22,
      deathFemale: 28,
      deathRatePer100000MalePopulation: 7.1,
      deathRatePer100000FemalePopulation: 8.8,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 90,
      causeOfDeath: "โรคหลอดเลือดในสมอง",
      year: 2557,
      deathMale: 195,
      deathFemale: 141,
      deathRatePer100000MalePopulation: 62.5,
      deathRatePer100000FemalePopulation: 44.2,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 93,
      causeOfDeath: "โรคหัวใจขาดเลือด",
      year: 2557,
      deathMale: 184,
      deathFemale: 141,
      deathRatePer100000MalePopulation: 59,
      deathRatePer100000FemalePopulation: 44.2,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 48,
      causeOfDeath: "ปอดอักเสบและโรคอื่นๆ ของปอด",
      year: 2557,
      deathMale: 270,
      deathFemale: 200,
      deathRatePer100000MalePopulation: 86.6,
      deathRatePer100000FemalePopulation: 62.7,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 5,
      causeOfDeath: "ไตอักเสบ กลุ่มอาการของไตพิการ และไตพิการ",
      year: 2557,
      deathMale: 57,
      deathFemale: 53,
      deathRatePer100000MalePopulation: 18.3,
      deathRatePer100000FemalePopulation: 16.6,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 10,
      causeOfDeath: "โรคเกี่ยวกับตับและตับอ่อน",
      year: 2557,
      deathMale: 73,
      deathFemale: 50,
      deathRatePer100000MalePopulation: 23.4,
      deathRatePer100000FemalePopulation: 15.7,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 23,
      causeOfDeath: "การฆ่าตัวตาย ถูกฆ่าตาย",
      year: 2557,
      deathMale: 36,
      deathFemale: 10,
      deathRatePer100000MalePopulation: 11.5,
      deathRatePer100000FemalePopulation: 3.1,
    },
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 42,
      causeOfDeath: "เบาหวาน",
      year: 2557,
      deathMale: 41,
      deathFemale: 32,
      deathRatePer100000MalePopulation: 13.1,
      deathRatePer100000FemalePopulation: 10,
    },
  ];

  const mockdata = DeathCausesData;
  const deathcausesList = [...new Set(mockdata.map((r) => r.causeOfDeath))];
  // console.log(deathcausesList);

  // const totalDeathByCause = (filteredData) => filteredData.reduce()

  const deathByCauses = deathcausesList
    .map((deathcause) => {
      // console.log(deathbycause);
      const filteredData = mockdata.filter(
        (r) => r.causeOfDeath === deathcause
      );
      console.log(filteredData);
      const sum = filteredData.reduce(
        (acc, r) => {
          acc.deathMale += r.deathMale;
          acc.deathFemale += r.deathFemale;
          return acc;
        },
        { deathMale: 0, deathFemale: 0 }
      );
      return {
        causeOfDeath: deathcause,
        deathMale: sum.deathMale,
        deathFemale: sum.deathFemale,
        death: sum.deathMale + sum.deathFemale,
        // totalDeath: totalDeathByCause(mockData.filter((r) => r.causeOfDeath === deathcause))
      };
    })
    .sort((a, b) => b.death - a.death);

  const totalDeath = deathByCauses.reduce((acc, r) => {
    return acc + r.death;
  }, 0);
  console.log("TotalDeath: " + totalDeath);

  return (
    <div className="border border-teal-300 w-[60%] p-3">
      <table className="">
        <h1 className="mb-4 text-xl font-bold"> สาเหตุการเสียชีวิต 2557</h1>
        {deathByCauses?.map((r) => (
          <tr className="">
            <td className="px-2 py-4">{r.causeOfDeath}</td>
            <td className="bg-teal-500 px-5 py-5">{r.death}คน</td>
            <td className="bg-yellow-200 px-5 py-5">
              {((r.death / totalDeath) * 100).toFixed(2)}%{" "}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Dashboard;

// หาว่ามันมีโรคอะไรบ้าง เราก็ใช้ .filter เราก็ใช้ .map คู่กับ .unique
// ต่อไปคือ Death by province คล้ายกับ cause เลย แต่มันต่างตรงที่จาก unique cause เป็น province