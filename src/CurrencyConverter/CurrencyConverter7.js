import React from "react";
import ReactECharts from "echarts-for-react";
import {
  useConvertExchangeRate,
  useChartOption,
  useExchangeStatistic,
  useFetchExchangeRate,
} from "../hook_currency/index";

const CurrencyConverter7 = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

  const { exchangeRates, currencyLists } = useFetchExchangeRate(authToken);
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    amountConvert,
    fromCurrencyRate,
    toCurrencyRate,
  } = useConvertExchangeRate(exchangeRates);

  const exchangeStatistic = useExchangeStatistic(
    authToken,
    fromCurrency,
    toCurrency
  );

  const chartOption = useChartOption(authToken, fromCurrency, toCurrency);

  // listening exchangerate to make it's not show NaN
  // เมื่อไหร่ก็ตามที่ amount, fromCurrency , toCurrency, exchangrate ตัว function ใน useEffect จะทำงานอีกรอบ

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-green-500 mt-8 p-6 rounded-[20px] shadow-lg border-2 border-sky-500">
        <h1 className="font-bold text-xl text-center underline">
          คำนวนอัตราแลกเปลี่ยน
        </h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              {amount}
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2 rounded-[10px]"
                placeholder="1"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
              ></input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              {fromCurrency}
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="p-2 pb-3 w-full mt-2 rounded-[10px]"
              >
                {currencyLists
                  ?.filter((r) => r !== toCurrency)
                  ?.map((r, idx) => (
                    <option key={`2${idx}${r}`} value={r}>
                      {r}
                    </option>
                  ))}

                {/* value ใน option ทำให้เราได้ค่าใน select */}
              </select>
            </div>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              {toCurrency}
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="p-2 pb-3 w-full mt-2 rounded-[10px]"
              >
                {currencyLists
                  ?.filter((r) => r !== fromCurrency)
                  ?.map((r, idx) => (
                    <option key={`3${idx}${r}`} value={r}>
                      {r}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* ---------- exchange rate ------------- */}
          <div className="mt-8">
            <div>
              {amount} {fromCurrency} =
            </div>
            <div className="font-bold text-xl text-white">
              {amountConvert} {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {(1 / fromCurrencyRate) * toCurrencyRate}{" "}
              {fromCurrency}
            </div>
          </div>
          {/* -------------------------------------- */}

          <div className="text-center mt-8">
            {/* <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:bg-amber-400 p-4 w-32 font-bold text-xl"
            >
              คำนวน
            </button> */}
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto  mt-8">
        <h2 className="text-lg font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 วัน</div>
            <div className="font-bold text-xl">
              {" "}
              1 THB ={exchangeStatistic?.last1Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last1Days?.average}</div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
              {" "}
              1 THB ={exchangeStatistic?.last7Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last7Days?.average} THB </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">
              {" "}
              1 THB ={exchangeStatistic?.last30Days?.average}USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last30Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last60Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last60Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>90 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last90Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last90Days?.average} THB </div>
          </div>
        </div>
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter7;
