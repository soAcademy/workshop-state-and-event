import React, { useEffect, useState } from "react";
import axios from "axios";

export const useGetRates = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config).then(function (response) {
      console.log("aaa", JSON.stringify(response.data));

      const tempExchangeRates = response.data;
      console.log("tempExchangeRates", tempExchangeRates);

      const tempCurrencyLists = Object.keys(tempExchangeRates.rates);
      console.log("tempCurrencyLists", tempCurrencyLists);

      setExchangeRates(tempExchangeRates);
      setCurrencyLists(tempCurrencyLists);
    });
  }, []);

  return {
    exchangeRates,
    setExchangeRates,
    currencyLists,
    setCurrencyLists,
  };
};

export const useCal = ({ exchangeRates }) => {
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [convertAmount, setConvertAmount] = useState(1);

  useEffect(() => {
    const tempFromCurrencyRate = exchangeRates?.rates[fromCurrency];
    console.log("tempFromCurrencyRate", tempFromCurrencyRate);

    const tempToCurrencyRate = exchangeRates?.rates[toCurrency];
    console.log("tempToCurrencyRate", tempToCurrencyRate);

    const tempConvertAmount =
      (amount / tempFromCurrencyRate) * tempToCurrencyRate;
    console.log("tempConvertAmount", tempConvertAmount);

    setFromCurrencyRate(tempFromCurrencyRate);
    setToCurrencyRate(tempToCurrencyRate);
    setConvertAmount(tempConvertAmount);
  }, [fromCurrency, toCurrency, amount]);

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
    convertAmount,
    setConvertAmount,
  };
};

export const useGetStat = ({ fromCurrency, toCurrency, amount }) => {
  const [exchangeStatistic, setExchangeStatistic] = useState();

  useEffect(() => {
    const config1 = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config1).then(function (response) {
      console.log("bbb", JSON.stringify(response.data));
      setExchangeStatistic(response.data);
    });

    const config2 = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };
  }, [fromCurrency, toCurrency, amount]);

  return {
    exchangeStatistic,
    setExchangeStatistic,
  };
};

export const useGetGraph = ({ fromCurrency, toCurrency, amount }) => {
  const [option, setOption] = useState({});

  useEffect(() => {
    const config2 = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config2).then(function (response) {
      console.log("ccc", JSON.stringify(response.data));

      const xAxisData = [
        ...response.data?.batchList[0]?.rates?.slice(1)?.keys(),
      ];
      console.log("xAxisData", xAxisData);

      const yAxisData = response.data?.batchList[0]?.rates?.slice(1)?.reverse();
      console.log("yAxisData", yAxisData);

      const tempOption = {
        xAxis: {
          type: "category",
          data: xAxisData.map((r) => r),
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
            data: yAxisData,
            type: "line",
            smooth: true,
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      setOption(tempOption);
    });
  }, [fromCurrency, toCurrency, amount]);
  return {
    option,
    setOption,
  };
};
