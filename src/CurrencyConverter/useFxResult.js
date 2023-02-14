import React, { useState, useEffect } from "react";

export const useFxResult = ({ fxRates }) => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("THB");
  const [result, setResult] = useState();
  const rates = () => (1 / fxRates.rates[from]) * fxRates.rates[to];
  useEffect(() => {
    const _result = Number(amount) * rates();
    setResult(_result);
  }, [amount, from, to, fxRates]);

  return { amount, setAmount, from, setFrom, to, setTo, result, rates };
};
