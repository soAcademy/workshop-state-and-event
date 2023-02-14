import { useEffect, useState } from "react";
import accident from "./accident.json";
import AccidentGenderPie from "./AccidentGenderPie";
import AccidentVehicleBar from "./AccidentVehicleBar";
import AccidentProvinceStackedBar from "./AccidentProvinceStackedBar";
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
  const [yearQuery, setYearQuery] = useState();
  const [dataFilteredByYear, setDataFilteredByYear] = useState();
  const [vehicleQuery, setVehicleQuery] = useState("ทั้งหมด");

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
    const _dataFilteredByYear = yearQuery
      ? vehicleQuery !== "ทั้งหมด"
        ? accidentData.filter(
            (data) =>
              data.deadyearBudha >= yearQuery[0] &&
              data.deadyearBudha <= yearQuery[1] &&
              data.vehicle === vehicleQuery
          )
        : accidentData.filter(
            (data) =>
              data.deadyearBudha >= yearQuery[0] &&
              data.deadyearBudha <= yearQuery[1]
          )
      : vehicleQuery !== "ทั้งหมด"
      ? accidentData.filter((data) => data.vehicle === vehicleQuery)
      : accidentData;
    setDataFilteredByYear(_dataFilteredByYear);
  }, [yearQuery, vehicleQuery]);

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
            setYearQuery([start, end]);
          } else {
            setYearQuery();
          }
        }}
        className="fixed top-16 left-5 bg-white p-2"
      >
        จาก
        <select
          className="mx-2 rounded px-2 outline outline-1 outline-slate-300"
          id="start"
        >
          {uniqueYears.map((e,idx) => {
            return e && <option key={idx}>{e}</option>;
          })}
        </select>
        ถึง
        <select
          className="mx-2 rounded px-2 outline outline-1 outline-slate-300"
          id="end"
        >
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
                    className="pointer-events-none text-slate-100"
                  >
                    {e}
                  </option>
                ))
              );
            })}
        </select>
        <span className="mx-2 rounded px-2 outline outline-1 outline-slate-300">
          ทั้งหมด &nbsp;
          <input
            id="checkbox"
            type="checkbox"
            defaultChecked
            className="my-auto"
          ></input>
        </span>
      </div>
      <div className="fixed top-28 left-5 bg-white p-2 shadow-md">
        ประเภทยานพาหนะ
        <select
          onChange={(e) => {
            setVehicleQuery(e.target.value);
          }}
          className="mx-2 rounded px-2 outline outline-1 outline-slate-300"
        >
          <option>ทั้งหมด</option>
          {vehicleStat.map((e, idx) => {
            return <option key={idx}>{e.vehicle}</option>;
          })}
        </select>
      </div>
      <button
        onClick={() => setStatBarOpened(!statBarOpened)}
        className={`transform-translate" fixed top-1/2 right-0 flex h-10 w-8 
        items-center justify-center bg-white shadow-md duration-500 
        ${statBarOpened ? "-translate-x-[400px] md:-translate-x-[415px]" : ""}`}
      >
        <p className="text-xl font-bold">{statBarOpened ? ">" : "<"}</p>
      </button>
      <div
        className={`fixed top-0 right-0 h-full overflow-y-auto bg-white font-kanit shadow-lg duration-500
        ${statBarOpened ? "" : "translate-x-full"}`}
      >
        <div className="w-[400px] p-4">
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
