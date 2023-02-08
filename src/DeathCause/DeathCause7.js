import { useState, useEffect } from "react";
import EChartsReact from "echarts-for-react";
import deaths from "./thailand-death-cause.json";

const DeathsByCauseTable = ({ totalDeath, deathsByCause }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl">สาเหตุการเสียชีวิต</h2>
      <table className="font-nstl text-sm">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString("TH")}</td>
            <td>100%</td>
          </tr>
          {deathsByCause.map((deathByCause, idx) => (
            <tr key={idx}>
              <td>{deathByCause.causeOfDeath.toLocaleString("TH")}</td>
              <td>{deathByCause.death.toLocaleString("TH")}</td>
              <td>
                {((deathByCause.death * 100) / totalDeath)
                  .toFixed(2)
                  .toLocaleString("TH")}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DeathsByProvinceTable = ({ totalDeath, deathsByProvince }) => {
  return (
    <div>
      <h2 className="mb-2 text-xl">จำนวนผู้เสียชีวิตแยกตามจังหวัด</h2>
      <table className="font-nstl text-sm">
        <tbody>
          <tr>
            <td>ทั้งหมด</td>
            <td>{totalDeath.toLocaleString("TH")}</td>
            <td>100%</td>
          </tr>
          {deathsByProvince.map((deathByProvince, idx) => (
            <tr key={idx}>
              <td>{deathByProvince.provinceName.toLocaleString("TH")}</td>
              <td>{deathByProvince.death.toLocaleString("TH")}</td>
              <td>
                {((deathByProvince.death * 100) / totalDeath)
                  .toFixed(2)
                  .toLocaleString("TH")}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const DeathCharts = () => {
  const optionForDeathTrend = {
    xAxis: {
      type: "category",
      data: ["2554", "2555", "2556", "2557", "2558", "2559", "2560"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };

  const optionForDeathsByGender = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "เพศ",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "เพศชาย" },
          { value: 735, name: "เพศหญิง" },
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
    <div>
      <h2 className="mb-2 text-xl">แนวโน้มการเสียชีวิต</h2>
      <EChartsReact option={optionForDeathTrend} />
      <EChartsReact option={optionForDeathsByGender} />
    </div>
  );
};

const DeathCause7 = () => {
  const listOfYears = [...new Set(deaths.map((death) => death.year))].sort(
    (a, b) => b - a
  );

  // const totalDeath = deaths.reduce(
  //   (acc, death) => acc + death.deathMale + death.deathFemale,
  //   0
  // );

  // const deathCauses = [...new Set(deaths.map((death) => death.causeOfDeath))];

  // const deathsByCause = deathCauses
  //   .map((deathCause) => {
  //     const _deathsForCause = deaths
  //       .filter((death) => death.causeOfDeath === deathCause)
  //       .reduce(
  //         (acc, death) => ({
  //           deathMale: acc.deathMale + death.deathMale,
  //           deathFemale: acc.deathFemale + death.deathFemale,
  //           death: acc.death + death.deathMale + death.deathFemale,
  //         }),
  //         {
  //           deathMale: 0,
  //           deathFemale: 0,
  //           death: 0,
  //         }
  //       );
  //     return {
  //       causeOfDeath: deathCause,
  //       deathMale: _deathsForCause.deathMale,
  //       deathFemale: _deathsForCause.deathFemale,
  //       death: _deathsForCause.death,
  //     };
  //   })
  //   .sort((a, b) => b.death - a.death);

  // const deathProvinces = [
  //   ...new Set(deaths.map((death) => death.provinceName)),
  // ];

  // const deathsByProvince = deathProvinces
  //   .map((deathProvince) => {
  //     const _deathsForProvince = deaths
  //       .filter((death) => death.provinceName === deathProvince)
  //       .reduce(
  //         (acc, death) => ({
  //           deathMale: acc.deathMale + death.deathMale,
  //           deathFemale: acc.deathFemale + death.deathFemale,
  //           death: acc.death + death.deathMale + death.deathFemale,
  //         }),
  //         {
  //           deathMale: 0,
  //           deathFemale: 0,
  //           death: 0,
  //         }
  //       );
  //     return {
  //       provinceName: deathProvince,
  //       deathMale: _deathsForProvince.deathMale,
  //       deathFemale: _deathsForProvince.deathFemale,
  //       death: _deathsForProvince.death,
  //     };
  //   })
  //   .sort((a, b) => b.death - a.death);

  const [currentYear, setCurrentYear] = useState(Math.max(...listOfYears));
  const [totalDeath, setTotalDeath] = useState(0);
  const [deathsByCause, setDeathsByCause] = useState([]);
  const [deathsByProvince, setDeathsByProvince] = useState([]);

  useEffect(() => {
    const _totalDeath = deaths
      .filter((death) => death.year === currentYear)
      .reduce((acc, death) => acc + death.deathMale + death.deathFemale, 0);
    const deathCauses = [
      ...new Set(
        deaths
          .filter((death) => death.year === currentYear)
          .map((death) => death.causeOfDeath)
      ),
    ];
    const _deathsByCause = deathCauses
      .map((deathCause) => {
        const _deathsForCause = deaths
          .filter((death) => death.year === currentYear)
          .filter((death) => death.causeOfDeath === deathCause)
          .reduce(
            (acc, death) => ({
              deathMale: acc.deathMale + death.deathMale,
              deathFemale: acc.deathFemale + death.deathFemale,
              death: acc.death + death.deathMale + death.deathFemale,
            }),
            {
              deathMale: 0,
              deathFemale: 0,
              death: 0,
            }
          );
        return {
          causeOfDeath: deathCause,
          deathMale: _deathsForCause.deathMale,
          deathFemale: _deathsForCause.deathFemale,
          death: _deathsForCause.death,
        };
      })
      .sort((a, b) => b.death - a.death);
    const deathProvinces = [
      ...new Set(
        deaths
          .filter((death) => death.year === currentYear)
          .map((death) => death.provinceName)
      ),
    ];
    const _deathsByProvince = deathProvinces
      .map((deathProvince) => {
        const _deathsForProvince = deaths
          .filter((death) => death.year === currentYear)
          .filter((death) => death.provinceName === deathProvince)
          .reduce(
            (acc, death) => ({
              deathMale: acc.deathMale + death.deathMale,
              deathFemale: acc.deathFemale + death.deathFemale,
              death: acc.death + death.deathMale + death.deathFemale,
            }),
            {
              deathMale: 0,
              deathFemale: 0,
              death: 0,
            }
          );
        return {
          provinceName: deathProvince,
          deathMale: _deathsForProvince.deathMale,
          deathFemale: _deathsForProvince.deathFemale,
          death: _deathsForProvince.death,
        };
      })
      .sort((a, b) => b.death - a.death);

    setTotalDeath(_totalDeath);
    setDeathsByCause(_deathsByCause);
    setDeathsByProvince(_deathsByProvince);
  }, [currentYear]);

  const handleYearSelect = (e) => {
    e.preventDefault();

    setCurrentYear(
      Number(e.target.options[e.target.options.selectedIndex].value)
    );
  };

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี {Math.min(...listOfYears)} -{" "}
        {Math.max(...listOfYears)}
      </h1>
      {/* <div>ปี พ.ศ. {currentYear}</div> */}
      <div className="mb-2 flex content-center gap-x-2">
        <label
          htmlFor="year"
          className="block basis-1/4 self-center text-sm font-medium text-gray-900"
        >
          ปี พ.ศ.
        </label>
        <select
          id="year"
          onChange={(e) => handleYearSelect(e)}
          className="block w-full basis-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        >
          {listOfYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <DeathsByCauseTable
          totalDeath={totalDeath}
          deathsByCause={deathsByCause}
        />
        <DeathsByProvinceTable
          totalDeath={totalDeath}
          deathsByProvince={deathsByProvince}
        />
        <DeathCharts />
      </div>
    </>
  );
};

export default DeathCause7;
