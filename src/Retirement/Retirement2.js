import { useState, useEffect } from "react";

const Retirement2 = () => {
  const [ageNow, setAgeNow] = useState(30);
  const [ageEOL, setAgeEOL] = useState(75);
  const [ageRet, setAgeRet] = useState(60);
  const [expense, setExpense] = useState(30000);
  const [inflat, setInflat] = useState(4.72);
  const [invest, setInvest] = useState(10000);
  const [rate, setRate] = useState(7);

  const [savingYears, setSavingYears] = useState([]);
  const [resSaving, setResSaving] = useState(0);

  useEffect(() => {
    // console.log(ageNow, ageEOL, ageRet, expense, inflat, invest, rate);

    if (ageEOL >= ageRet && ageRet >= ageNow && ageNow > 0) {
      //financial plan
      const financialPlan = [...Array(ageEOL - ageNow + 1)]
        ?.map((r, idx) => ({
          age: ageNow + idx,
          savPerYr:
            expense * 12 * Math.pow(1 + inflat / 100, ageNow + idx - ageNow),
        }))
        .reduce((acc, r, idx) => {
          // console.log(acc);
          return idx === 0
            ? [
                {
                  age: r.age,
                  savPerYr: r.savPerYr,
                  savPlan: invest * 12 * (1 + rate / 100),
                },
              ]
            : [
                ...acc,
                {
                  age: r.age,
                  savPerYr: r.savPerYr,
                  savPlan:
                    r.age <= ageRet
                      ? (acc[acc.length - 1].savPlan + invest * 12) *
                        (1 + rate / 100)
                      : (acc[acc.length - 1].savPlan - r.savPerYr) *
                        (1 + rate / 100),
                },
              ];
        }, []);
      // console.log(financialPlan);
      setSavingYears(financialPlan);

      const sumRetReq = financialPlan.reduce(
        (acc, r) => (r.age > ageRet ? acc + r.savPerYr : acc),
        0
      );
      // console.log(sumRetReq);
      setResSaving(sumRetReq);
    } else {
      setResSaving(0);
    }
  }, [ageNow, ageEOL, ageRet, expense, inflat, invest, rate]);

  return (
    <div className="w-full h-full flex justify-center font-prompt p-14">
      <div>
        <div className="rounded-lg bg-gray-100 shadow-lg mb-12 p-4">
          <div className="mb-12">
            <h1 className="text-4xl text-center">แผนการเกษียณของฉัน</h1>
          </div>
          <form className="mb-12">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  คุณอายุเท่าไร (ปี)
                </label>
                <input
                  type="Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={ageNow}
                  onChange={(e) => setAgeNow(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  มีอายุถึงกี่ปี (ปี)
                </label>
                <input
                  type="Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={ageEOL}
                  onChange={(e) => setAgeEOL(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  เกษียณตอนอายุ (ปี)
                </label>
                <input
                  type="Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={ageRet}
                  onChange={(e) => setAgeRet(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  ค่าใช้จ่ายต่อเดือน (บาท)
                </label>
                <input
                  type="Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={expense}
                  onChange={(e) => setExpense(Number(e.target.value))}
                />
                <div className="text-sm text-gray-400 pl-3">
                  ปีละ {(expense * 12).toLocaleString("TH")} บาท
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  อัตราเงินเฟ้อ (%)
                </label>
                <input
                  type="Number"
                  step="0.01"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={inflat}
                  onChange={(e) => setInflat(Number(e.target.value))}
                />
              </div>

              <div></div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  เงินลงทุนต่อเดือน (บาท)
                </label>
                <input
                  type="Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={invest}
                  onChange={(e) => setInvest(Number(e.target.value))}
                />
                <div className="text-sm text-gray-400 pl-3">
                  ปีละ {(invest * 12).toLocaleString("TH")} บาท
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  อัตราผลตอบแทนการลงทุนต่อปี (%)
                </label>
                <input
                  type="Number"
                  step="0.01"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </div>
            </div>
          </form>
          <div>
            <h1 className="text-xl text-center">
              คุณต้องมีเงินเก็บตอนอายุ {ageRet} ปี จำนวน
            </h1>
          </div>
          <div>
            <h1 className="text-3xl text-red-400 font-bold text-center">
              {Math.round(resSaving).toLocaleString("TH")} บาท
            </h1>
          </div>
        </div>

        {resSaving > 0 && (
          <div className="text-sm bg-gray-100 rounded-lg shadow-lg p-4">
            <table className="w-full border-collapse border border-slate-400">
              <thead className="sticky top-0">
                <tr>
                  <th className="bg-gray-200 border border-slate-300 py-1">
                    อายุ (ปี)
                  </th>
                  <th className="bg-gray-200 border border-slate-300 py-1">
                    ค่าใช้จ่ายต่อปี (บาท)
                  </th>
                  <th className="bg-gray-200 border border-slate-300 py-1">
                    เงินเก็บสิ้นปี (บาท)
                  </th>
                </tr>
              </thead>
              <tbody>
                {savingYears.map((year) => (
                  <tr
                    key={year.age}
                    className={`${year.age > ageRet ? `bg-gray-200` : ``}`}
                  >
                    <td className="text-center border border-slate-300 py-1">
                      {year.age}
                    </td>
                    <td className="text-center border border-slate-300 py-1">
                      {Math.round(year.savPerYr).toLocaleString("TH")}
                    </td>
                    <td
                      className={`text-center border border-slate-300 py-1 ${
                        year.savPlan < 0 ? `text-red-400` : `text-black`
                      }`}
                    >
                      {Math.round(year.savPlan).toLocaleString("TH")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Retirement2;
