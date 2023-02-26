import { useState } from "react";
import { Map, Panel, StatPane } from "./components";
import { useAccidentData, useUniqueVehicles, useUniqueYears } from "./hooks";

const DashboardAccidents = () => {
  const [yearQuery, setYearQuery] = useState([]);
  const [vehicleQuery, setVehicleQuery] = useState("ทั้งหมด");
  const { uniqueYears } = useUniqueYears();
  const { uniqueVehicles } = useUniqueVehicles();
  const { accidentData } = useAccidentData({
    yearQuery,
    vehicleQuery,
  });

  return (
    <div className="font-kanit">
      <Map accidentData={accidentData} />
      <Panel
        yearQuery={yearQuery}
        setYearQuery={setYearQuery}
        uniqueYears={uniqueYears}
        uniqueVehicles={uniqueVehicles}
        setVehicleQuery={setVehicleQuery}
      />
      <StatPane accidentData={accidentData} />
    </div>
  );
};
export default DashboardAccidents;
