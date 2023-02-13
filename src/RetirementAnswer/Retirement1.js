const Retirement1 = () => {
  return (
    <div className="">
      <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">แผนเกษียณของฉัน</h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/2">
              <label>คุณอายุเท่าไร (ปี)</label>
              <br />
              <input
                type="number"
                name="currentAge"
                className="p-2 w-full mt-2"
                placeholder="30"
              ></input>
            </div>
            <div className="w-1/2">
              <label>คุณจะมีอายุถึงกี่ปี (ปี)</label>
              <br />
              <input
                type="number"
                name="lifeAge"
                className="p-2 w-full mt-2"
                placeholder="75"
              ></input>
            </div>
          </div>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/2">
              <label>คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
              <br />
              <input
                type="number"
                name="retireAge"
                className="p-2 w-full mt-2"
                placeholder="60"
              ></input>
            </div>
            <div className="w-1/2">
              <label>ค่าใช้จ่ายต่อเดือนที่ต้องการ (บาท)</label>
              <br />
              <input
                type="number"
                name="livingCost"
                className="p-2 w-full mt-2"
                placeholder="30000"
              ></input>
            </div>
          </div>
          <div className="flex mt-4 space-x-8">
            <div className="w-1/2 pr-4">
              <label>อัตราเงินเฟ้อต่อปี (%)</label>
              <br />
              <input
                type="text"
                name="inflation"
                className="p-2 w-full mt-2"
                placeholder="4.72"
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
      </div>
      <div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน
        </h2>
        <h1 className="text-5xl font-bold text-red-700 mt-4">
          40,000,000 ล้านบาท
        </h1>
      </div>
    </div>
  );
};

export default Retirement1;
