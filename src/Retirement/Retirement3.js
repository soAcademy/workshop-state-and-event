import { useState, useEffect } from "react";

const Retirement3 = () => {
  const [currentAge, setCurrentAge] = useState(25);
  const [lifeSpan, setLifeSpan] = useState(75);
  const [retirementAge, setRetirementAge] = useState(55);
  const [monthlySpending, setMonthlySpending] = useState(30000);
  const [inflationRate, setInflationRate] = useState(4.27);
  const [retirementSavings, setRetirementSavings] = useState(40000000);

  useEffect(() => {
    // console.log("Variable changed")
    const listOfAnnualSpendingsWithInflation = [
      ...new Array(lifeSpan - currentAge).keys(),
    ].map((yearIndex) => ({
      age: yearIndex + currentAge,
      spending: (1 + inflationRate / 100) ** yearIndex * monthlySpending * 12,
    }));

    // console.log(listOfAnnualSpendingsWithInflation);

    const totalRetirementSavings = listOfAnnualSpendingsWithInflation
      .filter((annualSpending) => annualSpending.age >= retirementAge)
      .reduce((acc, annualSpending) => acc + annualSpending.spending, 0);

    // console.log(totalRetirementSavings);

    setRetirementSavings(totalRetirementSavings);
  }, [currentAge, lifeSpan, retirementAge, monthlySpending, inflationRate]);

  return (
    <>
      <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        แผนการเกษียณของฉัน
      </h1>
      <form
        action=""
        className="mb-2 grid rounded bg-slate-200 p-6 md:grid-cols-2 md:gap-6"
      >
        <div className="mb-6">
          <label
            htmlFor="currentAge"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            คุณอายุเท่าไร
          </label>
          <input
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            type="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="currentAge"
            value={currentAge}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="lifeSpan"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            มีอายุถึงกี่ปี
          </label>
          <input
            type="number"
            onChange={(e) => setLifeSpan(Number(e.target.value))}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="lifeSpan"
            value={lifeSpan}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="retirementAge"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            เกษียณตอนอายุ
          </label>
          <input
            type="number"
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="retirementAge"
            value={retirementAge}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="monthlySpending"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            ค่าใช้จ่ายต่อเดือน
          </label>
          <input
            type="number"
            onChange={(e) => setMonthlySpending(Number(e.target.value))}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="monthlySpending"
            value={monthlySpending}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="inflationRate"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            อัตราเงินเฟ้อ
          </label>
          <input
            type="number"
            onChange={(e) => setInflationRate(Number(e.target.value))}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="inflationRate"
            value={inflationRate}
          />
        </div>
        {/* <button>คำนวณ</button> */}
      </form>
      <p className="text-center">
        คุณต้องมีเงินเก็บตอนอายุ {retirementAge} ปี จำนวน
      </p>
      <p className="text-center text-2xl text-red-600">
        {Number(retirementSavings.toFixed(2)).toLocaleString("TH")} บาท
      </p>
    </>
  );
};

export default Retirement3;
