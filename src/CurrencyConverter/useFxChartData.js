import React, { useState, useEffect } from "react";
import axios from "axios";
import EChartsReact from "echarts-for-react";
const useFxChartOptions = ({ from, to, authToken }) => {
  const [chartOptions, setChartOptions] = useState({
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
        setChartOptions(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [from, to]);
  return chartOptions;
};
export default useFxChartOptions;
