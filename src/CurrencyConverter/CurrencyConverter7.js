import React, { useEffect, useState } from "react";
import ExchangeRatesData from "./exchange-rates.json";
import ExchangeStatistic from "./exchange-statistic.json";
import ReactECharts from "echarts-for-react";
import ExchangeChart from "./exchange-chart.json";
import axios from "axios";

const useFetchExchangeRate = (authToken) => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);

  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      method: "get",
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      const _exchangeRates = res.data;
      const _currencyLists = Object.keys(_exchangeRates.rates);
      console.log("res", res);
      console.log(_currencyLists);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
    });
  }, []);

  return { exchangeRates, currencyLists };
};

// ---------------------------custom hook---------------------------------

const useConvertExchangeRate = (exchangeRates) => {
  const [fromCurrency, setFromCurrency] = useState("THB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [amountConvert, setAmountConvert] = useState(0);
  const [fromCurrencyRate, setFromCurrencyRate] = useState();
  const [toCurrencyRate, setToCurrencyRate] = useState();

  useEffect(() => {
    const _fromCurrencyRate = exchangeRates?.rates[fromCurrency];
    const _toCurrencyRate = exchangeRates?.rates[toCurrency];
    console.log(fromCurrencyRate, toCurrencyRate);
    const _amountConvert = (amount / _fromCurrencyRate) * _toCurrencyRate;
    setAmountConvert(_amountConvert);
    setFromCurrencyRate(_fromCurrencyRate);
    setToCurrencyRate(_toCurrencyRate);
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    setAmountConvert,
    amountConvert,
    setAmountConvert,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
  };
};

// ---------------------------custom hook---------------------------------

const useExchangeStatistic = (authToken, fromCurrency, toCurrency) => {
  const [exchangeStatistic, setExchangeRatesStatistic] = useState();
  console.log("useExchangeStatistic");
  useEffect(() => {
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
  }, [fromCurrency, toCurrency]);
  return exchangeStatistic;
};

// ---------------------------custom hook---------------------------------

const useChartOption = (authToken, fromCurrency, toCurrency) => {
  const [chartOption, setChartOption] = useState({});

  console.log("useChartOption");

  useEffect(() => {
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
            lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      setChartOption(_chartOption);
    });
  }, [fromCurrency, toCurrency]);

  return chartOption;
};

const CurrencyConverter7 = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

  const { exchangeRates, currencyLists } = useFetchExchangeRate(authToken);
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
  } = useConvertExchangeRate(exchangeRates);

  const exchangeStatistic = useExchangeStatistic(
    authToken,
    fromCurrency,
    toCurrency
  );

  const chartOption = useChartOption(authToken, fromCurrency, toCurrency);

  // listening exchangerate to make it's not show NaN
  // เมื่อไหร่ก็ตามที่ amount, fromCurrency , toCurrency, exchangrate ตัว function ใน useEffect จะทำงานอีกรอบ

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-green-500 mt-8 p-6 rounded-[20px] shadow-lg border-2 border-sky-500">
        <h1 className="font-bold text-xl text-center underline">
          คำนวนอัตราแลกเปลี่ยน
        </h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              {amount}
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2 rounded-[10px]"
                placeholder="1"
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
              ></input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              {fromCurrency}
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="p-2 pb-3 w-full mt-2 rounded-[10px]"
              >
                {currencyLists
                  ?.filter((r) => r !== toCurrency)
                  ?.map((r, idx) => (
                    <option key={`2${idx}${r}`} value={r}>
                      {r}
                    </option>
                  ))}

                {/* value ใน option ทำให้เราได้ค่าใน select */}
              </select>
            </div>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              {toCurrency}
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="p-2 pb-3 w-full mt-2 rounded-[10px]"
              >
                {currencyLists
                  ?.filter((r) => r !== fromCurrency)
                  ?.map((r, idx) => (
                    <option key={`3${idx}${r}`} value={r}>
                      {r}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* ---------- exchange rate ------------- */}
          <div className="mt-8">
            <div>
              {amount} {fromCurrency} =
            </div>
            <div className="font-bold text-xl text-white">
              {amountConvert} {toCurrency}
            </div>
            <div>
              1 {toCurrency} = {(1 / fromCurrencyRate) * toCurrencyRate}{" "}
              {fromCurrency}
            </div>
          </div>
          {/* -------------------------------------- */}

          <div className="text-center mt-8">
            {/* <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:bg-amber-400 p-4 w-32 font-bold text-xl"
            >
              คำนวน
            </button> */}
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto  mt-8">
        <h2 className="text-lg font-bold">อัตราแลกเปลี่ยนย้อนหลัง</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 วัน</div>
            <div className="font-bold text-xl">
              {" "}
              1 THB ={exchangeStatistic?.last1Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last1Days?.average}</div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">
              {" "}
              1 THB ={exchangeStatistic?.last7Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last7Days?.average} THB </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">
              {" "}
              1 THB ={exchangeStatistic?.last30Days?.average}USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last30Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last60Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last60Days?.average} THB </div>
          </div>
          <div className="w-1/2">
            <div>90 วัน</div>
            <div className="font-bold text-xl">
              1 THB = {exchangeStatistic?.last90Days?.average} USD
            </div>
            <div>1 USD = {1 / exchangeStatistic?.last90Days?.average} THB </div>
          </div>
        </div>
        <div className="mt-4">
          <ReactECharts option={chartOption} />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter7;
