import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import ReactECharts from "echarts-for-react";
import {
  useFetchExchangeRate,
  useConvertExchangeRate,
  useFetchExchangeStatistic,
  useChartOption,
} from "./hooks";

// // todo 1 : create CustomHook 1 : Call API converter part
// const useFetchExchangeRate = ({ authToken }) => {
//   // todo 1.1 : ย้าย state
//   const [exchangeRates, setExchangeRates] = useState();
//   const [currencyLists, setCurrencyLists] = useState([]);
//   // todo 1.3 : ย้าย useEffect ก้อนที่ดึง API เส้นที่เอาแปลงสกุลเงิน :
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
//   // todo 1.2 : return state
//   return {
//     exchangeRates,
//     currencyLists,
//   };
// };

// // todo 2 : create CustomHook 2 : Converter program
// const useConvertExchangeRate = ({ exchangeRates }) => {
//   // todo 2.1 : ย้าย state ที่เกี่ยวกับการคำนวณอัตราการปลี่ยนแปลง
//   const [fromCurrency, setFromCurrency] = useState("THB");
//   const [toCurrency, setToCurrency] = useState("USD");
//   const [amount, setAmount] = useState(1);
//   const [amountConvert, setAmountConvert] = useState(0);
//   const [fromCurrencyRate, setFromCurrencyRate] = useState();
//   const [toCurrencyRate, setToCurrencyRate] = useState();
//   // todo 2.3 : ย้ายก้อนคำนวณมาใส่ useEffect
//   useEffect(() => {
//     const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
//     const _toCurrencyRate = exchangeRates?.rates[toCurrency];
//     console.log(fromCurrencyRate, toCurrencyRate);
//     const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
//     setAmountConvert(_amountConvert);
//     setFromCurrencyRate(_fromCurrencyRate);
//     setToCurrencyRate(_toCurrencyRate);
//   }, [amount, fromCurrency, toCurrency, exchangeRates]);
//   // todo 2.2 : return state ออกไปให้หมด เดี๋ยวค่อยตัดอันที่ไม่ใช้ออก
//   return {
//     fromCurrency,
//     setFromCurrency,
//     toCurrency,
//     setToCurrency,
//     amount,
//     setAmount,
//     amountConvert,
//     setAmountConvert,
//     fromCurrencyRate,
//     setFromCurrencyRate,
//     toCurrencyRate,
//     setToCurrencyRate,
//   };
// };

// // todo 3 : create CustomHook3 : call API Statistic part
// const useFetchExchangeStatistic = ({ authToken, fromCurrency, toCurrency }) => {
//   // todo 3.1 move state
//   const [exchangeStatistic, setExchangeRatesStatistic] = useState();
//   // todo 3.3 useEffects call Statistic
//   useEffect(() => {
//     axios({
//       url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
//         `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
//       )}`,
//       headers: {
//         Authorization: authToken,
//       },
//     }).then((res) => {
//       setExchangeRatesStatistic(res.data);
//     });
//   }, [fromCurrency, toCurrency]);

//   // todo 3.2 return state
//   return {
//     exchangeStatistic,
//     setExchangeRatesStatistic,
//   };
// };

// // todo 4 : create CustomHook 4 : Chart program
// const useChartOption = ({ authToken, fromCurrency, toCurrency }) => {
//   // todo 4.1
//   const [chartOption, setChartOption] = useState({});
//   // todo 4.3
//   useEffect(() => {
//     axios({
//       url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
//         `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
//       )}`,
//       headers: {
//         Authorization: authToken,
//       },
//     }).then((res) => {
//       const _exchangeChart = res.data;
//       const something = _exchangeChart?.batchList[0]?.rates?.slice(1);
//       console.log("something : ", something);
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
//             lineStyle: { color: "#83a832", width: 2, type: "default" },
//           },
//         ],
//         tooltip: {
//           trigger: "axis",
//         },
//       };

//       setChartOption(_chartOption);
//     });
//   }, [fromCurrency, toCurrency]);

//   // todo 4.2
//   return {
//     chartOption,
//     setChartOption,
//   };
// };

const Exchange = () => {
  // todo 0 : ย้าย authToken มาไว้บนสุด
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";
  // todo 1 : call CustomHook 1
  const { exchangeRates, currencyLists } = useFetchExchangeRate({ authToken });
  // todo 2 : call CustomHook 2
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
  // todo 3 : call CustomHook 3
  const { exchangeStatistic, setExchangeRatesStatistic } =
    useFetchExchangeStatistic({ authToken, fromCurrency, toCurrency });
  // todo 4 : call CustomHook 4
  const { chartOption, setChartOption } = useChartOption({
    authToken,
    fromCurrency,
    toCurrency,
  });

  const switchCurrency = () => {
    // USD => THB || THB => USD
    // TEMP => USD || THB = TEMP(USD)

    const temp = fromCurrency; //ต้นทาง
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">คำนวนอัตราแลกเปลี่ยน</h1>
        <div>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2"
                placeholder="1"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              ></input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              <select
                className="p-2 w-full mt-2"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
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
            <button className="text-lg mt-8" onClick={switchCurrency}>
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
        </div>
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
      <div className="mt-4">
        <ReactECharts option={chartOption} />
      </div>
    </div>
  );
};

export default Exchange;
