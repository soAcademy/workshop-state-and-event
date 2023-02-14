import { useState, useEffect } from "react";
import ExchangeRateData from "./exchange-rates.json";
import ExchangeStatistic from "./exchange-static.json";
import ExchangeChart from "./exchange-chart.json";
import ReactECharts from "echarts-for-react";
import axios from "axios";

const CurrencyConverter1 = () => {
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
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeRates = res.data;
      const _currencyLists = Object.keys(_exchangeRates.rates);  //ดึงค่า values ของทุก key โดยไม่สนว่า key จะมีชื่อต่างกัน
      // console.log(_currencyLists);
      console.log("_exchangeRates", _exchangeRates);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
      console.log("exchangeRates", exchangeRates);
    });
  }, []);

  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;

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
      const _exchangeChart = res.data;
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
          name: "อัตราแลกเปลี่ยน",
          max: "dataMax",
          min: "dataMin",
          splitArea: {
            interval: "auto",
            show: false,
            areaStyle: {
              color: ['rgba(250,250,250,0.3)']
            },
          },
        },
        series: [
          {
            data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
            type: "line",
            smooth: true,
            lineStyle: { color: "#fac858", width: 2, type: "solid" },
          },
        ],
        textStyle: { color: "#ffffff" },
        tooltip: {
          trigger: "axis",
        },
      };
      setChartOption(_chartOption);
    });

    //ก้อนนี้คำนวณได้เลย ่ ไม่ต้องต่อ api
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

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
export default CurrencyConverter1;
