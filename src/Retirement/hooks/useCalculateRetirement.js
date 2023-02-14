import { useState, useEffect } from "react";

export const useCalculateRetirement = () => {
  const [currentAge, setCurrentAge] = useState("24");
  const [lifeAge, setLifeAge] = useState("75");
  const [retireAge, setRetireAge] = useState("60");
  const [costPerMonth, setCostPerMonth] = useState("25000");
  const [inflation, setInflation] = useState("4.27");
  const [retirementSavings, setRetirementSavings] = useState("");
  const [ageAndCost, setAgeAndCost] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState("60000");
  const [investmentYield, setInvestmentYield] = useState("7.5");

  const calculateRetirement = () => {
    const remainingAge = [];
    for (let i = Number(currentAge); i <= Number(lifeAge); i++) {
      remainingAge.push(i);
    }
    console.log("remainingAge", remainingAge);

    const costPerYear = costPerMonth * 12;
    console.log("Cost per year", costPerYear);

    const tmpTotalCostPerYear = remainingAge.map((r, idx) => ({
      age: r,
      livingCostPerYear:
        costPerYear * (1 + Number(inflation) / 100) ** (idx + 1),
    }));
    // setAgeAndCost(tmpTotalCostPerYear);
    console.log("Total cost per Year", tmpTotalCostPerYear);

    const totalCostForLife = tmpTotalCostPerYear
      .filter((r) => r.age >= retireAge)
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);
    setRetirementSavings(totalCostForLife);
    console.log("Total cost per Life", totalCostForLife);

    const tmpInvestments = remainingAge.reduce((acc, r) => {
      // console.log("acc1", acc);
      const yearIndex = acc.length;
      console.log("yearIndex", yearIndex);
      const checkInvestment = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      console.log("investmentValue", checkInvestment);
      const plusInvestmentValue = r < retireAge ? investmentPerYear : 0;
      console.log("plusInvestmentValue", plusInvestmentValue);
      const stopInvestmentValue =
        r < retireAge ? 0 : tmpTotalCostPerYear[yearIndex].livingCostPerYear;
      console.log("stopInvestmentValue", stopInvestmentValue);
      const investmentValue =
        (Number(checkInvestment) +
          Number(plusInvestmentValue) -
          Number(stopInvestmentValue)) *
        (1 + Number(investmentYield) / 100);
      console.log("Value", investmentValue);
      // console.log("acc2", acc);
      return [...acc, investmentValue];
    }, []);
    console.log("tmpInvest", tmpInvestments);

    const addInvestment = tmpTotalCostPerYear.map((r, idx) => ({
      ...r,
      investment: tmpInvestments[idx],
    }));
    console.log("addInvestment", addInvestment);
    setAgeAndCost(addInvestment);
  };

  useEffect(() => {
    calculateRetirement();
  }, [
    currentAge,
    lifeAge,
    retireAge,
    costPerMonth,
    inflation,
    investmentPerYear,
    investmentYield,
  ]);
  return {
    currentAge,
    setCurrentAge,
    retireAge,
    setRetireAge,
    inflation,
    setInflation,
    lifeAge,
    setLifeAge,
    costPerMonth,
    setCostPerMonth,
    investmentPerYear,
    setInvestmentPerYear,
    investmentYield,
    setInvestmentYield,
    retirementSavings,
    ageAndCost,
  };
};
