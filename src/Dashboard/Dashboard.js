import { useState, useEffect } from "react";
import deathDatas from "./thailand-death-cause.json";
import ByCause from "./ByCause";
import SelectYear from "./SelectYear";
import ByProvince from "./ByProvince";
import TrendChart from "./TrendChart";
import GenderChart from "./GenderChart";

const Dashboard = () => {
  const [yearSelected, setYearSelected] = useState(0);
  const [yearsList, setYearsList] = useState([]);
  const [datasByYear, setDatasByYear] = useState([]);
  const [sumByYear, setSumByYear] = useState(0);
  const [datasByProveince, setDatasByProveince] = useState([]);
  const [sumByProvince, setSumByProvince] = useState(0);
  const [sumTrendByYear, setSumTrendByYear] = useState([]);

  useEffect(() => {
    const exceptYears = 2560;
    const allYears = [...new Set(deathDatas.map((r) => r.year))]
      .sort((a, b) => b - a)
      .filter((d) => d !== exceptYears);

    setYearsList(allYears);
    setYearSelected(Math.max(...allYears));

    //sumDeathAllYears
    const sumAllDeathByAllYear = allYears
      .map((year) => {
        const sumAmount = deathDatas
          .filter((data) => data.year === year)
          .reduce((acc, r) => acc + r.deathMale + r.deathFemale, 0);
        return { year: year, amount: sumAmount };
      })
      .sort((a, b) => a.year - b.year);
    // console.log(sumAllDeathByAllYear);
    setSumTrendByYear(sumAllDeathByAllYear);
  }, []);

  useEffect(() => {
    const uniqCause = [...new Set(deathDatas.map((r) => r.causeOfDeath))];
    const uniqProvince = [...new Set(deathDatas.map((r) => r.provinceName))];
    // console.log(uniqProvince);

    const datasDeathFilledByYear = deathDatas.filter((data) => {
      return data.year === yearSelected;
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

    const sumDeathInYear = deathByCause.reduce(
      (acc, r) => acc + r.gender.male + r.gender.female,
      0
    );

    const deathByProvince = uniqProvince
      .map((province) => {
        // console.log(province);
        const deathFilledByYearByProvince = datasDeathFilledByYear
          .filter((data) => {
            return data.provinceName === province;
          })
          .reduce((acc, r) => acc + r.deathMale + r.deathFemale, 0);
        return { province: province, amount: deathFilledByYearByProvince };
      })
      .sort((a, b) => b.amount - a.amount);
    // console.log(deathByProvinceMap);
    const sumDeathAllProvince = deathByProvince.reduce(
      (acc, r) => acc + r.amount,
      0
    );

    setDatasByYear(deathByCause);
    setSumByYear(sumDeathInYear);
    setDatasByProveince(deathByProvince);
    setSumByProvince(sumDeathAllProvince);
  }, [yearSelected]);

  return (
    <div className="flex flex-col gap-y-1 font-prompt p-4">
      <h1 className="text-2xl font-bold">
        จำนวนผู้เสียชีวิต สาเหตุ และอัตราการตาย ปี 2554 - 2559
      </h1>
      <SelectYear
        yearSelected={yearSelected}
        setYearSelected={setYearSelected}
        yearsList={yearsList}
      />
      <div className="w-full flex gap-x-1 text-sm">
        <ByCause
          yearSelected={yearSelected}
          datasByYear={datasByYear}
          sumByYear={sumByYear}
        />
        <ByProvince
          yearSelected={yearSelected}
          datasByProveince={datasByProveince}
          sumByProvince={sumByProvince}
        />
        <div className="chartBlock w-4/12 flex flex-col gap-y-1 border-2 rounded-lg p-4">
          <TrendChart sumTrendByYear={sumTrendByYear} />
          {/* {console.log(sumByYear)} */}
          {sumByYear > 0 && <GenderChart datasByYear={datasByYear} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
