import React, { useEffect, useState } from "react";
import axios from "axios";

export const useCal = ({ exchangeRates }) => {
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [convertAmount, setConvertAmount] = useState(1);

  useEffect(() => {
    const tempFromCurrencyRate = exchangeRates?.rates[fromCurrency];
    console.log("tempFromCurrencyRate", tempFromCurrencyRate);

    const tempToCurrencyRate = exchangeRates?.rates[toCurrency];
    console.log("tempToCurrencyRate", tempToCurrencyRate);

    const tempConvertAmount =
      (amount / tempFromCurrencyRate) * tempToCurrencyRate;
    console.log("tempConvertAmount", tempConvertAmount);

    setFromCurrencyRate(tempFromCurrencyRate);
    setToCurrencyRate(tempToCurrencyRate);
    setConvertAmount(tempConvertAmount);
  }, [fromCurrency, toCurrency, amount]);

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
    convertAmount,
    setConvertAmount,
  };
};
