import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import ExchangeRatesData from "./exchange-rates.json";
import ExchangeStatistic from "./exchange-statistic.json";
import ExchangeChart from "./exchange-chart.json";
import axios from "axios";

const CurrencyConverter = () => {
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
  "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g="


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
      const _currencyLists = Object.keys(_exchangeRates.rates);
      console.log(_currencyLists);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
    })
  }, []);

  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    console.log(fromCurrencyRate, toCurrencyRate);
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);

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
        name: "อัตราแรกเปลี่ยน",
        max: "dataMax",
        min: "dataMin",
      },
      series: [
        {
          data: _exchangeChart?.batchList[0]?.rates?.slice(1).reverse(),
          type: "line",
          smooth: true,
          lineStyle: { color: "#6495ed", width: 4, type: "dashed" },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };

    setChartOption(_chartOption);
  });
}, [amount, fromCurrency, toCurrency, exchangeRates]);
  
  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-sky-100 mt-8 p-6 rounded-lg">
        <h1 className="font-bold text-xl text-center underline">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/2">
              <label>จำนวน</label>

              <br />
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2 rounded-lg"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
              ></input>
            </div>
            <div className="w-1/2">
              <label>จาก</label>
              <br />
              <select
                className="p-2 pb-3 w-full mt-2 rounded-lg"
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
            <div className="w-1/2">
              <label>ไป</label>
              <br />

              <select
                className="p-2 pb-3 w-full mt-2 rounded-lg"
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
          <div className="mt-8 text-center">
            <div>
              {amount} {fromCurrency} =
            </div>
            <div className="font-bold text-xl">
              {amountConvert} {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {(1 / fromCurrencyRate) * toCurrencyRate}{" "}
              {fromCurrency}
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500
              active:bg-gray-400  p-2 w-32 font-bold text-xl rounded-lg"
            >
              คำนวน
            </button>
          </div>
          
        </form>
      </div>
      <div className="w-1/2 mx-auto mt-8">
        <h2 className="text-lg font-bold ">อัตราแลกเปลี่ยนย้อนหลัง</h2>
        <div className="flex mt-4">
          <div className="w-1/2 ">
            <div>1 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last1Days?.average} USD 
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last1Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last7Days?.average} USD 
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last7Days?.average} THB </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last30Days?.average} USD
            </div>
            <div>
              1 USD = {1 / exchangeStatistic?.last30Days?.average} THB 
            </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last60Days?.average} USD
            </div>
            <div>
              1 USD = {1 / exchangeStatistic?.last60Days?.average} THB 
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

export default CurrencyConverter;
