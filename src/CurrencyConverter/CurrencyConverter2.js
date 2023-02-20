// อันนี้เราเริ่มใช้ useState กับ useEffect เข้ามาช่วยแล้ว แล้วก็เอาตัวข้อมูล json มาใช้ด้วย
import { useState, useEffect } from "react";
import ExchangeRatesData from "./exchange-rates.json";

// ตอนอันแรกจะเป็นแบบ Hard Code ให้เราเห็นโครงร่างมันแบบคร่าว ๆ ก่อน 
// อันนี้จะเริ่มเรียกข้อมูลจากไฟล์ json มาทำป็นตัวเลือกแต่ยังไม่สามารถทำให้มันคำนวณตัวมันเองได้


// เปิดการใช้งาน useState ต้องมาก่อนเพื่อใช้ UseEffect
const CurrencyConverter2 = () => {
  const [exchangeRates, setExchangeRates] = useState();
  const [currencyLists, setCurrencyLists] = useState([]);

  // เปิดการใช้งาน useEffect
useEffect(() => {
  const _exchangeRates = ExchangeRatesData;
  const _currencyLists = Object.keys(_exchangeRates.rates);
  // console.log(_currencyLists);
  setExchangeRates(_exchangeRates);
  setCurrencyLists(_currencyLists);
}, []);


  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">คำนวนอัตราแลกเปลี่ยน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/3">
              <label>จำนวน</label>
              <br />
              <input
                type="number"
                name="amount"
                className="p-2 w-full mt-2"
                placeholder="1"
              ></input>
            </div>
            <div className="w-1/3">
              <label>จาก</label>
              <br />
              <select className="p-2 pb-3 w-full mt-2">
                {currencyLists?.map((r) => (
                  <option value={r}>{r}</option>
                ))}
              </select>

              {/* <input
                type="text"
                name="lifeAge"
                className="p-2 w-full mt-2"
                placeholder="THB"
              ></input> */}
            </div>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              {/* สร้างตัวเลือกโดยดึงข้อมูลมาจาก json แล้วเอามา map */}
              <select className="p-2 pb-3 w-full mt-2">
                {currencyLists?.map((r) => (
                  <option value={r}>{r}</option>
                ))}
              </select>
              {/* <input
                type="text"
                name="lifeAge"
                className="p-2 w-full mt-2"
                placeholder="USD"
              ></input> */}
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:bg-amber-400 p-4 w-32 font-bold text-xl"
            >
              คำนวน
            </button>
          </div>
        </form>

        <div className="w-1/2 mx-auto  mt-8">
        <h2 className="text-lg font-bold text-center">อัตราแลกเปลี่ยนย้อนหลัง</h2>
        <div className="flex mt-4">
          <div className="w-1/2">
            <div>1 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB </div>
          </div>
          <div className="w-1/2">
            <div>7 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB </div>
          </div>
        </div>

        <div className="flex mt-4">
          <div className="w-1/2">
            <div>30 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB </div>
          </div>
          <div className="w-1/2">
            <div>60 วัน</div>
            <div className="font-bold text-xl">1 THB = 0.0249101 USD</div>
            <div>1 USD = 32.0190 THB </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default CurrencyConverter2;
