import { useState, useEffect } from "react";
import axios from "axios";
import {
  STATISTICS,
  CHARTING_RATES,
  AUTH_HEADER,
  anyOriginUrl,
} from "../constants/const";

export const useStatistic = ({ fromCurrency, toCurrency }) => {
  const [statData, setStatData] = useState();
  const [chartData, setChartData] = useState();
  const [optionForExchangeRates, setOptionForExchangeRates] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: anyOriginUrl(`${STATISTICS}?from=${fromCurrency}&to=${toCurrency}`),
      headers: { authorization: AUTH_HEADER },
    }).then((response) => {
      // console.log(response.data);
      setStatData(response.data);
    });
    // setStatData(statistics);
    axios({
      method: "GET",
      url: anyOriginUrl(
        `${CHARTING_RATES}?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      ),
      headers: { authorization: AUTH_HEADER },
    }).then((response) => {
      console.log(response.data);
      setChartData(response.data);
      const _optionForExchangeRates = {
        xAxis: {
          name: "Date",
          type: "category",
          data: [
            ...new Array(response.data.batchList[0].rates.length - 1).keys(),
          ],
        },
        yAxis: { name: `${fromCurrency} to ${toCurrency}`, type: "value" },
        series: [
          {
            name: `${fromCurrency} to ${toCurrency}`,
            data: response.data.batchList[0].rates.slice(1).reverse(),
            type: "line",
            smooth: true,
          },
        ],
        tooltip: { trigger: "axis" },
      };
      setOptionForExchangeRates(_optionForExchangeRates);
    });
  }, [fromCurrency, toCurrency]);
  return {
    statData,
    setStatData,
    chartData,
    setChartData,
    optionForExchangeRates,
    setOptionForExchangeRates,
  };
};
