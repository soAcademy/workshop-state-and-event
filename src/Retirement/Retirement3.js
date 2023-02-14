import { useCal } from "./useCal";

const Retirement3 = () => {
  const {
    currentAge,
    setCurrentAge,
    dieAge,
    setDieAge,
    retiredAge,
    setRetiredAge,
    expensePerMonth,
    setExpensePerMonth,
    inflationRate,
    setInflationRate,
    retirementSavings,
    financialTable,
    investmentPerYear,
    setInvestmentPerYear,
    investmentReturn,
    setInvestmentReturn,
  } = useCal();
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

export default Retirement3;
