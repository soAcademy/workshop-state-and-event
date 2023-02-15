const LotteryChecker = () => {
  return (
    <>
      <div className="w-1/2 mx-auto mt-10 rounded-lg bg-green-200">
        <div className="text-center">
          <h1 className="text-xl text-black">ตรวจผลลอตเตอรี่ By Kora</h1>
        </div>
        <form className="p-3">
          <p className="mt-2">กรอกเลข</p>
          <div className="w-full mx-auto mt-2">
            <textarea
              type="text"
              id="LotteryID"
              className="border-2 border-blue-300 rounded py-2 w-full"
            />
          </div>
          <div className="flex justify-between my-4">
            <div className="">
              <button className="border-black border-2 rounded-lg p-2">
                ตรวจหวย
              </button>
            </div>
            <div className="border-black border-2 rounded-lg p-2">
              <button>เคลียร์เลข</button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2 mx-auto mt-10 rounded-lg bg-slate-500 p-2 text-white">
        <div className="mt-2">130999 ถูกกินครับ</div>
        <div className="mt-2">297410 เย้! ถูกรางวัลข้างเคียงรางวัลที่ 1</div>
        <div className="mt-2">557584 เย้! ถูกรางวัลที่ 3</div>
        <div className="mt-2">คุณถูกหวยงวดนี้ทั้งสิ้น 180,000 บาท</div>
      </div>
      <div className="text-center mt-4">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ 1 กุมภาพันธ์ 2566
      </div>
      <div className="">
        <table className="table-auto w-full text-center mx-10 mt-5 ">
          <thead className="bg-yellow-500 ">
            <tr className="">
              <td className="border border-black">รางวัลที่ 1</td>
              <td className="border border-black">เลขหน้า 3 ตัว</td>
              <td className="border border-black">เลขท้าย 3 ตัว</td>
              <td className="border border-black">เลขท้าย 2 ตัว</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center border border-black">
                <div className="">รางวัลละ 6,000,000 บาท</div>
                <div className="">297411</div>
              </td>
              <td  className="px-5 text-center border border-black">
                <div className="">รางวัลละ 4,000 บาท</div>
                <div className="flex justify-between">
                  <div className="">181</div>
                  <div className="">789</div>
                </div>
              </td>
              <td className="px-5 text-center border border-black">
                <div className="">รางวัลละ 4,000 บาท</div>
                <div className="flex justify-between">
                  <div className="">101</div>
                  <div className="">664</div>
                </div>
              </td>
              <td className="text-center border border-black">
                <div className="">รางวัลละ 2,000 บาท</div>
                <div className="">92</div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td>รางวัลข้างเคียงรางวัลที่ 1</td>
              <td>รางวัลละ 100,000 บาท</td>
              <td>รางวัลที่ 2</td>
              <td>รางวัลละ 200,000 บาท</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center border border-black">297410</td>
              <td className="text-center border border-black">297412</td>
              <td colSpan="2" className="text-center border border-black">
                <div className="flex justify-between">
                <td className="px-2 text-center border border-black">1</td>
                <td>229120</td>
                <td className="px-2 text-center border border-black">2</td>
                <td>679028</td>
                <td className="px-2 text-center border border-black">3</td>
                <td>677223</td>
                <td className="px-2 text-center border border-black">4</td>
                <td>589702</td>
                <td className="px-2 text-center border border-black">5</td>
                <td>670839</td>
                </div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <td colSpan="2" className="text-center border border-black">รางวัลที่ 3</td>
              <td colSpan="3" className="text-center border border-black">รางวัลละ 80,000 บาท</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>1</td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LotteryChecker;
