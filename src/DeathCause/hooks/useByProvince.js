import { useState, useEffect } from "react";

export const useByProvince = ({ uniqProvince, datasDeathInYear, filCause }) => {
  const [datasByProveince, setDatasByProveince] = useState([]);
  const [sumByProvince, setSumByProvince] = useState(0);

  useEffect(() => {
    // DEATH BY PROVINCE
    const deathByProvince = uniqProvince
      .map((province) => {
        // console.log(province);
        // console.log(datasDeathFilledByYear);
        const afterFilCause =
          filCause === undefined
            ? datasDeathInYear
            : datasDeathInYear.filter(
                (cause) => cause.causeOfDeath === filCause
              );

        const deathFilledByYearByProvince = afterFilCause
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

    setDatasByProveince(deathByProvince);
    setSumByProvince(sumDeathAllProvince);
  }, [datasDeathInYear, filCause]);

  return {
    filCause,
    datasByProveince,
    setDatasByProveince,
    sumByProvince,
    setSumByProvince,
  };
};
