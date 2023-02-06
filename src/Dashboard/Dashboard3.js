import React, { useEffect, useMemo, useState } from "react";
import JSON_DEATHCAUSES from "./thailand-death-cause.json";

const template = [
  {
    years: "2558",
    allDeath: 267115,
    allDeathMale: 50000,
    allDeathFemale: 50000,
    listOfCauseOfDeath: [
      {
        name: "ความดันเลือดสูง",
        deathMale: 2000,
        deathFemale: 2000,
        totalDeath: 4000,
      },
    ],
    listOfDeathEachProvince: [
      {
        provinceKey: 12,
        name: "สระบุรี",
        deathMale: 2000,
        deathFemale: 2000,
        totalDeath: 4000,
      },
    ],
  },
];

const ListOfCauseOfDeaths = (props) => {
  const { MEMO_DEATH_CAUSE, selectedYear } = props;
  const data = MEMO_DEATH_CAUSE.datas.find(
    (item) => item.year === Number(selectedYear)
  );
  console.log("data", data);
  data.listOfCauseOfDeath.sort((a, b) => b.totalDeath - a.totalDeath);

  return (
    <>
      <tr>
        <td className="text-sm">ทั้งหมด</td>
        <td className="bg-sky-500 text-white px-4 py-1 text-sm">
          {data.allDeath}
        </td>
        <td className="bg-green-600 text-white px-4 py-1 text-sm">
          {((data.allDeath / data.allDeath) * 100).toFixed(2)} %
        </td>
      </tr>
      {data.listOfCauseOfDeath.map((cause) => (
        <tr key={cause.name}>
          <td className="text-sm">{cause.name}</td>
          <td className="bg-sky-500 text-white px-4 py-1 text-sm">
            {cause.totalDeath}
          </td>
          <td className="bg-green-600 text-white px-4 py-1 text-sm">
            {((cause.totalDeath / data.allDeath) * 100).toFixed(2)} %
          </td>
        </tr>
      ))}
    </>
  );
};

const ListOfDeathEachProvince = (props) => {
  const { MEMO_DEATH_CAUSE, selectedYear } = props;
  const data = MEMO_DEATH_CAUSE.datas.find(
    (item) => item.year === Number(selectedYear)
  );
  console.log("data", data);
  data.listOfDeathEachProvince.sort((a, b) => b.totalDeath - a.totalDeath);

  return (
    <>
      <tr>
        <td className="text-sm">ทั้งหมด</td>
        <td className="bg-sky-500 text-white px-4 py-1 text-sm">
          {data.allDeath}
        </td>
        <td className="bg-green-600 text-white px-4 py-1 text-sm">
          {((data.allDeath / data.allDeath) * 100).toFixed(2)} %
        </td>
      </tr>
      {data.listOfDeathEachProvince.map((cause) => (
        <tr key={cause.name}>
          <td className="text-sm">{cause.name}</td>
          <td className="bg-sky-500 text-white px-4 py-1 text-sm">
            {cause.totalDeath}
          </td>
          <td className="bg-green-600 text-white px-4 py-1 text-sm">
            {((cause.totalDeath / data.allDeath) * 100).toFixed(2)} %
          </td>
        </tr>
      ))}
    </>
  );
};

