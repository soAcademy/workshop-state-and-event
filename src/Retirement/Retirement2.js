import React, { useState, useEffect } from "react";

const Retirement2 = () => {
  const [currentAge, setCurrentAge] = useState("24");
  const [lifeAge, setLifeAge] = useState("30");
  const [retireAge, setRetireAge] = useState("28");
  const [costPerMonth, setCostPerMonth] = useState("25000");
  const [inflation, setInflation] = useState("4.27");
  const [retirementSavings, setRetirementSavings] = useState("");
  const [ageAndCost, setAgeAndCost] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState("60000");
  const [investmentYield, setInvestmentYield] = useState("7.5");

  // console.log("testdata", ageAndCost);
  const calculateRetirement = () => {
    const remainingAge = [];
    for (let i = Number(currentAge); i <= Number(lifeAge); i++) {
      remainingAge.push(i);
    }
    console.log("remainingAge", remainingAge);

    const costPerYear = costPerMonth * 12;
    console.log("Cost per year", costPerYear);

    const tmpTotalCostPerYear = remainingAge.map((r, idx) => ({
      age: r,
      livingCostPerYear:
        costPerYear * (1 + Number(inflation) / 100) ** (idx + 1),
    }));
    // setAgeAndCost(tmpTotalCostPerYear);
    console.log("Total cost per Year", tmpTotalCostPerYear);

    const totalCostForLife = tmpTotalCostPerYear
      .filter((r) => r.age >= retireAge)
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);
    setRetirementSavings(totalCostForLife);
    console.log("Total cost per Life", totalCostForLife);

    const tmpInvestments = remainingAge.reduce((acc, r) => {
      // console.log("acc1", acc);
      const yearIndex = acc.length;
      console.log("yearIndex", yearIndex);
      const checkInvestment = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      console.log("investmentValue", checkInvestment);
      const plusInvestmentValue = r < retireAge ? investmentPerYear : 0;
      console.log("plusInvestmentValue", plusInvestmentValue);
      const stopInvestmentValue =
        r < retireAge ? 0 : tmpTotalCostPerYear[yearIndex].livingCostPerYear;
      console.log("stopInvestmentValue", stopInvestmentValue);
      const investmentValue =
        (Number(checkInvestment) +
          Number(plusInvestmentValue) -
          Number(stopInvestmentValue)) *
        (1 + Number(investmentYield) / 100);
      console.log("Value", investmentValue);
      // console.log("acc2", acc);
      return [...acc, investmentValue];
    }, []);
    console.log("tmpInvest", tmpInvestments);

    const addInvestment = tmpTotalCostPerYear.map((r, idx) => ({
      ...r,
      investment: tmpInvestments[idx],
    }));
    console.log("addInvestment", addInvestment);
    setAgeAndCost(addInvestment);
  };

  useEffect(() => {
    calculateRetirement();
  }, [
    currentAge,
    lifeAge,
    retireAge,
    costPerMonth,
    inflation,
    investmentPerYear,
    investmentYield,
  ]);

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
          คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน
        </p>
        <p className="font-semibold text-3xl text-red-500 my-5">
          {retirementSavings.toLocaleString()} บาท
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
                <td className="p-2 border-2 text-center">{r.age}</td>
                <td className="p-2 border-2 text-right">
                  {r.livingCostPerYear.toLocaleString()}
                </td>
                <td className="p-2 border-2 text-right">
                  {r.investment.toLocaleString()}
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
