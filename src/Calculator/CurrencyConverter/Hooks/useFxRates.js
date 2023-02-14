import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFxRates = ({ authToken }) => {
  const [options, setOptions] = useState([]);
  const [fxRates, setFxRates] = useState({ rates: [] });
  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    };

    axios(config)
      .then(function (response) {
        setFxRates(response.data);
        setOptions(Object.keys(response.data.rates));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return { fxRates, options };
};
