import React, { useState, useEffect } from "react";

import axios from "axios";

export const useStatistics = ({ authToken, fromCurrency, toCurrency }) => {
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    // const _statistics = StatisticsData;
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,

      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      setStatistics(res.data);
    });
  }, [fromCurrency, toCurrency]);

  return {
    statistics,
    setStatistics,
  };
};
