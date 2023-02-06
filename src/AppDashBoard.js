import Dashboard1 from "./Dashboard/Dashboard1";
import DashboardZipcode from "./Dashboard/DashboardZipcode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProvincePages from "./Dashboard/ProvincePages";

const AppDashBoard = () => {
  return (
    // <Dashboard1 />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardZipcode />} />
        <Route path="/home" element={<DashboardZipcode />} />
        <Route path=":province" element={<ProvincePages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppDashBoard;
