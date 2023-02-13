import { useState, useEffect } from "react";
const content =
  "     เมื่อทำงานด้วยความมุ่งมั่นขยันหมั่นเพียรตลอดมา อยากให้ลองวาดภาพของตนเองหลังเกษียณจากการงานดูบ้าง ทุกคนล้วนใฝ่ฝันที่จะใช้ชีวิตสบาย ๆ  มีเงินพอใช้จ่าย มีสุขภาพดี และมีเวลาว่างสำหรับทำกิจกรรมต่าง ๆ ที่เป็นความสุขของชีวิต ไม่ว่าจะเป็นการอยู่บ้านกับลูกหลาน ดูแลสัตว์เลี้ยง ทำสวน ทำงานอดิเรกที่ชอบ เดินทางท่องเที่ยวพักผ่อน พบปะสังสรรค์กับเพื่อนเก่า หรือทำงานช่วยเหลือสังคมตามที่กำลังและโอกาสเอื้ออำนวย​​";

const FinancailPlanTable = ({ dataFortable }) => {
  console.log("dataFortable", dataFortable);
  // console.log("age>>>>>>.",dataFortable[0].age);
  return (
    <>
      <table className="w-1/2 mx-auto p-2 text-center ">
        <tbody>
          <tr>
            <td className="w-1/5 bg-slate-200 text-xl">อายุ</td>
            <td className="w-1/3 bg-red-300 text-xl">ค่าใช้จ่าย</td>
            <td className="w-1/3 bg-teal-200 text-xl">พอร์ทการลงทุน</td>
          </tr>
          {dataFortable.map((r) => (
            <tr>
              <td className="bg-gradient-to-r from-cyan-200 to-blue-200 w-1/12 ">{r.age}</td>
              <td className="bg-gradient-to-r from-red-200 to-red-500">{r.livingCostPerYear.toFixed(0)}</td>
              <td className="bg-gradient-to-r from-cyan-200 to-blue-200">{r.portValue.toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const RetirementPlan = () => {
  const [currentAge, setCurrentAge] = useState("32");
  const [dieAge, setDieAge] = useState("80");
  const [retireAge, setRetireAge] = useState("60");
  const [costPerMonth, setCostPerMonth] = useState("30000");
  const [inflation, setInflation] = useState("4");
  const [retirementSaving, setRetirementSaving] = useState("40000000");
  const [financailPlans, setFinancePlans] = useState([]);
  const [investmentPerYear, setInvestmentPerYear] = useState("100000");
  const [investmentReturnRate, setInvestmentReturnRate] = useState("8");
  const [dataFortable, setDataFortable] = useState([]);
  const [toggle, setToggle] = useState(false);

  const calculateRetirement = () => {
    // console.log("Retirement");
    const _financialPlan = [...Array(Number(dieAge) - Number(currentAge))].map(
      (r, idx) => ({
        age: Number(currentAge) + idx + 1,
        livingCostPerYear:
          Number(costPerMonth) *
          12 *
          (1 + Number(inflation) / 100) ** (idx + 1),
      })
    );

    const lifeSpan = [...Array(Number(dieAge) - Number(currentAge)).keys()];
    console.log("lifespan", lifeSpan);
    const _investmentPlan = lifeSpan.reduce((acc, yearIndex) => {
      const pastPortValue = yearIndex > 0 ? acc[yearIndex - 1] : 0; // value check ว่าถ้าเป็น ตัวแรกจะให้ค่า pastPortValue = 0;
      const isNotRetire = yearIndex < Number(retireAge) - Number(currentAge); // boolean  true =  not retire, false =  retire  ***
      const investThisYearValue = isNotRetire ? Number(investmentPerYear) : 0; // ถ้ายังไม่ retire เอาเงิมาลงทุน ถ้า retire แล้วไม่มีเงิน
      console.log(
        "acc",
        acc,
        isNotRetire,
        " isNotRetire :",
        `${yearIndex} < ${retireAge} - ${currentAge}`
      );
      const livingCostPerYear = isNotRetire // ถ้า retire แล้วถอนเงินมาใช้
        ? 0
        : _financialPlan[yearIndex].livingCostPerYear;
      const value =
        (pastPortValue + investThisYearValue - livingCostPerYear) *
        (1 + Number(investmentReturnRate) / 100);
      return [...acc, value];
    }, []);
    console.log("_investmentPlan", _investmentPlan);

    const _retirementSaving = _financialPlan
      .filter((r) => r.age >= Number(retireAge))
      .reduce((acc, r) => acc + r.livingCostPerYear, 0);

    console.log("Financial Plan", _financialPlan);
    // console.log("_retirementSaving", _retirementSaving);
    setFinancePlans(_financialPlan);
    setRetirementSaving(_retirementSaving);

    console.log(">>>>>>>>>>", financailPlans);

    const dataFortable = financailPlans.map((r, idx) => {
      return {
        age: r.age,
        livingCostPerYear: r.livingCostPerYear,
        portValue: _investmentPlan[idx],
      };
    });

    console.log("dataFortable", dataFortable);
    setDataFortable(dataFortable);
  };

  useEffect(() => {
    currentAge.length > 0 &&
    dieAge.length > 0 &&
    retireAge.length > 0 &&
    Number(currentAge) <= Number(retireAge) &&
    Number(retireAge) <= Number(dieAge) &&
    costPerMonth.length > 0 &&
    inflation.length > 0
      ? calculateRetirement()
      : setRetirementSaving(0);
  }, [
    currentAge,
    dieAge,
    retireAge,
    costPerMonth,
    inflation,
    investmentPerYear,
    investmentReturnRate,
  ]);
  // useEffect(()=>{
  //   setDataFortable(dataFortable)
  // },[]);
  // console.log(">>>>>>", netSaveMoney);

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-full  h-screen grid grid-cols-2 ">
          <div className="mt-10 p-10 ">
            <img className="rounded-lg shadow-lg h-2/3" src="retirepic.jpg" />
            <div className="p-2 mt-2">
              <h1 className="text-2xl font-bold text-center">
                เกษียณสุขทำอย่างไร?
              </h1>
              <p>{content}</p>
            </div>
          </div>
          <div className=" m-4">
            <h1 className="text-center text-2xl font-bold pt-4 text-white">
              แผนการเกษียณของฉัน
            </h1>
            <div className="bg-slate-300 w-full text-center mx-auto rounded-lg shadow-lg">
              <div className=" grid grid-cols-2 gap-4 p-4 w-full mx-auto mt-10 ">
                <div className="space-y-4 ">
                  <div className="font-bold">คุณมีอายุเท่าไร</div>
                  <div>
                    <input
                      onChange={(e) => setCurrentAge(e.target.value)}
                      value={currentAge}
                      className="w-full bg-white p-2 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="font-bold">มีอายุถึงกี่ปี</div>
                    <div>
                      <input
                        className="w-full bg-white p-2 rounded-lg"
                        onChange={(e) => setDieAge(e.target.value)}
                        value={dieAge}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="font-bold">เกษียณตอนอายุ</div>
                    <div>
                      <input
                        className="w-full bg-white p-2 rounded-lg"
                        onChange={(e) => setRetireAge(e.target.value)}
                        value={retireAge}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="font-bold">ค่าใช้จ่ายต่อเดือน</div>
                    <div>
                      <input
                        className="w-full bg-white p-2 rounded-lg"
                        onChange={(e) => setCostPerMonth(e.target.value)}
                        value={costPerMonth}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="font-bold">อัตราเงินเฟ้อ</div>
                    <div>
                      <input
                        className="w-full bg-white p-2 rounded-lg"
                        onChange={(e) => setInflation(e.target.value)}
                        value={inflation}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="font-bold">เงินลงทุนต่อปี</div>
                    <div>
                      <input
                        className="w-full bg-white p-2 rounded-lg"
                        onChange={(e) => setInvestmentPerYear(e.target.value)}
                        value={investmentPerYear}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="font-bold">พอร์ทการลงทุน%</div>
                    <div>
                      <input
                        className="w-full bg-white p-2 rounded-lg"
                        onChange={(e) =>
                          setInvestmentReturnRate(e.target.value)
                        }
                        value={investmentReturnRate}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setToggle(!toggle)}
                  className="w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 p-2 mx-auto m-4 font-bold text-xl rounded-lg"
                >
                  คำนวณ
                </button>
              </div>
            </div>
            <div className=" text-center mt-4 font-bold text-xl text-white">
              ตอนนี้มีเงินเก็บตอนอายุ {retireAge} ปี จำนวน
            </div>
            <div className=" text-center font-bold text-red-500 text-4xl mt-4">
              {" "}
              {new Intl.NumberFormat("th-TH").format(retirementSaving)}
            </div>
          </div>
        </div>
        {toggle && (
          <div className=" bg-transparant ">
            <FinancailPlanTable dataFortable={dataFortable} />
          </div>
        )}
      </div>
    </>
  );
};

export default RetirementPlan;
