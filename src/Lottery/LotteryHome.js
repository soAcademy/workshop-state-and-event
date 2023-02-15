import { useState, useEffect } from "react";
import axios from "axios";

const LotteryForm = () => {
  const [date, setDate] = useState("17 มกราคม 2566");
  const [inputLotteryNumber, setInputLotteryNumber] = useState("879142");
  const [lotteryPrizes, setLotteryPrizes] = useState([]);
  const [sum, setSum] = useState("180000");

  useEffect(() => {}, []);
  axios({
    url: "https://www.thairath.co.th/api-lottery?history=1&date=2023-01-17",
    method: "get",
  }).then((res) => setLotteryPrizes(res.data.data));
  return (
    <>
      <div className="font-kanit  bg-gradient-to-b from-slate-400 to-slate-300 ">
        <div className="p-4 text-center text-2xl">ตรวจผลลอตเตอรี่ by Dew</div>
        <div className="">
          <div className="bg-gradient-to-b from-cyan-400 to-cyan-300 w-2/3 mx-auto flex flex-col rounded-lg shadow-lg">
            <p className="p-2">กรอกเลย</p>
            <div className="p-2 ">
              <input
                onChange={(e) => setInputLotteryNumber(e.target.value)}
                value={inputLotteryNumber}
                className="bg-slate-200 w-full pb-10 pl-5 pt-2 mx-auto "
              />
            </div>
            <div className="flex flex-row mx-auto space-x-4 p-2 w-full ">
              <div className="w-1/2">
                <button className="bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-lg p-2 text-xl w-full ">
                  ตรวจผลลอตเตอรี่
                </button>
              </div>
              <div className="w-1/2">
                <button className="bg-gradient-to-b from-slate-400 to-slate-300 rounded-lg p-2 text-xl w-full ">
                  เคลียร์เลย
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-pink-500 to-pink-300 w-2/3 mx-auto mt-4 p-4 rounded-lg shadow-lg">
            <div>{inputLotteryNumber} ถูกกินครับ</div>
            <div>{inputLotteryNumber} เย้! ถูกรางวัลข้างเคียงรางวัลที่ 1 </div>
            <div>{inputLotteryNumber} เย้! ถูกรางวัลรางวัลที่ 3</div>
            <div>คุณถูกหวยงวดนี้ทั้งสิ้น {sum} บาท</div>
          </div>
        </div>
        <div className="w-full">
          <div className="font-bold p-4 text-center mx-auto">
            ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {date}
          </div>
          {console.log(">>>>>>>> lottery prize", lotteryPrizes)}
          {console.log(">>>>>>>>", lotteryPrizes?.prizes)}
        </div>
      </div>
    </>
  );
};

