import { useState, useEffect } from "react";
import axios from "axios";

const apiToken =
  "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

export const useChart = ({ fromCurrency, toCurrency }) => {
  const [chart, setChart] = useState({});

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization: apiToken,
      },
    }).then((response) => {
      const tmpExchangeChartData = response.data;
      const tmpChart = {
        xAxis: {
          type: "category",
          data: [
            ...tmpExchangeChartData?.batchList[0]?.rates?.slice(1)?.keys(),
          ].map(
            (r) => r - tmpExchangeChartData?.batchList[0]?.rates?.length - 1
          ),
          name: "dates",
        },
        yAxis: {
          type: "value",
          name: "rates",
          max: "dataMax",
          min: "dataMin",
        },
        series: [
          {
            data: tmpExchangeChartData?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#FCE22A", width: 3, type: "line" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };
      setChart(tmpChart);
    });
  }, [fromCurrency, toCurrency]);
  return { chart };
};
