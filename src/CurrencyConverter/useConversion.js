import React, { useState, useEffect } from "react";


export const useConversion = ({ exchangeRates }) => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [conversion, setConversion] = useState(0);
  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    // const _statistics = StatisticsData;
    const _conversion = (amount / _fromCurrencyRate) * _toCurrencyRate;

    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
    setConversion(_conversion);
  }, [fromCurrency, toCurrency, amount, exchangeRates]);

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrency,
    setToCurrency,
    toCurrencyRate,
    setToCurrencyRate,
    conversion,
    setConversion,
  };
};
