import React from "react";
import { useCalculateRetirement, useCostPerYear } from "./hooks";

const Retirement2 = () => {
  // const {
  //   setCurrentAge,
  //   setLifeAge,
  //   setCostPerMonth,
  //   setInflation,
  //   costPerYears,
  //   remainingAge,
  // } = useCostPerYear();
  const {
    setCurrentAge,
    setLifeAge,
    setCostPerMonth,
    setInflation,
    currentAge,
    retireAge,
    setRetireAge,
    inflation,
    lifeAge,
    costPerMonth,
    investmentPerYear,
    setInvestmentPerYear,
    investmentYield,
    setInvestmentYield,
    retirementSavings,
    ageAndCost,
  } = useCalculateRetirement();

  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="font-semibold text-lg">แผนการเกษียณของฉัน</p>
      </div>
      <div className="bg-slate-200 mx-auto w-2/3 rounded p-4 mt-5">
        <div className="flex mb-5">
          <div className="w-6/12">
            <p className="mb-1">คุณอายุเท่าไหร่ (ปี)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="currentAge"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
            />
            <p className="mb-1">เกษียณตอนอายุ (ปี)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="retireAge"
              value={retireAge}
              onChange={(e) => setRetireAge(e.target.value)}
            />
            <p className="mb-1">อัตราเงินเฟ้อ (%)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="inflation"
              value={inflation}
              onChange={(e) => setInflation(e.target.value)}
            />
          </div>
          <div className="w-6/12">
            <p className="mb-1">มีอายุถึงกี่ปี (ปี)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="lifeAge"
              value={lifeAge}
              onChange={(e) => setLifeAge(e.target.value)}
            />
            <p className="mb-1">ค่าใช้จ่ายต่อเดือน (บาท)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="costPerMonth"
              value={costPerMonth}
              onChange={(e) => setCostPerMonth(e.target.value)}
            />
          </div>
        </div>
        <div className="flex border-t-4 border-slate-400 pt-5">
          <div className="w-6/12">
            <p className="mb-1">เงินลงทุนต่อปี (บาท)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="investmentPerYear"
              value={investmentPerYear}
              onChange={(e) => setInvestmentPerYear(e.target.value)}
            />
          </div>
          <div className="w-6/12">
            <p className="mb-1">อัตราผลตอบแทนการลงทุนต่อปี (%)</p>
            <input
              type="text"
              className="w-4/5 mb-3 rounded pl-1"
              name="investmentYield"
              value={investmentYield}
              onChange={(e) => setInvestmentYield(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p className="font-semibold text-lg">
          คุณต้องมีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
        </p>
        <p className="font-semibold text-3xl text-red-500 my-5">
          {Math.round(retirementSavings).toLocaleString()} บาท
        </p>
      </div>
      <div className="w-full mt-5">
        <table className="mx-auto w-2/3 border-2">
          <thead>
            <tr className="text-center">
              <td className="p-2 border-2 text-xl font-semibold">Age</td>
              <td className="p-2 border-2 text-xl font-semibold">
                totalCostPerYear
              </td>
              <td className="p-2 border-2 text-xl font-semibold">
                investmentPerYear
              </td>
            </tr>
          </thead>
          <tbody>
            {ageAndCost?.map((r, idx) => (
              <tr key={idx}>
                <td className="p-2 border-2 text-center text-lg">{r.age}</td>
                <td className="p-2 border-2 text-right text-lg">
                  {Math.round(r.livingCostPerYear).toLocaleString()}
                </td>
                <td className="p-2 border-2 text-right text-lg">
                  {Math.round(r.investment).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retirement2;
