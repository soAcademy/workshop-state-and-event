import ReactECharts from "echarts-for-react";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const data = [
    {
      provinceKey: 19,
      provinceName: "สระบุรี",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 53,
      causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
      year: 2556,
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
      diseaseCauseDeathKey: 53,
      causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
      year: 2556,
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
      year: 2556,
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
      year: 2558,
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
      year: 2558,
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
      year: 2558,
      deathMale: 36,
      deathFemale: 10,
      deathRatePer100000MalePopulation: 11.5,
      deathRatePer100000FemalePopulation: 3.1,
    },
    {
      provinceKey: 19,
      provinceName: "กทม.",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 42,
      causeOfDeath: "เบาหวาน",
      year: 2558,
      deathMale: 41,
      deathFemale: 32,
      deathRatePer100000MalePopulation: 13.1,
      deathRatePer100000FemalePopulation: 10,
    },
    {
      provinceKey: 19,
      provinceName: "นครสวรรค์",
      pronvinceNameEng: "Saraburi",
      regionKey: 3,
      region: "ภาคเหนือ",
      regionEng: "Northern",
      diseaseCauseDeathKey: 17,
      causeOfDeath: "วัณโรคทุกชนิด",
      year: 2559,
      deathMale: 60,
      deathFemale: 15,
      deathRatePer100000MalePopulation: 19.2,
      deathRatePer100000FemalePopulation: 4.7,
    },
  ];

  const [selectYear, setSelectYear] = useState(2556);
  console.log("selectYear", selectYear.target.value);
  console.log("TypeselectYear", typeof selectYear.target.value);

  const sumTotalDeath = data.reduce(
    (acc, r) => acc + r.deathFemale + r.deathMale,
    0
  );
  console.log("sumTotalDeath", sumTotalDeath);

  // แยกตามเพศ
  const deathByYear = data.filter(
    (r) => r.year === Number(selectYear.target.value)
  );
  const sumDeathBySex = deathByYear.reduce(
    (acc, r) => {
      acc.deathMale += r.deathMale;
      acc.deathFemale += r.deathFemale;
      return acc;
    },
    { deathMale: 0, deathFemale: 0 }
  );
  console.log("sumDeathBySex", sumDeathBySex);
  console.log("TypeofsumDeathBySex", typeof sumDeathBySex);
  console.log("deathMale", sumDeathBySex.deathMale);

  // แยกตามสาเหตุการเสียชีวิต
  const deathcauseList = [...new Set(data.map((r) => r.causeOfDeath))];
  console.log("deathcauseList", deathcauseList);

  const deathByCause = deathcauseList
    .map((deathcause) => {
      // const filteredData = data.filter((r) => r.causeOfDeath === deathcause);
      const filteredData = data.filter(
        (r) =>
          r.causeOfDeath === deathcause &&
          r.year === Number(selectYear.target.value)
      );
      console.log("filteredData", filteredData);

      const sum = filteredData.reduce(
        (acc, r) => {
          acc.deathMale += r.deathMale;
          acc.deathFemale += r.deathFemale;
          return acc;
        },
        { deathMale: 0, deathFemale: 0 }
      );
      console.log("sum", sum);

      return {
        causeOfDeath: deathcause,
        deathMale: sum.deathMale,
        deathFemale: sum.deathFemale,
        death: sum.deathMale + sum.deathFemale,
        year: filteredData[0]?.year,
        percentage: (
          ((sum.deathMale + sum.deathFemale) / sumTotalDeath) *
          100
        ).toFixed(2),
      };
    })
    .sort((a, b) => b.death - a.death);
  console.log("deathByCause", deathByCause);

  // แยกตามจังหวัด
  const provinceList = [...new Set(data.map((r) => r.provinceName))];
  console.log("provinceList", provinceList);

  const deathByProvince = provinceList
    .map((province) => {
      const filteredData = data.filter(
        (r) =>
          r.provinceName === province &&
          r.year === Number(selectYear.target.value)
      );
      console.log("filteredData", filteredData);

      const sum = filteredData.reduce(
        (acc, r) => {
          acc.deathMale += r.deathMale;
          acc.deathFemale += r.deathFemale;
          return acc;
        },
        { deathMale: 0, deathFemale: 0 }
      );
      console.log("sum", sum);

      return {
        province: province,
        deathMale: sum.deathMale,
        deathFemale: sum.deathFemale,
        death: sum.deathMale + sum.deathFemale,
        year: filteredData[0]?.year,
        percentage: (
          ((sum.deathMale + sum.deathFemale) / sumTotalDeath) *
          100
        ).toFixed(2),
      };
    })
    .sort((a, b) => b.death - a.death);
  console.log("deathByProvince", deathByProvince);

  const options1 = {
    xAxis: {
      type: "category",
      data: data.map((r) => r.year),
      name: "พ.ศ.",
    },
    yAxis: {
      type: "value",
      name: "จำนวน",
    },
    series: [
      {
        data: data.map((r) => r.deathMale),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  const options2 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "verticle",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          {
            name: "ชาย",
            value: sumDeathBySex.deathMale,
          },
          {
            name: "หญิง",
            value: sumDeathBySex.deathFemale,
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <>
      <h1 className="font-bold m-4 text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตายปี 2554 - 2559
      </h1>
      <div className="mx-4">
        ปี พ.ศ.
        <select
          className="border border-black ml-2"
          onChange={(e) => setSelectYear(e)}
        >
          <option value="2554">2554</option>
          <option value="2555">2555</option>
          <option value="2556">2556</option>
          <option value="2557">2557</option>
          <option value="2558">2558</option>
          <option value="2559">2559</option>
        </select>
      </div>
      <div className="flex w-full mt-2">
        <div className="w-1/3 border border-gray-200 mx-4">
          <h1 className="font-bold mx-4 mt-4">สาเหตุการเสียชึวิต</h1>
          <table className="mx-4 mt-2 border border-gray-500">
            {deathByCause?.map((r) => (
              <tr className="border border-gray-500">
                <td className="pr-6">{r.causeOfDeath}</td>
                <td className="bg-yellow-300 px-8 text-center border border-gray-500">
                  {r.death}
                </td>
                <td className="bg-blue-300 px-8 text-center">{`${r.percentage}%`}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="w-1/3 border border-gray-200 justify-center flex">
          <div>
            <h1 className="font-bold mx-4 mt-4">
              จำนวนผู้เสียชีวิตแยกตามจังหวัด
            </h1>
            <table className="mx-4 mt-2 border border-gray-500">
              {deathByProvince?.map((r) => (
                <tr className="border border-gray-500">
                  <td className="pr-6">{r.province}</td>
                  <td className="bg-yellow-300 px-8 text-center border border-gray-500">
                    {r.death}
                  </td>
                  <td className="bg-blue-300 px-8 text-center">{`${r.percentage}%`}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="w-1/3 mx-4 border border-gray-200 px-2">
          <h1 className="font-bold mx-4 mt-4">แนวโน้มการเสียชึวิต</h1>
          <ReactECharts option={options1} />
          <ReactECharts option={options2} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
