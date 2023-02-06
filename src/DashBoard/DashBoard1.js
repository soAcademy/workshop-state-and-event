import ReactECharts from "echarts-for-react";
import DeathData from "./thailand-death-cause.json";

const mockData = [
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
  {
    provinceKey: 19,
    provinceName: "สระบุรี",
    pronvinceNameEng: "Saraburi",
    regionKey: 3,
    region: "ภาคเหนือ",
    regionEng: "Northern",
    diseaseCauseDeathKey: 17,
    causeOfDeath: "วัณโรคทุกชนิด",
    year: 2557,
    deathMale: 60,
    deathFemale: 15,
    deathRatePer100000MalePopulation: 19.2,
    deathRatePer100000FemalePopulation: 4.7,
  },
  {
    provinceKey: 19,
    provinceName: "สระบุรี",
    pronvinceNameEng: "Saraburi",
    regionKey: 3,
    region: "ภาคเหนือ",
    regionEng: "Northern",
    diseaseCauseDeathKey: 76,
    causeOfDeath: "โรคภูมิคุ้มกันบกพร่องเนื่องจากไวรัส",
    year: 2557,
    deathMale: 37,
    deathFemale: 21,
    deathRatePer100000MalePopulation: 11.9,
    deathRatePer100000FemalePopulation: 6.6,
  },
  {
    provinceKey: 19,
    provinceName: "สระบุรี",
    pronvinceNameEng: "Saraburi",
    regionKey: 3,
    region: "ภาคเหนือ",
    regionEng: "Northern",
    diseaseCauseDeathKey: 53,
    causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
    year: 2558,
    deathMale: 365,
    deathFemale: 292,
    deathRatePer100000MalePopulation: 116.3,
    deathRatePer100000FemalePopulation: 91.1,
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
    year: 2558,
    deathMale: 93,
    deathFemale: 21,
    deathRatePer100000MalePopulation: 29.6,
    deathRatePer100000FemalePopulation: 6.6,
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
    year: 2558,
    deathMale: 22,
    deathFemale: 26,
    deathRatePer100000MalePopulation: 7,
    deathRatePer100000FemalePopulation: 8.1,
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
    year: 2558,
    deathMale: 205,
    deathFemale: 149,
    deathRatePer100000MalePopulation: 65.3,
    deathRatePer100000FemalePopulation: 46.5,
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
    year: 2558,
    deathMale: 158,
    deathFemale: 135,
    deathRatePer100000MalePopulation: 50.3,
    deathRatePer100000FemalePopulation: 42.1,
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
    year: 2558,
    deathMale: 291,
    deathFemale: 179,
    deathRatePer100000MalePopulation: 92.7,
    deathRatePer100000FemalePopulation: 55.9,
  },
];

const DashBoard1 = () => {
  // console.log(mockData)
  // console.log(mockData.map((r) => r.causeOfDeath))
  const deathCauseList = [...new Set(mockData.map((r) => r.causeOfDeath))];
  console.log("deathCauseLis",deathCauseList);

  const deathByCauses = deathCauseList.map((deathcause) => {
    const deathListFilters = mockData.filter((r) => r.causeOfDeath === deathcause)
    console.log("DeathFilter",deathListFilters)
    const sumDeath = deathListFilters.reduce((acc,r) => {
        acc.deathFemale += r.deathFemale;
        acc.deathMale += r.deathMale;
        return acc;
    },
    {deathFemale: 0, deathMale: 0 }
    )
    console.log("sumDeath",sumDeath);

    // const deathByProvice = []

    return{
        causeOfDeath: deathcause,
        deathMale: sumDeath.deathMale,
        deathFemale: sumDeath.deathFemale,
        totalDeath: sumDeath.deathMale + sumDeath.deathFemale
        // %death: 
    }
    
})
console.log("deathByCauses",deathByCauses)

return (
    <>
    <div className="w-full h-screen flex flex-col gap-3 px-10">
    <div className="text-xl font-bold pt-5">จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</div>
    <div className="flex gap-3">
    <div>เลือกปี</div>
    <div>2558</div>
    </div>
    <div>ปี 2558 :: สาเหตุการเสียชีวิต: ความดันเลือดสูง และโรคหลอดเลือดในสมอง</div>
    <div className="border-1 border-red-500 w-full h-screen px-2">
    <table>
        <h4 className="text-lg font-bold">สาเหตุการเสียชีวิต</h4>
        <tbody>
            {deathByCauses?.map((r) => (
                <tr>
                    <td className="bg-gray-600 text-white pr-5">{r.causeOfDeath}</td>
                    <td className="bg-yellow-700 text-white pl-10">{r.totalDeath}</td>
                    <td></td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    </div>   
    </>
)

}

export default DashBoard1;
