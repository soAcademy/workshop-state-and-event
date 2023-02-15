import { useState, useEffect } from "react";
import ThailandDeathCause from "../thailand-death-cause.json";

export const usePrepDatas = () => {
  const [totalDeath, setTotalDeath] = useState(0);
  const [currentYear, setCurrentYear] = useState(2559);
  const [deathCauseDatas, setDeathCauseDatas] = useState([]);
  const [yearLists, setYearLists] = useState([]);
  const [causeList, setCauseList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);

  useEffect(() => {
    const tempYearLists = [
      ...new Set(ThailandDeathCause?.map((r) => r.year)),
    ].sort((a, b) => a - b);
    console.log("tempYearLists", tempYearLists);
    setYearLists(tempYearLists);

    const tempDeathCauseDatas = ThailandDeathCause?.filter(
      (r) => r.year === currentYear
    );
    console.log("tempDeathCauseDatas", tempDeathCauseDatas);
    setDeathCauseDatas(tempDeathCauseDatas);

    const tempCauseList = [
      ...new Set(tempDeathCauseDatas?.map((r) => r.causeOfDeath)),
    ];
    console.log("tempCauseList", tempCauseList);
    setCauseList(tempCauseList);

    const tempProvinceList = [
      ...new Set(tempDeathCauseDatas?.map((r) => r.provinceName)),
    ];
    console.log("tempProvinceList", tempProvinceList);
    setProvinceList(tempProvinceList);

    const tempTotalDeath = tempDeathCauseDatas?.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );
    setTotalDeath(tempTotalDeath);
    console.log("totalDeath", tempTotalDeath);

    console.log("deathCauseDatas", deathCauseDatas);
  }, [currentYear]);

  return {
    totalDeath,
    setTotalDeath,
    currentYear,
    setCurrentYear,
    deathCauseDatas,
    setDeathCauseDatas,
    yearLists,
    setYearLists,
    causeList,
    setCauseList,
    provinceList,
    setProvinceList,
  };
};
