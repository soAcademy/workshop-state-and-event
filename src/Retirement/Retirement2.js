import { useState, useEffect } from "react";

const Retirement2 = () => {
  const [currentAge, setCurrentAge] = useState("");
  const [lifeAge, setLifeAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [costPerMonth, setCostPerMonth] = useState("");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState("");

  const calculateRetirementSaving = () => {
    console.log (calculateRetirementSaving);
  };  

  useEffect(() => {
    calculateRetirementSaving();
  }, [currentAge, lifeAge, retirementAge, costPerMonth, inflation]);

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="text-center font-bold text-2xl pt-3">
          แผนการเกษียณของฉัน
        </h1>

        <div className="flex w-full mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">คุณอายุเท่าไหร่ (ปี)</div>
            <input
              name="currentAge"
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={currentAge}
              placeholder="อายุ"
              onChange={(e) => setCurrentAge(e.target.value)}
            />
          </div>
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">คาดการณ์อายุที่จะเสียชีวิต (ปี)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={lifeAge}
              placeholder="อายุขัย"
              onChange={(e) => setLifeAge(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">คาดการณ์อายุที่เกษียณ (ปี)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={retirementAge}
              placeholder="อายุเกษียณ"
              onChange={(e) => setRetirementAge(e.target.value)}
            />
          </div>
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">ค่าใช้จ่ายต่อเดือน(บาท)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={costPerMonth}
              placeholder="ค่าใช้จ่าย/เดือน"
              onChange={(e)=>setCostPerMonth(e.target.value)}
            />
          </div>
        </div>

        <div className="flex mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <div className="text-xl pt-3">อัตราเงินเฟ้อต่อปี (%)</div>
            <input
              type="text"
              className="p-2 w-full mt-2 rounded-lg"
              value={inflation}
              placeholder="อัตราเงินเฟ้อ"
              onChange={(e)=>setInflation(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-yellow-100 hover:bg-yellow-200 text-xl font-bold py-3 px-6 rounded-full"
          >
            คำนวณ
          </button>
        </div>

        <div className="w-1/2 mx-auto text-center mt-8">
          <h2 className="text-lg font-bold">
            คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน
          </h2>
          <h1 className="text-5xl font-bold text-red-800 mt-4">{retirementSaving.toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
};
export default Retirement2;
