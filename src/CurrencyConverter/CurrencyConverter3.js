import { useState, useEffect } from "react";
import ExchangeRateData from "./Exchange-rates.json";
import image from "../CurrencyConverter/image.jpg";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);

  useEffect(() => {
    const _exchangeRates = ExchangeRateData;
    const _currencyLists = Object.keys(_exchangeRates.rates);
    console.log(_currencyLists);
    setExchangeRates(_exchangeRates);
    setCurrencyLists(_currencyLists);
  }, []);

  return (
    <>
      <div
        className="w-1/2 mx-auto p-6 mt-8 rounded-l "
        style={{ background: `url(${image})` }}
      >
        <h1 className="text-center text-xl text-black font-bold bg-white ">
          คำนวนอัตราแลกเปลี่ยน
        </h1>
        <div className="flex mt-4 space-x-4">
          <div className="w-1/3">
            <label className="text-">จำนวน</label>
            <br />
            {amount}
            <input
              name="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 w-full mt-2 bg-white"
              placeholder="1"
            />
          </div>
          <div className="w-1/3">
            <label>จาก</label>
            <br />
            {fromCurrency}
            <select
              className="p-2 pb-3 w-full mt-2"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {currencyLists
                ?.filter((r) => r !== toCurrency)
                ?.map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-1/3">
            <label>ไป</label>
            <br />
            {toCurrency}
            <select
              className="p-2 pb-3 w-full mt-2"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {currencyLists
                ?.filter((r) => r !== fromCurrency)
                ?.map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-yellow-400 active:bg-amber-500 hover:bg-blue-400 p-4 w-24 rounded-lg"
          >
            คำนวน
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>
      </div>
      <div className="w-1/2 mx-auto grid grid-cols-2">
        <div className="">
          <p>1 วัน</p>
          <p className="font-bold">1 THB = 0.0249101 USD</p>
          <p>1 USD = 32.0190 THB</p>
        </div>
        <div className="">
          <p>7 วัน</p>
          <p className="font-bold">1 THB = 0.0249101 USD</p>
          <p>1 USD = 32.0190 THB</p>
        </div>
        <div className="">
          <p>30 วัน</p>
          <p className="font-bold">1 THB = 0.0249101 USD</p>
          <p>1 USD = 32.0190 THB</p>
        </div>
        <div className="">
          <p>60 วัน</p>
          <p className="font-bold">1 THB = 0.0249101 USD</p>
          <p>1 USD = 32.0190 THB</p>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter;
