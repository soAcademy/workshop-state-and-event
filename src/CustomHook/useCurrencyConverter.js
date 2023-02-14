import { useState, useEffect } from "react";
import axios from "axios";

//Create hook
export const useCurrencyConverter = ({ authToken }) => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountConvert, setAmountConvert] = useState(0);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [exchangeStatistic, setExchangeRatesStatistic] = useState();
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeRates = res.data;
      const _currencyLists = Object.keys(_exchangeRates.rates); //ดึงค่า values ของทุก key โดยไม่สนว่า key จะมีชื่อต่างกัน
      // console.log(_currencyLists);
      console.log("_exchangeRates", _exchangeRates);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
      console.log("exchangeRates", exchangeRates);
    });
  }, []);

  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;

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

    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeChart = res.data;
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
          name: "อัตราแลกเปลี่ยน",
          max: "dataMax",
          min: "dataMin",
          splitArea: {
            interval: "auto",
            show: false,
            areaStyle: {
              color: ["rgba(250,250,250,0.3)"],
            },
          },
        },
        series: [
          {
            data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#fac858", width: 2, type: "solid" },
          },
        ],
        textStyle: { color: "#ffffff" },
        tooltip: {
          trigger: "axis",
        },
      };
      setChartOption(_chartOption);
    });

    //ก้อนนี้คำนวณได้เลย ่ ไม่ต้องต่อ api
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return {
    exchangeRates,
    setExchangeRates,
    currencyLists,
    setCurrencyLists,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    amountConvert,
    setAmountConvert,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
    exchangeStatistic,
    setExchangeRatesStatistic,
    chartOption,
    setChartOption,
  };
};
