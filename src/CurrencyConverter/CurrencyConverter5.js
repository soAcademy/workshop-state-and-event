import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import ExchangeRatesData from "./exchange-rates.json";
import ExchangeStatisticData from "./exchange-statistic.json";
import ExchangeChartData from "./exchange-chart.json";

const CurrencyConverter5 = () => {
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
    const tmpExchangeRates = ExchangeRatesData;
    const tmpCurrencyLists = Object.keys(tmpExchangeRates.rates);
    // Object.keys เพื่อต้องการเอาชื่อของ สกุลเงินมาแสดง
    console.log("CurrencyLists", tmpCurrencyLists);
    setCurrencyLists(tmpCurrencyLists);
    setExchangeRates(tmpExchangeRates);
  }, []);

  useEffect(() => {
    const tmpFromCurrencyRated = exchangeRates?.rates[fromCurrency];
    const tmpToCurrencyRated = exchangeRates?.rates[toCurrency];
    console.log("From", tmpFromCurrencyRated, "To", tmpToCurrencyRated);
    const tmpAmountConverted =
      (amount / tmpFromCurrencyRated) * tmpToCurrencyRated;
    console.log("AmountConverted", tmpAmountConverted);
    const tmpExchangeStatistics = ExchangeStatisticData;
    const tmpExchangeChartData = ExchangeChartData;
    const tmpChart = {
      xAxis: {
        type: "category",
        data: [
          ...tmpExchangeChartData?.batchList[0]?.rates?.slice(1)?.keys(),
        ].map((r) => r - tmpExchangeChartData?.batchList[0]?.rates?.length - 1),
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

    setFromCurrencyRated(tmpFromCurrencyRated);
    setToCurrencyRated(tmpToCurrencyRated);
    setAmountConverted(Number(tmpAmountConverted));
    setExchangeStatistic(tmpExchangeStatistics);
    setChart(tmpChart);
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="font-semibold text-xl">คำนวนอัตราแลกเปลี่ยน</p>
      </div>
      <div className="bg-slate-100 m-auto w-2/3 p-4 mt-5 rounded">
        <div className="flex text-center space-x-2">
          <div className="w-1/3">
            <p className="text-left">จำนวน</p>
            {/* {amount} */}
            <input
              className="w-full mt-3 rounded pl-1"
              placeholder="1"
              onChange={(e) => setAmount(Number(e.target.value))}
              name="amount"
              type="number"
              value={amount}
            />
          </div>
          <div className="w-1/3">
            <p className="text-left">จาก</p>
            {/* {fromCurrency} */}
            <select
              className="w-full mt-3 rounded cursor-pointer"
              onChange={(e) => setFromCurrency(e.target.value)}
              value={fromCurrency}
            >
              {currencyLists
                ?.filter((i) => i !== toCurrency) // !== ไม่เท่ากับ
                ?.map((r, idx) => (
                  <option value={r} key={idx}>
                    {r}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-1/3">
            <p className="text-left">ไป</p>
            {/* {toCurrency} */}
            <select
              className="w-full mt-3 rounded cursor-pointer"
              onChange={(e) => setToCurrency(e.target.value)}
              value={toCurrency}
            >
              {currencyLists
                ?.filter((i) => i !== fromCurrency)
                ?.map((r, idx) => (
                  <option value={r} key={idx}>
                    {r}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-yellow-300 w-36 h-10 text-lg rounded hover:bg-yellow-200 cursor-pointer">
            คำนวน
          </button>
        </div>
        <div className="mt-5">
          <p>
            {amount} {fromCurrency} =
          </p>
        </div>
        <div className="mt-3">
          <p className="text-xl font-semibold">
            {amountConverted?.toFixed(3)} {toCurrency}
          </p>
        </div>
        <div className="mt-3">
          <p>
            1 {toCurrency} ={" "}
            {((1 / fromCurrencyRated) * toCurrencyRated).toFixed(3)}{" "}
            {fromCurrency}
          </p>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-10">
        <p>อัตราแลกเปลี่ยนย้อนหลัง </p>
      </div>
      <div className="m-auto w-2/3 p-4 mt-5 rounded border-2">
        <div className="flex">
          <div className="w-6/12">
            <p>1 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last1Days.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last1Days.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
            <p className="mt-7">30 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last30Days.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last30Days.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
          </div>
          <div className="w-6/12">
            <p>7 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last7Days.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last7Days.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
            <p className="mt-7">60 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last60Days.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last60Days.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-5 rounded border-2">
        <ReactECharts option={chart} />
      </div>
    </div>
  );
};

export default CurrencyConverter5;
