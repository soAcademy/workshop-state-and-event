import React, { useState, useEffect } from "react";
import { useRetirement } from "../hook_retirement/useRetirement.js";

const Retirement = () => {
  const {
    ageRetire,
    setAgeRetire,
    lifeAge,
    setLifeAge,
    currentAge,
    setCurrentAge,
    livingCostPerMonth,
    setLivingCostPerMonth,
    inflation,
    setInflation,
    retirementSaving,
    financialPlans,
    investmentPerYear,
    setInvestmentPerYear,
    investmentReturnRate,
    setInvestmentReturnRate,
  } = useRetirement();

  return (
    <>
      <div className="bg-gray-300 w-[60%] mx-auto px-5 py-6">
        <h1 className="text-center text-xl">แผนการเกษียณของฉัน</h1>

        <div className="flex mt-4 mx-">
          <div>
            {/* <form> */}
            <div className="flex flex-col">
              <label className="">คุณอายุเท่าไหร่</label>
              <input
                name="currentAge"
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                className="border border-black rounded-[10px] mt-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>เกษียณตอนอายุ</label>
              <input
                name="ageRetire"
                type="number"
                value={ageRetire}
                onChange={(e) => setAgeRetire(e.target.value)}
                className="border border-black rounded-[10px]  mt-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>ผลตอบแทนที่ได้รับ </label>
              <input
                name="inflation"
                type="number"
                value={investmentReturnRate}
                onChange={(e) => setInvestmentReturnRate(e.target.value)}
                className="border border-black rounded-[10px] mt-3"
              ></input>
            </div>
          </div>
          <div className="ml-3">
            <div className="flex flex-col">
              <label>แผนการลงทุนต่อปี</label>
              <input
                name="lifeAge"
                type="number"
                value={investmentPerYear}
                onChange={(e) => setInvestmentPerYear(e.target.value)}
                className="border border-black rounded-[10px] mt-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>อายุที่จะอยู่ถึง</label>
              <input
                name="lifeAge"
                type="number"
                value={lifeAge}
                onChange={(e) => setLifeAge(e.target.value)}
                className="border border-black rounded-[10px] mt-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>อัตราเงินเฟ้อ</label>
              <input
                name="lifeAge"
                type="number"
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
                className="border border-black rounded-[10px] mt-3"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>ค่าใช้จ่ายต่อเดือน</label>
              <input
                name="livingCostPerMonth"
                type=""
                value={livingCostPerMonth}
                onChange={(e) => setLivingCostPerMonth(e.target.value)}
                className="border border-black rounded-[10px] mt-3"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 ml-6">
          <h1>คุณต้องมีเงินเก็บตอนอายุ {lifeAge} ปี จำนวน</h1>
          <p className="text-red-600">{retirementSaving}</p>
        </div>
      </div>
      <div className="mt-8 w-1/2 mx-auto px-8">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-rose-700 text-white">
              <td className="font-bold p-2">อายุ</td>
              <td className="font-bold p-2">ค่าใช้จ่ายรายปี</td>
              <td className="font-bold p-2">การลงทุน</td>
            </tr>
          </thead>
          <tbody>
            {financialPlans?.map((r, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-rose-200" : "bg-rose-500"}
              >
                <td>{r.age}</td>
                <td>
                  {new Intl.NumberFormat("th-TH").format(
                    r.livingCostPerYear.toFixed(0)
                  )}
                </td>

                <td>{r.investmentValue.toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Retirement;
