import { useState, useEffect } from "react";
import deathDatas from "./thailand-death-cause.json";

const DeathCause2 = () => {
  const [datasByYear, setDatasByYear] = useState([]);
  const [sumByYear, setSumByYear] = useState(0);

  useEffect(() => {
    const uniqCause = [...new Set(deathDatas.map((r) => r.causeOfDeath))];
    const datasDeathFilledByYear = deathDatas.filter((data) => {
      return data.year === 2558;
    });
    const deathByCause = uniqCause
      .map((cause) => {
        const deathByYearByCause = datasDeathFilledByYear
          .filter((data) => data.causeOfDeath === cause)
          .reduce(
            (acc, r) => {
              acc.male += r.deathMale;
              acc.female += r.deathFemale;
              return acc;
            },
            { male: 0, female: 0 }
          );

        return { cause: cause, gender: deathByYearByCause };
      })
      .sort(
        (a, b) =>
          b.gender.male + b.gender.female - (a.gender.male + a.gender.female)
      );
    console.log(deathByCause);

    const sumDeathInYear = deathByCause.reduce(
      (acc, r) => acc + r.gender.male + r.gender.female,
      0
    );
    console.log(sumDeathInYear);

    setDatasByYear(deathByCause);
    setSumByYear(sumDeathInYear);
  }, []);

  return (
    <div className="flex flex-col gap-y-1 font-prompt p-4">
      <h1 className="text-2xl font-bold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 25xx - 25xx
      </h1>

      <div className="selectYear w-full flex items-center gap-x-2">
        <label htmlFor="selectYear" className="text-sm">
          เลือกปี พ.ศ.
        </label>
        <select
          id="selectYear"
          className="w-fit border-2 text-sm rounded-lg p-1"
          // value={yearSelected}
          // onChange={(e) => setYearSelected(Number(e.target.value))}
        >
          {/* {yearsList.map((r) => ( */}
          {/* <option key={r} value={r}>
            {r}
          </option>
        ))} */}
        </select>
      </div>

      <div className="w-full flex gap-x-1 text-sm">
        {/* ANOTHER COMPONENT */}
        <div className="causeBlock w-5/12 flex flex-col border-2 rounded-lg p-4">
          <h1 className="text-lg font-bold mb-2">
            {/* สาเหตุการเสียชีวิตปี {yearSelected} */}
          </h1>
          <div className="blockCause flex justify-between mb-1">
            <div className="causeName">ทั้งหมด</div>
            <div className="tbAmount flex gap-x-1">
              <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
                {sumByYear}
              </div>
              <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
                100
              </div>
            </div>
          </div>
          {datasByYear.map((data) => {
            return (
              <div key={data.cause}>
                {data.gender.male + data.gender.female > 0 && (
                  <div className="blockCause flex justify-between mb-1">
                    <div className="causeName">{data.cause}</div>
                    <div className="tbAmount flex gap-x-1">
                      <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
                        {data.gender.male + data.gender.female}
                      </div>
                      <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
                        {(
                          ((data.gender.male + data.gender.female) /
                            sumByYear) *
                          100
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ANOTHER COMPONENT */}
        <div className="provinceBlock w-3/12 flex flex-col border-2 rounded-lg p-4">
          <h1 className="text-lg font-bold mb-2">
            {/* จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {yearSelected} */}
          </h1>
          <div className="blockCause flex justify-between mb-1">
            <div className="provinceName">ทั้งหมด</div>
            <div className="tbAmount flex gap-x-1">
              <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
                {/* {sumByProvince} */}
              </div>
              <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
                100
              </div>
            </div>
          </div>
          {datasByYear?.map((data) => {
            return (
              <div key={data.cause}>
                {data.gender.male + data.gender.female > 0 && (
                  <div className="blockCause flex justify-between mb-1">
                    <div className="causeName">{data.cause}</div>
                    <div className="tbAmount flex gap-x-1">
                      <div className="allAmount w-[70px] h-fit text-right bg-blue-800 text-white rounded-md p-1">
                        {data.gender.male + data.gender.female}
                      </div>
                      <div className="allPercent w-[70px] h-fit text-left bg-teal-600 text-white rounded-md p-1">
                        {/* {(((data.gender.male + data.gender.female) / sumByYear) *100).toFixed(2)} */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="chartBlock w-4/12 flex flex-col gap-y-1 border-2 rounded-lg p-4">
          {/* ANOTHER COMPONENT */}
          <div className="trendDeath w-full h-fit">
            <h1 className="text-lg font-bold mb-2">แนวโน้มการเสียชีวิต</h1>
            {/* <ReactECharts option={options} /> */}
          </div>

          {/* ANOTHER COMPONENT */}
          <div className="deathByGender w-full h-fit">
            <h1 className="text-lg font-bold mb-2">
              จำนวนผู้เสียชีวิตแยกตามเพศ
            </h1>
            {/* <ReactECharts option={options} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeathCause2;
