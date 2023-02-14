import React, { useState, useEffect } from "react";

import axios from "axios";

export const useFetchExchangeRates = ({ authToken }) => {
  const [currencyList, setCurrencyList] = useState([]);
  const [exchangeRates, setExchangeRates] = useState();

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,

      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeRates = res.data;
      const _currencyList = Object.keys(_exchangeRates.rates);

      setCurrencyList(_currencyList);
      setExchangeRates(_exchangeRates);
    });
  }, []);

  return {
    currencyList,
    setCurrencyList,
    exchangeRates,
    setExchangeRates,
  };
};