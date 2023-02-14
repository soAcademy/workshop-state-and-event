import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFxChartData = ({ from, to, authToken }) => {
  const [chartData, setChartData] = useState({
    timestamp: "",
    batchList: [{ rates: [] }],
  });
  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${from}&toCurrency=${to}&crypto=true`
      )}`,
      headers: {
        Authorization: authToken,
      },
    };

    axios(config)
      .then(function (response) {
        setChartData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [from, to]);
  return chartData;
};
