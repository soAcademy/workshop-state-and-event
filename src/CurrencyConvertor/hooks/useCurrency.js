import { useState } from "react";

export const useCurrency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("THB");

  return {
    amount,
    setAmount,
    fromCurr,
    setFromCurr,
    toCurr,
    setToCurr,
  };
};