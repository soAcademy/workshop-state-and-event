import { useEffect, useState } from "react";
import ThailandDeathCause from "../thailand-death-cause.json";

export const useTotalDeath = ({ currentYear, selectedCause }) => {
  const [totalDeath, setTotalDeath] = useState(0);
  useEffect(() => {
    const deathCauseDatas = ThailandDeathCause.filter(
      (r) => r.year == currentYear
    );
    const _totalDeath = deathCauseDatas?.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );
    setTotalDeath(_totalDeath);
  }, [currentYear, selectedCause]);
  return {
    totalDeath,
    setTotalDeath,
  };
};