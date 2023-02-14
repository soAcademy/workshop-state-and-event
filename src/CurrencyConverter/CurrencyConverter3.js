import React, {useState, useEffect} from "react"
import ExchangeRatesData from "./exchange-rates.json"

const CurrencyConverter3 = () => {
  const [currencyList, setCurrencyList] = useState([])
  const [exchangeRates, setExchangeRates] = useState()
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()

  useEffect(() => {
    const _exchangeRates = ExchangeRatesData
    const _currencyList = Object.keys(_exchangeRates.rates)
    setCurrencyList(_currencyList)
    setExchangeRates(_exchangeRates)
  }, [])
  return (
    <div>
      <div className="bg-neutral-300 w-1/2 m-auto mt-12">
        <h1 className="text-center p-2">Currency Converter</h1>
        <div className="grid grid-cols-3 space-x-4 p-4 w-full">
          <div>
            <h2>Amount</h2>
            <h2>{amount}</h2>
            <input type="number" placeholder="1" className="border-black border-3 w-36"  onChange={((e) => setAmount(e.target.value))}/>
          </div>
          <div>
            <h2>Convert From</h2>
            <h2>{fromCurrency}</h2>
            <select  className="border-black border-3 w-36"  onChange={((e) => setFromCurrency(e.target.value))}>
              {currencyList?.filter((r) => r !== toCurrency)
              .map((r) => (
                <option value={r} >
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h2>Convert To</h2>
            <h2>{toCurrency}</h2>
            <select  className="border-black border-3 w-36" onChange={((e) => setToCurrency(e.target.value))}>
            {currencyList?.filter((r) => r !== fromCurrency)
              .map((r) => (
                <option value={r} >
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-yellow-400 rounded-lg w-1/3 p-4 mb-5">
            CALCULATE
          </button>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="font-bold text-2xl">Exchange Rates History</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 day</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          <div className="w-1/2">
            <div>7 days</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 month</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          <div className="w-1/2">
            <div>6 months</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div className="font-bold text-xl">1 USD = 32.0190 THB</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter3;
