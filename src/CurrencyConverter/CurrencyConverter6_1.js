// อันนี้เริ่มที่จะซับซ้อนขึ้นมาก เพราะมันมีการเอาตัว hardcode ออกแล้วก็เอาตัว function ที่เราทำไปใส่ในหน้า Dom ทำให้เราเริ่มสับสนอาจจะต้องเข้ามาทำความเข้าใจเพิ่ม

import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import ExchangeRatesData from "./exchange-rates.json";
import ExchangeStatistic from "./exchange-statistic.json";
import ExchangeChart from "./exchange-chart.json";
// เอาอันนี้เข้ามาเพื่อดึง API จะได้ไม่ต้องเอาไฟล์ json เข้ามา
import axios from "axios";

// เปลี่ยนจาก CurrencyConverter เป็น useCurrency แล้วก็เพิ่ม authToken
const useCurrencyConverter = ({ authToken }) => {
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
    // เพิ่มตัว Axios เข้ามา
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
    // จบที่ตรงนี้สำหรับ axios
    const _exchangeRates = ExchangeRatesData;
    const _currencyLists = Object.keys(_exchangeRates.rates);
    // console.log(_currencyLists);
    setExchangeRates(_exchangeRates);
    setCurrencyLists(_currencyLists);
    });
  }, []);

  // มี useEffect อีกตัว
  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    // console.log(fromCurrencyRate, toCurrencyRate);
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
    // เพิ่มสามตัวข้างล่างเข้ามา
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
    // const _exchangeStatistic = ExchangeStatistic; อันนี้ลบให้หายไปเลย
    // จุดเริ่มต้นของ axios เริ่มต้นขึ้นแล้
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${fromCurrency}&to=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      setExchangeRatesStatistic(res.data);
    });

    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
    // ตรงข้างล่างนี้เหมือนเดิมเปะ
    const _exchangeChart = ExchangeChart;
    const _chartOption = {
      xAxis: {
        type: "category",
        data: [..._exchangeChart?.batchList[0]?.rates?.slice(1)?.keys()].map(
          (r) => r - _exchangeChart?.batchList[0]?.rates?.length - 1
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
          data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
          type: "line",
          smooth: true,
          lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };
// สิ้นสุดฟังชัน Chart

  // ลบทั้งสี่ตัวนี้ทิ้งไปเลยแล้วก็ใช้ตัว setChartOption เข้ามาแทน
    // setAmountConvert(_amountConvert);
    // setFromCurrencyRate(_fromCurrencyRate);
    // setToCurrencyRate(_toCurrencyRate);
    // setExchangeRatesStatistic(_exchangeStatistic);
    setChartOption(_chartOption);
  });
}, [amount, fromCurrency, toCurrency, exchangeRates]);

  // อันนี้จะเป็นตัว return แบบไหนวะเนี่ย
return {
  exchangeRates,
  setExchangeRates,
  currencyLists,
  setCurrencyLists,
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
  exchangeStatistic,
  setExchangeRatesStatistic,
  chartOption,
  setChartOption,
};
};
// จุดสิ้นสุดของ return แรกของ function

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

  // คือเรากำหนดตัว function ให้เสร็จจนหมดตั้งแต่แรกแล้ว ส่วนนี้มันเป็นตัวกำหนดตัวแปร

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              {/* {amount} */}
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2"
                // เพิ่ม onChange เข้ามา
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount} // placeholder="1"
              ></input>

              {/* เราใช้ value key มากำหนดตัว useState ของ fromCurrency แล้วก็เพิ่ม onChange */}
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              {/* {fromCurrency} */}
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
                {/* {currencyLists?.map((r) => (
                  <option value={r}>{r}</option>
                ))} */}
              </select>
            </div>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              {/* {toCurrency} */}
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
                {/* {currencyLists?.map((r) => (
                  <option value={r}>{r}</option>
                ))} */}
              </select>
            </div>
          </div>
          <div className="text-center mt-8">
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
            {/* <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:bg-amber-400 p-4 w-32 font-bold text-xl"
            >
              คำนวน
            </button> */}
          </div>
        </form>
      </div>
      {/* เราให้ตัวนี้เป็นอีกกล่องไว้แสดงข้อความอัตราแลกเปลี่ยนโดยเอา Value มาใส่ให้มันเปลี่ยนไปตามที่เราเลือกค่าเงิน*/}
      <div className="w-1/2 mx-auto  mt-8">
        <h2 className="text-lg font-bold text-center">
          อัตราแลกเปลี่ยนย้อนหลัง
        </h2>
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
              {/* เพิ่มตัวนี้เข้ามาแทนให้เรียบร้อย */}
              {/* 1 THB = {exchangeStatistic?.last60Days?.average} USD */}
              1 {fromCurrency} = {exchangeStatistic?.last60Days?.average}{" "}
              {toCurrency}
            </div>
            <div>
            1 {toCurrency} ={1 / exchangeStatistic?.last60Days?.average}{" "}
              {fromCurrency}{" "} 
              {/* ข้างบนมาแทนข้างล่างเพื่อมันเปลี่ยนไปตามที่เราเลือก */}
              {/* 1 USD ={1 / exchangeStatistic?.last60Days?.average} THB  */}
              </div>
          </div>
        </div>
        {/* เพิ่ม Chart React เข้ามาตรงนี้ด้วย ให้มันโชว์ไป เพราะเรากำหนดฟังชันอะไรเสร็หมดแล้ว*/}
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </div>
  );
};
export default CurrencyConverter6;
