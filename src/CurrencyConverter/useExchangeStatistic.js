import { useState, useEffect } from "react";
import axios from "axios"

export const useExchangeStatistic = ({ authToken, fromCurrency, toCurrency }) => {
  const [exchangeStatistic, setExchangeStatistic] = useState();
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      setExchangeStatistic(res.data);
    });
  }, [fromCurrency, toCurrency]);
  return {
    exchangeStatistic,
    setExchangeStatistic,
  };
};