// เราท Chart ไว้แสดงผล
// เคลียร์ตัวฟังชันให้เสร็จทีนี้จะทำให้การทำงานหน้าจอ DOM ง่ายเลย บวกลบคณหารเอามาต่อกันได้ตามสบาย
import { useState, useEffect } from "react";
import ExchangeRatesData from "./exchange-rates.json";
// เอาไฟล์ Json ตัวนี้เข้ามาด้วย
import ExchangeStatistic from "./exchange-statistic.json";
import ExchangeChart from "./exchange-chart.json";

const CurrencyConverter5 = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountConvert, setAmountConvert] = useState(0);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [exchangeStatistic, setExchangeRatesStatistic] = useState();
  // เพิ่มตัวนี้เข้ามา
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    const _exchangeRates = ExchangeRatesData;
    const _currencyLists = Object.keys(_exchangeRates.rates);
    // console.log(_currencyLists);
    setExchangeRates(_exchangeRates);
    setCurrencyLists(_currencyLists);
  }, []);

  // มี useEffect อีกตัว
  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    // console.log(fromCurrencyRate, toCurrencyRate);
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
    const _exchangeStatistic = ExchangeStatistic;

// เราเพิ่มส่วนนี้เข้ามาเพื่อใช้สร้าง Chart แสดงผล 
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
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
    setExchangeRatesStatistic(_exchangeStatistic);
  }, [amount, fromCurrency, toCurrency]);

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
              {/* เปลี่ยนจาก Hard code มาเป็นการใช้ Function ต่าง ๆ */}
              1 THB = {exchangeStatistic?.last1Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last1Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
               {/* เปลี่ยนจาก Hard code มาเป็นการใช้ Function ต่าง ๆ */}
              1 THB = {exchangeStatistic?.last7Days?.average} USD
            </div>
            <div>1 USD ={1 / exchangeStatistic?.last7Days?.average} THB </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">
               {/* เปลี่ยนจาก Hard code มาเป็นการใช้ Function ต่าง ๆ */}
              1 THB = {exchangeStatistic?.last30Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last30Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last60Days?.average} USD
            </div>
            <div>1 USD ={1 / exchangeStatistic?.last60Days?.average} THB </div>
          </div>
        </div>
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </div>
  );
};
export default CurrencyConverter5;
