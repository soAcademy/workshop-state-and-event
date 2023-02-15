import { useState, useEffect } from "react";
import axios from "axios";

const LotteryHome = () => {
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
      <div className="font-kanit h-screen bg-gradient-to-b from-slate-400 to-slate-300 ">
        <div className="p-4 text-center text-2xl">ตรวจผลลอตเตอรี่ by Dew</div>
        <div className="">
          <div className="bg-gradient-to-b from-cyan-400 to-cyan-300 w-2/3 mx-auto flex flex-col rounded-lg shadow-lg">
            <p className="p-2">กรอกเลย</p>
            <div className="p-2 ">
              <input
                onChange={(e) => e.target.value}
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
          <table className="m-4 w-1/3">
            <thead className="bg-blue-400 font-bold text-center w-1/3">รางวัลที่ 1</thead>
            <tbody>
              <tr>
                <td> รางวัลละ 6,000,000 บาท</td>
              </tr>
              <tr>
                <td>297411</td>
              </tr>
            </tbody>

            <thead className="bg-blue-400 font-bold text-center w-1/3">รางวัลที่ 1</thead>
            <tbody>
              <tr>
                <td> รางวัลละ 6,000,000 บาท</td>
              </tr>
              <tr>
                <td>297411</td>
              </tr>
            </tbody>
          </table>

          
        </div>
      </div>
    </>
  );
};
export default LotteryHome;
