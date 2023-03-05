import { useState, useEffect } from "react";

const Retirement2 = () => {
  const [currentAge, setCurrentAge] = useState("25");
  const [lifeAge, setLifeAge] = useState("77");
  const [retirementAge, setRetirementAge] = useState("55");
  const [costPerMonth, setCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState(0);
  const [financialPlans, setFinancialPlans] = useState([]);
  const [investmentPlan, setInvestmentPlan] = useState({});
  const [investmentPerYear, setInvestmentPerYear] = useState("");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("");

  const calculateRetirementSaving = () => {
    const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge))];
    const _financialPlans0 = lifeSpans.map((r, idx) => ({
      age: Number(currentAge) + idx + 1,
      livingCostPerYear:
        Number(costPerMonth) * 12 * (1 + Number(inflation) / 100) ** (idx + 1),
    }));
    // console.log (_financialPlan0); ปกติเราจะ console.log หลังจากทที่เราประกาศตัวแปร

    const _investmentPlans = lifeSpans.reduce((acc, r) => {
      const yearIndex = acc.length;
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      const investThisYearValue =
        yearIndex < Number(lifeAge) - Number(currentAge)
          ? Number(investmentPerYear)
          : 0;
      const livingCostPerYear =
        yearIndex < Number(retirementAge) - Number(currentAge)
          ? 0
          : _financialPlans0[yearIndex].livingCostPerYear;
      const value =
        (pastPortfolioValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      return [...acc, value];
    }, []);

    console.log("_investmentPlans", _investmentPlans);

    const _financialPlans = _financialPlans0.map((r,idx)=> {
      return {
      ...r, investmentValue:_investmentPlans[idx],}});
// อันนี้เราใช้ return ด้วยเพราะมันเป็น {} ที่มันเป็นตัวเต็มอ่ะ 


    const _retirementSaving = _financialPlans0
      .filter((r) => r.age >= Number(retirementAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);
    setRetirementSaving(_retirementSaving);
    setFinancialPlans(_financialPlans);
    setInvestmentPlan(_investmentPlans);
  };
  //ปกติแล้วเวลาเราอยากจะแก้ไขหรือทำ Function อะไรของ setState เราทำได้ด้วยใช้ temp state แล้วก็มาแทนค่าด้วยวงเล็บข้างล่าง
  // เราจะต้องทำ Map เพื่อทำให้มันเป็นได้เป็น Immutable
  // เราจะต้องเอาเฉพาะปีที่เราเกษียณจนถึงปีที่ตายอ่ะมาSum
  // อายุปัจุบันต้องน้อยกว่าอายุเกษียณ พูดง่าย ๆ คือมันคือการป้องกันไม่ให้คนมาเกรียนใส่เราด้วยการใช้ useEffect กำหนดว่าถ้ามันกรอกตัวเลขน้อยกว่าตัวนี้มันจะไม่แสดง
  // การ Save ข้อมูลที่เป็น State ที่เราทำเป็น temp ไว้ ทำได้ด้วยการใช้ set state(temp ของ state นั้น ๆ) เหมือนที่อยู่ข้างบน

  useEffect(() => {
    if (
      currentAge.length > 0 &&
      lifeAge.length > 0 &&
      retirementAge.length > 0 &&
      costPerMonth.length > 0 &&
      inflation.length > 0 &&
      Number(currentAge) <= Number(retirementAge) &&
      Number(retirementAge) <= Number(lifeAge)
    ) {
      calculateRetirementSaving();
    } else {
      setRetirementSaving(0);
      setFinancialPlans([]);
    }
  }, [currentAge, lifeAge, retirementAge, costPerMonth, inflation, investmentReturnRate, investmentPerYear]);
// อย่าลืมเติเข้ามาด้วย ถ้าเอาไปไว้ที่ input อ่ะ
  console.log("financialPlans", financialPlans);
  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="text-center font-bold text-2xl pt-3">
          แผนการเกษียณของฉัน
        </h1>

        <div className="flex w-full mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">คุณอายุเท่าไหร่ (ปี)</div>
            <input
              name="currentAge"
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={currentAge}
              placeholder="อายุ"
              onChange={(e) => setCurrentAge(e.target.value)}
            />
          </div>
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">คาดการณ์อายุที่จะเสียชีวิต (ปี)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={lifeAge}
              placeholder="อายุขัย"
              onChange={(e) => setLifeAge(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">คาดการณ์อายุที่เกษียณ (ปี)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={retirementAge}
              placeholder="อายุเกษียณ"
              onChange={(e) => setRetirementAge(e.target.value)}
            />
          </div>
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">ค่าใช้จ่ายต่อเดือน(บาท)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={costPerMonth}
              placeholder="ค่าใช้จ่าย/เดือน"
              onChange={(e) => setCostPerMonth(e.target.value)}
            />
          </div>
        </div>

        <div className="flex mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">อัตราเงินเฟ้อต่อปี (%)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={inflation}
              placeholder="อัตราเงินเฟ้อ"
              onChange={(e) => setInflation(e.target.value)}
            />
          </div>
        </div>

        <div className="flex mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">การลงทุนต่อปี (บาท)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={investmentPerYear}
              placeholder="เงินลงทุนต่อปี"
              onChange={(e) => setInvestmentPerYear(e.target.value)}
            />
          </div>
        </div>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">ผลตอบแทนการลงทุนต่อปี (%)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={investmentReturnRate}
              placeholder="ผลตอบแทนการลงทุนต่อปี"
              onChange={(e) => setInvestmentReturnRate(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-yellow-100 hover:bg-yellow-200 text-xl font-bold py-3 px-6 rounded-full"
          >
            คำนวณ
          </button>
        </div>

        <div className="w-1/2 mx-auto text-center mt-8">
          <h2 className="text-lg font-bold">
            คุณต้องมีเงินเก็บตอนอายุ {retirementAge} ปี จำนวน
          </h2>
          <h1 className="text-5xl font-bold text-red-800 mt-4">
            {(retirementSaving / 1000000).toFixed(2)}
            ล้านบาท
          </h1>
          {/* เปลี่ยน format ของมันให้เป็นภาษาไทยและไม่มีทศนิยมได้ด้วยตัวนี้เลย */}
        </div>
        <table className="table-auto w-full p-6">
          <thead className="p-4">
            <tr className="bg-blue-200">
              <td className="font-bold p-2">อายุ</td>
              <td className="font-bold">ค่าใช้จ่ายต่อปี</td>
              <td className="font-bold">พอร์ตการลงทุน</td>
            </tr>
          </thead>
          <tbody>
            {financialPlans?.map((r, idx) => (
              <tr key={idx}>
                <td>{r.age}</td>
                <td>{r.livingCostPerYear.toFixed(0)}</td>
                <td>{r.investmentValue.toFixed(0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Retirement2;