import React, { useEffect, useState } from "react";
import axios from "axios";

const LotteryForm = () => (
  <>
    <div className="w-1/2 m-auto mt-8 ">
      <h1 className="text-center my-10 text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-[20px] text-white">
        ตรวจลอตเตอรี่ by KhunBoeing
      </h1>
      <div className="bg-gradient-to-r from-cyan-500 to-green-500 px-5 py-9 rounded-[20px] shadow-xl">
        <form>
          <label className=" text-2xl flex ml-5 bg-green-100 w-fit p-3 rounded-[20px]">
            ใส่เลขลอตเตอรี่
          </label>
          <div className="flex flex-col items-center">
            <input
              type="number"
              className="w-2/3 mt-5 text-lg shadow-lg rounded-lg"
            ></input>
            <input
              type="number"
              className="w-2/3 mt-5 text-lg shadow-lg rounded-lg"
            ></input>
            <input
              type="number"
              className="w-2/3 mt-5 text-lg shadow-lg rounded-lg"
            ></input>
            <input
              type="number"
              className="w-2/3 mt-5 text-lg shadow-lg rounded-lg"
            ></input>
          </div>
          <div className="flex justify-between mx-24 mt-10">
            <button className="bg-white p-3 rounded-[10px] text-gray-800 shadow-lg hover:cursor-pointer hover:bg-yellow-500 hover:text-white ">
              ตรวจหวย
            </button>
            <button className="bg-gray-300 p-3 rounded-[10px] text-gray-800 shadow- hover:cursor-pointer hover:bg-slate-600 hover:text-white ">
              เคลียร์เลข
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
);
const LotteryResult = () => (
  <>
    <div className="w-1/2 m-auto mt-8 ">
      <div className="bg-gradient-to-r from-sky-400 to-yellow-300 rounded-[20px] flex flex-col pl-10 py-6 my-8 shadow-lg">
        <div className="text-white ">
          <p className="text-xl">1234567 ถูกกินจ้า</p>
        </div>
        <div className="text-white">
          <p className="text-xl">1234567 ถูกกินจ้า</p>
        </div>
        <div className="text-white">
          <p className="text-xl">1234567 ถูกกินจ้า</p>
        </div>
        <div className="text-white">
          <p className="text-xl">1234567 ถูกกินจ้า</p>
        </div>
        <div className="mt-4">
          <p className="text-xl">
            คุณถูกรางวัลทั้งหมด :{" "}
            <span className="text-green-700">0 บาทถ้วน</span>
          </p>
        </div>
      </div>
    </div>
  </>
);

