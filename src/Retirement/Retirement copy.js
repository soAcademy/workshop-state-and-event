import { useState, useEffect } from "react";

const Retirement = () => {
  const [currentAge, setCurrentAge] = useState(29);
  const [planAge, setPlanAge] = useState(65);
  const [retireAge, setRetireAge] = useState(55);
  const [monthlyExpense, setMonthlyExpense] = useState(30000);
  const [inflation, setInflation] = useState(4.72);
  const [finalSaving, setFinalSaving] = useState(40000000);
  const [financialPlans, setFinancialPlans] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState(120000);
  const [percentReward, setPercentReward] = useState(5);

  const calculateRetirementSavings = () => {
    // todo : สร้าง Array ที่มีสมาชิกเท่ากับ อายุปีสุดท้าย - อายุปัจจุบัน
    const lifeSpans = [...Array(Number(planAge) - Number(currentAge)).keys()];
    console.log("lifeSpans : ", lifeSpans);

    // todo : map เพื่อสร้าง Array of object ใหม่ ที่มี key => age:อายุปีต่อไป, annualExpense:เงินที่ใช้ต่อปี ณ อายุในปีนั้น * อัตราเงินเฟ้อ
    const annualExpense = lifeSpans.map((r, index) => ({
      age: Number(currentAge) + index + 1,
      annuallyExpense: Number(
        monthlyExpense * 12 * (1 + Number(inflation) / 100) ** (index + 1)
      ),
    }));
    console.log("annualExpense : ", { annualExpense });

    // todo : filter เอาเฉพาะปีที่อายุหลังเกษียณ
    const afterRetire = annualExpense.filter((r) => r.age > Number(retireAge));
    console.log("afterRetire : ", afterRetire);

    // todo : คำควณหา เงินที่จะใช้ตั้งแต่หลังเกษียณจนถึงตาย
    const _finalSaving = afterRetire.reduce(
      (acc, r) => acc + r.annuallyExpense,
      0
    );
    console.log("_finalSaving : ", _finalSaving);
    setFinalSaving(_finalSaving);

    // ------------------------------------------------------------------------------------------

    const retireSpan = Number(retireAge) - Number(currentAge);

    const _investmentPlans = lifeSpans.reduce((acc, yearIndex) => {
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      const investThisYearValue =
        yearIndex < retireSpan ? Number(investmentPerYear) : 0;
      const annualExpenseAfterRetire =
        yearIndex < retireSpan ? 0 : annualExpense[yearIndex].annuallyExpense;
      const value =
        (pastPortfolioValue + investThisYearValue - annualExpenseAfterRetire) *
        (1 + Number(percentReward) / 100);
      return [...acc, value];
    }, []);
    console.log("_investmentPlans  : ", _investmentPlans);

    const _financialPlans = annualExpense.map((r, idx) => ({
      ...r,
      investmentValue: _investmentPlans[idx],
    }));

    console.log("_financialPlans  : ", _financialPlans);
    setFinancialPlans(_financialPlans);
  };

  useEffect(() => {
    currentAge <= retireAge &&
      retireAge <= planAge &&
      calculateRetirementSavings();
  }, [
    currentAge,
    planAge,
    retireAge,
    monthlyExpense,
    inflation,
    investmentPerYear,
    percentReward,
  ]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="m-4">แผนการเกษียณของฉัน</div>

        <div className="p-6 bg-gray-200 w-1/2">
          <form className="">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2">
                <label>คุณอายุเท่าไร</label>
                <br />
                <input
                  onChange={(e) => setCurrentAge(e.target.value)}
                  type="text"
                  placeHolder={currentAge}
                />
              </div>

              <div className="p-2">
                <label>มีอายุถึงกี่ปี</label>
                <br />
                <input
                  onChange={(e) => setPlanAge(e.target.value)}
                  type="text"
                  placeHolder={planAge}
                />
              </div>
              <div className="p-2">
                <label>เกษียณตอนอายุ</label>
                <br />
                <input
                  onChange={(e) => setRetireAge(e.target.value)}
                  type="text"
                  placeHolder={retireAge}
                />
              </div>

              <div className="p-2">
                <label>ค่าใช้จ่ายต่อเดือน</label>
                <br />
                <input
                  onChange={(e) => setMonthlyExpense(e.target.value)}
                  type="text"
                  placeHolder={monthlyExpense}
                />
              </div>

              <div className="p-2">
                <label>อัตราเงินเฟ้อ</label>
                <br />
                <input
                  onChange={(e) => setInflation(e.target.value)}
                  type="text"
                  placeHolder={inflation}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2">
                <label>การลงทุน/ปี</label>
                <br />
                <input
                  onChange={(e) => setInvestmentPerYear(e.target.value)}
                  type="text"
                  placeHolder={investmentPerYear}
                />
              </div>

              <div className="p-2">
                <label> % ตอบแทน/ปี</label>
                <br />
                <input
                  onChange={(e) => setPercentReward(e.target.value)}
                  type="text"
                  placeHolder={percentReward}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="m-4">คุณต้องมีเงินเก็บตอนอายุ {retireAge} ปี จำนวน</div>
        <div className="m-4 text-3xl text-red-500 font-bold">
          {Number(finalSaving.toFixed(2)).toLocaleString()} บาท
        </div>
        <div className="w-1/2 mx-auto">
          <table className="border-collapse border border-slate-400">
            <tr>
              <th className="border border-slate-300 p-4 text-center w-1/3">
                Age
              </th>
              <th className="border border-slate-300 p-4 text-center w-1/3">
                Annually Expense
              </th>
              <th className="border border-slate-300 p-4 text-center w-1/3">
                Investment
              </th>
            </tr>
            {financialPlans.map((r) => (
              <tr>
                <td className="border border-slate-300 p-4 text-center w-1/3">
                  {r.age}
                </td>
                <td className="border border-slate-300 p-4 text-center w-1/3">
                  {Number(r.annuallyExpense.toFixed(2)).toLocaleString()}
                </td>
                <td className="border border-slate-300 p-4 text-center w-1/3">
                  {Number(r.investmentValue.toFixed(2)).toLocaleString()}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Retirement;
