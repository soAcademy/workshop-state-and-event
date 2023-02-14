import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DashboardZipcode, DistrictPages,  ProvincePages, Navbar } from "./components";

const AppZipcode = () => {
  const [dataFilteredBySearchTerm, setDataFilteredBySearchTerm] = useState();
  return (
    <BrowserRouter>
      <Navbar
        dataFilteredBySearchTerm={dataFilteredBySearchTerm}
        setDataFilteredBySearchTerm={setDataFilteredBySearchTerm}
      />
      <Routes>
        <Route path="/" element={<DashboardZipcode />} />
        <Route path="/home" element={<DashboardZipcode />} />
        <Route path=":province" element={<ProvincePages />}></Route>
        <Route path=":province/:district" element={<DistrictPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppZipcode;
