import React, { useState, useEffect } from "react";

const RetirementPlan1 = () => {
  const [currentAge, setCurrentAge] = useState("22");
  const [lifeAge, setLifeAge] = useState("80");
  const [retireAge, setRetireAge] = useState("55");
  const [monthlySpending, setMonthlySpending] = useState("30000");
  const [inflationRate, setInflationRate] = useState("4.72");
  const [financialPlans, setFinancialPlans] = useState([]);
  const [totalSavingsNeeded, setTotalSavingsNeeded] = useState("40000000");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("7.0");
  const [investmentPerYear, setInvestmentPerYear] = useState("100000");

  const calculateRetirementSaving = () => {
    const lifeSpan = [...Array(Number(lifeAge) - Number(currentAge)).keys()];
    // console.log("retirement", retirement);
    const temptFinancialPlans = lifeSpan.map((r, index) => ({
      age: Number(currentAge) + index + 1,
      livingCostPerYear:
        Number(monthlySpending) *
        12 *
        (1 + Number(inflationRate) / 100) ** (index + 1),
    }));

    console.log("financialPlans", temptFinancialPlans);
    const temptInvestmentPlans = lifeSpan.reduce((acc, yearIndex) => {
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0; 
      const isNotRetire = yearIndex < Number(retireAge) - Number(currentAge);
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0; //
      const livingCostPerYear = isNotRetire
        ? 0
        : temptFinancialPlans[yearIndex].livingCostPerYear;
      const value =
        (pastPortfolioValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      return [...acc, value];  //ass value into the array, increasing array size
    }, []);
    console.log("temptInvestmentPlans", temptInvestmentPlans);

    const temptFinancialPlans2 = temptFinancialPlans.map((r, idx) => ({
      ...r,
      investmentValue: temptInvestmentPlans[idx],
    }));
    
    // console.log("financialPlans", financialPlans);
    // console.log("totalSavingsNeeded", totalSavingsNeeded);

    const temptTotalSavingsNeeded = temptFinancialPlans
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => (acc += r.livingCostPerYear), 0);
    setFinancialPlans(temptFinancialPlans2);
    setTotalSavingsNeeded(temptTotalSavingsNeeded);
  };

  useEffect(() => {
    if (
      currentAge.length > 0 &&
      lifeAge.length > 0 &&
      retireAge.length > 0 &&
      Number(currentAge) <= Number(retireAge) &&
      Number(retireAge) <= Number(lifeAge) &&
      monthlySpending.length > 0 &&
      inflationRate.length > 0 &&
      investmentPerYear.length > 0 &&
      investmentReturnRate.length > 0
    ) {
      calculateRetirementSaving();
    } else {
      totalSavingsNeeded(0);
      setFinancialPlans([]);
    }
  }, [
    currentAge,
    lifeAge,
    retireAge,
    monthlySpending,
    inflationRate,
    investmentPerYear,
    investmentReturnRate,
  ]);

  return (
    <div>
      <h1 className="text-center mt-6">My Retirement Plan</h1>
      <div className="grid grid-cols-2 bg-neutral-300 w-2/3 m-auto p-3 mt-6 rounded-lg ">
        <div className="m-auto">
          <h1>What is your age?</h1>
          <input
            name="current Age"
            type="text"
            className="border border-3"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
          />
        </div>
        <div className="m-auto">
          <h1>Live Until...</h1>
          <input
            type="text"
            name="lifeAge"
            className="border border-3"
            value={lifeAge}
            onChange={(e) => setLifeAge(e.target.value)}
          />
        </div>
        <div className="m-auto">
          <h1>Planned Retirement Age</h1>
          <input
            name="retireAge"
            type="text"
            value={retireAge}
            className="border border-3"
            onChange={(e) => setRetireAge(e.target.value)}
          />
        </div>
        <div className="m-auto">
          <h1>Monthly Spending</h1>
          <input
            name="monthlySpending"
            type="text"
            className="border border-3"
            value={monthlySpending}
            onChange={(e) => setMonthlySpending(e.target.value)}
          />
        </div>
        <div className="m-auto">
          <h1>Inflation Rate</h1>
          <input
            name="inflationRate"
            type="text"
            className="border border-3"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
        </div>
        <div>..</div>
        <div className="m-auto">
          <h1>Investment Per Year</h1>
          <input
            name="InvestmentPerYear"
            type="text"
            className="border border-3"
            value={investmentPerYear}
            onChange={(e) => setInvestmentPerYear(e.target.value)}
          />
        </div>
        <div className="m-auto">
          <h1>Investment Return Rate</h1>
          <input
            name="investmentReturnRate"
            type="text"
            className="border border-3"
            value={investmentReturnRate}
            onChange={(e) => setInvestmentReturnRate(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl text-center mt-4 font-bold">
          You Must Have This Amount Saved at {retireAge} years old:{" "}
        </h2>
        <h2 className="text-2xl text-red-500 font-bold text-center">
          {Number(totalSavingsNeeded).toFixed(0)}
        </h2>
        <table className="bg-neutral-200 m-auto">
          <thead className="bg-sky-300">
            <tr>
              <th className="border border-2 border-black p-2">Age</th>
              <th className="border border-2 border-black p-2">
                livingCostPerYear
              </th>
              <th className="border border-2 border-black p-2">Portfolio Value</th>
            </tr>
          </thead>
          <tbody>
            {financialPlans?.map(
              (
                r,
                idx //Don't use tempt... component here. Use the starting component (eg use "financialPlans" NOT "temptFinancialPlans")
              ) => (
                <tr key={idx}>
                  <td className="text-center border border-2 border-black">
                    {r.age}
                  </td>
                  <td className="text-center border border-2 border-black">
                    {r.livingCostPerYear.toFixed(0)}
                  </td>
                  <td className="text-center border border-2 border-black">{r.investmentValue.toFixed(0)}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RetirementPlan1;
