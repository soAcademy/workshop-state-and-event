// import { useState, useEffect } from "react";
// import axios from "axios";
import EChartsReact from "echarts-for-react";
// import {
//   MIDMARKET_CONVERTER,
//   STATISTICS,
//   CHARTING_RATES,
//   AUTH_HEADER,
//   anyOriginUrl,
// } from "./const";
import { useMidmarketConverter, useStatistic } from "./hooks";
// import midmarketConverter from "./midmarket-converter.json";
// import statistics from "./statistics-THB-USD.json";
// import chartingRates from "./charting-rates-THB-USD.json";

// const MIDMARKET_CONVERTER =
//   "https://www.xe.com/api/protected/midmarket-converter/";

// const STATISTICS = "https://www.xe.com/api/protected/statistics/";

// const CHARTING_RATES = "https://www.xe.com/api/protected/charting-rates/";

// const AUTH_HEADER =
//   "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

// const anyOriginUrl = (url) =>
//   `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(url)}`;

// const useMidmarketConverter = () => {
//   const [converter, setConverter] = useState();
//   const [amount, setAmount] = useState(1);
//   const [currencyList, setCurrencyList] = useState([]);
//   const [fromCurrency, setFromCurrency] = useState("THB");
//   const [toCurrency, setToCurrency] = useState("USD");
//   const [fromCurrencyRate, setFromCurrencyRate] = useState(1);
//   const [toCurrencyRate, setToCurrencyRate] = useState(1);
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: anyOriginUrl(MIDMARKET_CONVERTER),
//       headers: { authorization: AUTH_HEADER },
//     }).then((response) => {
//       setConverter(response.data);
//       setCurrencyList(Object.keys(response.data.rates));
//       setFromCurrencyRate(response.data.rates[fromCurrency]);
//       setToCurrencyRate(response.data.rates[toCurrency]);
//     });
//   }, [fromCurrency, toCurrency]);
//   return {
//     converter,
//     setConverter,
//     amount,
//     setAmount,
//     currencyList,
//     setCurrencyList,
//     fromCurrency,
//     setFromCurrency,
//     toCurrency,
//     setToCurrency,
//     fromCurrencyRate,
//     setFromCurrencyRate,
//     toCurrencyRate,
//     setToCurrencyRate,
//   };
// };

// const useStatistic = ({ fromCurrency, toCurrency }) => {
//   const [statData, setStatData] = useState();
//   const [chartData, setChartData] = useState();
//   const [optionForExchangeRates, setOptionForExchangeRates] = useState({});
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: anyOriginUrl(`${STATISTICS}?from=${fromCurrency}&to=${toCurrency}`),
//       headers: { authorization: AUTH_HEADER },
//     }).then((response) => {
//       // console.log(response.data);
//       setStatData(response.data);
//     });
//     // setStatData(statistics);
//     axios({
//       method: "GET",
//       url: anyOriginUrl(
//         `${CHARTING_RATES}?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
//       ),
//       headers: { authorization: AUTH_HEADER },
//     }).then((response) => {
//       console.log(response.data);
//       setChartData(response.data);
//       const _optionForExchangeRates = {
//         xAxis: {
//           name: "Date",
//           type: "category",
//           data: [
//             ...new Array(response.data.batchList[0].rates.length - 1).keys(),
//           ],
//         },
//         yAxis: { name: `${fromCurrency} to ${toCurrency}`, type: "value" },
//         series: [
//           {
//             name: `${fromCurrency} to ${toCurrency}`,
//             data: response.data.batchList[0].rates.slice(1).reverse(),
//             type: "line",
//             smooth: true,
//           },
//         ],
//         tooltip: { trigger: "axis" },
//       };
//       setOptionForExchangeRates(_optionForExchangeRates);
//     });
//   }, [fromCurrency, toCurrency]);
//   return {
//     statData,
//     setStatData,
//     chartData,
//     setChartData,
//     optionForExchangeRates,
//     setOptionForExchangeRates,
//   };
// };

