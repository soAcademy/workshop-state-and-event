const Retirement1 = () => {

return (
<div className="">
  <div className="w-2/3 mx-auto bg-red-400 mt-4 p-4">
    <h1 className="font-bolt text-2xl text-center">แผนการเกษียณของฉัน</h1>
    <form>
      <div className="flex mt-2 space-x-8">
        <div className="w-1/2">
          <label>คุณอายุเท่าไร (ปี)</label>
        <input
        type="number"
        name="currentAge"
        className="p-2 w-full m-2"
        >
        </input>
        </div>
        <div className="w-1/2">
          <label>คุณจะมีอายุถึงกี่ปี (ปี)</label>
          <input
          type="number"
          name="lifeAge"
          className="p-2 w-full m-2"
          placeholder="80"
          >
          </input>
        </div>
      </div>
      
      <div className="flex mt-4 space-x-8">
        <div className="w-1/2" > 
        <label>คุณจะเกษียณตอนอายุเท่าไร (ปี)</label>
        <input
        type="number"
        name="retireAge"
        className="p-2 w-full m-2"
        laceholder="60"
        >
        </input>
        </div>
        <div className="w-1/2">
          <label>ค่าใช้จ่ายต่อเดือน (บาท)</label>
          <input
          type="number"
          name="livingCost"
          className="p-2 w-full m-2"
          placeholder="30000"
          >
          </input>
        </div>
      </div>
      <div className="flex mt-4 space-x-8">
        <div className="w-1/2 pr-4" > 
        <label>อัตราเงินเฟ้อ (%)</label>
        <input
        type="number"
        name="inflation"
        className="p-2 w-full mt-2 "
        placeholder="4.72"
        >
        </input>
        </div>
      </div>
      {/* <div className="flex mt-4 space-x-8 "> </div> */}
      <div className="text-center mt-8  ">
        <button
        type="submit"
        className="bg-purple-400 hover:bg-purple-500 active:bg-amber-400 rounded-lg p-4 w-32 font-bold text-xl"
        >
          คำนวณ
        </button>
      </div>
    </form>
  </div>
  <div className="w-1/2 mx-auto text-center mt-8">
        <h2 className="text-lg font-bold">
          คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน
        </h2>
        <h1 className="text-4xl font-bold text-pink-500 mt-4">
          40,000,000 ล้านบาท
        </h1>
      </div>
</div>  
  )
};

export default Retirement1;