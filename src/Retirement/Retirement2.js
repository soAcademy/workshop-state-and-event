import { useState } from "react";

const Retirement2 = () => {
  const [ageNow, setAgeNow] = useState(30);
  const [ageEOL, setAgeEOL] = useState(75);
  const [ageRet, setAgeRet] = useState(60);
  const [expense, setExpense] = useState(30000);
  const [inflat, setInflat] = useState(4.72);
  const [resSaving, setResSaving] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center font-prompt">
      <div className="rounded-lg bg-gray-100 shadow-lg p-4">
        <div className="mb-12">
          <h1 className="text-4xl text-center">แผนการเกษียณของฉัน</h1>
        </div>
        <form className="mb-12">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                คุณอายุเท่าไร
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
                value={ageNow}
                onChange={(e) => setAgeNow(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                มีอายุถึงกี่ปี
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
                value={ageEOL}
                onChange={(e) => setAgeEOL(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                เกษียณตอนอายุ
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
                value={ageRet}
                onChange={(e) => setAgeRet(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                ค่าใช้จ่ายต่อเดือน
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                อัตราเงินเฟ้อ
              </label>
              <input
                type="number"
                step="0.01"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
                value={inflat}
                onChange={(e) => setInflat(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            {/* <button
              type="submit"
              className="w-full bg-yellow-300 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              คำนวน
            </button> */}
          </div>
        </form>
        <div>
          <h1 className="text-xl text-center">
            คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน
          </h1>
        </div>
        <div>
          <h1 className="text-3xl text-red-400 font-bold text-center">
            {resSaving} บาท
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Retirement2;
