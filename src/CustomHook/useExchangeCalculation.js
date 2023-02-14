import { useState, useEffect } from "react";


export const useExchangeCalculation = ({exchangeRates})=>{
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountConvert, setAmountConvert] = useState(0);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();

  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;

     //ก้อนนี้คำนวณได้เลย ่ ไม่ต้องต่อ api
     setAmountConvert(_amountConvert);
     setFromCurrencyRate(_fromCurrencyRate);
     setToCurrencyRate(_toCurrencyRate);
   }, [amount, fromCurrency, toCurrency, exchangeRates]);
  return{
    fromCurrency,setFromCurrency,
    toCurrency, setToCurrency,
    amount, setAmount,
    amountConvert, setAmountConvert,
    fromCurrencyRate, setFromCurrencyRate,
    toCurrencyRate, setToCurrencyRate
  }
};
