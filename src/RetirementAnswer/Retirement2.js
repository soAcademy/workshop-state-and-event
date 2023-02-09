import { useState, useEffect } from "react";

const Retirement2 = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [lifeAge, setLifeAge] = useState("75");
  const [retireAge, setRetireAge] = useState("60");
  const [livingCostPerMonth, setLivingCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState("40000000");

  const calculateRetirementSaving = () => {
    console.log("Retirement");
  };

  useEffect(() => {
    calculateRetirementSaving();
  }, [currentAge, lifeAge, retireAge, livingCostPerMonth, inflation]);

  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">แผนเกษียณของฉัน</h1>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label>คุณอายุเท่าไร (ปี)</label>
            <br />
            <input
              name="currentAge"
              type="text"
              className="p-2 w-full mt-2"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label>คุณจะมีอายุถึงกี่ปี (ปี)</label>
            <br />
            <input
              name="lifeAge"
              type="text"
              className="p-2 w-full mt-2"
              value={lifeAge}
              onChange={(e) => setLifeAge(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label>คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
            <br />
            <input
              name="retireAge"
              type="text"
              className="p-2 w-full mt-2"
              value={retireAge}
              onChange={(e) => setRetireAge(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label>ค่าใช้จ่ายต่อเดือนที่ต้องการ (บาท)</label>
            <br />
            <input
              name="livingCostPerMonth"
              type="text"
              className="p-2 w-full mt-2"
              value={livingCostPerMonth}
              onChange={(e) => setLivingCostPerMonth(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2 pr-4">
            <label>อัตราเงินเฟ้อต่อปี (%)</label>
            <br />
            <input
              name="inflation"
              type="text"
              className="p-2 w-full mt-2"
              value={inflation}
              onChange={(e) => setInflation(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
        </h2>
        <h1 className="text-5xl font-bold text-red-700 mt-4">
          {new Intl.NumberFormat("th-TH").format(retirementSaving)}
          {" "}ล้านบาท
        </h1>
      </div>
    </div>
  );
};

export default Retirement2;
