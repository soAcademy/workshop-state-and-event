import React, { useState, useEffect } from "react";
import axios from "axios";

// todo 1 : create CustomHook 1 : Call API converter part
export const useFetchExchangeRate = ({ authToken }) => {
  // todo 1.1 : ย้าย state
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  // todo 1.3 : ย้าย useEffect ก้อนที่ดึง API เส้นที่เอาแปลงสกุลเงิน :
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
      const _currencyLists = Object.keys(_exchangeRates.rates);
      console.log(_currencyLists);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
    });
  }, []);
  // todo 1.2 : return state
  return {
    exchangeRates,
    currencyLists,
  };
};

// todo 2 : create CustomHook 2 : Converter program
export const useConvertExchangeRate = ({ exchangeRates }) => {
  // todo 2.1 : ย้าย state ที่เกี่ยวกับการคำนวณอัตราการปลี่ยนแปลง
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountConvert, setAmountConvert] = useState(0);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  // todo 2.3 : ย้ายก้อนคำนวณมาใส่ useEffect
  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    console.log(fromCurrencyRate, toCurrencyRate);
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
  }, [amount, fromCurrency, toCurrency, exchangeRates]);
  // todo 2.2 : return state ออกไปให้หมด เดี๋ยวค่อยตัดอันที่ไม่ใช้ออก
  return {
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
  };
};

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
