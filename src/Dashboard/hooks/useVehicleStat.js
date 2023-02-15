import React, { useState, useEffect } from "react";

export const useVehicleStat = ({ accidentData }) => {
  const [vehicleStat, setVehicleStat] = useState([]);
  useEffect(() => {
    const vehicles = [...new Set(accidentData.map((e) => e.vehicle))];
    const _vehicleStat = vehicles
      .map((vehicle) => {
        const sum = accidentData
          .filter((data) => data.vehicle === vehicle)
          .reduce((acc, e) => (acc += 1), 0);
        return {
          vehicle: vehicle,
          total: sum,
        };
      })
      .sort((a, b) => b.total - a.total);
    setVehicleStat(_vehicleStat);
  }, [accidentData]);
  return {vehicleStat, setVehicleStat}
};
