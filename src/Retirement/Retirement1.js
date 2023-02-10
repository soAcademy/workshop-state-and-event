import { useState, useEffect } from "react";

const Retirement1 = () => {
  const [currentAge, setCurrentAge] = useState(25);
  const [lifeAge, setLifeAge] = useState(70);
  const [retireAge, setRetireAge] = useState(0);
  const [monthlyExpense, setMonthlyExpense] = useState(30000);
  const [inflat, setInflat] = useState(4.2);
  const [retireSaving, setRetireSaving] = useState(60)
  const [financialPlan, setFinancialPlan] = useState([])
  const [invest, setInvest] = useState(50000)
  const [port, setPort] = useState(7)


  const retireAmountCalcuation = () => {
    const _financialPlan = [...Array(Number(lifeAge) - Number(currentAge))].map(
      (r, idx) => ({
        age: Number(currentAge) + idx + 1,
        yearlyExpense:
          Number(monthlyExpense) * 12 * (1 + Number(inflat / 100)) ** idx,
      })
    );
    console.log("_financialPlan:", _financialPlan)


    const _retireSaving = _financialPlan
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.yearlyExpense, 0);

    
    setRetireSaving(_retireSaving)
    console.log("retireSaving:", retireSaving);
    setFinancialPlan(_financialPlan)
    console.log("financialPlan:", financialPlan)
  };

  // const investAmountCalcuation = () => {
    const _financialPlanB = [...Array(Number(lifeAge) - Number(currentAge))].reduce(
      (acc, yridx) => ({
      const investAcc = yridx > 0 ? acc[yridx-1] : 0;
      
      conts result = ((investAcc - yearlyExpense + invest)*(1 + Number(port))/100)
      return (
        ...acc,result
      )  
      
      })
    );
    console.log(_financialPlanB)

  useEffect(() => {
    if (
      currentAge > 0 &&
      lifeAge > 0 &&
      retireAge > 0 &&
      currentAge <= retireAge &&
      retireAge <= lifeAge &&
      monthlyExpense > 0 &&
      inflat > 0
    ) {
      retireAmountCalcuation();
    }
  }, [currentAge, lifeAge, retireAge, monthlyExpense, inflat]);



  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold">แผนการเกษียณของฉัน</h1>
      <div className="w-1/3 mx-auto p-5 bg-green-600 border-2 mt-5">
        <div className="grid grid-cols-2">
          <div className="text-xl pt-3">
            คุณอายุเท่าไร{" "}
            <input
              type="Number"
              defaultValue={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />
          </div>
          <div className="text-xl pt-3">
            มีอายุถึงกี่ปี{" "}
            <input
              type="Number"
              defaultValue={lifeAge}
              onChange={(e) => setLifeAge(Number(e.target.value))}
            />
          </div>
          <div className="text-xl pt-3">
            เกษียณตอนอายุ{" "}
            <input
              type="Number"
              defaultValue={retireAge}
              onChange={(e) => setRetireAge(Number(e.target.value))}
            />
          </div>
          <div className="text-xl pt-3">
            ค่าใช้จ่ายต่อเดือน{" "}
            <input
              type="Number"
              defaultValue={monthlyExpense}
              onChange={(e) => setMonthlyExpense(Number(e.target.value))}
            />
          </div>
          <div className="text-xl pt-3">
            อัตราเงินเฟ้อ{" "}
            <input
              type="Number"
              defaultValue={inflat}
              onChange={(e) => setInflat(Number(e.target.value))}
            />
          </div>
        </div>
        {/* <button className="rounded-lg mx-auto text-2xl font-bold">คำนวณ</button> หาวิธีให้อยู่ตรงกลาง*/}
        <div className="grid grid-cols-2">
        <div className="text-xl pt-3">
            มูลค่าเงินลงทุนต่อปี{" "}
            <input
              type="Number"
              defaultValue={inflat}
              onChange={(e) => setInvest(Number(e.target.value))}
            />
          </div>
          <div className="text-xl pt-3">
            อัตราผลตอบแทนต่อปี{" "}
            <input
              type="Number"
              defaultValue={inflat}
              onChange={(e) => setPort(Number(e.target.value))}
            />
          </div>
          </div>
      </div>
      <div className="text-center text-2xl mt-3 font-bold">
        คุณต้องมีเงินเก็บตอนอายุ {retireAge}ปี จำนวน
      </div>
      <div className="text-center text-2xl text-red-700 font-semibold mt-3">
        {Math.round(retireSaving).toLocaleString("th")} บาท
      </div>
      <div className="w-1/2 mx-auto ">
        <table className="border border-1 border-black">
          <thead className="border border-1 border-black">
            <tr className="border border-1 border-black">
              <th className="border border-1 border-black">Age</th>
              <th className="border border-1 border-black">Retire saving</th>
            </tr>
          </thead>
          <tbody>
            {financialPlan.map((r) => (
              <tr key={r.age} className="border border-1 border-black">
                <td className="border border-1 border-black">{r.age}</td>
                <td>{r.yearlyExpense.toLocaleString("th")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retirement1;
