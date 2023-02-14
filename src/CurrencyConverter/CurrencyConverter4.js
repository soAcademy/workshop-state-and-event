import { useState, useEffect } from "react";
import midmarketConverter from "./midmarket-converter.json";

const MIDMARKET_CONVERTER =
  "https://www.xe.com/api/protected/midmarket-converter/";

const anyOriginUrl = (url) =>
  `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(url)}`;

const CurrencyConverter4 = () => {
  const [converter, setConverter] = useState(undefined);
  const [amount, setAmount] = useState(1);
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrencyRate, setFromCurrencyRate] = useState(1);
  const [toCurrencyRate, setToCurrencyRate] = useState(1);

  useEffect(() => {
    setConverter(midmarketConverter);
    const currencyArray = Object.keys(midmarketConverter.rates);

    // console.log(currencyArray);

    setCurrencyList(currencyArray);
    // console.log(converter?.rates);
    // console.log(converter?.rates[fromCurrency]);
    setFromCurrencyRate(converter?.rates[fromCurrency]);
    setToCurrencyRate(converter?.rates[toCurrency]);
    // setAmount();
  }, [converter, fromCurrency, toCurrency]);

  // const handleCalculateClick = () => {};

  return (
    <div className="">
      <div className="mx-auto my-8 w-3/4 bg-gray-100 p-6">
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
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="30"
              ></input>
            </div>
            <div className="w-1/2">
              <label htmlFor="fromCurrency">จาก</label>
              <br />
              <select
                id="fromCurrency"
                name="fromCurrency"
                value={fromCurrency}
                onChange={(e) => {
                  setFromCurrency(
                    e.target.options[e.target.options.selectedIndex].value
                  );
                }}
                className="block w-full basis-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              >
                {currencyList
                  .filter((currency) => currency !== toCurrency)
                  .map((currency) => (
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
                value={toCurrency}
                onChange={(e) => {
                  setToCurrency(
                    e.target.options[e.target.options.selectedIndex].value
                  );
                }}
                className="block w-full basis-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              >
                {currencyList
                  .filter((currency) => currency !== fromCurrency)
                  .map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          {/* <div className="my-8 text-center">
            <button
              type="submit"
              onClick={() => handleCalculateClick()}
              className="w-32 bg-yellow-400 p-4 text-xl font-bold hover:bg-yellow-500 active:bg-amber-400"
            >
              คำนวณ
            </button>
          </div> */}
        </form>
      </div>
      <div className="mx-auto my-8 w-3/4">
        <p className="text-lg font-bold">
          {amount} {fromCurrency} =
        </p>
        <p className="my-4 text-5xl font-bold">
          {(amount * toCurrencyRate) / fromCurrencyRate} {toCurrency}
        </p>
        <p className="my-4 text-lg font-bold">
          1 {fromCurrency} = {toCurrencyRate / fromCurrencyRate} {toCurrency}
        </p>
        <p className="my-4 text-lg font-bold">
          1 {toCurrency} = {fromCurrencyRate / toCurrencyRate} {fromCurrency}
        </p>
        {/* {fromCurrencyRate} */}
      </div>
      <h2 className="my-4 text-xl font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>
      <div className="mx-auto my-4 grid w-full grid-cols-2 gap-4">
        <div>
          <h3 className="my-4 text-sm font-bold">1 วัน</h3>
          <p className="my-4 text-lg font-bold">
            1 {fromCurrency} = 0.0249101 {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = 32.0190 {fromCurrency}
          </p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">7 วัน</h3>
          <p className="my-4 text-lg font-bold">
            1 {fromCurrency} = 0.0249101 {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = 32.0190 {fromCurrency}
          </p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">30 วัน</h3>
          <p className="my-4 text-lg font-bold">
            1 {fromCurrency} = 0.0249101 {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = 32.0190 {fromCurrency}
          </p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">60 วัน</h3>
          <p className="text-ls my-4 font-bold">
            1 {fromCurrency} = 0.0249101 {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = 32.0190 {fromCurrency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter4;