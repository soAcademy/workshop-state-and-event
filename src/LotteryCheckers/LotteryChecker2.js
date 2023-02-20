import { useState, useEffect } from "react";
import axios from "axios";

const LotteryForm = () => {
  return (
    <div className="bg-sky-300 m-auto w-1/2 mt-4">
      <h1 className="ml-4">กรอกเลข</h1>
      <div className="text-center">
        <textarea type="text" className="w-3/4 h-3/4 m-auto " />
      </div>
      <div className="flex">
        <button className="button bg-yellow-300 w-1/3 p-2 mt-4 rounded-lg mx-auto mb-4">
          ตรวจหวย
        </button>
        <button className="button bg-neutral-200 w-1/3 p-2 mt-4 rounded-lg mx-auto mb-4">
          Clear
        </button>
      </div>
    </div>
  );
};

const LotteryResults = () => {
  return (
    <div className="bg-red-300 m-auto w-1/2  mt-4">
      <div className="flex">
        <h2 className="p-2">132220</h2>
        <h2 className="p-2">ถูกกินครับ</h2>
      </div>
      <div className="flex">
        <h2 className="p-2">132220</h2>
        <h2 className="p-2">ถูกกินครับ</h2>
      </div>
      <div className="flex">
        <h2 className="p-2">132220</h2>
        <h2 className="p-2">ถูกกินครับ</h2>
      </div>
      <div className="p-2">คุณถูกหวยงวดนี้ทั้งสิ้น 180,000 บาท</div>
    </div>
  );
};

const LotteryTable = ({ lotteryData, lotteryDateTitle }) => {
  return (
    <>
      <table className="bg-neutral-200 m-auto">
        <thead className="bg-sky-300 rounded-lg">
          <tr>
            <th className="border border-2 border-black p-2">รางวัลที่หนึ่ง</th>
            <th className="border border-2 border-black p-2">เลขหน้า 3 ตัว</th>
            <th className="border border-2 border-black p-2">เลขหลัง 3 ตัว</th>
            <th className="border border-2 border-black p-2">เลขท้าย 2 ตัว</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">
                รางวัลละ {lotteryData[0]?.prize?.toLocaleString()} บาท
              </h2>
              <h1 className="text-center">{lotteryData[0]?.numbers[0]}</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ {lotteryData[7]?.prize?.toLocaleString()} บาท</h2>
              <h1 className="text-center">{lotteryData[7]?.numbers[0]}</h1>
              <h1 className="text-center">{lotteryData[7]?.numbers[1]}</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ {lotteryData[5]?.prize?.toLocaleString()} บาท</h2>
              <h1 className="text-center">{lotteryData[5]?.numbers[0]}</h1>
              <h1 className="text-center">{lotteryData[5]?.numbers[1]}</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">รางวัลละ {lotteryData[6]?.prize?.toLocaleString()} บาท</h2>
              <h1 className="text-center">{lotteryData[6]?.numbers[0]}</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead className="">
          <tr>
            <th className="border border-2 border-black p-2 bg-sky-300">
              รางวัลข้างเคียงรางวัลที่หนึ่ง
            </th>
            <th className="border border-2 border-black p-2">
              รางวัลละ {lotteryData[8]?.prize?.toLocaleString()} บาท
            </th>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="4"
            >
              รางวัลที่ 2
            </th>
            <th className="border border-2 border-black p-2" colSpan="6">
              รางวัลละ {lotteryData[1]?.prize?.toLocaleString()} บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[8]?.numbers[0]}
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[8]?.numbers[1]}
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              1
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[1]?.numbers[0]}
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              2
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[1]?.numbers[1]}
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              3
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[1]?.numbers[2]}
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              4
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[1]?.numbers[3]}
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
              5
            </td>
            <td className="border border-2 border-black p-2 text-center font-bold">
            {lotteryData[1]?.numbers[4]}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead>
          <tr>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="7"
            >
              รางวัลที่ 3
            </th>
            <th className="border border-2 border-black p-2" colSpan="13">
              รางวัลละ {lotteryData[2]?.prize?.toLocaleString()} บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {lotteryData[2]?.numbers?.map((r, idx) => (
              <>
                <th className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                  {idx + 1}
                </th>
                <th className="border border-2 border-black p-2 text-center font-bold">
                  {r}
                </th>
              </>
            ))}
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead>
          <tr>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="7"
            >
              รางวัลที่ 4
            </th>
            <th className="border border-2 border-black p-2" colSpan="13">
              รางวัลละ{lotteryData[3]?.prize?.toLocaleString()} บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {lotteryData[3]?.numbers?.map((r, idx) => (
              <>
                <th className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                  {idx + 1}
                </th>
                <th className="border border-2 border-black p-2 text-center font-bold">
                  {r}
                </th>
              </>
            ))}
          </tr>
        </tbody>
      </table>
      <table className="bg-neutral-200 m-auto mt-2">
        <thead>
          <tr>
            <th
              className="border border-2 border-black p-2 bg-sky-300"
              colSpan="7"
            >
              รางวัลที่ 5
            </th>
            <th className="border border-2 border-black p-2" colSpan="13">
              รางวัลละ{lotteryData[4]?.prize?.toLocaleString()} บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {lotteryData[4]?.numbers?.map((r, idx) => (
          
              <>
            
                <th className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                  {idx + 1}
                </th>
                <th className="border border-2 border-black p-2 text-center font-bold">
                  {r}
                </th>
                
              </>
              
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

const useLotteryData = ({ lotteryDate }) => {
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
  }, [lotteryDate]);
  return {
    lotteryData,
    lotteryDateTitle,
  };
};
const LotteryChecker2 = () => {
  const { lotteryData, lotteryDateTitle } = useLotteryData("2022-12-05");
  return (
    <div>
      <h1 className="text-center p-2 font-bold text-2xl">Lottery Checker</h1>
      <LotteryForm />
      <LotteryResults />
      <div className="text-center">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ 1 กุมภาพันธ์ 2566
      </div>
      <LotteryTable lotteryData={lotteryData} lotteryDateTitle={lotteryDateTitle}/>
    </div>
  );
};

export default LotteryChecker2;
