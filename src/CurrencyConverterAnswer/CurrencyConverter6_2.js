import ReactECharts from "echarts-for-react";
import { useCurrencyConverter } from "./useCurrencyConverter";

const CurrencyConverter6 = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

  const {
    currencyLists,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    amountConvert,
    fromCurrencyRate,
    toCurrencyRate,
    exchangeStatistic,
    chartOption,
  } = useCurrencyConverter({ authToken });

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
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
              />
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
                    <option key={idx} value={r}>
                      {r}
                    </option>
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
                    <option key={idx} value={r}>
                      {r}
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
              {amountConvert} {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {(1 / toCurrencyRate) * fromCurrencyRate}{" "}
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
              1 {fromCurrency} = {exchangeStatistic?.last1Days?.average}{" "}
              {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {1 / exchangeStatistic?.last1Days?.average}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} = {exchangeStatistic?.last7Days?.average}{" "}
              {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={1 / exchangeStatistic?.last7Days?.average}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} = {exchangeStatistic?.last30Days?.average}{" "}
              {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {1 / exchangeStatistic?.last30Days?.average}{" "}
              {fromCurrency}{" "}
            </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 {fromCurrency} = {exchangeStatistic?.last60Days?.average}{" "}
              {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={1 / exchangeStatistic?.last60Days?.average}{" "}
              {fromCurrency}{" "}
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

export default CurrencyConverter6;
