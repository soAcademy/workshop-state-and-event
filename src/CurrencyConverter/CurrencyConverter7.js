import ReactECharts from "echarts-for-react";
import {
  useChartOption,
  useConvertExchangeRate,
  useExchangeStatistic,
  useFetchExchangeRate,
} from "./hooks";

const CurrencyConverter6_1 = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";
  const { exchangeRates, currencyLists } = useFetchExchangeRate({authToken});

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
  } = useConvertExchangeRate({ exchangeRates });

  const { exchangeStatistic } = useExchangeStatistic({
    authToken,
    fromCurrency,
    toCurrency,
  });
  const { chartOption } = useChartOption({
    authToken,
    fromCurrency,
    toCurrency,
  });

  return (
    <div className="font-kanit">
      <div className="w-1/2 mx-auto rounded-lg shadow-lg bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              {amount}
              <input
                type="text"
                name="amount"
                className="p-2 w-full mt-2"
                onChange={(e) => setAmount((e.target.value))}
                value={amount}
              ></input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              {fromCurrency}
              <select
                className="p-2 w-full mt-2"
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
                className="p-2 w-full mt-2"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {currencyLists
                  ?.filter((r) => r !== fromCurrency)
                  .map((r, idx) => (
                    <option key={idx} value={r}>
                      {r}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          {/* <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 active:bg-sky-400 p-4 w-32 font-bold text-xl"
            >
              คำนวน
            </button>
          </div> */}
          <div className="mt-8">
            <div>
              {amount} {fromCurrency} =
            </div>
            <div className="font-bold text-xl">
              {amountConvert.toFixed(2)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {((1 / toCurrencyRate) * fromCurrencyRate).toFixed(2)}{" "}
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
              {fromCurrency}
            </div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last7Days.average.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last7Days.average).toFixed(4)}{" "}
              {fromCurrency}
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
              {fromCurrency}
            </div>
          </div>

          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} ={" "}
              {exchangeStatistic?.last60Days.average.toFixed(4)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {(1 / exchangeStatistic?.last60Days.average).toFixed(4)}{" "}
              {fromCurrency}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter6_1;
