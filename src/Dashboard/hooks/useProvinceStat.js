import React, { useState, useEffect } from "react";

export const useProvinceStat = ({accidentData}) => {
  const [provinceStat, setProvinceStat] = useState([
    { vehicle: "", province: [] },
  ]);
  useEffect(() => {
    const vehicles = [...new Set(accidentData.map((e) => e.vehicle))];
    const provinces = [...new Set(accidentData.map((e) => e.province))];
    const _provinceStat = vehicles.map((vehicle) => {
      const vehicleData = accidentData.filter(
        (data) => data.vehicle === vehicle
      );
      const provinceSum = provinces.map((province) => {
        const sum = vehicleData
          .filter((data) => data.province === province)
          .reduce((acc) => (acc += 1), 0);
        return { province: province, total: sum };
      });
      return { vehicle: vehicle, province: provinceSum };
    });
    setProvinceStat(_provinceStat);
  }, [accidentData]);
  return {provinceStat, setProvinceStat}
};
