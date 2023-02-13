import { useState, useEffect } from "react";
import midmarketConverter from "./midmarket-converter.json";

const CurrencyConverter2 = () => {
  const [amount, setAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");

  useEffect(() => {
    const currencyArray = Object.keys(midmarketConverter.rates);

    // console.log(currencyArray);

    setCurrencyList(currencyArray);
  }, []);

  const handleCalculateClick = () => {};

  return (
    <div className="">
      <div className="mx-auto my-8 w-1/2 bg-gray-100 p-6">
        <h1 className="text-center text-xl font-bold">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="my-4 flex space-x-8">
            <div className="w-1/2">
              <label htmlFor="amount">จำนวน</label>
              <br />
              <input
                type="number"
                id="amount"
                name="amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="30"
              ></input>
            </div>
            <div className="w-1/2">
              <label htmlFor="fromCurrency">จาก</label>
              <br />
              <select
                id="fromCurrency"
                name="fromCurrency"
                className="block w-full basis-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              >
                {currencyList.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label htmlFor="toCurrency">ไป</label>
              <br />
              <select
                id="toCurrency"
                name="toCurrency"
                className="block w-full basis-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              >
                {currencyList.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="my-8 text-center">
            <button
              type="submit"
              onClick={() => handleCalculateClick()}
              className="w-32 bg-yellow-400 p-4 text-xl font-bold hover:bg-yellow-500 active:bg-amber-400"
            >
              คำนวณ
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto my-8 w-1/2">
        <p className="text-lg font-bold">1 THB =</p>
        <p className="my-4 text-5xl font-bold">0.0249101 USD</p>
        <p className="my-4 text-lg font-bold">1 USD = 32.0190 THB</p>
      </div>
      <h2 className="my-4 text-xl font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>
      <div className="mx-auto my-4 grid w-full grid-cols-2 gap-4">
        <div>
          <h3 className="my-4 text-sm font-bold">1 วัน</h3>
          <p className="my-4 text-lg font-bold">1 THB = 0.0249101 USD</p>
          <p className="my-4 text-sm font-bold">1 USD = 32.0190 THB</p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">7 วัน</h3>
          <p className="my-4 text-lg font-bold">1 THB = 0.0249101 USD</p>
          <p className="my-4 text-sm font-bold">1 USD = 32.0190 THB</p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">30 วัน</h3>
          <p className="my-4 text-lg font-bold">1 THB = 0.0249101 USD</p>
          <p className="my-4 text-sm font-bold">1 USD = 32.0190 THB</p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">60 วัน</h3>
          <p className="my-4 text-ls font-bold">1 THB = 0.0249101 USD</p>
          <p className="my-4 text-sm font-bold">1 USD = 32.0190 THB</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter2;
