import { useState, useEffect } from "react";

const FinancailPlanTable = ({ dataFortable }) => {
  console.log("dataFortable", dataFortable);
  return (
    <>
      <table className="w-1/2 mx-auto p-2 text-center">
        <tbody>
          <tr>
            <td className="w-1/5 bg-slate-200">อายุ</td>
            <td className="w-1/3 bg-teal-300">ค่าใช้จ่าย</td>
            <td className="w-1/3 bg-slate-200">พอร์ทการลงทุน</td>
          </tr>
          {dataFortable.map((r) => (
            <tr>
              <td className="bg-slate-600">{r.age}</td>
              <td className="bg-slate-500">{r.livingCostPerYear.toFixed(0)}</td>
              <td className="bg-black">{r.portValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const RetirementPlan = () => {
  const [currentAge, setCurrentAge] = useState("32");
  const [dieAge, setDieAge] = useState("80");
  const [retireAge, setRetireAge] = useState("60");
  const [costPerMonth, setCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4");
  const [retirementSaving, setRetirementSaving] = useState("40000000");
  const [financailPlans, setFinancePlans] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState("5000");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("8");
  const [dataFortable, setDataFortable] = useState([]);

  const calculateRetirement = () => {
    // console.log("Retirement");
    const _financialPlan = [...Array(Number(dieAge) - Number(currentAge))].map(
      (r, idx) => ({
        age: Number(currentAge) + idx + 1,
        livingCostPerYear:
          Number(costPerMonth) *
          12 *
          (1 + Number(inflation) / 100) ** (idx + 1),
      })
    );

    const lifeSpan = [...Array(Number(dieAge) - Number(currentAge)).keys()];

    const _investmentPlan = lifeSpan.reduce((acc, yearIndex) => {
      const pastPortValue = yearIndex > 0 ? acc[yearIndex - 1] : 0; // value check ว่าถ้าเป็น ตัวแรกจะให้ค่า pastPortValue = 0;
      const isNotRetire = yearIndex < Number(retireAge) - Number(currentAge); // boolean  true = retire, false = not retire  ***
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0;
      const livingCostPerYear = isNotRetire
        ? 0
        : _financialPlan[yearIndex].livingCostPerYear;
      const value =
        (pastPortValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(inflation) / 100);
      return [...acc, value];
    }, []);
    console.log("_investmentPlan", _investmentPlan);

    const _retirementSaving = _financialPlan
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);

    console.log("Financial Plan", _financialPlan);
    // console.log("_retirementSaving", _retirementSaving);
    setFinancePlans(_financialPlan);
    setRetirementSaving(_retirementSaving);

    console.log(">>>>>>>>>>", financailPlans);

    const dataFortable = financailPlans.map((r, idx) => {
      return {
        age: r.age,
        livingCostPerYear: r.livingCostPerYear,
        portValue: _investmentPlan[idx],
      };
    });

    console.log("dataFortable", dataFortable);
    setDataFortable(dataFortable);
  };

  useEffect(() => {
    currentAge.length > 0 &&
    dieAge.length > 0 &&
    retireAge.length > 0 &&
    Number(currentAge) <= Number(retireAge) &&
    Number(retireAge) <= Number(dieAge) &&
    costPerMonth.length > 0 &&
    inflation.length > 0
      ? calculateRetirement()
      : setRetirementSaving(0);
  }, [
    currentAge,
    dieAge,
    retireAge,
    costPerMonth,
    inflation,
    investmentPerYear,
    investmentReturnRate,
  ]);
  // console.log(">>>>>>", netSaveMoney);

  return (
    <>
      <div className="w-full bg-slate-800 h-screen">
        <h1 className="text-center text-2xl font-bold mt-4">
          แผนการเกษียณของฉัน
        </h1>
        <div className="bg-slate-400 w-1/2 text-center mx-auto">
          <div className=" grid grid-cols-2 gap-4 p-4 w-full mx-auto mt-10 space-x-3">
            <div className="space-y-4">
              <div className="font-bold">คุณมีอายุเท่าไร</div>
              <div>
                <input
                  onChange={(e) => setCurrentAge(e.target.value)}
                  value={currentAge}
                  className="w-full bg-white p-2"
                />
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="font-bold">มีอายุถึงกี่ปี</div>
                <div>
                  <input
                    className="w-full bg-white p-2"
                    onChange={(e) => setDieAge(e.target.value)}
                    value={dieAge}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="font-bold">เกษียณตอนอายุ</div>
                <div>
                  <input
                    className="w-full bg-white p-2"
                    onChange={(e) => setRetireAge(e.target.value)}
                    value={retireAge}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="font-bold">ค่าใช้จ่ายต่อเดือน</div>
                <div>
                  <input
                    className="w-full bg-white p-2"
                    onChange={(e) => setCostPerMonth(e.target.value)}
                    value={costPerMonth}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="font-bold">อัตราเงินเฟ้อ</div>
                <div>
                  <input
                    className="w-full bg-white p-2"
                    onChange={(e) => setInflation(e.target.value)}
                    value={inflation}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="font-bold">เงินลงทุน</div>
                <div>
                  <input
                    className="w-full bg-white p-2"
                    onChange={(e) => setInvestmentPerYear(e.target.value)}
                    value={investmentPerYear}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <div className="font-bold">พอร์ทการลงทุน%</div>
                <div>
                  <input
                    className="w-full bg-white p-2"
                    onChange={(e) => setInvestmentReturnRate(e.target.value)}
                    value={investmentReturnRate}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="w-1/3 bg-yellow-200 p-2 mx-auto m-4 font-bold text-xl rounded-lg">
              คำนวณ
            </button>
          </div>
        </div>
        <div className=" text-center mt-4 font-bold text-xl">
          ตอนนี้มีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
        </div>
        <div className=" text-center font-bold text-red-600 text-4xl mt-4">
          {" "}
          {new Intl.NumberFormat("th-TH").format(retirementSaving)}
        </div>

        <div>
          <FinancailPlanTable dataFortable={dataFortable} />
        </div>
      </div>
    </>
  );
};

export default RetirementPlan;
