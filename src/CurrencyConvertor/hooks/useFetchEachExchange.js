import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchEachExchange = ({ amount, toCurr, fromCurr }) => {
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/midmarket-converter/`
      )}`,
      headers: {
        authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        const valueOptions = Object.keys(response.data.rates)?.map((r) => ({
          name: r,
          value: response.data.rates[r],
        }));
        // console.log(valueOptions);
        setOptions(valueOptions);

        const fromToUSD = response.data.rates[fromCurr];
        // console.log(fromToUSD);
        const toToUSD = response.data.rates[toCurr];
        // console.log(toToUSD);
        // console.log((amount / fromToUSD) * toToUSD);
        setResult(((amount / fromToUSD) * toToUSD).toFixed(4));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [amount, toCurr, fromCurr]);
  return { options, setOptions, result, setResult };
};
