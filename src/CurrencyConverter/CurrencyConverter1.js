import react from "react";
const CurrencyConverter1 = () => {
  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">คำนวนอัตราแลกเปลี่ยน</h1>
        {/* ได้กล่องฟอร์มไว้กรอกข้อมูลมาแล้ว */}
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
              <input
                type="text"
                name="lifeAge"
                className="p-2 w-full mt-2"
                placeholder="THB"
              ></input>
            </div>
            <div className="w-1/3">
              <label>ไป</label>
              <br />
              <input
                type="text"
                name="lifeAge"
                className="p-2 w-full mt-2"
                placeholder="USD"
              ></input>
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
        {/* จบกล่อง Form ที่ตรงนี้ */}
        
        {/* สร้างกล้องใหญ่อันใหม่ที่ตรงนี้ */}
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
        {/* จบกล่องใหญ่ที่สองที่ตรงนี้ */}
      </div>
    </div>
  );
};
export default CurrencyConverter1;
