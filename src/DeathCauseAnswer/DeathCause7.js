import { useEffect, useState } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";
import ReactECharts from "echarts-for-react";

const DeathByCause = ({ totalDeath, deathByCauses }) => (
  <div className="bg-blue-100 w-1/3 p-4">
    <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByCauses?.map((r, idx) => (
          <tr key={idx}>
            <td>{r.cause}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DeathByProvince = ({ totalDeath, deathByProvinces }) => (
  <div className="bg-amber-100 w-1/3 p-4">
    <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
    <table className="w-full">
      <tbody>
        <tr>
          <td>ทั้งหมด</td>
          <td>{totalDeath.toLocaleString()}</td>
          <td>100%</td>
        </tr>
        {deathByProvinces?.map((r, idx) => (
          <tr key={idx}>
            <td>{r.province}</td>
            <td>{r.death.toLocaleString()}</td>
            <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DeathChart = () => (
  <div className="bg-green-100 w-1/3 p-4">
    <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
    <ReactECharts
      option={{
        xAxis: {
          type: "category",
          data: [2554, 2555, 2556],
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
            data: [100000, 120000, 30000],
            type: "line",
            smooth: true,
            lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      }}
    />
    <div className="font-bold mb-2">การเสียชีวิตตามเพศ</div>
    <ReactECharts
      option={{
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
      }}
    />
  </div>
);

const DeathFilter = ({ yearLists, currentYear, setCurrentYear }) => (
  <div>
    <div className="mt-4">
      เลือกปีพ.ศ.{" "}
      <select
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
      >
        {yearLists.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
    <div className="">การเสียชีวิตของปีพ.ศ. {currentYear}</div>
  </div>
);

const DeathCause7 = () => {
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => b - a
  );
  const [currentYear, setCurrentYear] = useState(2558);
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);

  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    const _totalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );

    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
    ];
    // console.log(_deathCauseLists);

    const _deathByCauses = deathCauseLists
      .map((cause) => {
        const totalDeath = deathCauseDatas
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
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log(_deathByCauses);

    const provinceLists = [
      ...new Set(deathCauseDatas.map((r) => r.provinceName)),
    ];
    // console.log(_provinceLists);

    const _deathByProvinces = provinceLists
      .map((province) => {
        const totalDeath = deathCauseDatas
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
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .filter((r) => r.death > 0)
      .sort((a, b) => b.death - a.death);
    // console.log(_deathByProvinces);

    setTotalDeath(_totalDeath);
    setDeathByCauses(_deathByCauses);
    setDeathByProvinces(_deathByProvinces);
  }, [currentYear]);

  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2560
      </h1>
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="flex space-x-4 mt-4">
        <DeathByCause totalDeath={totalDeath} deathByCauses={deathByCauses} />
        <DeathByProvince
          totalDeath={totalDeath}
          deathByProvinces={deathByProvinces}
        />
        <DeathChart />
      </div>
    </div>
  );
};

export default DeathCause7;
