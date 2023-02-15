import { useState, useEffect } from "react";
import axios from "axios";

const LotteryForm = () => (
  <>
    <div className="w-1/2 mx-auto mt-8 p-8">
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm  bg-gray-100 rounded-lg border"
        placeholder="กรอกเลขลอตเตอรี่"
      ></textarea>
      <button className="bg-yellow-500 active:bg-amber-500 rounded-lg mt-4 p-4">
        ตรวจหวย
      </button>
      <button className="bg-blue-200 active:bg-purple-200 rounded-lg mt-4 p-4">
        เคลียร์เลข
      </button>
    </div>
  </>
);

const LotteryResult = () => (
  <div className="w-1/2 mx-auto pb-8">
    <div className=" bg-gray-50  text-left pl-8">
      <div>111111</div>
      <div>333333</div>
      <div>444444</div>
      <div className="font-bold mt-4">คุณถูกหวยงวดนี้ทั้งสิ้น บาท</div>
    </div>
  </div>
);

const LotteryTable = ({ lotteryData, lotteryDateTitle }) => (
  <div className="mb-16">
    <div>
      <h1 className="text-xl font-bold">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาล
        <br />
        ประจำวันที่ {lotteryDateTitle}
      </h1>
    </div>
    <div className="flex w-full mt-4 space-x-4">
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">รางวัลที่ 1</h1>
        <h2>รางวัลละ {lotteryData[0]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4">
          {lotteryData[0]?.numbers[0]}
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">เลขหน้า 3 ตัว</h1>
        <h2>รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4 flex">
          <div className="flex-auto">{lotteryData[7]?.numbers[0]}</div>
          <div className="flex-auto">{lotteryData[7]?.numbers[1]}</div>
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">เลขท้าย 3 ตัว</h1>
        <h2>รางวัลละ {lotteryData[5]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4 flex">
          <div className="flex-auto">{lotteryData[5]?.numbers[0]}</div>
          <div className="flex-auto">{lotteryData[5]?.numbers[1]}</div>
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">เลขท้าย 2 ตัว</h1>
        <h2>รางวัลละ {lotteryData[6]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4">
          {lotteryData[6]?.numbers[0]}
        </div>
      </div>
    </div>
    <div className="flex w-full mt-4 space-x-4">
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">รางวัลข้างเคียงรางวัลที่ 1</h1>
        <h2>รางวัลละ {lotteryData[8]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4 flex">
          <div className="flex-auto">{lotteryData[8]?.numbers[0]}</div>
          <div className="flex-auto">{lotteryData[8]?.numbers[1]}</div>
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">รางวัลที่ 2</h1>
        <h2>รางวัลละ {lotteryData[1]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
          {lotteryData[1]?.numbers?.map((r, idx) => (
            <div className="float-left">
              <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
                {idx + 1}
              </div>
              <div className="float-left">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full mt-4 bg-green-50 rounded-lg p-4">
      <h1 className="font-bold text-lg">รางวัลที่ 3</h1>
      <h2>รางวัลละ {lotteryData[2]?.prize?.toLocaleString("TH-th")} บาท</h2>
      <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
        {lotteryData[2]?.numbers?.map((r, idx) => (
          <div className="float-left mb-4">
            <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
              {idx + 1}
            </div>
            <div className="float-left">{r}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full mt-4 bg-green-50 rounded-lg p-4">
      <h1 className="font-bold text-lg">รางวัลที่ 4</h1>
      <h2>รางวัลละ {lotteryData[3]?.prize?.toLocaleString("TH-th")} บาท</h2>
      <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
        {lotteryData[3]?.numbers?.map((r, idx) => (
          <div className="float-left mb-4">
            <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
              {idx + 1}
            </div>
            <div className="float-left">{r}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full mt-4 bg-green-50 rounded-lg p-4">
      <h1 className="font-bold text-lg">รางวัลที่ 5</h1>
      <h2>รางวัลละ {lotteryData[4]?.prize?.toLocaleString("TH-th")} บาท</h2>
      <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
        {lotteryData[4]?.numbers?.map((r, idx) => (
          <div className="float-left mb-4">
            <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
              {idx + 1}
            </div>
            <div className="float-left">{r}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const useFetchLottery = ({ lotteryDate }) => {
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setlotteryDateTitle] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${lotteryDate}`,
    }).then((response) => {
      setlotteryDateTitle(response.data?.data?.lotteryDateTitle);

      const _lotteryData = Object.values(response.data?.data?.prizes)?.map(
        (r) => ({
          numbers: r.data,
          prize: r.info[1],
        })
      );
      setLotteryData(_lotteryData);
    });
  }, [lotteryDate]);

  return {
    lotteryData,
    lotteryDateTitle,
  };
};

const Lottery1 = () => {
  const { lotteryData, lotteryDateTitle } = useFetchLottery("2022-12-05");
  return (
    <div>
      <div className="w-3/4 mx-auto bg-green-100 mt-8 text-center rounded-lg">
        <div className="font-bold text-xl  ">ตรวจผล Lottery</div>
        <LotteryForm />
        <LotteryResult />
      </div>
      <LotteryTable
        lotteryData={lotteryData}
        lotteryDateTitle={lotteryDateTitle}
      />
    </div>
  );
};
export default Lottery1;
