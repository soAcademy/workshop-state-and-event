import React, { useState, useEffect } from "react";
import ExchangeRatesData from "./exchange-rates.json";

const CurrencyConverter2 = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState();

  useEffect(() => {
    const tmpExchangeRates = ExchangeRatesData;
    const tmpCurrencyLists = Object.keys(tmpExchangeRates.rates); 
    // Object.keys เพื่อต้องการเอาชื่อของ สกุลเงินมาแสดง
    console.log("CurrencyLists", tmpCurrencyLists);
    setCurrencyLists(tmpCurrencyLists);
    setExchangeRates(tmpExchangeRates);
  }, []);

  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="font-semibold text-xl">คำนวนอัตราแลกเปลี่ยน</p>
      </div>
      <div className="bg-slate-100 m-auto w-2/3 p-4 mt-5 rounded">
        <div className="flex text-center space-x-2">
          <div className="w-1/3">
            <p className="text-left">จำนวน</p>
            <input className="w-full mt-3 rounded pl-1" placeholder="1" />
          </div>
          <div className="w-1/3">
            <p className="text-left">จาก</p>
            <select className="w-full mt-3 rounded cursor-pointer">
              {currencyLists?.map((r) => (
                <option value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="w-1/3">
            <p className="text-left">ไป</p>
            <select className="w-full mt-3 rounded cursor-pointer">
              {currencyLists?.map((r) => (
                <option value={r}>{r}</option>
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
          <p>1 THB =</p>
        </div>
        <div className="mt-3">
          <p className="text-xl font-semibold">0.0249101 USD</p>
        </div>
        <div className="mt-3">
          <p>1 USD = 32.0190 THB </p>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-10">
        <p>อัตราแลกเปลี่ยนย้อนหลัง </p>
      </div>
      <div className="m-auto w-2/3 p-4 mt-5 rounded border-2">
        <div className="flex">
          <div className="w-6/12">
            <p>1 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
            <p className="mt-7">30 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
          </div>
          <div className="w-6/12">
            <p>7 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
            <p className="mt-7">60 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-5 rounded border-2">Chart</div>
    </div>
  );
};

export default CurrencyConverter2;
