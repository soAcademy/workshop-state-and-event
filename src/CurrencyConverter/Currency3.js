import { useState, useEffect } from "react";
import ExchangeRatesData from "./exchange-rates.json";


const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD")
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const _exchangeRates = ExchangeRatesData;
    const _currencyLists = Object.keys(_exchangeRates.rates);
    console.log(_currencyLists);
    setExchangeRates(_exchangeRates);
    setCurrencyLists(_currencyLists);

  },[]);


  return (
    <div className="">
      <div className="w-1/3 mx-auto bg-sky-100 mt-8 p-6 rounded-lg">
        <h1 className="font-bold text-xl text-center" >คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              
              <br />
              <input
              type="number"
              name="amount"
              className="p-2 w-full mt-2"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              >
              </input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              <select 
              className="p-2 pb-3 w-full mt-2"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              >
                {currencyLists
                ?.filter((r) => r !== toCurrency)
                ?.map((r, idx) => (
                  <option  key={idx} value={r}>{r}</option>
                ))}
              </select>
              
            </div>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              
              <select 
              className="p-2 pb-3 w-full mt-2"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              >
              
                {currencyLists
                ?.filter((r) => r !== fromCurrency)
                ?.map((r, idx) => (
                  <option  key={idx} value={r}>{r}</option>
                ))}
              </select>

            </div>
          </div>
          <div className="text-center mt-8" >
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500
              active:bg-gray-400 p-4 w-32 font-bold text-xl"
            >
              คำนวน
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/3 mx-auto mt-8">
        <h2 className="text-lg font-bold"
        >อัตราแลกเปลี่ยนย้อนหลัง
        </h2>
      <div className="flex mt-4">
        <div className="w-1/3">
          <div>1 วัน</div>
          <div className="font-bold text-xl">1 THB = 0.0249101 USD </div>
          <div>1 USD = 32.0190 THB </div>
        </div>
        <div className="w-1/3">
          <div>7 วัน</div>
          <div className="font-bold text-xl">1 THB = 0.0249101 USD </div>
          <div>1 USD = 32.0190 THB </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/3">
          <div>30 วัน</div>
          <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
          <div>1 USD = 32.0190 THB </div>
        </div>
        <div className="w-1/3">
            <div>60 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;