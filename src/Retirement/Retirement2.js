import { useState, useEffect } from "react";
const Retirement2 = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [lifeAge, setLifeAge] = useState("80");
  const [retireAge, setRetireAge] = useState("60");
  const [livingCost, setLivingCost] = useState("20000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState("40000000");
  const [financialPlans, setFinancialPlans] = useState([]);



  const calculateRetirementSaving = () => {
    console.log("Retirement");
  
  
  };

  useEffect(() => {
    calculateRetirementSaving();
    const _financialPlans = [...Array(Number(lifeAge) - Number(currentAge))].map(
      (r, idx) => ({
        age: Number(currentAge) + idx + 1,
        livingCostPerYear: Number(livingCost) * 12 * (1 + Number(inflation) / 100) * (idx +1),
  
      })
    );
    const _retirementSaving = _financialPlans
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0)
      .toFixed(2)
      //คำนวนหาค่าเวลู

    console.log(_financialPlans);
    setFinancialPlans(_financialPlans);
    setRetirementSaving(_retirementSaving);
  }
  , [currentAge, lifeAge, retireAge, livingCost, inflation]);
  



  return (
    <div className="">
      <div className="w-2/3 mx-auto bg-gray-300 mt-4 p-4 rounded-lg">
        <h1 className="font-bolt text-2xl text-center underline">แผนการเกษียณของฉัน</h1>
        <form>
          <div className="flex mt-2 space-x-8 mt-5">
            <div className="w-1/2">
              <label className="m-2" >คุณอายุเท่าไร (ปี)</label>
              <input
                type="number"
                name="currentAge"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                className="p-2 w-full m-2 rounded-lg"
                

              ></input>
            </div>
            <div className="w-1/2">
              <label className="m-2" >คุณจะมีอายุถึงกี่ปี (ปี)</label>
              <input
                type="number"
                name="lifeAge"
                className="p-2 w-full m-2 rounded-lg"
                
                value={lifeAge}
                onChange={(e) => setLifeAge(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="flex mt-2 space-x-8">
            <div className="w-1/2">
              <label className="m-2" >คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
              <input
                type="number"
                name="retireAge"
                className="p-2 w-full m-2 rounded-lg"
                
                value={retireAge}
                onChange={(e) => setRetireAge(e.target.value)}
              ></input>
            </div>
            <div className="w-1/2">
              <label className="m-2" >ค่าใช้จ่ายต่อเดือน (บาท)</label>
              <input
                type="number"
                name="livingCost"
                className="p-2 w-full m-2 rounded-lg"
                
                value={livingCost}
                onChange={(e) => setLivingCost(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex mt-2 space-x-8">
            <div className="w-1/2">
              <label className="m-2">อัตราเงินเฟ้อ (%)</label>
              <input
                type="number"
                name="inflation"
                className="p-2 w-full m-2  rounded-lg"
                
                value={inflation}
                onChange={(e) => setInflation(e.target.value)}
              ></input>
            </div>
          </div>
          {/* <div className="flex mt-4 space-x-8 "> </div> */}
          <div className="text-center mt-5  ">
            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-500 active:bg-amber-400 rounded-lg p-4 w-32 font-bold text-xl"
              onClick={() => calculateRetirementSaving()}
            >
              คำนวณ
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ {retireAge} จำนวน
        </h2>
        <h1 className="text-4xl font-bold text-pink-500 mt-4">
          {retirementSaving} บาท
        </h1>
      </div>
      <div className="mt-8 w-1/2 mx-auto px-8">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-300">
              <td className="font-bold p-2">อายุ</td>
              <td className="font-bold p-2">ค่าใช้จ่ายต่อปี</td>
            </tr>
          </thead>
          <tbody>
            {financialPlans?.map((r, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-gray-50 px-4" : "bg-white"}
              >
                <td className="px-2">{r.age}</td>
                <td className="px-2">
                  {new Intl.NumberFormat("th-TH").format(
                    r.livingCostPerYear.toFixed(0)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
   
export default Retirement2;
