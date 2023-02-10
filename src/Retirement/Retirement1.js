import React, { useState, useEffect } from "react";

const Retirement1 = () => {
  return (
    <div className="w-full">
      <div className="text-center mt-5">
        <p className="font-semibold text-lg">แผนการเกษียณของฉัน</p>
      </div>
      <div className="bg-slate-200 m-auto w-2/3 p-4 mt-5">
        <div className="flex">
          <div className="w-6/12">
            <p className="mb-1">คุณอายุเท่าไหร่</p>
            <input type="" className="w-4/5 mb-3" />
            <p className="mb-1">เกษียณตอนอายุ</p>
            <input type="" className="w-4/5 mb-3" />
            <p className="mb-1">อัตราเงินเฟ้อ</p>
            <input type="" className="w-4/5 mb-3" />
          </div>
          <div className="w-6/12">
            <p className="mb-1">มีอายุถึงกี่ปี</p>
            <input type="" className="w-4/5 mb-3" />
            <p className="mb-1">ค่าใช้จ่ายต่อเดือน</p>
            <input type="" className="w-4/5 mb-3" />
          </div>
        </div>
        {/* <div className="text-center">
          <button className="bg-yellow-100 p-4 w-36">คำนวน</button>
        </div> */}
      </div>
      <div className="text-center mt-5">
        <p className="font-semibold text-lg">
          คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน
        </p>
        <p className="font-semibold text-lg">40,000,000 บาท</p>
      </div>
    </div>
  );
};

export default Retirement1;
