import React, { useState, useEffect } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";
import ReactECharts from "echarts-for-react";

// เอาข้อมูลทุกอันเข้าไปใส่ใน useEffect เมื่อ currentYear ถูก trigger ข้อมูลทุกอย่างก็จะเปลี่ยนไปตามปีที่เราเลือก
const DeathByCause = (props) => {
  const { deathByCauses, totalDeath } = props;
  return (
    <div className="bg-yellow-200 w-1/3 p-4">
      <div className="font-bold mb-2">สาเหตุการเสียชีวิต</div>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r, idx) => (
            <tr key={idx}>
              <td>{r.cause}</td>
              <td>{r.death}</td>
              <td>{((r.death / totalDeath) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathByProvince = (props) => {
  const { totalDeath, deathByProvinces } = props;
  return (
    <div className="bg-sky-200 w-1/3 p-4">
      <div className="font-bold mb-2">จำนวนผู้เสียชีวิตแยกตามจังหวัด</div>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces.map((r, idx) => (
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
};

const DeathFilter = (props) => {
  const { yearLists, currentYear, setCurrentYear } = props;
  return (
    <div className="mt-4">
      เลือกปีพ.ศ.
      <select
        onChange={(e) => setCurrentYear(e.target.value)}
        value={currentYear}
      >
        {yearLists.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
        {/* dropdown years */}
      </select>
    </div>
  );
};

const DeathChart = () => {
  return (
    <div className="bg-green-100 w-1/3 p-4">
      <div className="font-bold mb-2">แนวโน้มการเสียชีวิต</div>
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
    </div>
  );
};

const DeathCause7 = () => {
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => b - a
  );
  const [currentYear, setCurrentYear] = useState(2559);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  const [totalDeath, setTotalDeath] = useState(0);

  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
      // == หน้าตาเหมือนกันก็พอ
      // === type ต้องตรงกันด้วย เช่น number = number
      // = assign
    );
    const _totalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );

    // ------------------------------------
    const deathCauseLists = [
      ...new Set(deathCauseDatas.map((r) => r.causeOfDeath)),
    ];
    console.log(deathCauseLists);
    // หา unique สาเหตุการตาย

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
            // death = ค่า key ที่เราปั้นขึ้นมาตอน reduce
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

    // --------------------------------------
    const provinceLists = [
      ...new Set(ThailandDeathCause.map((r) => r.provinceName)),
    ];
    // console.log(provinceLists);
    // หา unique ของจังหวัดแต่ละจังหวัด
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
    // console.log("deathByProvinces", deathByProvinces);
    setDeathByCauses(_deathByCauses);
    setDeathByProvinces(_deathByProvinces);
    setTotalDeath(_totalDeath);
  }, [currentYear]);
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <DeathFilter
        yearLists={yearLists}
        currentYear={currentYear}
        setCurrentYear={setCurrentYear}
      />
      <div className="mt-4">การเสียชีวิตของปี {currentYear}</div>
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
