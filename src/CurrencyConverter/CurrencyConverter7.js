import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
// import ExchangeRatesData from "./exchange-rates.json";
// import ExchangeStatisticData from "./exchange-statistic.json";
// import ExchangeChartData from "./exchange-chart.json";
import { HiSwitchHorizontal } from "react-icons/hi";

const useConverter = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [amount, setAmount] = useState(1);
  const [convertAmount, setConvertAmount] = useState(1);
  const [exchangeStatistic, setExchangeStatistic] = useState();
  const [option, setOption] = useState({});

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
    exchangeRates,
    setExchangeRates,
    currencyLists,
    setCurrencyLists,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
    amount,
    setAmount,
    convertAmount,
    setConvertAmount,
    exchangeStatistic,
    setExchangeStatistic,
    option,
    setOption,
  };
};

const CurrencyConverter7 = () => {
  const {
    exchangeRates,
    setExchangeRates,
    currencyLists,
    setCurrencyLists,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
    amount,
    setAmount,
    convertAmount,
    setConvertAmount,
    exchangeStatistic,
    setExchangeStatistic,
    option,
    setOption,
  } = useConverter();
  return (
    <>
      <div className="text-center m-4">
        <h1 className="font-bold text-xl"> คำนวณอัตราแลกเปลี่ยน</h1>
        <div className="bg-gray-200 p-4 rounded mt-6 mx-auto w-3/4">
          <div className="flex justify-between">
            <div className="w-1/3">
              <p className="text-left">จำนวน</p>
              <input
                className="rounded mt-2 px-2 h-8"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              ></input>
            </div>
            <div className="w-1/3 mr-3">
              <p className="text-left">จาก</p>
              <select
                className="rounded mt-2 px-2 w-full h-8"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {currencyLists
                  .filter((r) => r !== toCurrency)
                  .map((r) => (
                    <option>{r}</option>
                  ))}
              </select>
            </div>
            <button className="mt-9 text-xl mr-2">
              <HiSwitchHorizontal />
            </button>
            <div className="w-1/3">
              <p className="text-left">ไป</p>
              <select
                className="rounded mt-2 px-2 w-full h-8"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currencyLists
                  .filter((r) => r !== fromCurrency)
                  .map((r) => (
                    <option>{r}</option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-left font-bold text-xl">
            {amount} {fromCurrency} = {convertAmount.toFixed(4)} {toCurrency}
          </div>
          <div className="text-left">
            1 {toCurrency} ={" "}
            {((1 / fromCurrencyRate) * toCurrencyRate).toFixed(4)}{" "}
            {fromCurrency}
          </div>
        </div>
        <h1 className="mt-8 underline">อัตราแลกเปลี่ยนย้อนหลัง</h1>
        <div className="grid grid-cols-2 mt-6 gap-4">
          <div>
            <p>1 วัน</p>
            <p className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last1Days?.average.toFixed(4)} {toCurrency}
            </p>
            <p>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last1Days?.average).toFixed(4)}{" "}
              {fromCurrency}
            </p>
          </div>
          <div>
            <p>7 วัน</p>
            <p className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last7Days?.average.toFixed(4)} {toCurrency}
            </p>
            <p>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last7Days?.average).toFixed(4)}{" "}
              {fromCurrency}
            </p>
          </div>
          <div>
            <p>30 วัน</p>
            <p className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last30Days?.average.toFixed(4)} {toCurrency}
            </p>
            <p>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last30Days?.average).toFixed(4)}{" "}
              {fromCurrency}
            </p>
          </div>
          <div>
            <p>60 วัน</p>
            <p className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last60Days?.average.toFixed(4)} {toCurrency}
            </p>
            <p>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last60Days?.average).toFixed(4)}{" "}
              {fromCurrency}{" "}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <ReactECharts option={option} />
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter7;
