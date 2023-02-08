import Dashboard1 from "./Dashboard/Dashboard1";
import DashboardZipcode from "./Dashboard/DashboardZipcode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProvincePages from "./Dashboard/ProvincePages";
import DistrictPages from "./Dashboard/DistrictPages";
import Navbar from "./Dashboard/Navbar";
import { useState } from "react";
import DashboardAccidents from "./Dashboard/DashboardAccidents";

const AppDashBoard = () => {
  const [dataFilteredBySearchTerm, setDataFilteredBySearchTerm] = useState();
  return (
    // <Dashboard1 />
    // <BrowserRouter>
    //   <Navbar
    //     dataFilteredBySearchTerm={dataFilteredBySearchTerm}
    //     setDataFilteredBySearchTerm={setDataFilteredBySearchTerm}
    //   />
    //   <Routes>
    //     <Route path="/" element={<DashboardZipcode />} />
    //     <Route path="/home" element={<DashboardZipcode />} />
    //     <Route path=":province" element={<ProvincePages />}></Route>
    //     <Route path=":province/:district" element={<DistrictPages />} />
    //   </Routes>
    // </BrowserRouter>
      <DashboardAccidents />
  );
};

export default AppDashBoard;
