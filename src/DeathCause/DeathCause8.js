import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";

const DeathByCause = ({ currentYear, deathByCauses, totalDeath }) => (
  <div className="bg-gray-100 w-1/3 mr-2 p-2">
    <div className="text-center font-bold mb-2">
      สาเหตุการเสียชีวิตปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByCauses.map((r) => (
          <tr>
            <td>{r.cause}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathByProvince = ({ currentYear, deathByProvinces, totalDeath }) => (
  <div className="bg-gray-200 w-1/3 mx-2 p-2">
    <div className="text-center font-bold mb-2">
      จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {currentYear}
    </div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces.map((r) => (
          <tr>
            <td>{r.province}</td>
            <td>{r.death}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DeathChart = ({ currentYear, option1, option2 }) => (
  <div className="bg-gray-300 w-1/3 ml-2 p-2">
    <div className="text-center font-bold mb-2">แนวโน้มการเสียชีวิต</div>
    <ReactECharts option={option1} />
    <div className="font-bold mb-2">
      จำนวนผู้เสียเสียชีวิตแยกตามเพศปี {currentYear}
    </div>
    <ReactECharts option={option2} />
  </div>
);

const YearFilter = ({ yearLists, setCurrentYear, currentYear }) => (
  <div className="mt-4 flex">
    <div className="">เลือกปี</div>
    <select
      className="ml-2"
      onChange={(e) => setCurrentYear(Number(e.target.value))}
      value={currentYear}
    >
      {yearLists.map((r) => (
        <option>{r}</option>
      ))}
    </select>
  </div>
);

const DeathCause8 = () => {
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => a - b
  );
  console.log("yearList", yearLists);

  const [currentYear, setCurrentYear] = useState(2559);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  const [totalDeath, setTotalDeath] = useState(0);
  const [option1, setOption1] = useState({});
  const [option2, setOption2] = useState({});

  console.log("currentYear", currentYear);

  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year === currentYear
    );
    console.log("deathCauseDatas", deathCauseDatas);

    const tempTotalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );
    setTotalDeath(tempTotalDeath);
    console.log("totalDeath", tempTotalDeath);

    const causeList = [...new Set(deathCauseDatas.map((r) => r.causeOfDeath))];
    console.log("causeList", causeList);

    const tempDeathByCauses = causeList
      .map((cause) => {
        const sum = deathCauseDatas
          .filter((r) => r.causeOfDeath === cause)
          .reduce(
            (acc, r) => ({
              death: acc.death + r.deathFemale + r.deathMale,
              deathFemale: acc.deathFemale + r.deathFemale,
              deathMale: acc.deathMale + r.deathMale,
            }),
            {
              death: 0,
              deathFemale: 0,
              deathMale: 0,
            }
          );
        return {
          cause,
          death: sum.death,
          deathFemale: sum.deathFemale,
          deathMale: sum.deathMale,
        };
      })
      .sort((a, b) => b.death - a.death);
    setDeathByCauses(tempDeathByCauses);
    console.log("tempDeathByCauses", tempDeathByCauses);

    const provinceList = [
      ...new Set(deathCauseDatas.map((r) => r.provinceName)),
    ];
    console.log("provinceList", provinceList);

    const tempDeathByProvinces = provinceList
      .map((province) => {
        const sum = deathCauseDatas
          .filter((r) => r.provinceName === province)
          .reduce(
            (acc, r) => ({
              death: acc.death + r.deathFemale + r.deathMale,
              deathFemale: acc.deathFemale + r.deathFemale,
              deathMale: acc.deathMale + r.deathMale,
            }),
            {
              death: 0,
              deathFemale: 0,
              deathMale: 0,
            }
          );
        return {
          province,
          death: sum.death,
          deathFemale: sum.deathFemale,
          deathMale: sum.deathMale,
        };
      })
      .sort((a, b) => b.death - a.death);
    setDeathByProvinces(tempDeathByProvinces);
    console.log("tempDeathByProvinces", tempDeathByProvinces);

    const tempDeathByYear = yearLists.map((year) => {
      const sum = ThailandDeathCause.filter(
        (r) => r.year === Number(year)
      ).reduce((acc, r) => acc + r.deathFemale + r.deathMale, 0);
      console.log("sum", sum);

      return {
        year: year,
        sumDeath: sum,
      };
    });

    console.log("tempDeathByYear", tempDeathByYear);

    const tempOption1 = {
      xAxis: {
        type: "category",
        data: tempDeathByYear.map((r) => r.year),
        name: "ปีพ.ศ.",
      },
      yAxis: {
        type: "value",
        name: "จำนวนผู้เสียชีวิต",
        max: "dataMax",

        min: "dataMin",
      },
      series: [
        {
          data: tempDeathByYear.map((r) => r.sumDeath),
          type: "line",
          smooth: true,
          lineStyle: { color: "blue", width: 3, type: "dashed" },
        },
      ],
      grid: {
        left: "5%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
      },
    };
    setOption1(tempOption1);
    console.log("tempOption1", tempOption1);

    const tempDeathBySex = deathCauseDatas.reduce(
      (acc, r) => ({
        deathMale: acc.deathMale + r.deathMale,
        deathFemale: acc.deathFemale + r.deathFemale,
      }),
      { deathMale: 0, deathFemale: 0 }
    );

    console.log("tempDeathBySex", tempDeathBySex);

    const tempOption2 = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          type: "pie",
          radius: "50%",
          data: [
            { value: tempDeathBySex.deathMale, name: "ชาย" },
            { value: tempDeathBySex.deathFemale, name: "หญิง" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    setOption2(tempOption2);

    console.log("tempDeathBySex.deathMale", tempDeathBySex.deathMale);
  }, [currentYear]);

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <YearFilter
        yearLists={yearLists}
        setCurrentYear={setCurrentYear}
        currentYear={currentYear}
      />
      <div className="mt-4">ปี {currentYear}</div>
      <div className="flex mt-4">
        <DeathByCause
          currentYear={currentYear}
          deathByCauses={deathByCauses}
          totalDeath={totalDeath}
        />
        <DeathByProvince
          currentYear={currentYear}
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
        />
        <DeathChart
          currentYear={currentYear}
          option1={option1}
          option2={option2}
        />
      </div>
    </div>
  );
};

export default DeathCause8;
