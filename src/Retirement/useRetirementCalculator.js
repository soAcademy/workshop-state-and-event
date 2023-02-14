import { useState, useEffect } from "react";

export const useRetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(25);
  const [lifeSpan, setLifeSpan] = useState(75);
  const [retirementAge, setRetirementAge] = useState(55);
  const [monthlySpending, setMonthlySpending] = useState(30000);
  const [inflationRate, setInflationRate] = useState(4.72); // 4.27
  const [retirementSavings, setRetirementSavings] = useState(40000000);
  const [investmentAmount, setInvestmentAmount] = useState(20000);
  const [benefitRate, setBenefitRate] = useState(8);

  const [
    listOfAnnualSpendingsWithInflation,
    setListOfAnnualSpendingsWithInflation,
  ] = useState([]);

  useEffect(() => {
    // console.log("Variable changed")
    const _listOfAnnualSpendingsWithInflation = [
      ...new Array(lifeSpan - currentAge).keys(),
    ]
      .map((yearIndex) => ({
        age: yearIndex + currentAge,
        spending: (1 + inflationRate / 100) ** yearIndex * monthlySpending * 12,
        portfolioValueByYear:
          yearIndex + currentAge < retirementAge
            ? (1 + benefitRate / 100) ** yearIndex * investmentAmount * 12
            : 0,
      }))
      .reduce((accArray, annualSpending, idx) => {
        return [
          ...accArray,
          {
            age: annualSpending.age,
            spending: annualSpending.spending,
            portfolioValueByYear: annualSpending.portfolioValueByYear,
            remainingPortfolio:
              (idx > 0
                ? annualSpending.portfolioValueByYear +
                  accArray[idx - 1].remainingPortfolio
                : annualSpending.portfolioValueByYear) -
              (annualSpending.age < retirementAge
                ? 0
                : annualSpending.spending),
          },
        ];
      }, []);

    // console.log(_list);

    // console.log(_listOfAnnualSpendingsWithInflation);

    const _retirementSavings = _listOfAnnualSpendingsWithInflation
      .filter((annualSpending) => annualSpending.age >= retirementAge)
      .reduce((acc, annualSpending) => acc + annualSpending.spending, 0);

    // console.log(totalRetirementSavings);

    // const

    setListOfAnnualSpendingsWithInflation(_listOfAnnualSpendingsWithInflation);
    setRetirementSavings(_retirementSavings);
  }, [
    currentAge,
    lifeSpan,
    retirementAge,
    monthlySpending,
    inflationRate,
    investmentAmount,
    benefitRate,
  ]);

  return {
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
    setRetirementSavings,
    investmentAmount,
    setInvestmentAmount,
    benefitRate,
    setBenefitRate,
    listOfAnnualSpendingsWithInflation,
  };
};