// const useCurrencyConverter = () => {
//   const [converter, setConverter] = useState();
//   const [statData, setStatData] = useState();
//   const [chartData, setChartData] = useState();
//   const [amount, setAmount] = useState(1);
//   const [currencyList, setCurrencyList] = useState([]);
//   const [fromCurrency, setFromCurrency] = useState("THB");
//   const [toCurrency, setToCurrency] = useState("USD");
//   const [fromCurrencyRate, setFromCurrencyRate] = useState(1);
//   const [toCurrencyRate, setToCurrencyRate] = useState(1);
//   const [optionForExchangeRates, setOptionForExchangeRates] = useState({});
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: anyOriginUrl(MIDMARKET_CONVERTER),
//       headers: { authorization: AUTH_HEADER },
//     }).then((response) => {
//       setConverter(response.data);
//       setCurrencyList(Object.keys(response.data.rates));
//       setFromCurrencyRate(response.data.rates[fromCurrency]);
//       setToCurrencyRate(response.data.rates[toCurrency]);
//     });
//   }, [fromCurrency, toCurrency]);
//   useEffect(() => {
//     axios({
//       method: "GET",
//       url: anyOriginUrl(`${STATISTICS}?from=${fromCurrency}&to=${toCurrency}`),
//       headers: { authorization: AUTH_HEADER },
//     }).then((response) => {
//       // console.log(response.data);
//       setStatData(response.data);
//     });
//     // setStatData(statistics);
//     axios({
//       method: "GET",
//       url: anyOriginUrl(
//         `${CHARTING_RATES}?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
//       ),
//       headers: { authorization: AUTH_HEADER },
//     }).then((response) => {
//       console.log(response.data);
//       setChartData(response.data);
//       const _optionForExchangeRates = {
//         xAxis: {
//           name: "Date",
//           type: "category",
//           data: [
//             ...new Array(response.data.batchList[0].rates.length - 1).keys(),
//           ],
//         },
//         yAxis: { name: `${fromCurrency} to ${toCurrency}`, type: "value" },
//         series: [
//           {
//             name: `${fromCurrency} to ${toCurrency}`,
//             data: response.data.batchList[0].rates.slice(1).reverse(),
//             type: "line",
//             smooth: true,
//           },
//         ],
//         tooltip: { trigger: "axis" },
//       };
//       setOptionForExchangeRates(_optionForExchangeRates);
//     });
//   }, [fromCurrency, toCurrency]);

//   return {
//     converter,
//     setConverter,
//     statData,
//     setStatData,
//     chartData,
//     setChartData,
//     amount,
//     setAmount,
//     currencyList,
//     setCurrencyList,
//     fromCurrency,
//     setFromCurrency,
//     toCurrency,
//     setToCurrency,
//     fromCurrencyRate,
//     setFromCurrencyRate,
//     toCurrencyRate,
//     setToCurrencyRate,
//     optionForExchangeRates,
//     setOptionForExchangeRates,
//   };
// };

