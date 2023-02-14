import { useState, useEffect } from "react";
import axios from "axios";
import {
  MIDMARKET_CONVERTER,
  AUTH_HEADER,
  anyOriginUrl,
} from "../constants/const";

export const useMidmarketConverter = () => {
  const [converter, setConverter] = useState();
  const [amount, setAmount] = useState(1);
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrencyRate, setFromCurrencyRate] = useState(1);
  const [toCurrencyRate, setToCurrencyRate] = useState(1);
  useEffect(() => {
    axios({
      method: "GET",
      url: anyOriginUrl(MIDMARKET_CONVERTER),
      headers: { authorization: AUTH_HEADER },
    }).then((response) => {
      setConverter(response.data);
      setCurrencyList(Object.keys(response.data.rates));
      setFromCurrencyRate(response.data.rates[fromCurrency]);
      setToCurrencyRate(response.data.rates[toCurrency]);
    });
  }, [fromCurrency, toCurrency]);
  return {
    converter,
    setConverter,
    amount,
    setAmount,
    currencyList,
    setCurrencyList,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
  };
};
