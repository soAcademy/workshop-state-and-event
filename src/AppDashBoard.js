import Dashboard1 from "./Dashboard/Dashboard1";
import DashboardZipcode from "./Dashboard/DashboardZipcode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProvincePages from "./Dashboard/ProvincePages";
import DistrictPages from "./Dashboard/DistrictPages";
import Navbar from "./Dashboard/Navbar";

const AppDashBoard = () => {
  return (
    // <Dashboard1 />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardZipcode />} />
        <Route path="/home" element={<DashboardZipcode />} />
        <Route path=":province" element={<ProvincePages />}></Route>
        <Route path=":province/:district" element={<DistrictPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppDashBoard;
