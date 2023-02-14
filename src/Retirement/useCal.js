import { useEffect, useState } from "react";

export const useCal = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [dieAge, setDieAge] = useState(80);
  const [retiredAge, setRetiredAge] = useState(55);
  const [expensePerMonth, setExpensePerMonth] = useState(30000);
  const [inflationRate, setInflationRate] = useState("4.4");
  const [retirementSavings, setRetirementSavings] = useState(40000000);
  const [financialTable, setFinancialTable] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState(25000);
  const [investmentReturn, setInvestmentReturn] = useState("6");

  useEffect(() => {
    const presentExpensePerYear = expensePerMonth * 12;
    console.log("presentExpensePerYear", presentExpensePerYear);

    const ages = [];
    for (let i = currentAge; i < dieAge; i++) {
      ages.push(i);
    }

    console.log("ages", ages);

    const tempFinancialPlans = ages.map((r, idx) => ({
      age: r + 1,
      livingCostPerYear:
        presentExpensePerYear * (1 + Number(inflationRate) / 100) ** (idx + 1),
    }));
    console.log("tempFinancialPlans", tempFinancialPlans);
    // setFinancialTable(tempFinancialPlans);

    const tempRetirementSavings = tempFinancialPlans
      .filter((r) => r.age >= retiredAge)
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);
    setRetirementSavings(tempRetirementSavings);
    console.log("tempRetirementSavings", tempRetirementSavings);

    const tempInvestmentPlans = ages.reduce((acc, r) => {
      const yearIndex = acc.length;
      console.log("yearIndex", yearIndex);
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      console.log("pastPortfolioValue", pastPortfolioValue);

      //Check เกษียณยัง? ถ้ายังจะลงเพิ่ม ถ้าแล้วจะไม่ลง
      const investThisYearValue = r < retiredAge ? investmentPerYear : 0;
      console.log("investThisYearValue", investThisYearValue);
      //Check เกษียณยัง? ถ้ายังจะไม่คิดเงินใช้จ่าย ถ้าแล้วจะดึงเงินออกทุกปี
      const livingCostPerYear =
        r < retiredAge ? 0 : tempFinancialPlans[yearIndex].livingCostPerYear;
      console.log("livingCostPerYear", livingCostPerYear);

      const value =
        (Number(pastPortfolioValue) +
          Number(investThisYearValue) -
          Number(livingCostPerYear)) *
        (1 + Number(investmentReturn) / 100);
      console.log("value", value);
      return [...acc, value];
    }, []);
    console.log("tempInvestmentPlans", tempInvestmentPlans);

    const tempFinancialPlans2 = tempFinancialPlans.map((r, idx) => ({
      ...r,
      investmentValue: tempInvestmentPlans[idx],
    }));
    console.log("tempFinancialPlans2", tempFinancialPlans2);
    setFinancialTable(tempFinancialPlans2);
  }, [
    currentAge,
    dieAge,
    retiredAge,
    expensePerMonth,
    inflationRate,
    investmentPerYear,
    investmentReturn,
  ]);
  return {
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
    setRetirementSavings,
    financialTable,
    setFinancialTable,
    investmentPerYear,
    setInvestmentPerYear,
    investmentReturn,
    setInvestmentReturn,
  };
};
