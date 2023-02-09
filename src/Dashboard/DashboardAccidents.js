import { useEffect, useState } from "react";
import accident from "./accident.json";
import AccidentGenderPie from "./AccidentGenderPie";
import AccidentVehicleBar from "./AccidentVehicleBar";
import AccidentProvinceStackedBar from "./AccidentProvinceStackedBar";
import { longdo, map, LongdoMap } from "./longdo-map/LongdoMap";
import React, { Component } from "react";
import Map from "./Map";

const DashboardAccidents = () => {
  const [statBarOpened, setStatBarOpened] = useState(false);
  const [accidentData, setAccidentData] = useState(accident);
  const [genderStat, setGenderStat] = useState({ male: 0, female: 0 });
  const [vehicleStat, setVehicleStat] = useState([]);
  const [provinceStat, setProvinceStat] = useState([
    { vehicle: "", province: [] },
  ]);
  const [uniqueYears, setUniqueYears] = useState([]);
  const [yearQuery, setYearQuery] = useState([]);
  const [dataFilteredByYear, setDataFilteredByYear] = useState([]);

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

  useEffect(() => {
    const _uniqueYears = [
      ...new Set(accidentData.map((e) => e.deadyearBudha)),
    ].sort((a, b) => a - b);
    setUniqueYears(_uniqueYears);
  }, [accidentData]);

  useEffect(() => {
    const _dataFilteredByYear =
      yearQuery != ""
        ? accidentData.filter(
            (data) =>
              data.deadyearBudha >= yearQuery[0] &&
              data.deadyearBudha <= yearQuery[1]
          )
        : accidentData;
    setDataFilteredByYear(_dataFilteredByYear);
  }, [yearQuery]);

  return (
    <div className="font-kanit">
      <Map dataFilteredByYear={dataFilteredByYear} />
      <div className="fixed top-5 left-5 bg-white p-2 font-bold shadow-md">
        ข้อมูลผู้เสียชีวิตจากอุบัติเหตุทางถนน
      </div>
      <div
        onChange={() => {
          const checkbox = document.querySelector("#checkbox");
          if (!checkbox.checked) {
            const start = Number(document.querySelector("#start").value);
            const end = Number(document.querySelector("#end").value);
            console.log("start,end :>> ", start, end);
            setYearQuery([start, end]);
          } else {
            setYearQuery("");
          }
        }}
        className="fixed top-16 left-5 bg-white p-2"
      >
        จาก
        <select className="border rounded px-2 mx-2" id="start">
          {uniqueYears.map((e) => {
            return e && <option>{e}</option>;
          })}
        </select>
        ถึง
        <select className="border rounded px-2 mx-2" id="end">
          {uniqueYears
            // .filter((year) => year > document.querySelector("#start").value)
            .map((e) => {
              return (
                e &&
                (e > Number(document.querySelector("#start").value) ? (
                  <option>{e}</option>
                ) : (
                  <option
                    disabled
                    className="text-slate-100 pointer-events-none"
                  >
                    {e}
                  </option>
                ))
              );
            })}
        </select>
        <span className="border rounded mx-2 px-2">
          ทั้งหมด &nbsp;
          <input id="checkbox" type="checkbox" className="my-auto"></input>
        </span>
      </div>
      <button
        onClick={() => setStatBarOpened(!statBarOpened)}
        className={`fixed top-1/2 right-0 w-8 bg-white shadow-md h-10 
        items-center flex justify-center duration-500 transform-translate" 
        ${statBarOpened ? "-translate-x-[400px] md:-translate-x-[415px]" : ""}`}
      >
        <p className="font-bold text-xl">{statBarOpened ? ">" : "<"}</p>
      </button>
      <div
        className={`fixed top-0 right-0 h-full bg-white overflow-y-auto shadow-lg font-kanit duration-500
        ${statBarOpened ? "" : "translate-x-full"}`}
      >
        <div className="p-4 w-[400px]">
          <p className="text-xl font-bold">สถิติ</p>
          <div className="text-sm">
            <p className="text-[16px] font-semibold">เพศ</p>
            <p>ชาย : {genderStat.male.toLocaleString()} คน</p>
            <p>หญิง : {genderStat.female.toLocaleString()} คน</p>
            <AccidentGenderPie genderStat={genderStat} />
          </div>
          <div>
            <p className="text-md font-semibold">ยานพาหนะ</p>
            {vehicleStat.map((e, idx) => {
              return (
                <p key={idx} className="text-sm">
                  {e.vehicle} : {e.total.toLocaleString()} คัน
                </p>
              );
            })}
            <AccidentVehicleBar vehicleStat={vehicleStat} />
          </div>
          <div className="mt-2 h-[500px]">
            <p className="text-md font-semibold">จังหวัด</p>
            <AccidentProvinceStackedBar provinceStat={provinceStat} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardAccidents;
