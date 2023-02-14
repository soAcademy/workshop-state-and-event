import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

const CurrrencyConverterTest = () => {
  const [amuont, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("THB");
  const [currencyLists, setCurrencyLists] = useState([]);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();
  const [amountConverted, setAmountConverted] = useState();
  const [currencyRate, setTCurrencyRate] = useState();
  const [exchangeStatistic, setExchangeStatistic] = useState();
  const [chartData, setChartData] = useState({});
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
      const _currencyLists = Object.keys(res.data.rates);
      setCurrencyLists(_currencyLists);
      setTCurrencyRate(_exchangeRates);
      console.log("currencyLists", currencyLists);
      console.log("_exchangeRates", _exchangeRates);
    });
  }, []);

  useEffect(() => {
    const _fromCurrencyRate = currencyRate?.rates[fromCurrency];
    const _toCurrencyRate = currencyRate?.rates[toCurrency];
    const _amountConvert = (amuont / _fromCurrencyRate) * _toCurrencyRate;

    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
    setAmountConverted(_amountConvert);

    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/statistics/?from=AUD&to=EUR"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeStatistic = res.data;
      setExchangeStatistic(_exchangeStatistic);
      console.log("exchangeStatistic", exchangeStatistic);
    });

    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/charting-rates/?fromCurrency=AUD&toCurrency=EUR&crypto=true"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _chartData = res.data;
      const _ChartOption = {
        xAxis: {
          type: "category",
          data: [..._chartData?.batchList[0]?.rates?.slice(1)?.keys()].map(
            (r) => r - _chartData?.batchList[0]?.rates?.length - 1
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
            data: _chartData?.batchList[0]?.rates?.slice(1).reverse(), // Y data
            type: "line",
            lineStyle: { width: 5, type: "solid", color: "#91cc75" },
            smooth: true,
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };
      setChartData(_ChartOption);
    });
  }, [
    fromCurrency,
    toCurrency,
    toCurrencyRate,
    currencyRate,
    amuont,
  ]);

  return (
    <>
      <div className="mx-auto bg-gradient-to-b from-slate-400 to-slate-500 h-screen">
        <div className="text-2xl font-bold text-center pt-5">
          คำนวนอัตราแลกเปลี่ยน
        </div>
        <div className="bg-gradient-to-b from-cyan-200 to-cyan-300 w-1/2 mx-auto p-2 rounded-lg mt-5">
          <div className=" grid grid-cols-3 mx-auto p-4 mt-5 space-x-4">
            <div>
              <div className="font-semibold">จำนวน</div>
              <div>
                <input
                  className="w-full p-2 rounded-lg "
                  onChange={(e) => setAmount(Number(e.target.value))}
                  value={amuont}
                />
              </div>
            </div>
            <div>
              <div className="font-semibold">จาก</div>
              <div>
                <select
                  className="w-full p-2 rounded-lg"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFromCurrency(e.target.value);
                  }}
                  value={fromCurrency}
                >
                  {currencyLists
                    ?.filter((r) => r !== toCurrency)
                    .map((r, idx) => (
                      <option key={idx} value={r}>
                        {r}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div>
              <div className="font-semibold">ไป</div>
              <div>
                <select
                  className="w-full p-2 rounded-lg"
                  onChange={(e) => setToCurrency(e.target.value)}
                  value={toCurrency}
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
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-b from-yellow-200 to-yellow-300 w-1/3 p-2 font-bold text-center rounded-lg">
              คำนวน
            </button>
          </div>
          <div className="p-2">
            <div className="">
              {amuont}
              {fromCurrency} ={" "}
            </div>
            <div className="font-bold text-bold text-2xl">
              {amountConverted}
              {toCurrency}
            </div>

            <div>
              1 {toCurrency} = {(1 / fromCurrencyRate) * toCurrencyRate}
              {fromCurrency}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-3 mx-auto w-1/2 mt-8 bg-red-200 p-4">
          <span className="font-bold">อัตราแลกเปลี่ยนย้อนหลัง</span>
          <span></span>
          <div className="mt-4">
            <div>1 วัน</div>
            <div className="font-bold text-2xl ">
              1 THB = {exchangeStatistic?.last1Days?.average}
            </div>
          </div>
          <div>
            <div className="mt-4">7 วัน</div>
            <div className="font-bold text-2xl ">
              1 THB = {exchangeStatistic?.last7Days?.average}
            </div>
          </div>
          <div>
            <div>30 วัน</div>
            <div className="font-bold text-2xl ">
              1 THB = {exchangeStatistic?.last30Days?.average}
            </div>
          </div>
          <div>
            <div>60 วัน</div>
            <div className="font-bold text-2xl ">
              1 THB = {exchangeStatistic?.last60Days?.average}
            </div>
          </div>
        </div>
     <ReactECharts option={chartData}/>
      </div>
    </>
  );
};
export default CurrrencyConverterTest;
