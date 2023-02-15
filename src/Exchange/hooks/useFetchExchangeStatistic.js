import React, { useState, useEffect } from "react";
import axios from "axios";

// todo 3 : create CustomHook3 : call API Statistic part
export const useFetchExchangeStatistic = ({
  authToken,
  fromCurrency,
  toCurrency,
}) => {
  // todo 3.1 move state
  const [exchangeStatistic, setExchangeRatesStatistic] = useState();
  // todo 3.3 useEffects call Statistic
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      setExchangeRatesStatistic(res.data);
    });
  }, [fromCurrency, toCurrency]);

  // todo 3.2 return state
  return {
    exchangeStatistic,
    setExchangeRatesStatistic,
  };
};