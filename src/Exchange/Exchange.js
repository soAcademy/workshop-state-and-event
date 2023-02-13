import React, { useState, useEffect } from "react";
import ExchangeData from "./ExchangeData.json";
import ExchangeStatistic from "./ExchangeStatistic.json";
import { BsArrowLeftRight } from "react-icons/bs";
import ExchangeChart from "./ExchangeChart.json";
import ReactECharts from "echarts-for-react";
import axios from "axios";

const useFetchExchangeRate = ({ authToken }) => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);
  console.log("useFetchExchangeRate");
  useEffect(() => {
    axios({
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization: authToken,
      },
    }).then((res) => {
      console.log("useFetchExchangeRate", res.data);
      const _exchangeRates = res.data;
      const _currencyLists = Object.keys(_exchangeRates.rates);
      console.log("currencyLists", _currencyLists);
      setExchangeRates(_exchangeRates);
      setCurrencyLists(_currencyLists);
    });
  }, []);

  return { exchangeRates, currencyLists };
};

const useConvertExchangeRate = ({ exchangeRates }) => {
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
    setAmountConvert,
    amountConvert,
    setAmountConvert,
    fromCurrencyRate,
    setFromCurrencyRate,
    toCurrencyRate,
    setToCurrencyRate,
  };
};

const useExchangeStatistic = ({ authToken, fromCurrency, toCurrency }) => {
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
  return [exchangeStatistic];
};

const useChartOption = ({ authToken, fromCurrency, toCurrency }) => {
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
            lineStyle: { color: "#83a832", width: 2, type: "default" },
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      setChartOption(_chartOption);
    });
  }, [fromCurrency, toCurrency]);

  return [chartOption];
};

const Exchange = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";

  const { exchangeRates, currencyLists } = useFetchExchangeRate({ authToken });
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

  const [exchangeStatistic] = useExchangeStatistic({
    authToken,
    fromCurrency,
    toCurrency,
  });

  const [chartOption] = useChartOption({
    authToken,
    fromCurrency,
    toCurrency,
  });

  const switchCurrency = () => {
    // USD => THB || THB => USD
    // TEMP => USD || THB = TEMP(USD)

    const temp = fromCurrency; //ต้นทาง
    console.log(temp, fromCurrency, toCurrency);
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
