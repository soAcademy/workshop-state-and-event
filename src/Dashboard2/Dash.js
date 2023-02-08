import ReactECharts from "echarts-for-react";
import React, { useState, useEffect } from "react";
import data from "./thailand-death-cause.json";

const Dashboard = () => {
  const [selectYear, setSelectYear] = useState(Number(2554));
  const [deathByProvince, setDeathByProvince] = useState([]);
  const [deathByCause, setDeathByCause] = useState([]);
  const [sumDeathBySex, setSumDeathBySex] = useState([]);
  const [sumDeathByYear, setSumDeathByYear] = useState([]);

  const sumTotalDeath = data.reduce(
    (acc, r) => acc + r.deathFemale + r.deathMale,
    0
  );
  console.log("sumTotalDeath", sumTotalDeath);

  useEffect(() => {
    // แยกตามเพศ
    const deathByYear = data.filter((r) => r.year === Number(selectYear));
    const sumDeathBySex = deathByYear.reduce(
      (acc, r) => {
        acc.deathMale += r.deathMale;
        acc.deathFemale += r.deathFemale;
        return acc;
      },
      { deathMale: 0, deathFemale: 0 }
    );
    setSumDeathBySex(sumDeathBySex);
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
          (r) => r.causeOfDeath === deathcause && r.year === Number(selectYear)
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
    setDeathByCause(deathByCause);
    console.log("deathByCause", deathByCause);

    // แยกตามจังหวัด
    const provinceList = [...new Set(data.map((r) => r.provinceName))];
    console.log("provinceList", provinceList);

    const deathByProvince = provinceList
      .map((province) => {
        const filteredData = data.filter(
          (r) => r.provinceName === province && r.year === Number(selectYear)
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
    setDeathByProvince(deathByProvince);
    console.log("deathByProvince", deathByProvince);

    const yearList = [...new Set(data.map((r) => r.year))].sort(
      (a, b) => a - b
    );
    console.log("yearList", yearList);

    const sumDeathByYear = yearList.map((year) => {
      const filteredData = data.filter((r) => r.year === year);
      console.log("filteredData3", filteredData);

      const sum = filteredData.reduce(
        (acc, r) => acc + r.deathFemale + r.deathMale,
        0
      );
      console.log("sum3", sum);

      return {
        year: year,
        death: sum,
      };
    });
    setSumDeathByYear(sumDeathByYear);
    console.log("sumDeathByYear", sumDeathByYear);
  }, [selectYear]);

  const options1 = {
    xAxis: {
      type: "category",
      data: sumDeathByYear.map((r) => r.year),
      name: "พ.ศ.",
    },
    yAxis: {
      type: "value",
      name: "จำนวน",
    },
    grid: {
      left: "5%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    series: [
      {
        data: sumDeathByYear.map((r) => r.death),
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
          onChange={(e) => setSelectYear(Number(e.target.value))}
        >
          <option value="2554" selected>
            2554
          </option>
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
          <div>
            <h1 className="font-bold mx-4 mt-4">แนวโน้มการเสียชึวิต</h1>
            <ReactECharts option={options1} />
          </div>
          <div className="mt-6">
            <h1 className="font-bold mx-4 mb-4">จำนวนผู้เสียชีวิตแยกตามเพศ</h1>
            <ReactECharts option={options2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
