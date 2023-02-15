import React, { useState, useEffect } from "react";
import axios from "axios";

// todo 3 : create CustomHook3 : call API Statistic part
export const useFetchExchangeStatistic = ({
  authToken,
  fromCurrency,
  toCurrency,
}) => {
  // todo 3.1 move state
  const [exchangeStatistic, setExchangeRatesStatistic] = useState();
  // todo 3.3 useEffects call Statistic
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      setExchangeRatesStatistic(res.data);
    });
  }, [fromCurrency, toCurrency]);

  // todo 3.2 return state
  return {
    exchangeStatistic,
    setExchangeRatesStatistic,
  };
};

// todo 4 : create CustomHook 4 : Chart program
export const useChartOption = ({ authToken, fromCurrency, toCurrency }) => {
  // todo 4.1
  const [chartOption, setChartOption] = useState({});
  // todo 4.3
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeChart = res.data;
      const something = _exchangeChart?.batchList[0]?.rates?.slice(1);
      console.log("something : ", something);
      const _chartOption = {
        xAxis: {
          type: "category",
          data: [..._exchangeChart?.batchList[0]?.rates?.slice(1)?.keys()].map(
            (r) => r - _exchangeChart?.batchList[0]?.rates?.length - 1
          ),
          name: "วันที่",
        },
        yAxis: {
          type: "value",
          name: "อัตราแรกเปลี่ยน",
          max: "dataMax",
          min: "dataMin",
        },
        series: [
          {
            data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#83a832", width: 2, type: "default" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      setChartOption(_chartOption);
    });
  }, [fromCurrency, toCurrency]);

  // todo 4.2
  return {
    chartOption,
    setChartOption,
  };
};
