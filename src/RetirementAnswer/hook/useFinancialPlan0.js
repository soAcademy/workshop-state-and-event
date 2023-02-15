import {useState} from 'react'

export const useFinancialPlan0 = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [lifeAge, setLifeAge] = useState("75");
  const [inflation, setInflation] = useState("4.72");
  const [livingCostPerMonth, setLivingCostPerMonth] = useState("30000");

  const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge)).keys()];

  const _financialPlans0 = lifeSpans.map((r, idx) => ({
    age: Number(currentAge) + idx + 1,
    livingCostPerYear:
      Number(livingCostPerMonth) *
      12 *
      (1 + Number(inflation) / 100) ** (idx + 1),
  }));

  return {
    currentAge,
    setCurrentAge,
    lifeAge,
    setLifeAge,
    inflation,
    setInflation,
    livingCostPerMonth,
    setLivingCostPerMonth,
    _financialPlans0,
  }
}