import { useEffect, useState } from "react";

const Retirement = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [dieAge, setDieAge] = useState(80);
  const [retiredAge, setRetiredAge] = useState(55);
  const [expensePerMonth, setExpensePerMonth] = useState(30000);
  const [inflationRate, setInflationRate] = useState("4.4");
  const [retirementSavings, setRetirementSavings] = useState(40000000);
  const [financialTable, setFinancialTable] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState(25000);
  const [investmentReturn, setInvestmentReturn] = useState("6");

  const calRetirementSavings = () => {
    const presentExpensePerYear = expensePerMonth * 12;
    console.log("presentExpensePerYear", presentExpensePerYear);

    const ages = [];
    for (let i = currentAge; i < dieAge; i++) {
      ages.push(i);
    }

    console.log("ages", ages);

    const tempFinancialPlans = ages.map((r, idx) => ({
      age: r + 1,
      livingCostPerYear:
        presentExpensePerYear * (1 + Number(inflationRate) / 100) ** (idx + 1),
    }));
    console.log("tempFinancialPlans", tempFinancialPlans);
    // setFinancialTable(tempFinancialPlans);

    const tempRetirementSavings = tempFinancialPlans
      .filter((r) => r.age >= retiredAge)
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);
    setRetirementSavings(tempRetirementSavings);
    console.log("tempRetirementSavings", tempRetirementSavings);

    const tempInvestmentPlans = ages.reduce((acc, r) => {
      const yearIndex = acc.length;
      console.log("yearIndex", yearIndex);
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      console.log("pastPortfolioValue", pastPortfolioValue);

      //Check เกษียณยัง? ถ้ายังจะลงเพิ่ม ถ้าแล้วจะไม่ลง
      const investThisYearValue = r < retiredAge ? investmentPerYear : 0;
      console.log("investThisYearValue", investThisYearValue);
      //Check เกษียณยัง? ถ้ายังจะไม่คิดเงินใช้จ่าย ถ้าแล้วจะดึงเงินออกทุกปี
      const livingCostPerYear =
        r < retiredAge ? 0 : tempFinancialPlans[yearIndex].livingCostPerYear;
      console.log("livingCostPerYear", livingCostPerYear);

      const value =
        (Number(pastPortfolioValue) +
          Number(investThisYearValue) -
          Number(livingCostPerYear)) *
        (1 + Number(investmentReturn) / 100);
      console.log("value", value);
      return [...acc, value];
    }, []);
    console.log("tempInvestmentPlans", tempInvestmentPlans);

    const tempFinancialPlans2 = tempFinancialPlans.map((r, idx) => ({
      ...r,
      investmentValue: tempInvestmentPlans[idx],
    }));
    console.log("tempFinancialPlans2", tempFinancialPlans2);
    setFinancialTable(tempFinancialPlans2);
  };

  useEffect(() => {
    calRetirementSavings();
  }, [
    currentAge,
    dieAge,
    retiredAge,
    expensePerMonth,
    inflationRate,
    investmentPerYear,
    investmentReturn,
  ]);
  return (
    <>
      <div className="text-center m-6 w-full">
        <h1 className="font-bold text-2xl">แผนเกษียณของฉัน</h1>
        <div className="mt-4 p-4 rounded-xl bg-gray-200 text-left w-2/3 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>คุณอายุเท่าไหร่</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
              />
            </div>
            <div>
              <p>มีอายุถึงกี่ปี</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={dieAge}
                onChange={(e) => setDieAge(Number(e.target.value))}
              />
            </div>
            <div>
              <p className="mt-2">เกษียณตอนอายุ</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={retiredAge}
                onChange={(e) => setRetiredAge(Number(e.target.value))}
              />
            </div>
            <div>
              <p className="mt-2">ค่าใช้จ่ายต่อเดือน</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={expensePerMonth}
                onChange={(e) => setExpensePerMonth(Number(e.target.value))}
              />
            </div>
            <div>
              <p className="mt-2">อัตราเงินเฟ้อ</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
              />
            </div>
            <div>
              <p className="mt-2">เงินลงทุนต่อปี</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={investmentPerYear}
                onChange={(e) => setInvestmentPerYear(e.target.value)}
              />
            </div>
            <div>
              <p className="mt-2">อัตราผลตอบแทนการลงทุนต่อปี %</p>
              <input
                type="text"
                className="bg-white rounded mt-2"
                value={investmentReturn}
                onChange={(e) => setInvestmentReturn(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 font-bold">
          คุณต้องมีเงินเก็บตอนอายุ {retiredAge} ปี จำนวน
        </div>
        <div className="mt-4 text-red-400 font-bold text-xl">
          {Math.round(retirementSavings).toLocaleString()} บาท
        </div>
        <div>
          <h1 className="font-bold text-center mt-4">ตารางแผนเกษียณอายุ</h1>
          <table className="text-center border border-black mt-4 mx-auto">
            <thead className="bg-blue-200 border border-black">
              <tr>
                <td className="p-4 border border-black font-bold">อายุ</td>
                <td className="p-4 border border-black font-bold">
                  ค่าใช้จ่ายต่อปี
                </td>
                <td className="p-4 font-bold">มูลค่าพอร์ตการลงทุน</td>
              </tr>
            </thead>
            <tbody className="bg-gray-200 border border-black">
              {financialTable.map((r, idx) => (
                <tr>
                  <td className="p-2 border border-black">{r.age}</td>
                  <td className="p-2 border border-black">
                    {Math.round(r.livingCostPerYear).toLocaleString()} บาท
                  </td>
                  <td className="p-2 border border-black">
                    {Math.round(r.investmentValue).toLocaleString()} บาท
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Retirement;