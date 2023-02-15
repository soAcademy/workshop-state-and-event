import React, { useState, useEffect } from "react";

export const useFilterDataByYear = ({
  accidentData,
  yearQuery,
  vehicleQuery,
}) => {
  const [dataFilteredByYear, setDataFilteredByYear] = useState();
  useEffect(() => {
    const _dataFilteredByYear = yearQuery
      ? vehicleQuery !== "ทั้งหมด"
        ? accidentData.filter(
            (data) =>
              data.deadyearBudha >= yearQuery[0] &&
              data.deadyearBudha <= yearQuery[1] &&
              data.vehicle === vehicleQuery
          )
        : accidentData.filter(
            (data) =>
              data.deadyearBudha >= yearQuery[0] &&
              data.deadyearBudha <= yearQuery[1]
          )
      : vehicleQuery !== "ทั้งหมด"
      ? accidentData.filter((data) => data.vehicle === vehicleQuery)
      : accidentData;
    setDataFilteredByYear(_dataFilteredByYear);
  }, [yearQuery, vehicleQuery]);

  return { dataFilteredByYear, setDataFilteredByYear };
};