const CurrencyConverter7 = () => {
  // const [converter, setConverter] = useState();
  // const [statData, setStatData] = useState();
  // const [chartData, setChartData] = useState();
  // const [amount, setAmount] = useState(1);
  // const [currencyList, setCurrencyList] = useState([]);
  // const [fromCurrency, setFromCurrency] = useState("THB");
  // const [toCurrency, setToCurrency] = useState("USD");
  // const [fromCurrencyRate, setFromCurrencyRate] = useState(1);
  // const [toCurrencyRate, setToCurrencyRate] = useState(1);
  // const [optionForExchangeRates, setOptionForExchangeRates] = useState({});

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: anyOriginUrl(MIDMARKET_CONVERTER),
  //     headers: { authorization: AUTH_HEADER },
  //   }).then((response) => {
  //     setConverter(response.data);
  //     setCurrencyList(Object.keys(response.data.rates));
  //     setFromCurrencyRate(response.data.rates[fromCurrency]);
  //     setToCurrencyRate(response.data.rates[toCurrency]);
  //   });
  // }, [fromCurrency, toCurrency]);

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: anyOriginUrl(`${STATISTICS}?from=${fromCurrency}&to=${toCurrency}`),
  //     headers: { authorization: AUTH_HEADER },
  //   }).then((response) => {
  //     // console.log(response.data);
  //     setStatData(response.data);
  //   });
  //   // setStatData(statistics);

  //   axios({
  //     method: "GET",
  //     url: anyOriginUrl(
  //       `${CHARTING_RATES}?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
  //     ),
  //     headers: { authorization: AUTH_HEADER },
  //   }).then((response) => {
  //     console.log(response.data);
  //     setChartData(response.data);

  //     const _optionForExchangeRates = {
  //       xAxis: {
  //         name: "Date",
  //         type: "category",
  //         data: [
  //           ...new Array(response.data.batchList[0].rates.length - 1).keys(),
  //         ],
  //       },
  //       yAxis: { name: `${fromCurrency} to ${toCurrency}`, type: "value" },
  //       series: [
  //         {
  //           name: `${fromCurrency} to ${toCurrency}`,
  //           data: response.data.batchList[0].rates.slice(1).reverse(),
  //           type: "line",
  //           smooth: true,
  //         },
  //       ],
  //       tooltip: { trigger: "axis" },
  //     };

  //     setOptionForExchangeRates(_optionForExchangeRates);
  //   });
  // }, [fromCurrency, toCurrency]);

  // const {
  //   converter,
  //   setConverter,
  //   statData,
  //   setStatData,
  //   chartData,
  //   setChartData,
  //   amount,
  //   setAmount,
  //   currencyList,
  //   setCurrencyList,
  //   fromCurrency,
  //   setFromCurrency,
  //   toCurrency,
  //   setToCurrency,
  //   fromCurrencyRate,
  //   setFromCurrencyRate,
  //   toCurrencyRate,
  //   setToCurrencyRate,
  //   optionForExchangeRates,
  //   setOptionForExchangeRates,
  // } = useCurrencyConverter();

  const {
    // converter,
    // setConverter,
    amount,
    setAmount,
    currencyList,
    // setCurrencyList,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromCurrencyRate,
    // setFromCurrencyRate,
    toCurrencyRate,
    // setToCurrencyRate,
  } = useMidmarketConverter();

  const {
    statData,
    // setStatData,
    // chartData,
    // setChartData,
    optionForExchangeRates,
    // setOptionForExchangeRates,
  } = useStatistic({ fromCurrency, toCurrency });

  return (
    <div className="">
      <div className="mx-auto my-8 w-3/4 bg-gray-100 p-6">
        <h1 className="text-center text-xl font-bold">คำนวณอัตราแลกเปลี่ยน</h1>
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
            1 {fromCurrency} = {statData?.last1Days.average} {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = {1 / statData?.last1Days.average} {fromCurrency}
          </p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">7 วัน</h3>
          <p className="my-4 text-lg font-bold">
            1 {fromCurrency} = {statData?.last7Days.average} {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = {1 / statData?.last7Days.average} {fromCurrency}
          </p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">30 วัน</h3>
          <p className="my-4 text-lg font-bold">
            1 {fromCurrency} = {statData?.last30Days.average} {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = {1 / statData?.last30Days.average} {fromCurrency}
          </p>
        </div>
        <div>
          <h3 className="my-4 text-sm font-bold">60 วัน</h3>
          <p className="text-ls my-4 font-bold">
            1 {fromCurrency} = {statData?.last60Days.average} {toCurrency}
          </p>
          <p className="my-4 text-sm font-bold">
            1 {toCurrency} = {1 / statData?.last60Days.average} {fromCurrency}
          </p>
        </div>
      </div>
      <EChartsReact option={optionForExchangeRates} />
    </div>
  );
};

export default CurrencyConverter7;
