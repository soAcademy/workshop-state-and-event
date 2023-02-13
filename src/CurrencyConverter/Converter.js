import React, { useEffect, useState } from "react";
import axios from "axios";

const Converter = () => {
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://www.xe.com/api/protected/midmarket-converter/",
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config).then((response) => {
      console.log("RESP", response.data);
    });
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://www.xe.com/api/protected/statistics/?from=CHF&to=GBP",
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config).then((response) => {
      console.log("RESP", response.data);
    });
  }, []);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://www.xe.com/api/protected/charting-rates/?fromCurrency=CHF&toCurrency=GBP\n",
      headers: {
        Authorization:
          "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=",
      },
    };

    axios(config).then((response) => {
      console.log("RESP", response.data);
    });
  }, []);

  return (
    <>
      <div className="text-center m-4">
        <h1 className="font-bold text-xl"> คำนวณอัตราแลกเปลี่ยน</h1>
        <div className="bg-gray-200 p-4 rounded mt-6 mx-auto w-3/4">
          <div className="flex justify-evenly">
            <div>
              <p className="text-left">จำนวน</p>
              <input
                className="rounded mt-2"
                type="number"
                value={inputValue}
              ></input>
            </div>
            <div>
              <p className="text-left">จาก</p>
              <input className="rounded mt-2" type="text"></input>
            </div>
            <div>
              <p className="text-left">ไป</p>
              <input className="rounded mt-2" type="text"></input>
            </div>
          </div>
          <button className="bg-blue-200 text-xl font-bold p-2 rounded mt-4">
            คำนวณ
          </button>
          <div className="mt-4 text-left">1THB = 0.00249 USD</div>
          <div className="text-left">1USD = 32.19 THB</div>
        </div>
        <h1 className="mt-8">อัตราแลกเปลี่ยนย้อนหลัง</h1>
        <div className="grid grid-cols-2 mt-6">
          <div>
            <p>1 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
          <div>
            <p>7 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
          <div>
            <p>30 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
          <div>
            <p>60 วัน</p>
            <p className="font-bold text-xl">1 THB = 0.0249 USD</p>
            <p>1USD = 32.19 THB</p>
          </div>
        </div>
        <div className="mt-6">Graph</div>
      </div>
    </>
  );
};

export default Converter;
