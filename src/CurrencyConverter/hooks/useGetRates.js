import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetRates = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config).then(function (response) {
      console.log("aaa", JSON.stringify(response.data));

      const tempExchangeRates = response.data;
      console.log("tempExchangeRates", tempExchangeRates);

      const tempCurrencyLists = Object.keys(tempExchangeRates.rates);
      console.log("tempCurrencyLists", tempCurrencyLists);

      setExchangeRates(tempExchangeRates);
      setCurrencyLists(tempCurrencyLists);
    });
  }, []);

  return {
    exchangeRates,
    setExchangeRates,
    currencyLists,
    setCurrencyLists,
  };
};
