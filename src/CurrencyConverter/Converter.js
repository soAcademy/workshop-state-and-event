import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
import ExchangeRatesData from "./exchange-rates.json";

const Converter = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    const tempExchangeRates = ExchangeRatesData;
    console.log("tempExchangeRates", tempExchangeRates);

    const tempCurrencyList = Object.keys(tempExchangeRates.rates);
    console.log("tempCurrencyList", tempCurrencyList);

    setExchangeRates(tempExchangeRates);
    setCurrencyList(tempCurrencyList);
  }, []);

  return (
    <>
      <div className="text-center m-4">
        <h1 className="font-bold text-xl"> คำนวณอัตราแลกเปลี่ยน</h1>
        <div className="bg-gray-200 p-4 rounded mt-6 mx-auto w-3/4">
          <div className="flex justify-evenly">
            <div>
              <p className="text-left px-2">จำนวน</p>
              <input className="rounded mt-2" type="number"></input>
            </div>
            <div>
              <p className="text-left">จาก</p>
              <select className="rounded mt-2 px-2">
                {currencyList.map((r) => (
                  <option>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <p className="text-left">ไป</p>
              <select className="rounded mt-2 px-2">
                {currencyList.map((r) => (
                  <option>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="bg-blue-200 text-xl font-bold p-2 rounded mt-4">
            คำนวณ
          </button>
          <div className="mt-4 text-left">1THB = 0.00249 USD</div>
          <div className="text-left">1USD = 32.19 THB</div>
        </div>
        <h1 className="mt-8">อัตราแลกเปลี่ยนย้อนหลัง</h1>
        <div className="grid grid-cols-2 mt-6">
          <div>
            <p>1 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
          <div>
            <p>7 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
          <div>
            <p>30 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
          <div>
            <p>60 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
        </div>
        <div className="mt-6">{/* <ReactECharts option={option} /> */}</div>
      </div>
    </>
  );
};

export default Converter;
