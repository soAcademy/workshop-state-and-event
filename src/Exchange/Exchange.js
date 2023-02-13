import React, { useState, useEffect } from "react";
import ExchangeData from "./ExchangeData.json";
import ExchangeStatistic from "./ExchangeStatistic.json";
import { BsArrowLeftRight } from "react-icons/bs";
import ExchangeChart from "./ExchangeChart.json";

const Exchange = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountConvert, setAmountConvert] = useState(0);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [exchangeStatistic, setExchangeRatesStatistic] = useState();
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    const _exchangeRates = ExchangeData;
    const _currencyLists = Object.keys(_exchangeRates.rates).sort(
      (a, b) => a - b
    );
    console.log("temp currencyList : ", _currencyLists);
    setExchangeRates(_exchangeRates);
    setCurrencyLists(_currencyLists);
  }, []);

  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    console.log(fromCurrencyRate, toCurrencyRate);
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
    const _exchangeStatistic = ExchangeStatistic;
     const _exchangeCart = ExchangeChart;
    const _chartOption = {
      xAxis: {
        type: "category",
        data: [..._exchangeCart?.batchList[0]?.rates?.slice(1)?.keys()].map(
          (r) => r - _exchangeCart?.batchList[0]?.rates?.length - 1
        ),
        name: "วันที่",
      },
      yAxis: {
        type: "value",
        name: "อัตราแรกเปลี่ยน",
        max: "dataMax",
        min: "dataMin",
      },
      series: [
        {
          data: _exchangeCart?.batchList[0]?.rates?.slice(1).reverse(),
          type: "line",
          smooth: true,
          lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };

    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
    setExchangeRatesStatistic(_exchangeStatistic);
    setChartOption(_chartOption);
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2"
                placeholder="1"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
              ></input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              <select
                className="p-2 w-full mt-2"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(Number(e.target.value))}
              >
                {currencyLists
                  ?.filter((currency) => currency !== toCurrency)
                  ?.map((currency) => (
                    <option value={currency} key={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
            </div>
            <button className="text-lg mt-8">
              <BsArrowLeftRight />
            </button>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              <select
                className="p-2 w-full mt-2"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currencyLists
                  ?.filter((currency) => currency !== fromCurrency)
                  ?.map((currency) => (
                    <option value={currency} key={currency}>
                      {currency}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="mt-8">
            <div>
              {amount} {fromCurrency} =
            </div>
            <div className="font-bold text-xl">
              {amountConvert.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {((1 / fromCurrencyRate) * toCurrencyRate).toFixed(4)}{" "}
              {fromCurrency}
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto  mt-8">
        <h2 className="text-lg font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last1Days.average.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last1Days.average).toFixed(4)}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last7Days.average.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} =
              {(1 / exchangeStatistic?.last7Days.average).toFixed(4)}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last30Days.average.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last30Days.average).toFixed(4)}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last60Days.average.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} =
              {(1 / exchangeStatistic?.last60Days.average).toFixed(4)}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
