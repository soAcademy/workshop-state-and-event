import { useState, useEffect } from "react";

const Retirement = () => {
  const [currentAge, setCurrentAge] = useState("25");
  const [lifeAge, setLifeAge] = useState("80");
  const [retireAge, setRetireAge] = useState("60");
  const [livingCostPerMonth, setLivingCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState("40000000");
  const [financialPlans, setFinancialPlans] = useState([]);
  const [investmentPerMonth, setInvestmentPerMonth] = useState("10000");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("7.0");

  const calculateRetirementSaving = () => {
    const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge)).keys()];
    console.log("lifeSpans", lifeSpans);

    const _financialPlans0 = lifeSpans.map((r, idx) => ({
      age: Number(currentAge) + idx,
      livingCostPerYear:
        Number(livingCostPerMonth) * 12 * (1 + Number(inflation) / 100) ** idx,
    }));

    const _investmentPlans = lifeSpans.reduce((acc, yearIndex) => {
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      const isRetired = yearIndex >= Number(retireAge) - Number(currentAge);
      const investThisYearValue = !isRetired ? Number(investmentPerMonth) *12 : 0;
      const livingCostPerYear = !isRetired
        ? 0
        : _financialPlans0[yearIndex].livingCostPerYear;

      const value =
        (pastPortfolioValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      return [...acc, value];
    }, []);

    console.log("_investmentPlans", _investmentPlans);

    const _financialPlans = _financialPlans0.map((r, idx) => ({
      ...r,
      investmentValue: _investmentPlans[idx],
    }));

    console.log(_investmentPlans);

    const _retirementSaving = _financialPlans
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);

    console.log("financialPlans", _financialPlans);
    console.log("retirementSaving", _retirementSaving);

    return (
      setFinancialPlans(_financialPlans), setRetirementSaving(_retirementSaving)
    );
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
      investmentPerMonth.length > 0 &&
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
    investmentPerMonth,
    investmentReturnRate,
  ]);

  return (
    <div>
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto mt-8">
        <div class="font-bold text-xl text-center">แผนเกษียณของฉัน</div>
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <label>คุณอายุเท่าไร (ปี)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="25"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
              />
            </div>
            <div class="form-group mb-6">
              <label>คุณจะมีอายุถึงกี่ปี (ปี)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                value={lifeAge}
                onChange={(e) => setLifeAge(e.target.value)}
                placeholder="80"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <label>คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="60"
                type="text"
                value={retireAge}
                onChange={(e) => setRetireAge(e.target.value)}
              />
            </div>
            <div class="form-group mb-6">
              <label>ค่าใช้จ่ายต่อเดือนที่ต้องการ (บาท)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                value={livingCostPerMonth}
                onChange={(e) => setLivingCostPerMonth(e.target.value)}
                placeholder="30000"
              />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <label>อัตราเงินเฟ้อต่อปี (%)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
                placeholder="4.72"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <label>เงินลงทุนต่อเดือน (บาท)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="10000"
                value={investmentPerMonth}
                onChange={(e) => setInvestmentPerMonth(e.target.value)}
              />
            </div>
            <div class="form-group mb-6">
              <label>อัตราผลตอบแทนต่อปี (%)</label>
              <input
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                value={investmentReturnRate}
                onChange={(e) => setInvestmentReturnRate(e.target.value)}
                placeholder="7.0"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
        </h2>
        <h1 className="text-5xl font-bold text-red-700 mt-4">
          {new Intl.NumberFormat("th-TH").format(
            Number(retirementSaving).toFixed(0)
          )}{" "}
          บาท
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

export default Retirement;
