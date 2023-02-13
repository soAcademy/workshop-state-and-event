import React, { useState, useEffect } from "react";
import axios from "axios";
// import currency from "./mockCurrency.json";
import stat from "./mockStat.json";
import FxStat from "./FxStat";
import FxChart from "./FxChart";
import { AiOutlineSwap } from "react-icons/ai";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("THB");
  const [fxRates, setFxRates] = useState({ rates: [] });
  const [options, setOptions] = useState([]);
  const [stats, setStats] = useState(stat);
  const [result, setResult] = useState();
  const [chart, setChart] = useState({
    timestamp: "",
    batchList: [{ rates: [] }],
  });

  const rates = () => (1 / fxRates.rates[from]) * fxRates.rates[to];
  const switchVar = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  useEffect(() => {
    const _options = Object.keys(fxRates.rates);
    setOptions(_options);
  }, [fxRates]);

  useEffect(() => {
    const _result = Number(amount) * rates();
    setResult(_result);
  }, [amount, from, to]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/statistics/?from=${from}&to=${to}`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config)
      .then(function (response) {
        setStats(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setStats(false);
      });
  }, [from, to]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        `https://www.xe.com/api/protected/charting-rates/?fromCurrency=${from}&toCurrency=${to}&crypto=true`
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config)
      .then(function (response) {
        setChart(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [from, to]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config)
      .then(function (response) {
        setFxRates(response.data);
        setOptions(Object.keys(response.data.rates));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col font-kanit">
        <p className="mx-auto my-14 text-xl font-bold">คำนวณอัตราแลกเปลี่ยน</p>
        <form className="mx-auto w-2/3 rounded-xl bg-gray-200 p-10">
          <div className="flex justify-evenly space-x-4">
            <div className="">
              <p>จำนวน</p>
              <input
                id="amount"
                defaultValue={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 px-5"
              ></input>
            </div>
            <div>
              <p>จาก</p>
              <select
                id="from"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                  setTo(document.querySelector("#to").value);
                }}
                className="w-full p-2 px-5"
              >
                {options.map((e, idx) => {
                  return to !== e ? (
                    <option key={idx}>{e}</option>
                  ) : (
                    <option key={idx} disabled>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="relative flex items-end justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  switchVar();
                }}
                className="mb-1 p-2"
              >
                <AiOutlineSwap className="text-xl" />
              </button>
            </div>
            <div>
              <p>ไป</p>
              <select
                id="to"
                value={to}
                onChange={(e) => {
                  setFrom(document.querySelector("#from").value);
                  setTo(e.target.value);
                }}
                className="w-full p-2 px-5"
              >
                {options
                  .filter((e) => e !== from)
                  .map((e, idx) => {
                    return from !== e ? (
                      <option key={idx}>{e}</option>
                    ) : (
                      <option key={idx} disabled>
                        {e}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <p className="mt-4">
            {result
              ? `${amount} ${from} = ${result.toLocaleString()} ${to}`
              : ""}
          </p>
          <p>{result ? `Exchange Rate : 1 ${from} = ${rates()} ${to}` : ""}</p>
        </form>
        <div className="mx-auto  my-10 w-2/3">
          <p className="text-xl">อัตราแลกเปลี่ยนย้อนหลัง</p>
          <FxStat from={from} to={to} stats={stats} />
        </div>
        <FxChart chart={chart} />
      </div>
    </>
  );
};

export default CurrencyConverter;
