import React, { useState, useEffect } from "react";
import ExchangeRatesData from "./exchange-rates.json";
import StatisticsData from "./exchange-statistics.json";
import ChartData from "./exchange-chart.json";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import { useChartOption } from "./useChartOption";
import { useConversion } from "./useConversion";
import { useFetchExchangeRates } from "./useFetchExchangeRates";
import { useStatistics } from "./useStatistics";

const CurrencyConverter7_1 = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";
  const { currencyList, setCurrencyList, exchangeRates, setExchangeRates } =
    useFetchExchangeRates({ authToken });
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrency,
    setToCurrency,
    toCurrencyRate,
    setToCurrencyRate,
    conversion,
    setConversion,
  } = useConversion({ exchangeRates });

  const { statistics, setStatistics } = useStatistics({
    authToken,
    fromCurrency,
    toCurrency,
  });

  const { chartOption } = useChartOption({
    authToken,
    fromCurrency,
    toCurrency,
  });

  // const _chartData = ChartData;
  // console.log("_fromCurrencyRate",_fromCurrencyRate)

  return (
    <div>
      <div className="bg-red-300 w-1/2 m-auto mt-12 rounded-lg">
        <h1 className="text-center p-2 text-2xl font-bold bg-sky-300 rounded-lg">
          Currency Converter
        </h1>
        <div className="grid grid-cols-3 space-x-4 p-4 w-full">
          <div>
            <h2>Amount</h2>
            <h2>{amount}</h2>
            <input
              type="number"
              placeholder="1"
              className="border-black border-3 w-36"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <h2>Convert From</h2>
            <h2>{fromCurrency}</h2>
            <select
              className="border-black border-3 w-36"
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencyList
                ?.filter((r) => r !== toCurrency)
                .map((r) => (
                  <option value={r}>{r}</option>
                ))}
            </select>
          </div>
          <div>
            <h2>Convert To</h2>
            <h2>{toCurrency}</h2>
            <select
              className="border-black border-3 w-36"
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencyList
                ?.filter((r) => r !== fromCurrency)
                .map((r) => (
                  <option value={r}>{r}</option>
                ))}
            </select>
          </div>
        </div>
        {/* <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-400 rounded-lg w-1/3 p-4 mb-5"
            
          >
            CALCULATE
          </button>
        </div> */}
        <div>
          <div>
            {amount} {fromCurrency} =
          </div>
          <div>
            {conversion} {toCurrency}
          </div>
          <div>
            1 {toCurrency} = {(1 / fromCurrencyRate) * toCurrencyRate}{" "}
            {fromCurrency}{" "}
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="font-bold text-2xl">Exchange Rates History</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 day</div>
            <div className="font-bold text-xl">
              1 JPY = {StatisticsData?.last1Days?.average} USD
            </div>
            <div className="font-bold text-xl">
              1 USD = {1 / StatisticsData?.last1Days?.average} JPY
            </div>
          </div>
          <div className="w-1/2">
            <div>7 days</div>
            <div className="font-bold text-xl">
              1 JPY = {StatisticsData?.last7Days?.average} USD
            </div>
            <div className="font-bold text-xl">
              {" "}
              {1 / StatisticsData?.last7Days?.average} JPY
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 days</div>
            <div className="font-bold text-xl">
              1 JPY = {StatisticsData?.last30Days?.average} USD
            </div>
            <div className="font-bold text-xl">
              {" "}
              {1 / StatisticsData?.last30Days?.average} JPY
            </div>
          </div>
          <div className="w-1/2">
            <div>60 days</div>
            <div className="font-bold text-xl">
              1 JPY = {StatisticsData?.last60Days?.average} USD
            </div>
            <div className="font-bold text-xl">
              {" "}
              {1 / StatisticsData?.last60Days?.average} JPY
            </div>
          </div>
        </div>
      </div>
      <div>
        <ReactECharts option={chartOption} />
      </div>
    </div>
  );
};

export default CurrencyConverter7_1;