const LotteryTable = () => {
  return (
    <>
      <div className="font-kanit px-4">
        <div className="flex w-full  text-center  border-2 border-slate-400">
          <div className="w-1/3 bg-green-50  border-r-2 border-slate-400  ">
            <h1 className="font-bold text-lg bg-blue-400  border-b-2 border-slate-400">
              รางวัลที่ 1
            </h1>
            <h2 className="font-bold text-lg">รางวัลละ 6,000,000 บาท</h2>
            <div className="font-bold text-2xl mt-4 text-blue-700">297411</div>
          </div>
          <div className="flex-auto bg-green-50 border-r-2 border-slate-400 ">
            <h1 className="font-bold text-lg  bg-blue-400 border-b-2 border-slate-400">
              เลขหน้า 3 ตัว
            </h1>
            <h2 className="font-bold text-lg">รางวัลละ 4,000 บาท</h2>
            <div className="font-bold text-2xl mt-4 flex text-blue-700">
              <div className="flex-auto ">181</div>
              <div className="flex-auto">789</div>
            </div>
          </div>
          <div className="flex-auto bg-green-50 border-r-2 border-slate-400 ">
            <h1 className="font-bold text-lg  bg-blue-400 border-b-2 border-slate-400">
              เลขท้าย 3 ตัว
            </h1>
            <h2 className="font-bold text-lg ">รางวัลละ 4,000 บาท</h2>
            <div className="font-bold text-2xl mt-4 flex text-blue-700">
              <div className="flex-auto">101</div>
              <div className="flex-auto">664</div>
            </div>
          </div>
          <div className="flex-auto bg-green-50 ">
            <h1 className="font-bold text-lg bg-blue-400 border-b-2 border-slate-400">
              เลขท้าย 2 ตัว
            </h1>
            <h2 className="font-bold text-lg ">รางวัลละ 2,000 บาท</h2>
            <div className="font-bold text-2xl mt-4 text-blue-700">93</div>
          </div>
        </div>
        <div className="flex border-x-2 border-b-2 border-slate-400">
          <div className="flex flex-col w-1/6  border-r-2 border-slate-400">
            <div className="text-center bg-blue-400 ">
              รางวัลข้างเคียงรางวัลที่1
            </div>
            <div className="text-center font-bold text-blue-700">297410</div>
          </div>
          <div className="flex flex-col w-1/6 border-r-2 border-slate-400">
            <div className="text-center bg-blue-400">รางวัลละ 100,000 บาท</div>
            <div className="text-center font-bold text-blue-700 bg-green-50">
              297410
            </div>
          </div>
          <div className="w-2/3 bg-red-200 ">
            <div className="flex ">
              <div className="bg-blue-400 w-1/3 text-center border-r-2 border-slate-400 border-b-2 border-slate-400">
                รางวัลที่ 2
              </div>
              <div className="flex-auto text-center bg-green-50">
                รางวัลละ 200,000 บาท
              </div>
            </div>
            <div className="grid grid-cols-5">
              {["212458", "789456", "123456", "789258", "147963"].map(
                (r, idx) => (
                  <div className="flex flex-row bg-green-50">
                    <div className="bg-slate-400 px-2">{idx + 1}</div>
                    <div className="text-center mx-auto">{r}</div>
                  </div>
                )
              )}
            </div>
            <div></div>
          </div>
        </div>

        <div className="w-full  bg-green-50 rounded-lg font-kanit">
          <div className="flex flex-row border-x-2 border-b-2 border-slate-400 ">
            <div className="font-bold text-lg bg-blue-400 w-1/3 text-center">
              รางวัลที่ 3
            </div>
            <div className="flex-auto bg-green-50 text-center font-bold">
              รางวัลละ 80,000 บาท
            </div>
          </div>
          <div className=" grid grid-cols-5 text-center  border-x-2 border-b-2 border-slate-400">
            {["229120", "679028", "677223", "589702", "670839"].map(
              (r, idx) => (
                <div className="flex text-center">
                  <div className=" bg-slate-400 px-2 ">{idx + 1}</div>
                  <div className="mx-auto text-blue-400">{r}</div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full  bg-green-50 rounded-lg font-kanit">
          <div className="flex flex-row border-x-2 border-b-2 border-slate-400 ">
            <div className="font-bold text-lg bg-blue-400 w-1/3 text-center ">
              รางวัลที่ 4
            </div>
            <div className="flex-auto bg-green-50 text-center font-bold">
              รางวัลละ 40,000 บาท
            </div>
          </div>
          <div className=" grid grid-cols-5 text-center  border-x-2 border-b-2 border-slate-400">
            {["229120", "679028", "677223", "589702", "670839"].map(
              (r, idx) => (
                <div className="flex text-center">
                  <div className=" bg-slate-400 px-2 ">{idx + 1}</div>
                  <div className="mx-auto text-blue-400">{r}</div>
                </div>
              )
            )}
          </div>
        </div>
      
            
       
      </div>
    </>
  );
};

const LotteryHome = () => {
  return (
    <>
      <LotteryForm />
      <LotteryTable />
    </>
  );
};
export default LotteryHome;
