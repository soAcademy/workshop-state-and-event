import { useState, useEffect } from "react";

export const useTotalDeath = ({ thailandDeathCause, currentYear }) => {
  const [totalDeath, setTotalDeath] = useState(0);
  useEffect(() => {
    const deathCauseDatas = thailandDeathCause.filter(
      (r) => r.year == currentYear
    );

    const _totalDeath = deathCauseDatas.reduce(
      (acc, r) => acc + r.deathMale + r.deathFemale,
      0
    );

    setTotalDeath(_totalDeath); ///////
  }, [currentYear]);
  return {
    totalDeath,
  };
};