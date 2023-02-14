import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetStat = ({ fromCurrency, toCurrency, amount }) => {
  const [exchangeStatistic, setExchangeStatistic] = useState();

  useEffect(() => {
    const config1 = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config1).then(function (response) {
      console.log("bbb", JSON.stringify(response.data));
      setExchangeStatistic(response.data);
    });

    const config2 = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };
  }, [fromCurrency, toCurrency, amount]);

  return {
    exchangeStatistic,
    setExchangeStatistic,
  };
};
