import { useState, useEffect } from "react";
import axios from "axios";

const useFetchLottery = ({ lotteryDate }) => {
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setLotteryDateTitle] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${lotteryDate}`,
    }).then((response) => {
      setLotteryDateTitle(response.data?.data?.lotteryDateTitle);

      const _lotteryData = Object.values(response.data?.data?.prizes)?.map(
        (r) => ({
          numbers: r.data,
          prize: r.info[1],
        })
      );
      setLotteryData(_lotteryData);
    });
  }, [lotteryData]);
  return {
    lotteryData,
    lotteryDateTitle,
  };
};



const LotteryChecker = () => {
  const { lotteryData, lotteryDateTitle } = useFetchLottery("2022-12-05");

  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="mt-8 text-center">
          <h1 className="text-2xl ">ตรวจผลลอตเตอรี่ by Korana</h1>
        </div>
        <div className=" w-1/2 mx-auto bg-slate-200 mt-4 p-4">
          <textarea
            rows="4"
            className="w-full mt-3 bg-green-100 rounded-lg border border-gray-400 text-sm"
          ></textarea>
          <div className="mt-4 space-x-4 text-center">
            <button className="bg-yellow-600 rounded-lg p-4">ตรวจหวย</button>
            <button className="bg-yellow-600 rounded-lg p-4">เคลียร์เลข</button>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-4 p-4 bg-blue-100">
          <h2>130999 ถูกกินครับ</h2>
          <h2>297410 เย้! ถูกรางวัลข้างเคียงรางวัลที่ 1</h2>
          <h2>557584 เย้! ถูกรางวัลที่ 3</h2>
          <h2 className="font-bold text-xl mt-3">
            คุณถูกหวยงวดนี้ทั้นสิ้น 180,000 บาท
          </h2>
        </div>
        <div className="mt-10">
          <h1 className="text-center text-xl font-bold">
            ผลการออกรางวัลสลากกินแบ่งรัฐบาล <br />
            ประจำวันที่ {lotteryDateTitle}
          </h1>
        </div>
        <div className="flex text-center space-x-3 mt-4">
          <div className="flex-auto bg-red-200 rounded-lg p-3">
            <h1 className="font-bold ">รางวัลที่ 1</h1>
            <h2 className="">
              รางวัลละ {lotteryData[0]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="text-xl font-bold mt-2">
              {lotteryData[0]?.numbers[0]}
            </div>
          </div>
          <div className="flex-auto bg-red-200 rounded-lg p-3">
            <h1 className="font-bold ">เลขหน้า 3 ตัว</h1>
            <h2>
              รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="flex">
              <div className="text-xl font-bold mt-2 flex-auto">
                {lotteryData[7]?.numbers[0]}
              </div>
              <div className="text-xl font-bold mt-2 flex-auto">
                {lotteryData[7]?.numbers[1]}
              </div>
            </div>
          </div>
          <div className="flex-auto bg-red-200 rounded-lg p-3">
            <h1 className="font-bold ">เลขท้าย 3 ตัว</h1>
            <h2 className="">
              รางวัลละ {lotteryData[5]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="flex">
              <div className="text-xl font-bold mt-2 flex-auto">
                {lotteryData[5]?.numbers[0]}
              </div>
              <div className="text-xl font-bold mt-2 flex-auto">
                {lotteryData[5]?.numbers[1]}
              </div>
            </div>
          </div>
          <div className="flex-auto bg-red-200 rounded-lg p-3">
            <h1 className="font-bold ">เลขท้าย 2 ตัว</h1>
            <h2 className="">
              รางวัลละ {lotteryData[6]?.prize?.toLocaleString["TH-th"]} บาท
            </h2>
            <div className="text-xl font-bold mt-2">
              {lotteryData[6]?.numbers[0]}
            </div>
          </div>
        </div>
        <div className="flex text-center space-x-3 mt-4">
          <div className="flex-auto bg-red-200 rounded-lg p-3">
            <h1 className="font-bold">รางวัลข้างเคียงรางวัลที่ 1</h1>
            <h2>
              รางวัลละ {lotteryData[8]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="flex mt-2">
              <div className="text-xl font-bold flex-auto">
                {lotteryData[8]?.numbers[0]}
              </div>
              <div className="text-xl font-bold flex-auto">
                {lotteryData[8]?.numbers[1]}
              </div>
            </div>
          </div>
          <div className="flex-auto bg-red-200 rounded-lg p-3">
            <h1 className="font-bold">รางวัลที่ 2</h1>
            <h2>
              {" "}
              รางวัลละ {lotteryData[1]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="grid grid-cols-5 mt-2">
              {lotteryData[1]?.numbers?.map((r, idx) => (
                <div>
                  <div className="float-left bg-yellow-200 px-2 mx-2">
                    {idx + 1}
                  </div>
                  <div className="float-left font-bold text-xl">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="bg-red-200 rounded-lg p-3">
            <h1 className="font-bold">รางวัลที่ 3</h1>
            <h2>
              รางวัลละ {lotteryData[2]?.prize.toLocaleString("TH-th")} บาท
            </h2>
            <div className="grid grid-cols-5 mt-2">
              {lotteryData[2]?.numbers?.map((r, idx) => (
                <div className="mt-2">
                  <div className="float-left bg-yellow-200 px-2 mx-2">
                    {idx + 1}
                  </div>
                  <div className="float-left font-bold text-xl">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="bg-red-200 rounded-lg p-3">
            <h1 className="font-bold">รางวัลที่ 4</h1>
            <h2>
              รางวัลละ {lotteryData[3]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="grid grid-cols-5 mt-2">
              {lotteryData[3]?.numbers?.map((r, idx) => (
                <div className="mt-2">
                  <div className="float-left bg-yellow-200 px-2 mx-2">
                    {idx + 1}
                  </div>
                  <div className="float-left font-bold text-xl">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="bg-red-200 rounded-lg p-3">
            <h1 className="font-bold">รางวัลที่ 5</h1>
            <h2>
              รางวัลละ {lotteryData[4]?.prize?.toLocaleString("TH-th")} บาท
            </h2>
            <div className="grid grid-cols-5 mt-2">
              {lotteryData[4]?.numbers?.map((r, idx) => (
                <div className="">
                  <div className="float-left bg-yellow-200 px-2 mx-2">
                    {idx + 1}
                  </div>
                  <div className="float-left font-bold text-xl">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LotteryChecker;
