import { useState, useEffect } from "react";
import deathDatas from "../thailand-death-cause.json";

export const useInitNSumByYearChart = () => {
  const [yearsList, setYearsList] = useState([]);
  const [yearSelected, setYearSelected] = useState(0);
  const [uniqCause, setUniqCause] = useState([]);
  const [uniqProvince, setUniqProvince] = useState([]);
  const [sumTrendByYear, setSumTrendByYear] = useState([]);

  useEffect(() => {
    const allYears = [...new Set(deathDatas.map((r) => r.year))].sort(
      (a, b) => b - a
    );
    setYearsList(allYears);
    setYearSelected(Math.max(...allYears));
    setUniqCause([...new Set(deathDatas.map((r) => r.causeOfDeath))]);
    setUniqProvince([...new Set(deathDatas.map((r) => r.provinceName))]);

    // CHARTS BY YEAR
    const sumAllDeathByAllYear = allYears
      .map((year) => {
        const sumAmount = deathDatas
          .filter((data) => data.year === year)
          .reduce((acc, r) => acc + r.deathMale + r.deathFemale, 0);
        return { year: year, amount: sumAmount };
      })
      .sort((a, b) => a.year - b.year);
    setSumTrendByYear(sumAllDeathByAllYear);
  }, []);

  return {
    yearsList,
    setYearsList,
    yearSelected,
    setYearSelected,
    uniqCause,
    setUniqCause,
    uniqProvince,
    setUniqProvince,
    sumTrendByYear,
    setSumTrendByYear,
  };
};
