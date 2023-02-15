const LotteryCheck = () => {
  const a5 = [];
  for (let i = 1; i <= 5; i++) {
    a5.push(i);
  }
  console.log(a5);

  const a10 = [];
  for (let i = 1; i <= 10; i++) {
    a10.push(i);
  }
  console.log(a10);

  const a50 = [];
  for (let i = 1; i <= 50; i++) {
    a50.push(i);
  }
  console.log(a50);

  const a100 = [];
  for (let i = 1; i <= 100; i++) {
    a100.push(i);
  }
  console.log(a100);

  return (
    <>
      <div className="m-4">
        <h1 className="font-bold text-xl text-center">ตรวจผลลอตเตอรี่</h1>
        <div className="w-1/2 bg-gray-200 mx-auto mt-8 p-4">
          <p>กรอกเลข</p>
          <input type="text" className="bg-white h-32 w-full mt-2"></input>
          <div className="flex justify-evenly py-4">
            <button className="rounded bg-yellow-300 py-2 px-4 font-bold">
              ตรวจหวย
            </button>
            <button className="rounded bg-gray-300 py-2 px-4 font-bold">
              เคลียร์เลย
            </button>
          </div>
        </div>
        <div className="w-1/2 bg-red-100 mx-auto m-4 p-4">
          <div>111111 ถูกกินครับ</div>
          <div>222222 เย้ถูกรางวัลที่ 1</div>
          <div className="mt-2">คุณถูกหวยงวดนี้ทั้งสิ้น 200,000 บาท</div>
        </div>
        <h1 className="text-center">
          ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ 1 กุมภาพันธ์ 2566
        </h1>
        <div>
          {/* รางวัลที่ 1 */}
          <div className="flex justify-evenly w-11/12 mx-auto text-center mt-4">
            <div className="w-2/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 1
              </p>
              <p className="pt-2">รางวัลละ 6,000,000 บาท</p>
              <p className="text-xl font-bold text-blue-300">297411</p>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขหน้า 3 ตัว
              </p>
              <p className="pt-2">รางวัลละ 4,000 บาท</p>
              <span className="text-xl font-bold text-blue-300 mr-4">181</span>
              <span className="text-xl font-bold text-blue-300">789</span>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขท้าย 3 ตัว
              </p>
              <p className="pt-2">รางวัลละ 4,000 บาท</p>
              <span className="text-xl font-bold text-blue-300 mr-4">181</span>
              <span className="text-xl font-bold text-blue-300">789</span>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขท้าย 2 ตัว
              </p>
              <p className="pt-2">รางวัลละ 4,000 บาท</p>
              <p className="text-xl font-bold text-blue-300">92</p>
            </div>
          </div>

          {/* รางวัลที่ 2 */}
          <div className="flex justify-evenly w-11/12 mx-auto text-center mt-4">
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลข้างเคียงรางวัลที่ 1
              </p>

              <p className="text-xl font-bold text-blue-300 mt-5">297411</p>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลละ 100,000 บาท
              </p>

              <p className="text-xl font-bold text-blue-300 mt-5">297411</p>
            </div>
            <div className="w-3/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 2
              </p>
              <p className="mt-2 ">รางวัลละ 200,000 บาท</p>
              <div className="grid grid-cols-5 mt-2 m-2 gap-2">
                {a5.map((r, idx) => (
                  <div className="flex">
                    <div className="w-1/5 bg-gray-200 border border-gray-300 px-2">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">111111</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* รางวัลที่ 3 */}
          <div className="w-11/12 mx-auto text-center mt-4">
            <div className="border border-gray-300 w-full">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 3
              </p>
              <p className="mt-2 ">รางวัลละ 80,000 บาท</p>
              <div className="grid grid-cols-10 mt-2 m-2 gap-2">
                {a10.map((r, idx) => (
                  <div className="flex ">
                    <div className="w-1/5 bg-gray-200 border border-gray-300">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">111111</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* รางวัลที่ 4 */}
          <div className="w-11/12 mx-auto text-center mt-4">
            <div className="border border-gray-300 w-full">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 4
              </p>
              <p className="mt-2 ">รางวัลละ 40,000 บาท</p>
              <div className="grid grid-cols-10 mt-2 m-2 gap-2">
                {a50.map((r, idx) => (
                  <div className="flex">
                    <div className="w-1/5 bg-gray-200 border border-gray-300">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">111111</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* รางวัลที่ 5 */}
          <div className="w-11/12 mx-auto text-center mt-4">
            <div className="border border-gray-300 w-full">
              <p className="border-b border-gray-300 bg-blue-200 font-bold ">
                รางวัลที่ 5
              </p>
              <p className="mt-2 ">รางวัลละ 20,000 บาท</p>
              <div className="grid grid-cols-10 mt-2 m-2 gap-2">
                {a100.map((r, idx) => (
                  <div className="flex">
                    <div className="w-1/5 bg-gray-200 border border-gray-300">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">111111</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ตรวจหวย */}
          <div className="flex justify-evenly w-3/4 mx-auto text-center mt-6">
            <div className="w-2/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-green-200 font-bold">
                รางวัลที่ 1
              </p>
              <p className="pt-2">รางวัลละ 6,000,000 บาท</p>
              <p className="text-xl font-bold text-blue-300">297411</p>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขหน้า 3 ตัว
              </p>
              <p className="pt-2">รางวัลละ 4,000 บาท</p>
              <span className="text-xl font-bold text-blue-300 mr-4">181</span>
              <span className="text-xl font-bold text-blue-300">789</span>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขท้าย 3 ตัว
              </p>
              <p className="pt-2">รางวัลละ 4,000 บาท</p>
              <span className="text-xl font-bold text-blue-300 mr-4">181</span>
              <span className="text-xl font-bold text-blue-300">789</span>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขท้าย 2 ตัว
              </p>
              <p className="pt-2">รางวัลละ 4,000 บาท</p>
              <p className="text-xl font-bold text-blue-300">92</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LotteryCheck;
