// import { useState, useEffect } from "react";
import { useRetirementCalculator } from "./useRetirementCalculator";

const Retirement6 = () => {
  // const [currentAge, setCurrentAge] = useState(25);
  // const [lifeSpan, setLifeSpan] = useState(75);
  // const [retirementAge, setRetirementAge] = useState(55);
  // const [monthlySpending, setMonthlySpending] = useState(30000);
  // const [inflationRate, setInflationRate] = useState(4.72); // 4.27
  // const [retirementSavings, setRetirementSavings] = useState(40000000);
  // const [investmentAmount, setInvestmentAmount] = useState(20000);
  // const [benefitRate, setBenefitRate] = useState(8);

  // const [
  //   listOfAnnualSpendingsWithInflation,
  //   setListOfAnnualSpendingsWithInflation,
  // ] = useState([]);

  // useEffect(() => {
  //   // console.log("Variable changed")
  //   const _listOfAnnualSpendingsWithInflation = [
  //     ...new Array(lifeSpan - currentAge).keys(),
  //   ]
  //     .map((yearIndex) => ({
  //       age: yearIndex + currentAge,
  //       spending: (1 + inflationRate / 100) ** yearIndex * monthlySpending * 12,
  //       portfolioValueByYear:
  //         yearIndex + currentAge < retirementAge
  //           ? (1 + benefitRate / 100) ** yearIndex * investmentAmount * 12
  //           : 0,
  //     }))
  //     .reduce((accArray, annualSpending, idx) => {
  //       return [
  //         ...accArray,
  //         {
  //           age: annualSpending.age,
  //           spending: annualSpending.spending,
  //           portfolioValueByYear: annualSpending.portfolioValueByYear,
  //           remainingPortfolio:
  //             (idx > 0
  //               ? annualSpending.portfolioValueByYear +
  //                 accArray[idx - 1].remainingPortfolio
  //               : annualSpending.portfolioValueByYear) -
  //             (annualSpending.age < retirementAge
  //               ? 0
  //               : annualSpending.spending),
  //         },
  //       ];
  //     }, []);

  //   // console.log(_list);

  //   // console.log(_listOfAnnualSpendingsWithInflation);

  //   const _retirementSavings = _listOfAnnualSpendingsWithInflation
  //     .filter((annualSpending) => annualSpending.age >= retirementAge)
  //     .reduce((acc, annualSpending) => acc + annualSpending.spending, 0);

  //   // console.log(totalRetirementSavings);

  //   // const

  //   setListOfAnnualSpendingsWithInflation(_listOfAnnualSpendingsWithInflation);
  //   setRetirementSavings(_retirementSavings);
  // }, [
  //   currentAge,
  //   lifeSpan,
  //   retirementAge,
  //   monthlySpending,
  //   inflationRate,
  //   investmentAmount,
  //   benefitRate,
  // ]);

  const {
    currentAge,
    setCurrentAge,
    lifeSpan,
    setLifeSpan,
    retirementAge,
    setRetirementAge,
    monthlySpending,
    setMonthlySpending,
    inflationRate,
    setInflationRate,
    retirementSavings,
    // setRetirementSavings,
    investmentAmount,
    setInvestmentAmount,
    benefitRate,
    setBenefitRate,
    listOfAnnualSpendingsWithInflation,
  } = useRetirementCalculator();

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
            อัตราเงินเฟ้อต่อปี
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
        <div></div>
        <div className="mb-6">
          <label
            htmlFor="investmentAmount"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            จำนวนเงินลงทุนต่อเดือน
          </label>
          <input
            type="number"
            onChange={(e) => setInvestmentAmount(Number(e.target.value))}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="investmentAmount"
            value={investmentAmount}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="benefitRate"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            อัตราผลตอบแทนการลงทุนต่อปี
          </label>
          <input
            type="number"
            onChange={(e) => setBenefitRate(Number(e.target.value))}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="benefitRate"
            value={benefitRate}
          />
        </div>
      </form>
      <p className="text-center">
        คุณต้องมีเงินเก็บตอนอายุ {retirementAge} ปี จำนวน
      </p>
      <p className="text-center text-2xl text-red-600">
        {Number(retirementSavings.toFixed(2)).toLocaleString("TH")} บาท
      </p>
      <div className="relative overflow-x-auto">
        <table className="w-full text-left font-nstl text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">อายุ</th>
              <th className="px-6 py-3">ค่าใช้จ่ายต่อปี</th>
              <th className="px-6 py-3">จำนวนเงินลงทุนรวมผลตอบแทนต่อปี</th>
              {/* <th className="px-6 py-3">จำนวนเงินลงทุนรวมผลตอบแทนสะสม</th> */}
              <th className="px-6 py-3">มูลค่าพอร์ตคงเหลือ</th>
            </tr>
          </thead>
          <tbody>
            {listOfAnnualSpendingsWithInflation.map((annualSpending) => (
              <tr
                key={annualSpending.age}
                className={`border-b dark:border-gray-700 dark:bg-gray-800
                  ${
                    annualSpending.age < retirementAge
                      ? "bg-green-100 dark:bg-green-800"
                      : "bg-orange-100 dark:bg-orange-800"
                  }`}
              >
                <td className="px-6 py-4">{annualSpending.age}</td>
                <td className="px-6 py-4 text-right">
                  {/* {Number(annualSpending.spending.toFixed(2)).toLocaleString(
                    "TH"
                  )} */}
                  {Intl.NumberFormat("en-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(annualSpending.spending.toFixed(2))}
                </td>
                <td className="px-6 py-4 text-right">
                  {Intl.NumberFormat("en-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(annualSpending.portfolioValueByYear.toFixed(2))}
                </td>
                <td
                  className={`px-6 py-4 text-right ${
                    annualSpending.remainingPortfolio >= 0
                      ? "text-gray-500 dark:text-gray-400"
                      : "text-red-500 dark:text-red-300"
                  }`}
                >
                  {Intl.NumberFormat("en-TH", {
                    style: "currency",
                    currency: "THB",
                  }).format(annualSpending.remainingPortfolio.toFixed(2))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Retirement6;