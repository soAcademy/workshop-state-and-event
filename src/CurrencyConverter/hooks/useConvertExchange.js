import { useState, useEffect } from "react";

export const useConvertExchange = ({ exchangeRates }) => {
  console.log("useConvertExchangeCheck", exchangeRates);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(Number(1));
  const [fromCurrencyRated, setFromCurrencyRated] = useState();
  const [toCurrencyRated, setToCurrencyRated] = useState();
  const [amountConverted, setAmountConverted] = useState();

  useEffect(() => {
    const tmpFromCurrencyRated = exchangeRates?.rates[fromCurrency];
    const tmpToCurrencyRated = exchangeRates?.rates[toCurrency];
    console.log("From", tmpFromCurrencyRated, "To", tmpToCurrencyRated);
    const tmpAmountConverted =
      (amount / tmpFromCurrencyRated) * tmpToCurrencyRated;
    console.log("AmountConverted", tmpAmountConverted);
    setFromCurrencyRated(tmpFromCurrencyRated);
    setToCurrencyRated(tmpToCurrencyRated);
    setAmountConverted(Number(tmpAmountConverted));
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return {
    amount,
    setAmount,
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    amountConverted,
    setAmountConverted,
    fromCurrencyRated,
    toCurrencyRated,
    setFromCurrencyRated,
    setToCurrencyRated,
    exchangeRates,
  };
};
