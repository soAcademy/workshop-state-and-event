import { useState, useEffect } from "react";
import axios from "axios";

const apiToken =
  "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

export const useCurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(Number(1));
  const [fromCurrencyRated, setFromCurrencyRated] = useState();
  const [toCurrencyRated, setToCurrencyRated] = useState();
  const [amountConverted, setAmountConverted] = useState();
  const [exchangeStatistic, setExchangeStatistic] = useState();
  const [chart, setChart] = useState({});

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: apiToken,
      },
    }).then((response) => {
      const tmpExchangeRates = response.data;
      const tmpCurrencyLists = Object.keys(tmpExchangeRates.rates);
      // Object.keys เพื่อต้องการเอาชื่อของ สกุลเงินมาแสดง
      console.log("ApiData", response.data);
      console.log("CurrencyLists", tmpCurrencyLists);
      setCurrencyLists(tmpCurrencyLists);
      setExchangeRates(tmpExchangeRates);
    });
  }, []);

  useEffect(() => {
    const tmpFromCurrencyRated = exchangeRates?.rates[fromCurrency];
    const tmpToCurrencyRated = exchangeRates?.rates[toCurrency];
    console.log("From", tmpFromCurrencyRated, "To", tmpToCurrencyRated);
    const tmpAmountConverted =
      (amount / tmpFromCurrencyRated) * tmpToCurrencyRated;
    console.log("AmountConverted", tmpAmountConverted);
    setFromCurrencyRated(tmpFromCurrencyRated);
    setToCurrencyRated(tmpToCurrencyRated);
    setAmountConverted(Number(tmpAmountConverted));

    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization: apiToken,
      },
    }).then((response) => {
      setExchangeStatistic(response.data);
      console.log("stats", response.data);
    });

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
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return {
    amount,
    setAmount,
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    currencyLists,
    amountConverted,
    fromCurrencyRated,
    toCurrencyRated,
    exchangeStatistic,
    chart,
  };
};
