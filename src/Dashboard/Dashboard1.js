import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import DataThaiDeath from "./thailand-death-cause.json";

const Dashboard1 = () => {
  // const mockData = [
  //   {
  //     provinceKey: 58,
  //     provinceName: "แม่ฮ่องสอน",
  //     pronvinceNameEng: "Mae Hong Son",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 76,
  //     causeOfDeath: "โรคภูมิคุ้มกันบกพร่องเนื่องจากไวรัส",
  //     year: 2558,
  //     deathMale: 8,
  //     deathFemale: 2,
  //     deathRatePer100000MalePopulation: 2.92,
  //     deathRatePer100000FemalePopulation: 0.73,
  //   },
  //   {
  //     provinceKey: 64,
  //     provinceName: "สุโขทัย",
  //     pronvinceNameEng: "Sukhothai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 53,
  //     causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
  //     year: 2556,
  //     deathMale: 381,
  //     deathFemale: 259,
  //     deathRatePer100000MalePopulation: 129.7,
  //     deathRatePer100000FemalePopulation: 84,
  //   },
  //   {
  //     provinceKey: 19,
  //     provinceName: "สระบุรี",
  //     pronvinceNameEng: "Saraburi",
  //     regionKey: 3,
  //     region: "ภาคเหนือ",
  //     regionEng: "Northern",
  //     diseaseCauseDeathKey: 29,
  //     causeOfDeath: "ความดันเลือดสูง",
  //     year: 2557,
  //     deathMale: 22,
  //     deathFemale: 28,
  //     deathRatePer100000MalePopulation: 7.1,
  //     deathRatePer100000FemalePopulation: 8.8,
  //   },
  //   {
  //     provinceKey: 19,
  //     provinceName: "สระบุรี",
  //     pronvinceNameEng: "Saraburi",
  //     regionKey: 3,
  //     region: "ภาคเหนือ",
  //     regionEng: "Northern",
  //     diseaseCauseDeathKey: 90,
  //     causeOfDeath: "โรคหลอดเลือดในสมอง",
  //     year: 2557,
  //     deathMale: 195,
  //     deathFemale: 141,
  //     deathRatePer100000MalePopulation: 62.5,
  //     deathRatePer100000FemalePopulation: 44.2,
  //   },
  //   {
  //     provinceKey: 19,
  //     provinceName: "สระบุรี",
  //     pronvinceNameEng: "Saraburi",
  //     regionKey: 3,
  //     region: "ภาคเหนือ",
  //     regionEng: "Northern",
  //     diseaseCauseDeathKey: 93,
  //     causeOfDeath: "โรคหัวใจขาดเลือด",
  //     year: 2557,
  //     deathMale: 184,
  //     deathFemale: 141,
  //     deathRatePer100000MalePopulation: 59,
  //     deathRatePer100000FemalePopulation: 44.2,
  //   },
  //   {
  //     provinceKey: 19,
  //     provinceName: "สระบุรี",
  //     pronvinceNameEng: "Saraburi",
  //     regionKey: 3,
  //     region: "ภาคเหนือ",
  //     regionEng: "Northern",
  //     diseaseCauseDeathKey: 48,
  //     causeOfDeath: "ปอดอักเสบและโรคอื่นๆ ของปอด",
  //     year: 2557,
  //     deathMale: 270,
  //     deathFemale: 200,
  //     deathRatePer100000MalePopulation: 86.6,
  //     deathRatePer100000FemalePopulation: 62.7,
  //   },
  //   {
  //     provinceKey: 21,
  //     provinceName: "ระยอง",
  //     pronvinceNameEng: "Rayong",
  //     regionKey: 5,
  //     region: "ภาคใต้",
  //     regionEng: "Southern",
  //     diseaseCauseDeathKey: 53,
  //     causeOfDeath: "มะเร็ง และเนื้องอกทุกชนิด",
  //     year: 2557,
  //     deathMale: 323,
  //     deathFemale: 263,
  //     deathRatePer100000MalePopulation: 98,
  //     deathRatePer100000FemalePopulation: 78,
  //   },
  //   {
  //     provinceKey: 21,
  //     provinceName: "ระยอง",
  //     pronvinceNameEng: "Rayong",
  //     regionKey: 5,
  //     region: "ภาคใต้",
  //     regionEng: "Southern",
  //     diseaseCauseDeathKey: 21,
  //     causeOfDeath: "อุบัติเหตุ และการเป็นพิษ",
  //     year: 2557,
  //     deathMale: 214,
  //     deathFemale: 70,
  //     deathRatePer100000MalePopulation: 65,
  //     deathRatePer100000FemalePopulation: 21,
  //   },
  //   {
  //     provinceKey: 30,
  //     provinceName: "นครราชสีมา",
  //     pronvinceNameEng: "Nakhon Ratchasima",
  //     regionKey: 2,
  //     region: "ภาคกลาง",
  //     regionEng: "Central",
  //     diseaseCauseDeathKey: 48,
  //     causeOfDeath: "ปอดอักเสบและโรคอื่นๆ ของปอด",
  //     year: 2556,
  //     deathMale: 858,
  //     deathFemale: 509,
  //     deathRatePer100000MalePopulation: 8.78,
  //     deathRatePer100000FemalePopulation: 6.73,
  //   },
  //   {
  //     provinceKey: 30,
  //     provinceName: "นครราชสีมา",
  //     pronvinceNameEng: "Nakhon Ratchasima",
  //     regionKey: 2,
  //     region: "ภาคกลาง",
  //     regionEng: "Central",
  //     diseaseCauseDeathKey: 5,
  //     causeOfDeath: "ไตอักเสบ กลุ่มอาการของไตพิการ และไตพิการ",
  //     year: 2556,
  //     deathMale: 183,
  //     deathFemale: 205,
  //     deathRatePer100000MalePopulation: 1.87,
  //     deathRatePer100000FemalePopulation: 2.71,
  //   },
  //   {
  //     provinceKey: 50,
  //     provinceName: "เชียงใหม่",
  //     pronvinceNameEng: "Chiang Mai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 3,
  //     causeOfDeath: "ความดันเลือดสูง และโรคหลอดเลือดในสมอง",
  //     year: 2555,
  //     deathMale: 394,
  //     deathFemale: 185,
  //     deathRatePer100000MalePopulation: 49.14,
  //     deathRatePer100000FemalePopulation: 21.99,
  //   },
  //   {
  //     provinceKey: 50,
  //     provinceName: "เชียงใหม่",
  //     pronvinceNameEng: "Chiang Mai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 48,
  //     causeOfDeath: "ปอดอักเสบและโรคอื่นๆ ของปอด",
  //     year: 2555,
  //     deathMale: 296,
  //     deathFemale: 198,
  //     deathRatePer100000MalePopulation: 36.91,
  //     deathRatePer100000FemalePopulation: 23.53,
  //   },
  //   {
  //     provinceKey: 50,
  //     provinceName: "เชียงใหม่",
  //     pronvinceNameEng: "Chiang Mai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 27,
  //     causeOfDeath: "การบาดเจ็บจากการฆ่าตัวตาย ถูกฆ่าตาย และอื่นๆ",
  //     year: 2555,
  //     deathMale: 198,
  //     deathFemale: 61,
  //     deathRatePer100000MalePopulation: 24.69,
  //     deathRatePer100000FemalePopulation: 7.25,
  //   },
  //   {
  //     provinceKey: 50,
  //     provinceName: "เชียงใหม่",
  //     pronvinceNameEng: "Chiang Mai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 17,
  //     causeOfDeath: "วัณโรคทุกชนิด",
  //     year: 2555,
  //     deathMale: 60,
  //     deathFemale: 21,
  //     deathRatePer100000MalePopulation: 7.48,
  //     deathRatePer100000FemalePopulation: 2.5,
  //   },
  //   {
  //     provinceKey: 50,
  //     provinceName: "เชียงใหม่",
  //     pronvinceNameEng: "Chiang Mai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 76,
  //     causeOfDeath: "โรคภูมิคุ้มกันบกพร่องเนื่องจากไวรัส",
  //     year: 2555,
  //     deathMale: 89,
  //     deathFemale: 50,
  //     deathRatePer100000MalePopulation: 11.1,
  //     deathRatePer100000FemalePopulation: 5.94,
  //   },
  //   {
  //     provinceKey: 50,
  //     provinceName: "เชียงใหม่",
  //     pronvinceNameEng: "Chiang Mai",
  //     regionKey: 1,
  //     region: "กรุงเทพมหานคร",
  //     regionEng: "Bangkok Metropolis",
  //     diseaseCauseDeathKey: 20,
  //     causeOfDeath: "อื่นๆ",
  //     year: 2555,
  //     deathMale: 4261,
  //     deathFemale: 3648,
  //     deathRatePer100000MalePopulation: 531.39,
  //     deathRatePer100000FemalePopulation: 433.53,
  //   },
  // ];

  const totalDeath = DataThaiDeath.reduce(
    (acc, r) => acc + r.deathMale + r.deathFemale,
    0
  );
  // console.log("total",totalDeath);

  const deathCausesList = [
    ...new Set(DataThaiDeath.map((r) => r.causeOfDeath)),
  ];
  // console.log("uniqueCauses:", deathCausesList);
  //unique ให้สาเหตุการตายไม่ซ้ำกัน

  const deathByCauses = deathCausesList.map((deathCause) => {
    const filterData = DataThaiDeath.filter(
      (r) => r.causeOfDeath === deathCause
    );
    const results = filterData.reduce(
      //สาเหตุการตายแยก ช ญ
      (acc, r) => {
        acc.deathMale += r.deathMale;
        acc.deathFemale += r.deathFemale;
        return acc;
      },
      { deathMale: 0, deathFemale: 0 }
    );
    const totalDeathCause = results.deathFemale + results.deathMale;
    // console.log("totalDeath M&W:", results);
    return {
      causeOfDeath: deathCause,
      // deathMale: results.deathMale,
      // deathFemale: results.deathFemale,
      totalDeathCause: totalDeathCause,
      percentageDeath: (totalDeathCause / totalDeath) * 100,
    };
  });

  const provinceList = [...new Set(DataThaiDeath.map((r) => r.provinceName))];
  // console.log("uniqueProvince:", provinceList);
  //unique ให้จังหวัดไม่ซ้ำกัน

  const provinceDeath = provinceList.map((province) => {
    const filteredProvince = DataThaiDeath.filter(
      (r) => r.provinceName === province
    );
    console.log(filteredProvince);
    const result2 = filteredProvince.reduce(
      (acc, r) => {
        acc.deathMale += r.deathMale;
        acc.deathFemale += r.deathFemale;
        return acc;
      },
      { deathMale: 0, deathFemale: 0 }
    );
    const totalDeathProvince = result2.deathFemale + result2.deathMale;
    // const totalDeath = mockData.reduce(
    //   (acc, r) => acc + r.deathMale + r.deathFemale,
    //   0
    // );
    // console.log("totalProvince M&W:", result2);
    return {
      provinceDeath: province,
      // deathMale: result2.deathMale,
      // deathFemale: result2.deathFemale,
      totalDeathProvince: totalDeathProvince,
      percentageDeath: (totalDeathProvince / totalDeath) * 100,
    };
  });

  const uniqueYears = [...new Set(DataThaiDeath.map((r) => r.year))];
  // console.log("Unique:", uniqueYears);
  const tmpData = uniqueYears.map((year) => {
    return DataThaiDeath.filter((r) => r.year === year).reduce((acc, r) => {
      acc[year] = {
        year: year,
        totalDeathMale: (acc[year]?.totalDeathMale ?? 0) + r.deathMale,
        totalDeathFemale: (acc[year]?.totalDeathFemale ?? 0) + r.deathFemale,
        totalDeath: (acc[year]?.totalDeath ?? 0) + r.deathMale + r.deathFemale,
      };
      return acc;
    }, {});
  });
  const yearsData = tmpData
    .map((r) => Object.values(r))
    .flat()
    .sort((a, b) => a.year - b.year);
    console.log("year", yearsData);

  const totalDeathFemale = DataThaiDeath.reduce((acc, r) => {
    acc += r.deathFemale;
    return acc;
  }, 0);
  // console.log("female", totalDeathFemale);

  const totalDeathMale = DataThaiDeath.reduce((acc, r) => {
    acc += r.deathMale;
    return acc;
  }, 0);
  // console.log("male", totalDeathMale);

  const options1 = {
    xAxis: {
      type: "category",
      name: "years",
      data: yearsData.map((r) => r.year),
    },
    yAxis: {
      type: "value",
      name: "totalDeath",
      max: "dataMax",
      min: "dataMin",
    },
    series: [
      {
        data: yearsData.map((r) => r.totalDeath),
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
      orient: "vertical",
      left: "left",
    },
    series: {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        {
          value: totalDeathMale,
          name: "ชาย",
        },
        {
          value: totalDeathFemale,
          name: "หญิง",
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  };

  return (
    <div className="px-4">
      <div className="mt-4">
        <p className="text-xl">
          จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
        </p>
        <div className="mt-4 flex">
          <p>เลือกปี :</p>
          {/* <select value={year} label="" onChange={handleChange}>
            <MenuItem value={}>2554</MenuItem>
            <MenuItem value={}>2555</MenuItem>
            <MenuItem value={}>2556</MenuItem>
          </select> */}
        </div>
        <div className="mt-4">
          <div className="flex">
            <div className="border-2 w-2/6">
              <p>สาเหตุการเสียชีวิต</p>
              <div className="mt-3">
                <table>
                  <tbody>
                    {deathByCauses?.map((r) => (
                      <tr>
                        <td>{r.causeOfDeath}</td>
                        <td className="bg-sky-600 text-white">
                          {r.totalDeathCause}
                        </td>
                        <td className="bg-green-600 text-white">
                          {r.percentageDeath.toFixed(2)} %
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-2 ml-4 w-2/6">
              <p>จำนวนผู้เสียชีวิตแยกตามจังหวัด</p>
              <div className="mt-3">
                <table>
                  <tbody>
                    {provinceDeath?.map((r) => (
                      <tr>
                        <td>{r.provinceDeath}</td>
                        <td className="bg-sky-600 text-white">
                          {r.totalDeathProvince}
                        </td>
                        <td className="bg-green-600 text-white">
                          {r.percentageDeath.toFixed(2)} %
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border-2 ml-4 w-2/6">
              <p className="text-center">แนวโน้มการเสียชีวิต</p>
              <div>
                <ReactECharts option={options1} />
              </div>
              <div>
                <ReactECharts option={options2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
