import React, { useState, useEffect } from "react";
export const Panel = ({
  yearQuery,
  setYearQuery,
  uniqueYears,
  uniqueVehicles,
  setVehicleQuery,
}) => {
  const [selectedStart, setSelectedStart] = useState(0);
  const [endOptions, setEndOptions] = useState([]);
  useEffect(() => {
    setEndOptions([...uniqueYears]);
  }, [uniqueYears, selectedStart]);
  return (
    <>
      <div className="fixed top-5 left-5 bg-white p-2 font-bold shadow-md">
        ข้อมูลผู้เสียชีวิตจากอุบัติเหตุทางถนน
      </div>
      <div
        onChange={() => {
          const start = Number(document.querySelector("#start").value);
          const end = Number(document.querySelector("#end").value);
          setSelectedStart(Number(document.querySelector("#start").value));
          if (start > end && start <= Math.max(...uniqueYears)) {
            document.querySelector("#end").value = start;
          }
          const checkbox = document.querySelector("#checkbox");
          if (!checkbox.checked) {
            const end = Number(document.querySelector("#end").value);
            setYearQuery([start, end]);
          } else {
            yearQuery.length > 0 && setYearQuery([]);
          }
        }}
        className="fixed top-16 left-5 bg-white p-2"
      >
        จาก
        <select
          className="mx-2 rounded px-2 outline outline-1 outline-slate-300"
          id="start"
        >
          {uniqueYears.map((e, idx) => {
            return e && <option key={idx}>{e}</option>;
          })}
        </select>
        ถึง
        <select
          className="mx-2 rounded px-2 outline outline-1 outline-slate-300"
          id="end"
        >
          {endOptions?.map((e, idx) => {
            return (
              e &&
              (e >= Number(document.querySelector("#start").value) ? (
                <option key={idx}>{e}</option>
              ) : (
                <option
                  key={idx}
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
          {uniqueVehicles.map((e, idx) => {
            return <option key={idx}>{e}</option>;
          })}
        </select>
      </div>
    </>
  );
};
