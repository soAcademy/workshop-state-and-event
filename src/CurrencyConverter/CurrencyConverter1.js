import { useState, useEffect } from "react";
import ExchangeData from "./Exchange-rate.json"

const CurrencyConverter = () => {
  const [quantity, setQuantity] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  

  return (
    <>
      <div className="w-1/2 mx-auto bg-green-200 p-6 mt-8 rounded-lg">
        <h1 className="text-center text-xl text-black font-bold">
          คำนวนอัตราแลกเปลี่ยน
        </h1>
        <div className="flex mt-4 space-x-4">
          <div className="">
            <label>จำนวน</label>
            <br />
            <input
              name="Quantity"
              type="Number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="p-2 w-full mt-2 bg-white"
              placeholder="1"
            />
          </div>
          <div className="">
            <label>จาก</label>
            <br />
            <input
              name="fromCurrency"
              type="text"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="p-2 w-full mt-2 bg-white"
              placeholder="THB"
            />
          </div>
          <div className="">
            <label>ไป</label>
            <br />
            <input
              name="toCurrency"
              type="text"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="p-2 w-full mt-2 bg-white"
              placeholder="USD"
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-yellow-400 active:bg-amber-500 hover:bg-blue-400 p-4 w-24 rounded-lg">
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
