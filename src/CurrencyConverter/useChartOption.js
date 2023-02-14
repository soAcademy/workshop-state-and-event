import React, { useState, useEffect } from "react";

import axios from "axios";

export const useChartOption = ({ authToken, fromCurrency, toCurrency }) => {
  // const [chartData, setChartData] = useState([]);
  const [chartOption, setChartOption] = useState({});
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,

      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _chartData = res.data;

      const _chartOption = {
        xAxis: {
          type: "category",
          data: [..._chartData?.batchList[0]?.rates?.slice(1)?.keys()].map(
            (r) => _chartData?.batchList[0]?.rates?.length - r - 1
          ),
          name: "Date",
        },
        yAxis: {
          type: "value",
          name: "Exchange Rates",
          Max: "dataMax",
          Min: "dataMin",
        },
        series: [
          {
            data: _chartData?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };
      setChartOption(_chartOption);
    });
  }, [fromCurrency, toCurrency]);

  return {
    chartOption,
    setChartOption,
  };
};