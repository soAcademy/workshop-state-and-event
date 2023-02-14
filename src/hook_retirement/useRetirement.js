import React, { useState, useEffect } from "react";

export const useRetirement = () => {
  const [ageRetire, setAgeRetire] = useState("60");
  const [lifeAge, setLifeAge] = useState("75");
  const [currentAge, setCurrentAge] = useState("25");
  const [livingCostPerMonth, setLivingCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState(3000000);
  const [financialPlans, setFinancialPlans] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState(0);
  const [investmentReturnRate, setInvestmentReturnRate] = useState(0);

  const calculateRetirementSaving = () => {
    const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge)).keys()];
    // .key บอกเลข index
    console.log("lifeSpans", lifeSpans);

    // ---------------------------------------
    const _financialPlans0 = [
      ...Array(Number(lifeAge) - Number(currentAge)),
    ].map((r, idx) => {
      console.log({
        pv: Number(livingCostPerMonth),
        if: 1 + Number(inflation) / 100,
        yr: idx + 1,
      });
      return {
        age: Number(currentAge) + idx + 1,
        livingCostPerYear:
          Number(livingCostPerMonth) *
          12 *
          (1 + Number(inflation) / 100) ** (idx + 1),
      };
    });

    const _investmentPlans = lifeSpans.reduce((acc, r) => {
      const yearIndex = acc.length;
      const pastPortfolio = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      // หาเงินลงทุนของปีที่แล้ว
      const isNotRetire = yearIndex < Number(ageRetire) - Number(currentAge);
      // เราจะ retire ในอีกกี่ปี
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0;
      // เงินลงทุนของปีนี้
      const livingCostPerYear = isNotRetire
        ? 0
        : _financialPlans0[yearIndex].livingCostPerYear;
      const value =
        (pastPortfolio + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      return [...acc, value];
    }, []);
    console.log(_investmentPlans);

    const _financialPlans = _financialPlans0.map((r, idx) => ({
      ...r,
      investmentValue: _investmentPlans[idx],
    }));
    const _retirementSaving = _financialPlans0
      .filter((r) => r.age >= Number(ageRetire))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0)
      .toFixed(2);

    console.log("_financialPlans", _financialPlans0);
    console.log("_retirementSaving", _retirementSaving);

    setRetirementSaving(_retirementSaving);
    setFinancialPlans(_financialPlans);

    console.log("RetirementSaving:", retirementSaving);
  };

  useEffect(() => {
    if (
      currentAge.length > 0 &&
      lifeAge.length > 0 &&
      ageRetire.length > 0 &&
      Number(currentAge) <= Number(ageRetire) &&
      Number(ageRetire) <= Number(lifeAge) &&
      livingCostPerMonth.length > 0 &&
      inflation.length > 0
    ) {
      calculateRetirementSaving();
    } else {
      setRetirementSaving(0);
      setFinancialPlans([]);
    }
  }, [
    currentAge,
    lifeAge,
    ageRetire,
    livingCostPerMonth,
    inflation,
    investmentPerYear,
    investmentReturnRate,
  ]);

  return {
    ageRetire,
    setAgeRetire,
    lifeAge,
    setLifeAge,
    currentAge,
    setCurrentAge,
    livingCostPerMonth,
    setLivingCostPerMonth,
    inflation,
    setInflation,
    retirementSaving,
    setRetirementSaving,
    financialPlans,
    setFinancialPlans,
    investmentPerYear,
    setInvestmentPerYear,
    investmentReturnRate,
    setInvestmentReturnRate,
  };
};
