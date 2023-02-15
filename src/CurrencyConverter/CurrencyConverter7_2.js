import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useGetRates, useCal, useGetStat, useGetGraph } from "./useConverter";

const CurrencyConverter7_2 = () => {
  const { exchangeRates, currencyLists } = useGetRates();
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    fromCurrencyRate,
    toCurrencyRate,
    convertAmount,
  } = useCal({ exchangeRates });
  const { exchangeStatistic } = useGetStat({
    fromCurrency,
    toCurrency,
    amount,
  });
  const { option } = useGetGraph({
    fromCurrency,
    toCurrency,
    amount,
  });

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

export default CurrencyConverter7_2;
