import ReactECharts from "echarts-for-react";
import { useFetchExchangeRate } from "./useFetchExchangeRate";
import { useExchangeCalculation } from "./useExchangeCalculation";
import { useCurrencyStatistic } from "./useCurrencyStatistic";
import { useChartOptions } from "./useChartOptions";

// use hook
const CurrencyConverterHook = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";
  //use hook 1 Fetch
  const { exchangeRates, currencyLists} = useFetchExchangeRate({
    authToken,
  });
  //use hook 2 Calculate
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    amountConvert,
    setAmountConvert,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
  } = useExchangeCalculation({ exchangeRates });
  // use hook 3 Static
  const { exchangeStatistic,  } = useCurrencyStatistic(
    { authToken, fromCurrency, toCurrency }
  );
  // use hook 4 Chart
  const { chartOption,  } = useChartOptions({
    authToken,
    fromCurrency,
    toCurrency,
  });

  return (
    <>
      <div className="p-5 font-kanit bg-gradient-to-r from-slate-500 to-slate-300 h-screen">
        <div className="flex justify-center ">
          <div className=" text-2xl font-bold p-2 ">คำนวนอัตราแลกเปลี่ยน</div>
          <div className="">
            <img className="h-[50px]" src="doreamon555.png" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-300 w-1/2  mx-auto rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-3 space-x-2 p-2">
              <div className="p-2">
                <div className="font-bold ">จำนวน</div>
                <div>
                  <input
                    className="w-full p-2 rounded-lg"
                    placeholder="1"
                    text="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="font-bold ">จาก</div>
                <div>
                  <select
                    className="p-2 w-full rounded-lg"
                    value={fromCurrency}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setFromCurrency(e.target.value);
                    }}
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
              </div>
              <div className="p-2 ">
                <div className="font-bold ">ไป</div>
                <div>
                  <select
                    className="p-2  w-full rounded-lg"
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
            </div>
            <div className="text-center p-2">
              <button
                className="bg-gradient-to-r from-yellow-500 to-yellow-300 p-2 w-1/3 text-xl font-bold rounded-lg  shadow-lg "
                type="submit"
              >
                คำนวน
              </button>
            </div>
          </form>
          <div className="p-2">
            <div>
              {amount} {fromCurrency} =
            </div>
            <div className="font-bold text">
              {" "}
              {amountConvert} {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {(1 / fromCurrencyRate) * toCurrencyRate}{" "}
              {fromCurrency}
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-1/2 mx-auto mt-6">
          <div>
            <h2 className="font-bold text-left text-xl">
              อัตราแลกเปลี่ยนย้อนหลัง
            </h2>
          </div>
          <div className="grid grid-cols-2 w-full  mx-auto">
            <div className="w-full p-2">
              <div>1 วัน</div>
              <div className="font-bold text-xl">
                1 THB = {exchangeStatistic?.last1Days?.average?.toFixed(5)} USD
              </div>
              <div>1 USD = 32.0190 THB</div>
            </div>
            <div className="w-full p-2">
              <div>7 วัน</div>
              <div className="font-bold text-xl">
                1 THB = {exchangeStatistic?.last7Days?.average?.toFixed(5)} USD
              </div>
              <div>1 USD = {1 / exchangeStatistic?.last7Days?.average} THB</div>
            </div>
            <div className="w-full p-2">
              <div>30 วัน</div>
              <div className="font-bold text-xl">
                1 THB = {exchangeStatistic?.last30Days?.average?.toFixed(5)} USD
              </div>
              <div>1 USD = {exchangeStatistic?.last30Days?.average} THB</div>
            </div>
            <div className="w-full p-2">
              <div>60 วัน</div>
              <div className="font-bold text-xl">
                1 THB = {exchangeStatistic?.last60Days?.average?.toFixed(5)} USD
              </div>
              <div>1 USD = {exchangeStatistic?.last60Days?.average} THB</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </>
  );
};
export default CurrencyConverterHook;
