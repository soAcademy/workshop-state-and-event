import deathData from './thailand-death-cause.json'
import DeathGenderPie from "./DeathGenderPie";
import DeathPerCause from "./DeathPerCause";
import DeathPerProvince from "./DeathPerProvince";
import DeathTrendLine from "./DeathTrendLine";
import { useState, useEffect } from "react";

const Dashboard1 = () => {
  const uniqueYears = [...new Set(deathData.map((e) => e.year))].sort(
    (a, b) => a - b
  );
  const [year, setYear] = useState(uniqueYears.at(-1));
  const [deathDataFiltered, setDeathDataFiltered] = useState(deathData);
  const [totalDeath, setTotalDeath] = useState(0);
  const [uniqueCauseOfDeath, setUniqueCauseOfDeath] = useState([
    ...new Set(deathData.map((i) => i.causeOfDeath)),
  ]);
  const [uniqueProvince, setUniqueProvince] = useState([
    ...new Set(deathDataFiltered.map((i) => i.provinceName)),
  ]);
  const updateData = () => {
    const _deathDataFiltered = deathData.filter((i) => i.year === Number(year));
    setDeathDataFiltered(_deathDataFiltered);
  }
  useEffect(() => {
    updateData()
  }, [year]);
  useEffect(()=> {
    setUniqueCauseOfDeath([
      ...new Set(deathDataFiltered.map((i) => i.causeOfDeath)),
    ]);
    setUniqueProvince([
      ...new Set(deathDataFiltered.map((i) => i.provinceName)),
    ]);
    const _totalDeath = deathDataFiltered.reduce((acc, e) => {
      acc += e.deathMale + e.deathFemale;
      return acc;
    }, 0);
    setTotalDeath(_totalDeath);
  },[deathDataFiltered])

  return (
    <div className="font-kanit">
      <div className="h-[822px] w-[1442px] p-2 m-2">
        <p className='text-2xl font-bold'>จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554-2560</p>
        <div className="flex items-center">
          <p>เลือกปี</p>
          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
            className="border-2 rounded-md mx-2"
          >
            {uniqueYears.map((e,idx) => {
              return <option value={`${e}`} key={idx}>{e}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-row space-x-4 h-full w-full">
          <div className="w-1/2 text-xs border-2 p-2 overflow-scroll no-scrollbar">
            <p className="text-xl font-semibold">สาเหตุการเสียชีวิตปี {year}</p>
            <div className="flex flex-row justify-between w-full my-1">
              <div className="w-2/3">ทั้งหมด</div>
              <div className="flex flex-row w-1/3">
                <div className="bg-blue-500 w-1/2 text-right px-2">
                  {totalDeath}
                </div>
                <div className="bg-teal-400 w-1/2 px-2">100%</div>
              </div>
            </div>
            <DeathPerCause
              deathDataFiltered={deathDataFiltered}
              uniqueCauseOfDeath={uniqueCauseOfDeath}
              totalDeath={totalDeath}
            />
          </div>
          <div className="w-1/4 text-xs border-2 p-2 overflow-scroll no-scrollbar">
            <div className="text-xs ">
              <p className="text-xl font-semibold">
                จำนวนผู้เสียชีวิตแยกตามจังหวัดปี {year}
              </p>
              <div className="flex flex-row justify-between w-full my-1">
                <div className="w-1/2">ทั้งหมด</div>
                <div className="flex flex-row w-1/2">
                  <div className="bg-blue-500 w-1/2 text-right px-2">
                    {totalDeath.toLocaleString()}
                  </div>
                  <div className="bg-teal-400 w-1/2 px-2">100%</div>
                </div>
              </div>
              <DeathPerProvince
                deathDataFiltered={deathDataFiltered}
                uniqueProvince={uniqueProvince}
                totalDeath={totalDeath}
              />
            </div>
          </div>
          <div className="w-1/4 text-xs border-2 p-2 h-full overflow-scroll no-scrollbar">
            <div className="text-md font-semibold h-1/2">
              <p className="text-xl">แนวโน้มการเสียชีวิต</p>
              <DeathTrendLine data={deathData} />
            </div>
            <div className="text-md font-semibold h-1/2">
              <p className="text-xl">จำนวนผู้เสียชีวิตแยกตามเพศ</p>
              <DeathGenderPie data={deathDataFiltered} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
