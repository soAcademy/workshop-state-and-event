import { useState, useEffect } from "react";
// import { FaExchangeAlt } from "react-icons/fa";
import ExchangeRate from "./ExchangeRates.json";
import axios from "axios";

const CurrencyConvertor1 = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("THB");
  const [toCurr, setToCurr] = useState("USD");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const FormData = require("form-data");
    const data = new FormData();

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://anyorigin-iinykauowa-uc.a.run.app/?url=${encodeURIComponent(
        "https://www.xe.com/api/protected/midmarket-converter/"
      )}`,
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        const valueOptions = Object.keys(ExchangeRate.rates).map((r) => ({
          name: r,
          value: ExchangeRate.rates[r],
        }));
        // console.log(valueOptions);
        setOptions(valueOptions);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center font-prompt text-sm p-4 bg-[url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&h=400&q=80')] bg-no-repeat">
      <div className="md:w-2/3">
        <div className="header my-8">
          <h1 className="text-3xl font-bold text-center bg-slate-200/40 rounded-lg p-2">
            คำนวนอัตราแลกเปลี่ยน
          </h1>
        </div>

        <div className="convertor-block bg-gray-50 rounded-lg shadow-lg p-4 md:p-14 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="amountCurr">
              <label className="block mb-2">จำนวน</label>
              <input
                type="number"
                onChange={(e) => setAmount(Number(e.target.value))}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={amount}
              />
            </div>
            <div className="fromCurr">
              <label className="block mb-2">จาก</label>
              <select
                onChange={(e) => setFromCurr(e.target.value)}
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={fromCurr}
              >
                {options
                  .filter((r) => r !== toCurr)
                  .map((r) => (
                    <option key={r.name} value={r.name}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="toCurr">
              <label className="block mb-2">ไป</label>
              <select
                onChange={(e) => setToCurr(e.target.value)}
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={toCurr}
              >
                {options
                  .filter((r) => r !== fromCurr)
                  .map((r) => (
                    <option key={r.name} value={r.name}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="btn-block mb-8">
            <button className="w-full h-12 text-white bg-sky-500 hover:bg-sky-600 shadow-sm active:shadow-md rounded-lg">
              คำนวน
            </button>
          </div>
          <div className="detail-block">
            <h1>1 {fromCurr} = </h1>
            <h1 className="text-xl">0.0249101 {toCurr}</h1>
            <h1>
              1 {toCurr} = 32.0190 {fromCurr}
            </h1>
          </div>
        </div>

        <div className="prev-rate">
          <div>
            <p className="mb-4 px-4">อัตราแลกเปลี่ยนย้อนหลัง</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4">
              <p>1 วัน</p>
              <h1 className="text-xl">1 THB = 0.0249101 USD</h1>
              <p>1 USD = 32.0190 THB</p>
            </div>
            <div className="p-4">
              <p>7 วัน</p>
              <h1 className="text-xl">1 THB = 0.0249101 USD</h1>
              <p>1 USD = 32.0190 THB</p>
            </div>
            <div className="p-4">
              <p>30 วัน</p>
              <h1 className="text-xl">1 THB = 0.0249101 USD</h1>
              <p>1 USD = 32.0190 THB</p>
            </div>
            <div className="p-4">
              <p>60 วัน</p>
              <h1 className="text-xl">1 THB = 0.0249101 USD</h1>
              <p>1 USD = 32.0190 THB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor1;
