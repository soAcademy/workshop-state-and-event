import React, { useState, useEffect } from "react";

const Retirement = () => {
  const [ageRetire, setAgeRetire] = useState("60");
  const [lifeAge, setLifeAge] = useState("75");
  const [currentAge, setCurrentAge] = useState("25");
  const [livingCostPerMonth, setLivingCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState(3000000);
  // const [savingPlan, setSavingPlan] = useState(6);
  const [financialPlans, setFinancialPlans] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState(0);
  const [investmentReturnRate, setInvestmentReturnRate] = useState(0);

  const calculateRetirementSaving = () => {
    const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge)).keys()];
    // .key บอกเลข index
    console.log("lifeSpans", lifeSpans);

    // ---------------------------------------
    const _financialPlans0 = [
      ...Array(Number(lifeAge) - Number(currentAge)),
    ].map((r, idx) => {
      console.log({
        pv: Number(livingCostPerMonth),
        if: 1 + Number(inflation) / 100,
        yr: idx + 1,
      });
      return {
        age: Number(currentAge) + idx + 1,
        livingCostPerYear:
          Number(livingCostPerMonth) *
          12 *
          (1 + Number(inflation) / 100) ** (idx + 1),
      };
    });

    const _investmentPlans = lifeSpans.reduce((acc, r) => {
      const yearIndex = acc.length;
      const pastPortfolio = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      // หาเงินลงทุนของปีที่แล้ว
      const isNotRetire = yearIndex < Number(ageRetire) - Number(currentAge);
      // เราจะ retire ในอีกกี่ปี
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0;
      // เงินลงทุนของปีนี้
      const livingCostPerYear = isNotRetire
        ? 0
        : _financialPlans0[yearIndex].livingCostPerYear;
      const value =
        (pastPortfolio + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      return [...acc, value];
    }, []);
    console.log(_investmentPlans);

    const _financialPlans = _financialPlans0.map((r, idx) => ({
      ...r,
      investmentValue: _investmentPlans[idx],
    }));
    const _retirementSaving = _financialPlans0
      .filter((r) => r.age >= Number(ageRetire))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0)
      .toFixed(2);

    console.log("_financialPlans", _financialPlans0);
    console.log("_retirementSaving", _retirementSaving);

    setRetirementSaving(_retirementSaving);
    setFinancialPlans(_financialPlans);

    console.log("RetirementSaving:", retirementSaving);
  };

  useEffect(() => {
    if (
      currentAge.length > 0 &&
      lifeAge.length > 0 &&
      ageRetire.length > 0 &&
      Number(currentAge) <= Number(ageRetire) &&
      Number(ageRetire) <= Number(lifeAge) &&
      livingCostPerMonth.length > 0 &&
      inflation.length > 0
    ) {
      calculateRetirementSaving();
    } else {
      setRetirementSaving(0);
      setFinancialPlans([]);
    }
  }, [
    currentAge,
    lifeAge,
    ageRetire,
    livingCostPerMonth,
    inflation,
    investmentPerYear,
    investmentReturnRate,
  ]);

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
