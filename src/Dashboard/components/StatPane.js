import React, { useState } from "react";
import { useGenderStat, useProvinceStat, useVehicleStat } from "../hooks";
import { AiOutlineClose } from "react-icons/ai";
import { AccidentGenderPie } from "./AccidentGenderPie";
import { AccidentVehicleBar } from "./AccidentVehicleBar";
import { AccidentProvinceStackedBar } from "./AccidentProvinceStackedBar";

export const StatPane = ({ accidentData }) => {
  const { vehicleStat } = useVehicleStat({ accidentData });
  const [statBarOpened, setStatBarOpened] = useState(false);
  const { genderStat } = useGenderStat({ accidentData });
  const { provinceStat } = useProvinceStat({ accidentData });

  return (
    <>
      <button
        onClick={() => setStatBarOpened(!statBarOpened)}
        className={`transform-translate" fixed top-1/2 right-0 flex h-10 w-8 
        items-center justify-center bg-white shadow-md shadow-slate-400 
        outline outline-1 outline-slate-200 duration-500 
        ${statBarOpened ? "-translate-x-[400px] md:-translate-x-[400px]" : ""}`}
      >
        <p className="text-xl font-bold">{statBarOpened ? ">" : "<"}</p>
      </button>
      <div
        className={`fixed top-0 right-0 h-full overflow-y-auto bg-white font-kanit shadow-lg duration-500
        ${statBarOpened ? "" : "translate-x-full"}`}
      >
        <div className="w-[400px] p-4">
          <div className="flex justify-between">
            <p className="text-xl font-bold">สถิติ</p>
            <button
              onClick={() => setStatBarOpened(false)}
              className="text-xl font-bold"
            >
              <AiOutlineClose />
            </button>
          </div>
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
    </>
  );
};
