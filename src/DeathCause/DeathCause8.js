import React, { useState, useEffect } from "react";
import ThailandDeathCause from "./thailand-death-cause.json";
import ReactECharts from "echarts-for-react";

// เอาข้อมูลทุกอันเข้าไปใส่ใน useEffect เมื่อ currentYear ถูก trigger ข้อมูลทุกอย่างก็จะเปลี่ยนไปตามปีที่เราเลือก
const DeathByCause = (props) => {
  const { deathByCauses, totalDeath, setChooseCause } = props;
  return (
    <div className="bg-yellow-200 w-1/3 p-4 rounded-[20px] h-screen overflow-auto">
      <div className="font-bold mb-2 bg-white p-2 text-center">
        สาเหตุการเสียชีวิต
      </div>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByCauses.map((r, idx) => (
            <tr
              className="hover:cursor-pointer hover:bg-white hover:text-sky-600 mx-auto"
              onClick={() => setChooseCause(r.cause)}
              key={idx}
            >
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
    <div className="bg-sky-200 w-1/3 p-4 rounded-[20px] h-screen overflow-auto">
      <div className="font-bold mb-2 bg-white p-2 text-center">
        จำนวนผู้เสียชีวิตแยกตามจังหวัด
      </div>
      <table>
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString()}</td>
            <td>100%</td>
          </tr>
          {deathByProvinces.map((r, idx) => (
            <tr className="hover:cursor-pointer hover:bg-white" key={idx}>
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

const DeathChart = (props) => {
  const { chartOption1, chartOption2 } = props;
  return (
    <div className="bg-green-100 w-1/3 p-4 rounded-[20px]">
      <div className="font-bold mb-2 bg-white p-2 text-center">
        แนวโน้มการเสียชีวิต
      </div>
      <ReactECharts option={chartOption1} />
      <ReactECharts option={chartOption2} />
    </div>
  );
};

const DeathCause8 = () => {
  const yearLists = [...new Set(ThailandDeathCause.map((r) => r.year))].sort(
    (a, b) => b - a
  );
  const [currentYear, setCurrentYear] = useState(2559);
  const [deathByCauses, setDeathByCauses] = useState([]);
  const [deathByProvinces, setDeathByProvinces] = useState([]);
  const [totalDeath, setTotalDeath] = useState(0);
  const [chartOption1, setChartOption1] = useState({});
  const [chartOption2, setChartOption2] = useState({});
  const [chooseCause, setChooseCause] = useState();

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
          .filter(
            (r) =>
              r.provinceName === province &&
              (chooseCause === undefined || chooseCause === r.causeOfDeath) //*****ฮึ่มมมม*****
          )
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

    // -------------------------------------

    // หายอดการตายเปรียบเทียบจากชายหญิง
    const _deathByGender = deathCauseDatas.reduce(
      (acc, r) => ({
        death: acc.death + r.deathMale + r.deathFemale,
        deathFemale: acc.death + r.deathFemale,
        deathMale: acc.death + r.deathMale,
      }),
      {
        death: 0,
        deathFemale: 0,
        deathMale: 0,
      }
    );
    console.log("_deathByGender", _deathByGender);

    const _chartOption1 = {
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
            { value: _deathByGender.deathMale, name: "ชาย" },
            { value: _deathByGender.deathFemale, name: "หญิง" },
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
    // ---------------------------------------

    // หายอดการตายรวมในแต่ละปี
    const _deathByYears = yearLists
      .map((year) => {
        const totalDeath = ThailandDeathCause.filter(
          (r) => r.year === year
        ).reduce(
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
          year,
          death: totalDeath.death,
          deathFemale: totalDeath.deathFemale,
          deathMale: totalDeath.deathMale,
        };
      })
      .sort((a, b) => b.year - a.year);

    // console.log("_deathByYears", _deathByYears);

    const _chartOption2 = {
      xAxis: {
        type: "category",
        data: _deathByYears.map((r) => r.year),
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
          data: _deathByYears.map((r) => r.death),
          type: "line",
          smooth: true,
          lineStyle: { color: "red", width: 5, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };

    setDeathByCauses(_deathByCauses);
    setDeathByProvinces(_deathByProvinces);
    setTotalDeath(_totalDeath);
    setChartOption1(_chartOption1);
    setChartOption2(_chartOption2);
  }, [currentYear, chooseCause]);
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
        <DeathByCause
          totalDeath={totalDeath}
          deathByCauses={deathByCauses}
          setChooseCause={setChooseCause}
        />
        <DeathByProvince
          totalDeath={totalDeath}
          deathByProvinces={deathByProvinces}
        />
        <DeathChart chartOption1={chartOption1} chartOption2={chartOption2} />
      </div>
    </div>
  );
};

export default DeathCause8;
