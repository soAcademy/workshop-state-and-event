import { useState, useEffect } from "react";
import image from "../CurrencyConverter/image.jpg";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import { useCurrencyList, useAmountConvert, useExchangeStatistic, useChartOption } from "./hook";


// const useCurrencyList = ({ authToken }) => {
//   const [exchangeRates, setExchangeRates] = useState();
//   const [currencyLists, setCurrencyLists] = useState([]);
//   useEffect(() => {
//     axios({
//       url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
//         "https://www.xe.com/api/protected/midmarket-converter/"
//       )}`,
//       headers: {
//         Authorization: authToken,
//       },
//     }).then((res) => {
//       const _exchangeRates = res.data;
//       const _currencyLists = Object.keys(_exchangeRates.rates);
//       console.log(_currencyLists);
//       setExchangeRates(_exchangeRates);
//       setCurrencyLists(_currencyLists);
//     });
//   }, []);

//   return {
//     exchangeRates,
//     setExchangeRates,
//     currencyLists,
//     setCurrencyLists,
//   };
// };

// const useAmountConvert = ({ exchangeRates }) => {
//   const [amountCovert, setAmountConvert] = useState(0);
//   const [fromCurrencyRate, setFromCurrencyRate] = useState();
//   const [toCurrencyRate, setToCurrencyRate] = useState();
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState("THB");
//   const [toCurrency, setToCurrency] = useState("USD");

//   useEffect(() => {
//     const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
//     const _toCurrencyRate = exchangeRates?.rates[toCurrency];
//     const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
//     setAmountConvert(_amountConvert);
//     setFromCurrencyRate(_fromCurrencyRate);
//     setToCurrencyRate(_toCurrencyRate);
//   }, [amount, fromCurrency, toCurrency]);

//   return {
//     amountCovert,
//     setAmountConvert,
//     fromCurrencyRate,
//     setFromCurrencyRate,
//     toCurrencyRate,
//     setToCurrencyRate,
//     amount,
//     setAmount,
//     fromCurrency,
//     setFromCurrency,
//     toCurrency,
//     setToCurrency,
//   };
// };

// const useExchangeStatistic = ({ authToken, fromCurrency, toCurrency }) => {
//   const [exchangeStatistic, setExchangeStatistic] = useState();
//   useEffect(() => {
//     axios({
//       url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
//         `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
//       )}`,
//       headers: {
//         Authorization: authToken,
//       },
//     }).then((res) => {
//       setExchangeStatistic(res.data);
//     });
//   }, [fromCurrency, toCurrency]);
//   return {
//     exchangeStatistic,
//     setExchangeStatistic,
//   };
// };

// const useChartOption = ({ authToken, fromCurrency, toCurrency }) => {
//   const [chartOption, setChartOption] = useState({});
//   axios({
//     url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
//       `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
//     )}`,
//     headers: {
//       Authorization: authToken,
//     },
//   }).then(
//     (res) => {
//       const _exchangeChart = res.data;
//       const _chartOption = {
//         xAxis: {
//           type: "category",
//           data: [..._exchangeChart?.batchList[0]?.rates?.slice(1)?.keys()].map(
//             (r) => r - _exchangeChart?.batchList[0]?.rates?.length - 1
//           ),
//           name: "วันที่",
//         },
//         yAxis: {
//           type: "value",
//           name: "อัตราแรกเปลี่ยน",
//           max: "dataMax",
//           min: "dataMin",
//         },
//         series: [
//           {
//             data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
//             type: "line",
//             smooth: true,
//             lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
//           },
//         ],
//         tooltip: {
//           trigger: "axis",
//         },
//       };

//       setChartOption(_chartOption);
//     },
//     [fromCurrency, toCurrency]
//   );
//   return {
//     chartOption,
//     setChartOption,
//   };
// };

const CurrencyConverter7 = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";
  const { exchangeRates, currencyLists } = useCurrencyList({ authToken });
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amountCovert,
    fromCurrencyRate,
    toCurrencyRate,
  } = useAmountConvert({ exchangeRates });
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
    <>
      <div
        className="w-1/2 mx-auto p-6 mt-8 rounded-l "
        style={{ background: `url(${image})` }}
      >
        <div className="text-center">
          <h1 className="text-center text-xl text-black font-bold bg-white inline-block p-2 rounded-lg ">
            คำนวนอัตราแลกเปลี่ยน
          </h1>
        </div>
        <form>
          <div className="flex mt-4 space-x-4 text-black-500 font-bold bg-slate-400">
            <div className="w-1/3">
              <label className="mb-2">จำนวน</label>
              <br />

              <input
                name="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="p-2 w-full mt-2 bg-white"
                placeholder="1"
              />
            </div>
            <div className="w-1/3">
              <label className="mb-2">จาก</label>
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
              <label className="mb-2">ไป</label>
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
          <div className="mt-8 bg-yellow-400 inline-block rounded-xl px-5">
            {/* <button
            type="submit"
            className="bg-yellow-400 active:bg-amber-500 hover:bg-blue-400 p-4 w-24 rounded-lg"
          >
            คำนวน
          </button> */}
            <div className="">
              {amount} {fromCurrency}
            </div>
            <div className="font-bond text-xl">
              {amountCovert.toFixed(2)} {toCurrency}
            </div>
            <div>
              1 {toCurrency} ={" "}
              {((1 / fromCurrencyRate) * toCurrencyRate).toFixed(2)}{" "}
              {fromCurrency}
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>

        <div className=" grid grid-cols-2">
          <div className="w-1/2">
            <p>1 วัน</p>
            <p className="font-bold">
              1 JPY = {exchangeStatistic?.last1Days?.average} USD
            </p>
            <p>1 USD = {1 / exchangeStatistic?.last1Days?.average} JPY</p>
          </div>
          <div className="">
            <p>7 วัน</p>
            <p className="font-bold">
              1 JPY = {exchangeStatistic?.last7Days?.average} USD
            </p>
            <p>1 USD = {1 / exchangeStatistic?.last7Days?.average} JPY</p>
          </div>
          <div className="">
            <p>30 วัน</p>
            <p className="font-bold">
              1 JPY = {exchangeStatistic?.last30Days?.average} USD
            </p>
            <p>1 USD = {1 / exchangeStatistic?.last30Days?.average} JPY</p>
          </div>
          <div className="">
            <p>60 วัน</p>
            <p className="font-bold">
              1 JPY = {exchangeStatistic?.last60Days?.average} USD
            </p>
            <p>1 USD = {exchangeStatistic?.last60Days?.average} JPY</p>
          </div>
        </div>
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </>
  );
};

export default CurrencyConverter7;
