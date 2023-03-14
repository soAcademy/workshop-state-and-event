import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import {
  useChart,
  useConvertExchange,
  useFetchExchange,
  useStatistic,
} from "./hooks";
import { BsArrowLeftRight } from "react-icons/bs";

const CurrencyConverter6 = () => {
  const [toggle, setToggle] = useState(true);

  const toggleConverter = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setToggle(false);
  };
  const apiToken =
    "Basic bG9kZXN0YXI6cGdFNlVEYm9GN2JWaGZsTmhJaldHVGNyQnNBWEdQVUY=";

  const { exchangeRates, currencyLists } = useFetchExchange({ apiToken });

  const {
    amount,
    setAmount,
    fromCurrency,
    toCurrency,
    setFromCurrency,
    setToCurrency,
    amountConverted,
    fromCurrencyRated,
    toCurrencyRated,
  } = useConvertExchange({ apiToken, exchangeRates });

  const { exchangeStatistic } = useStatistic({
    fromCurrency,
    toCurrency,
  });

  const { chart } = useChart({ apiToken, fromCurrency, toCurrency });

  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="font-semibold text-xl">คำนวนอัตราแลกเปลี่ยน</p>
      </div>
      <div className="bg-slate-100 m-auto w-2/3 p-4 mt-5 rounded">
        <div className="flex text-center space-x-2">
          <div className="w-1/3">
            <p className="text-left">จำนวน</p>
            {/* {amount} */}
            <input
              className="w-full mt-3 rounded pl-1"
              placeholder="1"
              onChange={(e) => setAmount(Number(e.target.value))}
              name="amount"
              type="text"
              value={amount}
            />
          </div>
          <div className="w-1/3">
            <p className="text-left">จาก</p>
            {/* {fromCurrency} */}
            <select
              className="w-full mt-3 rounded cursor-pointer"
              onChange={(e) => setFromCurrency(e.target.value)}
              value={fromCurrency}
            >
              {currencyLists
                ?.filter((i) => i !== toCurrency) // !== ไม่เท่ากับ
                ?.map((r, idx) => (
                  <option value={r} key={idx}>
                    {r}
                  </option>
                ))}
            </select>
          </div>
          <div className="pt-10 px-1 cursor-pointer hover:text-blue-600">
            {toggle ? (
              <BsArrowLeftRight onClick={() => toggleConverter()} />
            ) : (
              <BsArrowLeftRight onClick={() => toggleConverter()} />
            )}
          </div>
          <div className="w-1/3">
            <p className="text-left">ไป</p>
            {/* {toCurrency} */}
            <select
              className="w-full mt-3 rounded cursor-pointer"
              onChange={(e) => setToCurrency(e.target.value)}
              value={toCurrency}
            >
              {currencyLists
                ?.filter((i) => i !== fromCurrency)
                ?.map((r, idx) => (
                  <option value={r} key={idx}>
                    {r}
                  </option>
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
          <p>
            {amount} {fromCurrency} =
          </p>
        </div>
        <div className="mt-3">
          <p className="text-xl font-semibold">
            {amountConverted?.toFixed(3)} {toCurrency}
          </p>
        </div>
        <div className="mt-3">
          <p>
            1 {toCurrency} ={" "}
            {((1 / toCurrencyRated) * fromCurrencyRated).toFixed(3)}{" "}
            {fromCurrency}
          </p>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-10">
        <p>อัตราแลกเปลี่ยนย้อนหลัง </p>
      </div>
      <div className="m-auto w-2/3 p-4 mt-5 rounded border-2">
        <div className="flex">
          <div className="w-6/12">
            <p>1 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last1Days?.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last1Days?.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
            <p className="mt-7">30 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last30Days?.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last30Days?.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
          </div>
          <div className="w-6/12">
            <p>7 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last7Days?.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last7Days?.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
            <p className="mt-7">60 วัน</p>
            <p className="text-xl font-semibold mt-3">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last60Days?.average.toFixed(3)} {toCurrency}
            </p>
            <p className="mt-3">
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last60Days?.average).toFixed(3)}{" "}
              {fromCurrency}
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-5 rounded border-2">
        <ReactECharts option={chart} />
      </div>
    </div>
  );
};

export default CurrencyConverter6;