const Dashboard3 = () => {
  const MEMO_DEATH_CAUSE = useMemo(() => {
    const allYears = [...new Set(JSON_DEATHCAUSES.map((item) => item.year))];
    allYears.sort((a, b) => a - b);
    const tempObject = {
      year: "",
      allDeath: 0,
      allDeathMale: 0,
      allDeathFemale: 0,
      listOfCauseOfDeath: [],
      listOfDeathEachProvince: [],
    };

    // find each year
    const datas = allYears.map((year) => ({ ...tempObject, year: year }));
    //find all deathMale
    datas.forEach((item) => {
      item.allDeathMale = JSON_DEATHCAUSES.reduce((acc, cur) => {
        if (cur.year === item.year) return (acc += Number(cur.deathMale));
        else return acc;
      }, 0);
    });
    //find all deathFeMale
    datas.forEach((item) => {
      item.allDeathFemale = JSON_DEATHCAUSES.reduce((acc, cur) => {
        if (cur.year === item.year) return (acc += Number(cur.deathFemale));
        else return acc;
      }, 0);
    });
    // find all Death
    datas.forEach((item) => {
      item.allDeath = item.allDeathFemale + item.allDeathMale;
    });

    //find all listOfCauseOfDeath
    datas.forEach((data) => {
      data.listOfCauseOfDeath = [
        ...new Set(JSON_DEATHCAUSES.map((item) => item.causeOfDeath)),
      ].map((diseaseName) => {
        const allDeathFemale = JSON_DEATHCAUSES.reduce((acc, cur) => {
          if (cur.year === data.year && cur.causeOfDeath === diseaseName)
            return (acc += Number(cur.deathFemale));
          else return acc;
        }, 0);
        const allDeathMale = JSON_DEATHCAUSES.reduce((acc, cur) => {
          if (cur.year === data.year && cur.causeOfDeath === diseaseName)
            return (acc += Number(cur.deathMale));
          else return acc;
        }, 0);
        return {
          name: diseaseName,
          deathMale: allDeathMale,
          deathFemale: allDeathFemale,
          totalDeath: allDeathFemale + allDeathMale,
        };
      });
    });
    //find all listOfDeathEachProvince
    datas.forEach((data) => {
      data.listOfDeathEachProvince = [
        ...new Set(JSON_DEATHCAUSES.map((item) => item.provinceKey)),
      ].map((provinceKey) => {
        const nameObject = JSON_DEATHCAUSES.find(
          (data) => data.provinceKey === provinceKey
        );
        const allDeathFemale = JSON_DEATHCAUSES.reduce((acc, cur) => {
          if (data.year === cur.year && cur.provinceKey === provinceKey)
            return (acc += Number(cur.deathFemale));
          else return acc;
        }, 0);
        const allDeathMale = JSON_DEATHCAUSES.reduce((acc, cur) => {
          if (data.year === cur.year && cur.provinceKey === provinceKey)
            return (acc += Number(cur.deathMale));
          else return acc;
        }, 0);
        return {
          provinceKey,
          name: nameObject.provinceName,
          deathMale: allDeathMale,
          deathFemale: allDeathFemale,
          totalDeath: allDeathFemale + allDeathMale,
        };
      });
    });
    return {
      allYears,
      datas,
    };
  }, [JSON_DEATHCAUSES]);
  console.log("MEMO_DEATH_CAUSE", MEMO_DEATH_CAUSE);

  const initialYear = MEMO_DEATH_CAUSE.allYears[0];
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [causeOfDeathEachYear, setCauseOfDeathEachYear] = useState("");

  useEffect(() => {
    const topCauseOfDeath = MEMO_DEATH_CAUSE.datas
      .find((item) => item.year === Number(selectedYear))
      .listOfCauseOfDeath.map((item) => ({
        totalDeath: item.totalDeath,
        name: item.name,
      }));

    topCauseOfDeath.sort((a, b) => b.totalDeath - a.totalDeath);

    setCauseOfDeathEachYear(
      topCauseOfDeath[0].name === "อื่นๆ"
        ? `${topCauseOfDeath[1].name} และ ${topCauseOfDeath[2].name}`
        : `${topCauseOfDeath[0].name} และ ${topCauseOfDeath[1].name}`
    );
  }, [selectedYear]);

  // const DeathCauseList = [...new Set(DeathCause.map((r) => r.causeOfDeath))];
  // console.log("DeathCauseList:", DeathCauseList);
  //แยกสาเหตุการตายออกมา

  // const deathEachProvince = [...new Set(DeathCause.map((r) => r.provinceName))];
  // filter ตามปี

  // console.log("deathEachProvince:", deathEachProvince);
  // const DeathByCause = DeathCauseList.map((deathcause) => {
  //เอา deathcause มา filter หาสาเหตุการตาย
  // const filterData = DeathCause.filter((r) => r.causeOfDeath === deathcause);
  // console.log("filterdata:", filterData);
  // const sumOfDeath = filterData.reduce(
  // หายอดรวมสาเหตุการตาย แยกชาย หญิง
  //   (acc, r) => {
  //     acc.deathFemale += r.deathFemale;
  //     acc.deathMale += r.deathMale;
  //     return acc;
  //   },
  //   { deathFemale: 0, deathMale: 0 }
  // );

  // console.log("sumOfDeath:", sumOfDeath);
  //   return {
  //     causeOfDeath: deathcause,
  //     deathFemale: sumOfDeath.deathFemale,
  //     deathMale: sumOfDeath.deathMale,
  //     death: sumOfDeath.deathMale + sumOfDeath.deathFemale,
  //   };
  // }).sort((a, b) => b.death - a.death);

  // console.log("DeathByCause:", DeathByCause);
  // const totalDeath = DeathByCause.reduce((acc, r) => {
  //   return acc + r.death;
  // }, 0);
  // console.log("TotalDeath:", totalDeath);
  const onSelctedYear = (event) => {
    const year = event.target.value;
    setSelectedYear(Number(year));
  };
  return (
    <div className="mx-6 my-6">
      <div>
        <h1 className="text-xl font-semibold">
          จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี{" "}
          {`${MEMO_DEATH_CAUSE.allYears[0]} - ${
            MEMO_DEATH_CAUSE.allYears[MEMO_DEATH_CAUSE.allYears.length - 1]
          }`}
        </h1>
        <label>เลือกปี: </label>
        <select name="year" onChange={onSelctedYear}>
          {MEMO_DEATH_CAUSE.allYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <p>
          ปี {selectedYear} :: สาเหตุการเสียชีวิต : {causeOfDeathEachYear}
        </p>
      </div>
      <div className="flex mt-6">
        <div className="border border-gray-400 w-[60%] p-3">
          <table className=" ">
            <h1 className="mb-2 underline text-lg">
              สาเหตุการเสียชีวิตปี {selectedYear}
            </h1>
            <tbody>
              <ListOfCauseOfDeaths
                MEMO_DEATH_CAUSE={MEMO_DEATH_CAUSE}
                selectedYear={selectedYear}
              />
              {/* {MEMO_DEATH_CAUSE.filter((item) => item.year === "2558").map(
                (data) => (
                  <tr>
                    <td className="text-sm">{r.causeOfDeath}</td>
                    <td className="bg-sky-500 text-white px-4 py-1 text-sm">
                      {r.death}
                    </td>
                    <td className="bg-green-600 text-white px-4 py-1 text-sm">
                      {((r.death / totalDeath) * 100).toFixed(2)} %
                    </td>
                  </tr>
                )
              )} */}
            </tbody>
          </table>
        </div>
        <div className="border border-gray-400 w-[60%] p-3">
          <table className=" ">
            <h1 className="mb-2 underline text-lg">
              สาเหตุการเสียชีวิตปี {selectedYear}
            </h1>
            <tbody>
              <ListOfDeathEachProvince
                MEMO_DEATH_CAUSE={MEMO_DEATH_CAUSE}
                selectedYear={selectedYear}
              />
              {/* {MEMO_DEATH_CAUSE.filter((item) => item.year === "2558").map(
                (r) => (
                  <tr>
                    <td className="text-sm">{deathEachProvince}</td>
                    <td className="bg-sky-500 text-white px-4 py-1 text-sm">
                      123
                    </td>
                    <td className="bg-green-600 text-white px-4 py-1 text-sm">
                      เปอเซ็น
                    </td>
                  </tr>
                )
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard3;