import React, { useState, useEffect } from "react";

export const useUniqueYears = ({ accidentData }) => {
  const [uniqueYears, setUniqueYears] = useState([]);

  useEffect(() => {
    const _uniqueYears = [
      ...new Set(accidentData.map((e) => e.deadyearBudha)),
    ].sort((a, b) => a - b);
    setUniqueYears(_uniqueYears);
  }, [accidentData]);

  return { uniqueYears, setUniqueYears };
};
