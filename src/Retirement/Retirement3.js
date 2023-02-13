import { useState, useEffect } from "react";
const Retirement2 = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [lifeAge, setLifeAge] = useState("80");
  const [retireAge, setRetireAge] = useState("60");
  const [livingCost, setLivingCost] = useState("20000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSaving, setRetirementSaving] = useState("40000000");
  const [financialPlans, setFinancialPlans] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState("10000");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("7.0");

  const calculateRetirementSaving = () => {
    console.log("Retirement");
    
    const lifeSpans = [...Array(Number(lifeAge) - Number(currentAge))];
    const _financialPlans0 = [
      ...Array(Number(lifeAge) - Number(currentAge)),
    ].map((r, idx) => ({
      age: Number(currentAge) + idx + 1,
      livingCostPerYear:
        Number(livingCost) * 12 * (1 + Number(inflation) / 100) * (idx + 1),
    }));

    const _investmentPlans = lifeSpans.reduce((acc, r) => {
      const yearIndex = acc.length;
      const pastPortfolioValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      //ผลงานที่ผ่านมามูลค่า pastPortfolioValue
      const isRetire = yearIndex < Number(retireAge) - Number(currentAge);
      const investThisYearValue = isRetire ? Number(investmentPerYear) : 0;
      const livingCostPerYear = isRetire
        ? 0
        : _financialPlans0[yearIndex].livingCostPerYear;
        
          //การลงทุนปีนี้มูลค่า = investmentPerYear
          //ถ้าอายุถึงจะได้เงินลงทุน
      

          //ค่าครองชีพต่อปี = livingCostPerYear
          //ถ้าอายุไม่ถึงดึงเงินลงทุนมาไม่ได้
      const value =
        (pastPortfolioValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
        //ผลงานที่ผ่านมามูลค่า + การลงทุนปีนี้มูลค่า - ค่าครองชีพต่อปี
        //1 + Number(อัตราผลตอบแทนการลงทุน) / 100 เพื่อให้ได้หน่วย 0.10
      return [...acc, value];
    }, []);
    

    const _financialPlans = _financialPlans0.map((r, idx) => ({
      ...r,
      investmentValue: _investmentPlans[idx],
    }));


    const _retirementSaving = _financialPlans
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0)
      .toFixed(2);

    console.log(_financialPlans);
    setFinancialPlans(_financialPlans);
    setRetirementSaving(_retirementSaving);
  };

  useEffect(() => {
    // calculateRetirementSaving();
    currentAge.length > 0 &&
    lifeAge.length > 0 &&
    retireAge.length > 0 &&
    Number(currentAge) <= Number(retireAge) &&
    Number(retireAge) <= Number(lifeAge) &&
    livingCost.length > 0 &&
    inflation.length > 0
      ? calculateRetirementSaving()
      : setRetirementSaving(0);
  }, [currentAge, lifeAge, retireAge, livingCost, inflation, investmentPerYear, investmentReturnRate]);

  return (
    <div className="">
      <div className="w-2/3 mx-auto bg-gray-300 mt-4 p-4 rounded-lg">
        <h1 className="font-bolt text-2xl text-center underline">
          แผนการเกษียณของฉัน
        </h1>
        <form>
          <div className="flex mt-2 space-x-8 mt-5">
            <div className="w-1/2">
              <label className="m-2">คุณอายุเท่าไร (ปี)</label>
              <input
                type="number"
                name="currentAge"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                className="p-2 w-full m-2 rounded-lg"
              ></input>
            </div>
            <div className="w-1/2">
              <label className="m-2">คุณจะมีอายุถึงกี่ปี (ปี)</label>
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
              <label className="m-2">คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
              <input
                type="number"
                name="retireAge"
                className="p-2 w-full m-2 rounded-lg"
                value={retireAge}
                onChange={(e) => setRetireAge(e.target.value)}
              ></input>
            </div>
            <div className="w-1/2">
              <label className="m-2">ค่าใช้จ่ายต่อเดือน (บาท)</label>
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
           {/* ************************************** */}
          <hr className="my-4" />
        <div className="flex mt-2 space-x-8">
          <div className="w-1/2">
            <label className="m-2" >เงินลงทุนต่อปี (บาท)</label>
            
            <input
              name="investmentPerYear"
              type="number"
              className="p-2 w-full m-2 rounded-lg"
              value={investmentPerYear}
              onChange={(e) => setInvestmentPerYear(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2">
            <label className="m-2" >อัตราผลตอบแทนการลงทุนต่อปี (%)</label>
            
            <input
              name="livingCost"
              type="number"
              className="p-2 w-full m-2 rounded-lg"
              value={investmentReturnRate}
              onChange={(e) => setInvestmentReturnRate(e.target.value)}
            ></input>
          </div>
        </div>
        {/* ************************************** */}
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
              <td className="font-bold p-2">มูลค่าพอร์ตการลงทุน</td>
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
                <td className="px-2">
                  {new Intl.NumberFormat("th-TH").format(
                    r.investmentValue.toFixed(0)
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
