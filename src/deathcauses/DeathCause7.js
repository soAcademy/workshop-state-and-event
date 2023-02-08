import React, { useState, useEffect } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";
import ReactECharts from "echarts-for-react";

const DeathCauseByDisease = (props) => {
  const { deathByCauses, totalDeath, currentYear } = props;

  return (
    <div className="bg-sky-500 w-1/3 p-4">
      <div className="font-bold">Causes of Death in {currentYear}</div>
      <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r) => (
            <tr>
              <td>{r.cause}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathCauseByProvince = (props) => {
  const { deathByProvinces, totalDeath, currentYear } = props;

  return (
    <div className="bg-teal-300 w-1/3 p-4">
      <div className="font-bold">
        Number of Death By Province in {currentYear}
      </div>
      <div className="font-bold mb-2">สาเหตุการเสียชีวิตตามจังหวัด</div>
      <table className="w-full">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces?.map((r) => (
            <tr>
              <td>{r.province}</td>
              <td>{r.death.toLocaleString()}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathChart = () => {
  const chart1 = {
    xAxis: {
      type: "category",
      data: [2554, 2555, 2556],
      name: "ปี พศ",
    },
    yAxis: {
      type: "value",
      name: "deaths",
      max: "dataMax",
      min: "dataMin",
    },
    series: [
      {
        data: [100000, 120000, 30000],
        type: "line",
        smooth: true,
        lineStyle: { color: "black", width: 5, type: "dashed" },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  const chart2 = {
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
          { value: 100000, name: "ชาย" },
          { value: 120000, name: "หญิง" },
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

  return (
    <div className="bg-red-300 w-1/3 p-4">
      <div className="font-bold">Likelihood of Death</div>
      <ReactECharts option={chart1} />
    </div>
  );
};

const DeathFilter = (props) => {
  const { yearLists, currentYear, setCurrentYear } = props;
  return (
    <div>
      <div>
        เลือกปี พศ {""}
        <select
          onChange={(e) => setCurrentYear(e.target.value)}
          value={currentYear}
        >
          {" "}
          {/* value={currentYear} = set default year*/}
          {yearLists.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>การเสียชีวิตของปี พศ {currentYear}</div>
    </div>
  );
};

const DeathCause7 = () => {
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => b - a
  );
  const [currentYear, setCurrentYear] = useState(2559);
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);

  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    console.log("deathCauseDatas1", deathCauseDatas);

    const temptTotalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );

    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
    ];
    // console.log("deathCauseLists", deathCauseLists);
    const temptDeathByCauses = deathCauseLists
      .map((cause) => {
        const deathCause2 = deathCauseDatas.filter(
          (r) => r.causeOfDeath === cause
        );
        // console.log("deathCause2", deathCause2);
        const TotalDeathCause = deathCause2.reduce(
          (acc, r) => {
            acc.deathFemale += r.deathFemale;
            acc.deathMale += r.deathMale;
            return acc;
          },
          { deathFemale: 0, deathMale: 0 }
        );
        return {
          cause: cause,
          deathFemale: TotalDeathCause.deathFemale,
          deathMale: TotalDeathCause.deathMale,
          death: TotalDeathCause.deathFemale + TotalDeathCause.deathMale,
        };
      })
      .sort((a, b) => b.totalDeathCause - a.totalDeathCause);

    const provinceLists = [
      ...new Set(deathCauseDatas.map((r) => r.provinceName)),
    ];
    // console.log("provinceLists", provinceLists);
    const temptDeathByProvinces = provinceLists
      .map((province) => {
        const province2 = deathCauseDatas.filter(
          (r) => r.provinceName === province
        );
        // console.log("province2", province2);
        const TotalDeathProvince = province2.reduce(
          (acc, r) => {
            acc.deathFemale += r.deathFemale;
            acc.deathMale += r.deathMale;
            return acc;
          },
          { deathFemale: 0, deathMale: 0 }
        );
        return {
          province: province,
          deathFemale: TotalDeathProvince.deathFemale,
          deathMale: TotalDeathProvince.deathMale,
          death: TotalDeathProvince.deathFemale + TotalDeathProvince.deathMale,
        };
      })
      .sort((a, b) => b.totalDeathProvince - a.totalDeathProvince);
    // const numberProvinceSorted = deathByProvince.sort(
    //   (a, b) => b.totalDeathByProvince - a.totalDeathByProvince
    // );

    setTotalDeath(temptTotalDeath);
    setDeathByCauses(temptDeathByCauses);
    setDeathByProvinces(temptDeathByProvinces);
  }, [currentYear]);
  console.log("currentYear1", currentYear);
  return (
    <div className="p-4">
      <h1> จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559</h1>
      <div>
        <DeathFilter
          yearLists={yearLists}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
        />
      </div>
      <div className="flex space-x-4">
        <DeathCauseByDisease
          deathByCauses={deathByCauses}
          totalDeath={totalDeath}
          currentYear={currentYear}
        />
        <DeathCauseByProvince
          deathByProvinces={deathByProvinces}
          totalDeath={totalDeath}
          currentYear={currentYear}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause7;
