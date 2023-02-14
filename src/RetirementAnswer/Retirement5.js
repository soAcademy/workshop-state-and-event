import { useState, useEffect } from "react";

const Retirement5 = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [lifeAge, setLifeAge] = useState("75");
  const [retireAge, setRetireAge] = useState("60");
  const [livingCostPerMonth, setLivingCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [investmentPerYear, setInvestmentPerYear] = useState("10000");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("7.0");
  const [retirementSaving, setRetirementSaving] = useState(40000000);
  const [financialPlans, setFinancialPlans] = useState([]);

  const calculateRetirementSaving = () => {
    console.log("Retirement");
    const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge)).keys()];

    const _financialPlans0 = lifeSpans.map((r, idx) => ({
      age: Number(currentAge) + idx + 1,
      livingCostPerYear:
        Number(livingCostPerMonth) *
        12 *
        (1 + Number(inflation) / 100) ** (idx + 1),
    }));


    const _investmentPlans = lifeSpans.reduce((acc, yearIndex) => {
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      console.log("Past Portfolio:",pastPortfolioValue)
      const isNotRetire = yearIndex < Number(retireAge) - Number(currentAge);
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0;
      const livingCostPerYear = isNotRetire
        ? 0
        : _financialPlans0[yearIndex].livingCostPerYear;
      const value =
        (pastPortfolioValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      // console.log("pastPortfolioValue:",pastPortfolioValue)
      console.log("acc:",acc)
      return [...acc, value];
    }, []);
    console.log("_investmentPlans:",_investmentPlans);

    const _financialPlans = _financialPlans0.map((r, idx) => ({
      ...r,
      investmentValue: _investmentPlans[idx],
    }));

    console.log(_investmentPlans);

    const _retirementSaving = _financialPlans
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);

    console.log("financialPlans:",_financialPlans);
    console.log(_retirementSaving);
    setFinancialPlans(_financialPlans);
    setRetirementSaving(_retirementSaving);
  };

  useEffect(() => {
    if (
      currentAge.length > 0 &&
      lifeAge.length > 0 &&
      retireAge.length > 0 &&
      Number(currentAge) <= Number(retireAge) &&
      Number(retireAge) <= Number(lifeAge) &&
      livingCostPerMonth.length > 0 &&
      inflation.length > 0 &&
      investmentPerYear.length > 0 &&
      investmentReturnRate.length > 0
    ) {
      calculateRetirementSaving();
    } else {
      setRetirementSaving(0);
      setFinancialPlans([]);
    }
  }, [
    currentAge,
    lifeAge,
    retireAge,
    livingCostPerMonth,
    inflation,
    investmentPerYear,
    investmentReturnRate,
  ]);

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">แผนเกษียณของฉัน</h1>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label>คุณอายุเท่าไร (ปี)</label>
            <br />
            <input
              name="currentAge"
              type="text"
              className="p-2 w-full mt-2"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label>คุณจะมีอายุถึงกี่ปี (ปี)</label>
            <br />
            <input
              name="lifeAge"
              type="text"
              className="p-2 w-full mt-2"
              value={lifeAge}
              onChange={(e) => setLifeAge(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label>คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
            <br />
            <input
              name="retireAge"
              type="text"
              className="p-2 w-full mt-2"
              value={retireAge}
              onChange={(e) => setRetireAge(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label>ค่าใช้จ่ายต่อเดือนที่ต้องการ (บาท)</label>
            <br />
            <input
              name="livingCostPerMonth"
              type="text"
              className="p-2 w-full mt-2"
              value={livingCostPerMonth}
              onChange={(e) => setLivingCostPerMonth(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <label>อัตราเงินเฟ้อต่อปี (%)</label>
            <br />
            <input
              name="inflation"
              type="text"
              className="p-2 w-full mt-2"
              value={inflation}
              onChange={(e) => setInflation(e.target.value)}
            ></input>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label>เงินลงทุนต่อปี (บาท)</label>
            <br />
            <input
              name="investmentPerYear"
              type="text"
              className="p-2 w-full mt-2"
              value={investmentPerYear}
              onChange={(e) => setInvestmentPerYear(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label>อัตราผลตอบแทนการลงทุนต่อปี (%)</label>
            <br />
            <input
              name="livingCostPerMonth"
              type="text"
              className="p-2 w-full mt-2"
              value={investmentReturnRate}
              onChange={(e) => setInvestmentReturnRate(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-yellow-400 active:bg-amber-400 p-4 w-24"
            onClick={() => calculateRetirementSaving()}
          >
            คำนวน
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
        </h2>
        <h1 className="text-5xl font-bold text-red-700 mt-4">
          {new Intl.NumberFormat("th-TH").format(
            (retirementSaving / 1000000).toFixed(2)
          )}{" "}
          ล้านบาท
        </h1>
      </div>
      <div className="mt-8 w-1/2 mx-auto px-8">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-200">
              <td className="font-bold p-2">อายุ</td>
              <td className="font-bold p-2">ค่าใช้จ่ายต่อปี</td>
              <td className="font-bold p-2">มูลค่าพอร์ตการลงทุน</td>
            </tr>
          </thead>
          <tbody>
            {financialPlans?.map((r, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50 px-4" : "bg-white"}
              >
                <td className="px-2">{r.age}</td>
                <td className="px-2">
                  {new Intl.NumberFormat("th-TH").format(
                    r.livingCostPerYear.toFixed(0)
                  )}
                </td>
                <td className="px-2">
                  {new Intl.NumberFormat("th-TH").format(
                    r.investmentValue.toFixed(0)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retirement5;
