import { useEffect, useState } from "react";

const Table = ({ dataFortable }) => {
  return (
    <>
      <table className="text-center w-full mx-auto text-sm rounded-lg">
        <tbody>
          <tr>
            <td className="bg-red-100 font-bold rounded-tl-lg border-2 border-black">อายุ</td>
            <td className="bg-teal-300 font-bold border-2 border-black">ค่าใช้จ่าย</td>
            <td className="bg-cyan-500 font-bold rounded-tr-lg border-2 border-black">PortValue</td>
          </tr>

          {dataFortable.map((r,idx) => {
            return (
              <>
                {" "}
                <tr>
                  <td className="bg-red-100 border-x-2 border-black  ">{r.age}</td>
                  <td className="bg-teal-300 border-x-2 border-black ">{new Intl.NumberFormat("th-TH").format(r.livingCostPerYear.toFixed(0))}</td>
                  <td className="bg-cyan-500 border-x-2 border-black ">{new Intl.NumberFormat("th-TH").format(r.portValue.toFixed(0))}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const Test = () => {
  const [currentAge, setCurrentAge] = useState("32");
  const [dieAge, setDieAge] = useState("80");
  const [retireAge, setRetireAge] = useState("60");
  const [costPerMonth, setCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4.72");
  const [retirementSave, setRetirementSave] = useState("40000000");
  const [investmentPerYear, setInvestmentPerYear] = useState("100000");
  const [investReturnRate, setInvestmentReturnRate] = useState("10");
  const [dataFortable, setDataFortable] = useState([]);
  // console.log(currentAge, dieAge, retireAge, costPerMonth, inflation);

  const retirementPlan = () => {
    const lifeSpan = [...Array(Number(dieAge) - Number(currentAge)).keys()];

    const financailPlans = lifeSpan?.map((r, idx) => {
      return {
        age: Number(currentAge) + idx + 1,
        livingCostPerYear:
          Number(costPerMonth) *
          12 *
          (1 + Number(inflation) / 100) ** (idx + 1),
      };
    });
    const allCost = financailPlans
      ?.filter((r) => r.age >= retireAge)
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);

    const portValue = lifeSpan.reduce((acc, yearIndex) => {
      const pastPortValue = yearIndex > 0 ? acc[yearIndex - 1] : 0;
      const isNotRetire = yearIndex < Number(retireAge) - Number(currentAge); //true = not retire, false = retire
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0;
      const withDraw = isNotRetire
        ? 0
        : financailPlans[yearIndex].livingCostPerYear;
      const value =
        (pastPortValue + investThisYearValue - withDraw) *
        (1 + Number(investReturnRate) / 100);
      console.log(
        `pastPortValue :${pastPortValue}, isNotRetire :${isNotRetire}, investThisYearValue:${investThisYearValue},withDraw :${withDraw}`
      );
      console.log("value", value);
      console.log("acc", acc);
      return [...acc, value];
    }, []);
    console.log("portValue", portValue);
    const dataFortable = financailPlans?.map((r, idx) => {
      return {
        age: r.age,
        livingCostPerYear: r.livingCostPerYear,
        portValue: portValue[idx],
      };
    });
    // console.log("dataFortable",dataFortable);

    setDataFortable(dataFortable);
    setRetirementSave(allCost);
    console.log("dataFortable>>>>>>", dataFortable);
    return;
  };

  useEffect(() => {
    currentAge.length > 0 &&
    dieAge.length > 0 &&
    retireAge.length > 0 &&
    Number(currentAge) <= Number(retireAge) &&
    Number(retireAge) <= Number(dieAge) &&
    costPerMonth.length > 0 &&
    inflation.length > 0
      ? retirementPlan()
      : setRetirementSave(0);
  }, [currentAge, inflation, costPerMonth, retireAge, dieAge, currentAge,investmentPerYear,investReturnRate]);

  return (
    <>
      <div className="flex relative bg-gradient-to-b from-cyan-900 to-cyan-200 font-kanit">
        <div className=" w-full  h-full bg-transparent ">
          <div className="flex flex-row flex justify-center z-40 pt-5">
            <div className="  text-white text-2xl text-center p-5">
              แผนการเกษียณของฉัน
            </div>
            <div>
              <img className="h-[100px]" src="pngwing.com.png" />
            </div>
          </div>
          <div className=" bg-gradient-to-r from-cyan-500 to-cyan-600 w-1/2 mx-auto pb-4 rounded-lg z-0">
            <div className="w-full my-auto mx-auto grid grid-cols-2 gap-4 p-4">
              <div>
                <div className="text-bold text-xl pb-retireAge2">
                  อายุปัจจุบัน
                </div>
                <div>
                  <input
                    onChange={(e) => setCurrentAge(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={currentAge}
                  />
                </div>
              </div>
              <div>
                <div className="text-bold text-xl pb-2">ตายตอนกี่ปี</div>
                <div>
                  <input
                    onChange={(e) => setDieAge(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={dieAge}
                  />
                </div>
              </div>
              <div>
                <div className="text-bold text-xl pb-2">เกษียณตอนอายุ</div>
                <div>
                  <input
                    onChange={(e) => setRetireAge(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={retireAge}
                  />
                </div>
              </div>
              <div>
                <div className="text-bold text-xl pb-2">ค่าใช้จ่ายต่อเดือน</div>
                <div>
                  <input
                    onChange={(e) => setCostPerMonth(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={costPerMonth}
                  />
                </div>
              </div>
              <div>
                <div className="text-bold text-xl pb-2">อัตราเงินเฟ้อ</div>
                <div>
                  <input
                    onChange={(e) => setInflation(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={inflation}
                  />
                </div>
              </div>
              <div>
                <div className="text-bold text-xl pb-2">เงินลงทุนต่อปี</div>
                <div>
                  <input
                    onChange={(e) => setInvestmentPerYear(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={investmentPerYear}
                  />
                </div>
              </div>
              <div>
                <div className="text-bold text-xl pb-2">อัตราการเติบโต</div>
                <div>
                  <input
                    onChange={(e) => setInvestmentReturnRate(e.target.value)}
                    className="border border-slate-200 w-full p-3 rounded-lg"
                    value={investReturnRate}
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto text-center pt-14">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 w-1/2 text-2xl font-bold rounded-lg">
                คำนวณ
              </button>
            </div>
          </div>
          <div className="p-2 text-2xl font-bold text-center text-white font-kanit">
            เงินที่ต้องสะสมตอนอายุ {retireAge} ปี
          </div>
          <div className="">
          <div className="text-center text-6xl text-black underline decoration-white p-4 font-bold">
            {new Intl.NumberFormat("th-TH").format(retirementSave)} บาท
          </div>
          </div>
        </div>
        <div className="w-1/2 my-10 mr-10">
          <Table dataFortable={dataFortable} />
        </div>
      </div>
    </>
  );
};
export default Test;
