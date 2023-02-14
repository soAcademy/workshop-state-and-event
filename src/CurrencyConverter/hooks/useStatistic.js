import { useState, useEffect } from "react";
import axios from "axios";

const apiToken =
  "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

export const useStatistic = ({ fromCurrency, toCurrency }) => {
  const [exchangeStatistic, setExchangeStatistic] = useState();
  console.log("useStatistic Check");
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization: apiToken,
      },
    }).then((response) => {
      setExchangeStatistic(response.data);
      console.log("stats", response.data);
    });
  }, [fromCurrency, toCurrency]);
  return { exchangeStatistic };
};
