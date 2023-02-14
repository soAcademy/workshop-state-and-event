import { useState, useEffect } from "react";

export const useSumDeathInYear = ({ uniqCause, datasDeathInYear }) => {
  const [filCause, setFilCause] = useState(undefined);
  const [datasByYear, setDatasByYear] = useState([]);
  const [sumByYear, setSumByYear] = useState(0);

  useEffect(() => {
    // DEATH BY CAUSE
    const deathByCause = uniqCause
      .map((cause) => {
        const deathByYearByCause = datasDeathInYear
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

    setDatasByYear(deathByCause);
    setSumByYear(sumDeathInYear);
    setFilCause(undefined);
  }, [datasDeathInYear]);

  return {
    filCause,
    setFilCause,
    datasByYear,
    setDatasByYear,
    sumByYear,
    setSumByYear,
  };
};
