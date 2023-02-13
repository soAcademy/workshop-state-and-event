import React from "react";


const CurrencyConverter1 = () => {

  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="font-semibold text-xl">คำนวนอัตราแลกเปลี่ยน</p>
      </div>
      <div className="bg-slate-200 m-auto w-2/3 p-4 mt-5 rounded">
        <div className="flex text-center">
          <div className="w-1/3">
            <p className="text-left pl-5">จำนวน</p>
            <input className="w-4/5 mt-3 rounded pl-1" placeholder="1" />
          </div>
          <div className="w-1/3">
            <p className="text-left pl-5">จาก</p>
            <input className="w-4/5 mt-3 rounded pl-1" placeholder="THB" />
          </div>
          <div className="w-1/3">
            <p className="text-left pl-5">ไป</p>
            <input className="w-4/5 mt-3 rounded pl-1" placeholder="USD" />
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-yellow-300 w-36 h-10 text-lg rounded">
            คำนวน
          </button>
        </div>
        <div className="mt-5">
          <p>1 THB =</p>
        </div>
        <div className="mt-3">
          <p className="text-xl font-semibold">0.0249101 USD</p>
        </div>
        <div className="mt-3">
          <p>1 USD = 32.0190 THB </p>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-10">
        <p>อัตราแลกเปลี่ยนย้อนหลัง </p>
      </div>
      <div className="m-auto w-2/3 p-4 mt-5 rounded border-2">
        <div className="flex">
          <div className="w-6/12">
            <p>1 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
            <p className="mt-7">30 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
          </div>
          <div className="w-6/12">
            <p>7 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
            <p className="mt-7">60 วัน</p>
            <p className="text-xl font-semibold mt-3">1 THB = 0.0249101 USD</p>
            <p className="mt-3">1 USD = 32.0190 THB </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-2/3 mt-5 rounded border-2">Chart</div>
    </div>
  );
};

export default CurrencyConverter1;
