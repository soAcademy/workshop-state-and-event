import { useInputVal, useResult } from "./hooks";

const Retirement2 = () => {
  const {
    ageNow,
    setAgeNow,
    ageEOL,
    setAgeEOL,
    ageRet,
    setAgeRet,
    expense,
    setExpense,
    inflat,
    setInflat,
    invest,
    setInvest,
    rate,
    setRate,
  } = useInputVal();

  const { savingYears, resSaving } = useResult({
    ageNow,
    ageEOL,
    ageRet,
    expense,
    inflat,
    invest,
    rate,
  });

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