const LotteryTable = ({ lotteryData, lotteryDateTitle }) => (
  <>
    {/* --------------------Table 1------------------ */}
    <div className="mb-5 flex justify-center">
      <h1 className="text-2xl">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryDateTitle}
      </h1>
    </div>

    <div className="w-fit p-7 bg-gray-300 mx-auto">
      <table className="border-2 border-white w-full">
        <thead>
          <tr className="border-2 border-white ">
            <th className="border-2 border-white bg-yellow-400">รางวัลที่ 1</th>
            <th className="border-2 border-white bg-yellow-400">
              เลขหน้า 3 ตัว
            </th>
            <th className="border-2 border-white bg-yellow-400">
              เลขท้าย 3 ตัว
            </th>
            <th className="border-2 border-white bg-yellow-400">
              เลขท้าย 2 ตัว
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-white">
              <div className="text-center">
                <p>
                  รางวัลละ {lotteryData[0]?.prize?.toLocaleString("TH-th")} บาท
                </p>
                <p>{lotteryData[0]?.number[0]}</p>
              </div>
            </td>
            <td className="border-2 border-white">
              <div className="text-center">
                <p>
                  รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท
                </p>
                <div className="flex justify-between mx-4">
                  <p>{lotteryData[5]?.number[0]}</p>
                  <p>{lotteryData[5]?.number[1]}</p>
                </div>
              </div>
            </td>
            <td className="border-2 border-white">
              <div className="text-center">
                <p>
                  รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท
                </p>
                <div className="flex justify-between mx-4">
                  <p>{lotteryData[7]?.number[0]}</p>
                  <p>{lotteryData[7]?.number[1]}</p>
                </div>
              </div>
            </td>
            <td className="border-2 border-white">
              <div className="text-center">
                <p>
                  รางวัลละ {lotteryData[6]?.prize?.toLocaleString("TH-th")} บาท
                </p>
                <div className="flex justify-between mx-4">
                  <p>{lotteryData[6]?.number[0]}</p>
                  <p>{lotteryData[6]?.number[1]}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* --------------------------Table 2------------------------------- */}
      <table className="border-2 border-white mt-4 w-full">
        <thead>
          <tr className="border-2 border-white">
            <th className="border-2 border-white bg-yellow-400">
              รางวัลข้างเคียงรางวัลที่ 1
            </th>
            <th className="border-2 border-white bg-white">
              รางวัลละ {lotteryData[8]?.prize?.toLocaleString("TH-th")} บาท
            </th>
            <th className="border-2 border-white bg-yellow-400" colSpan="2">
              รางวัลที่ 2
            </th>
            <th className="border-2 border-white bg-white" colSpan="3">
              รางวัลละ {lotteryData[1]?.prize?.toLocaleString("TH-th")} บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-white">
              <p className="text-center">{lotteryData[8]?.number[0]}</p>
            </td>
            <td className="border-2 border-white">
              <p className="text-center">{lotteryData[8]?.number[1]}</p>
            </td>

            {lotteryData[1]?.number.map((r, idx) => (
              <td key={idx} className="border-2 border-white">
                <span className="bg-white px-2 mx-2">{idx + 1}</span>
                {r}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* ----------------------Table 3------------------------ */}
      <table className="border-2 border-white mt-4 w-full">
        <thead>
          <tr className="border-2 border-white">
            <th className="border-2 border-white bg-yellow-400" colSpan="4">
              รางวัลที่ 3
            </th>
            <th className="bg-white" colSpan="6">
              รางวัลละ {lotteryData[2]?.prize?.toLocaleString("TH-th")}บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {lotteryData[2]?.number.map((r, idx) => (
              <td key={idx} className="border-2 border-white">
                <span className="bg-white px-1 mx-2">{idx + 1}</span> {r}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* ---------------------Table 4---------------------- */}
      <table className="border-2 border-white mt-4 w-full">
        <thead>
          <tr className="border-2 border-white">
            <th className="border-2 border-white bg-yellow-400" colSpan="15">
              รางวัลที่ 4
            </th>
            <th className="border-2 border-white bg-white" colSpan="35">
              {" "}
              รางวัลละ {lotteryData[3]?.prize?.toLocaleString("TH-th")}
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            // ...new Array(Math.ceil(lotteryData[3]?.number?.length / 10)).keys(),
            ...new Array(5).keys(),
          ]?.map((row) => (
            <tr className="border-2 border-white">
              {lotteryData[3]?.number
                ?.slice(row * 10, (row + 1) * 10)
                .map((r, idx) => (
                  <td className="border-2 border-white " colSpan="5">
                    <span className="bg-white px-1 mx-2">{row * 10 + idx}</span>{" "}
                    {r}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* -------------------Table 5-------------------- */}
      <table className="border-2 border-white mt-4 w-full">
        <thead>
          <tr>
            <th className=" border-2 border-white bg-yellow-400" colSpan="3">
              รางวัลที่ 5{" "}
            </th>
            <th className="bg-white" colSpan="7">
              รางวัลละ 20,000 บาท
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
          </tr>
          <tr>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
            <td className="border-2 border-white">
              <span className="bg-white px-1 mx-2">9</span> 202306
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

const useFetchLottery = ({ lotteryDate }) => {
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setlotteryDateTitle] = useState();

  console.log("lotteryDateTitle", lotteryDateTitle);
  console.log("lotteryData", lotteryData);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${lotteryDate}`,
    })
      .then((res) => {
        setlotteryDateTitle(res.data?.data?.lotteryDateTitle);

        // ข้อมูลที่ไปยิงเอามาก้อน Data เป็น {}
        const _lotteryData = Object.values(res.data?.data?.prizes)?.map(
          (r) => ({
            number: r.data,
            prize: r.info[1],
          })
        );
        console.log(_lotteryData);
        setLotteryData(_lotteryData);
      })
      .catch((err) => console.log(err));
  }, [lotteryDate]);

  return {
    lotteryData,
    lotteryDateTitle,
  };
};

const CheckLottery = () => {
  // เรียกใช้งาน hook
  const { lotteryData, lotteryDateTitle } = useFetchLottery("2022-12-05");

  return (
    <>
      <div>
        <LotteryForm />
        <LotteryResult />
        <LotteryTable
          lotteryData={lotteryData}
          lotteryDateTitle={lotteryDateTitle}
        />
      </div>
    </>
  );
};

export default CheckLottery;
