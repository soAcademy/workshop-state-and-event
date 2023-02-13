const Retirement1 = () => {
  return (
    <>
      <div className="w-1/2 mx-auto bg-green-700 p-6 mt-8">
        <h1 className="text-center text-white text-xl font-bold ">
          แผนเกษียณของฉัน
        </h1>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label className="">คุณอายุเท่าไร (ปี)</label>
            <br />
            <input
              type="Number"
              name="currentAge"
              className="p-2 w-full mt-2 "
              placeholder="41"
            ></input>
          </div>
          <div className="w-1/2">
            <label className="">คุณจะมีอายุถึงกี่ปี (ปี)</label>
            <br />
            <input
              type="Number"
              name="lifeAge"
              className="p-2 w-full mt-2"
              placeholder="80"
            ></input>
          </div>
        </div>
        <div className="flex mt-4 space-x-8">
          <div className="w-1/2">
            <label>คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
            <br />
            <input
              type="Number"
              name="retiredAge"
              className="w-full p-2 mt-2 "
              placeholder="55"
            ></input>
          </div>
          <div className="w-1/2">
            <label>ค่าใช้จ่ายต่อเดือนที่ต้องการ (บาท)</label>
            <br />
            <input
              type="Number"
              name="monthlyLivingCost"
              className="p-2 mt-2 w-full"
              placeholder="40000"
            ></input>
          </div>
        </div>
        <div className="w-1/2 pr-4 mt-4">
          <label>อัตราเงินเฟ้อต่อปี (%)</label>
          <br />
          <input
            type="text"
            name="inflation"
            className="p-2 mt-2 w-full"
            placeholder="4.72"
          ></input>
        </div>
        <div className="mt-4 w-full text-center">
          <button className="bg-yellow-700 font-bold text-xl p-4 w-32 hover:bg-blue-200 active:bg-blue-400">คำนวณ</button>
        </div>
      </div>
      <div className="mt-4 w-full text-center">
        <h2 className="text-xl p-2">คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน</h2>
      </div>
      <div className="mt-2 w-full text-center">
        <h1 className="text-5xl font-bold p-2">40,000,000 บาท</h1>
      </div>
    </>
  );
};

export default Retirement1;
