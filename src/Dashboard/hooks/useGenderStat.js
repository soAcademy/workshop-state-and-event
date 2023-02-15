import React, { useState, useEffect } from "react";

export const useGenderStat = ({ accidentData }) => {
  const [genderStat, setGenderStat] = useState({ male: 0, female: 0 });

  useEffect(() => {
    const _genderStat = accidentData.reduce(
      (acc, e) => {
        e.sex === 1 ? (acc["male"] += 1) : (acc["female"] += 1);
        return acc;
      },
      { male: 0, female: 0 }
    );
    setGenderStat(_genderStat);
  }, [accidentData]);

  return { genderStat, setGenderStat };
};
