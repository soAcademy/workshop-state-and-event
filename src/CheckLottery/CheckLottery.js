import React from "react";

const CheckLottery = () => {
  return (
    <>
      <div className="w-1/2 m-auto mt-8">
        <h1 className="text-center my-10 text-xl ">
          ตรวจลอตเตอรี่ by KhunBoeing
        </h1>
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 px-5 py-9 rounded-[20px] shadow-xl">
          <form>
            <label className="text-white text-xl flex j">ใส่เลขลอตเตอรี่</label>
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
              <button className="bg-white p-3 rounded-[10px] text-gray-800 shadow-lg ">
                ตรวจหวย
              </button>
              <button className="bg-gray-300 p-3 rounded-[10px] text-gray-800 shadow-lg">
                เคลียร์เลข
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-r from-sky-400 to-yellow-300 rounded-[20px] flex flex-col pl-10 py-6 my-8 shadow-lg">
          <div className="text-white ">
            <p>1234567 ถูกกินจ้า</p>
          </div>
          <div className="text-white">
            <p>1234567 ถูกกินจ้า</p>
          </div>
          <div className="text-white">
            <p>1234567 ถูกกินจ้า</p>
          </div>
          <div className="text-white">
            <p>1234567 ถูกกินจ้า</p>
          </div>
          <div className="mt-4">
            <p>
              คุณถูกรางวัลทั้งหมด :{" "}
              <span className="text-green-700">0 บาทถ้วน</span>
            </p>
          </div>
        </div>
      </div>

      {/* --------------------Table Check Lottery------------------ */}

      <div className="w-fit p-7 bg-gray-300 mx-auto">
        <table className="border-2 border-white w-full">
          <thead>
            <tr className="border-2 border-white ">
              <th className="border-2 border-white">รางวัลที่ 1</th>
              <th className="border-2 border-white">เลขหน้า 3 ตัว</th>
              <th className="border-2 border-white">เลขท้าย 3 ตัว</th>
              <th className="border-2 border-white">เลขท้าย 2 ตัว</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-white">
                <div className="text-center">
                  <p>รางวัลละ 6,000,000 บาท</p>
                  <p>297411</p>
                </div>
              </td>
              <td className="border-2 border-white">
                <div className="text-center">
                  <p>รางวัลละ 4,000 บาท</p>
                  <div className="flex justify-between mx-4">
                    <p>297411</p>
                    <p>297411</p>
                  </div>
                </div>
              </td>
              <td className="border-2 border-white">
                <div className="text-center">
                  <p>รางวัลละ 4,000 บาท</p>
                  <div className="flex justify-between mx-4">
                    <p>297411</p>
                    <p>297411</p>
                  </div>
                </div>
              </td>
              <td className="border-2 border-white">
                <div className="text-center">
                  <p>รางวัลละ 2,000 บาท</p>
                  <div className="flex justify-between mx-4">
                    <p>297411</p>
                    <p>297411</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ----------------------------------------------------------- */}
        <table className="border-2 border-white mt-4 w-full">
          <thead>
            <tr className="border-2 border-white">
              <th className="border-2 border-white">
                รางวัลข้างเคียงรางวัลที่ 1
              </th>
              <th className="border-2 border-white">รางวัลละ 100,000 บาท</th>
              <th className="border-2 border-white" colSpan="2">
                รางวัลที่ 2
              </th>
              <th className="border-2 border-white" colSpan="3">
                รางวัลละ 200,000 บาท
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-white">
                <p className="text-center">123456</p>
              </td>
              <td className="border-2 border-white">
                <p className="text-center">123456</p>
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-2 mx-2">1</span>202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-2 mx-2">2</span>202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-2 mx-2">3</span>202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-2 mx-2">4</span>202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-2 mx-2">5</span>202306
              </td>
            </tr>
          </tbody>
        </table>
        {/* -------------------------------------------------------- */}
        <table className="border-2 border-white mt-4 w-full">
          <thead>
            <tr className="border-2 border-white">
              <th className="border-2 border-white" colSpan="4">
                รางวัลที่ 3
              </th>
              <th colSpan="6">รางวัลละ 80,000 บาท</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">1</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">2</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">3</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">4</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">5</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">6</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">7</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">8</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">9</span> 202306
              </td>
              <td className="border-2 border-white">
                <span className="bg-white px-1 mx-2">10</span> 202306
              </td>
            </tr>
          </tbody>
        </table>
        {/* -------------------------------------------------------- */}
        <table className="border-2 border-white mt-4 w-full">
          <thead>
            <tr className="border-2 border-white">
              <th className="border-2 border-white" colSpan="3">
                รางวัลที่ 4
              </th>
              <th className="border-2 border-white" colSpan="7">
                รางวัลละ 40,000 บาท{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 border-white">
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
            <tr className="border-2 border-white">
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
            <tr className="border-2 border-white">
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
            <tr className="border-2 border-white">
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
            <tr className="border-2 border-white">
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
        {/* ----------------------------------------------------- */}
        <table className="border-2 border-white mt-4 w-full">
          <thead>
            <tr>
              <th colSpan="3">รางวัลที่ 5 </th>
              <th colSpan="7">รางวัลละ 20,000 บาท</th>
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
};

export default CheckLottery;
