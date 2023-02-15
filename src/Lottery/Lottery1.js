import React from "react";

const Lottery1 = () => {
  return (
    <div className="">
      {/* กรอกเลข */}
      <div className="w-3/4 mx-auto bg-gray-100 mt-8 p-6">
        <h1 className="font-bold text-xl text-center">
          ตรวจผลลอตเตอรี่ by หวยบิน
        </h1>
        <form>
          <div className="flex mt-4 space-x-8">
            <div className="w-full">
              <label>กรอกเลข</label>
              <br />
              <textarea
                type="number"
                name="amount"
                className="p-2 w-full mt-2"
                placeholder="1"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between text-center mt-8">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 active:bg-amber-400 p-4 w-full mx-1 font-bold text-xl"
            >
              ตรวจหวย
            </button>
            <button
              type="reset"
              className="bg-gray-400 hover:bg-gray-500 active:bg-amber-400 p-4 w-full mx-1 font-bold text-xl"
            >
              เคลียร์เลข
            </button>
          </div>
        </form>
      </div>
      {/* ผลตรวจรางวัล */}
      <div className="w-3/4 mx-auto mt-8 bg-green-100 ">
        <h2 className="text-lg font-bold">ผลตรวจ</h2>
        <p>111588 : ถูกกินจ้า</p>
        <p>111588 : ถูกกินจ้า</p>
        <p>111588 : ถูกกินจ้า</p>
        <h2 className="text-lg font-bold">คุณถูกหวยงวดนี้ทั้งสิ้น 0 บาท</h2>
      </div>
      {/* ตารางหวย */}
      <div className="w-3/4 mx-auto mt-8">
        {/* 1 */}
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300" colspan="4">
                รางวัลที่ 1
              </th>
              <th className="border border-slate-300" colspan="2">
                เลขหน้า 3 ตัว
              </th>
              <th className="border border-slate-300" colspan="2">
                เลขท้าย 3 ตัว
              </th>
              <th className="border border-slate-300" colspan="2">
                เลขท้าย 2 ตัว
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 bg-white" colspan="4">
                <div className="text-center">รางวัลละ 6000000 บาท</div>
                <div className="text-center">111111</div>
              </td>
              <td className="border border-slate-300 bg-white" colspan="2">
                <div className="text-center">รางวัลละ 4000 บาท</div>
                <div className="flex justify-between">
                  <div className="w-full text-center">123</div>
                  <div className="w-full text-center">321</div>
                </div>
              </td>
              <td className="border border-slate-300 bg-white" colspan="2">
                <div className="text-center">รางวัลละ 4000 บาท</div>
                <div className="flex justify-between">
                  <div className="w-full text-center">123</div>
                  <div className="w-full text-center">321</div>
                </div>
              </td>
              <td className="border border-slate-300 bg-white" colspan="2">
                <div className="text-center">รางวัลละ 2000 บาท</div>
                <div className="text-center">111111</div>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* 2 */}
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300" colspan="2">
                รางวัลข้างเคียง รางวัลที่ 1
              </th>
              <th className="border border-slate-300" colspan="2">
                รางวันละ 4000 บาท
              </th>

              <th className="border border-slate-300" colspan="2">
                รางวัลที่ 2
              </th>
              <th className="border border-slate-300" colspan="3">
                รางวันละ 4000 บาท
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300" colspan="2">
                222222
              </td>
              <td className="border border-slate-300" colspan="2">
                333333
              </td>
              <td className="border border-slate-300">
                <div className="flex w-full">
                  <div className="w-1/3 text-center p-1 bg-gray-300">1</div>
                  <div className="w-2/3 text-center p-1 bg-gray-100">158798</div>
                </div>
              </td>
              <td className="border border-slate-300">111111</td>
              <td className="border border-slate-300">111111</td>
              <td className="border border-slate-300">111111</td>
              <td className="border border-slate-300">111111</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* 3 */}
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300" colspan="4">
                รางวัลที่ 3
              </th>
              <th className="border border-slate-300" colspan="6">
                รางวันละ 80000 บาท
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
              <td className="border border-slate-300 bg-white">333333</td>
            </tr>
          </tbody>
        </table>
        {/* 4 */}
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300" colspan="4">
                รางวัลที่ 4
              </th>
              <th className="border border-slate-300" colspan="6">
                รางวันละ 40000 บาท
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
              <td className="border border-slate-300 bg-white">444444</td>
            </tr>
          </tbody>
        </table>
        {/* 5 */}
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300" colspan="4">
                รางวัลที่ 5
              </th>
              <th className="border border-slate-300" colspan="6">
                รางวันละ 20000 บาท
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
              <td className="border border-slate-300 bg-white">555555</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* หวยย้อนหลัง */}
      <div className="w-3/4 mx-auto mt-8">
        <table class="w-full table-auto">
          <thead>
            <tr>
              <th className="border border-slate-300" colspan="7">
                <div className="flex justify-between px-6">
                  <h1>ตรวจหวย 17 มกราคม 2566</h1>
                  <button>รางวัลอื่น</button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-slate-300 text-center bg-gray-200"
                colspan="2"
              >
                รางวัลที่ 1
              </td>
              <td
                className="border border-slate-300 text-center bg-gray-200"
                colspan="2"
              >
                เลขหน้า 3 ตัว
              </td>
              <td
                className="border border-slate-300 text-center bg-gray-200"
                colspan="2"
              >
                เลขท้าย 3 ตัว
              </td>
              <td
                className="border border-slate-300 text-center bg-gray-200"
                colspan="1"
              >
                เลขท้าย 2 ตัว
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 bg-white" colspan="2">
                <div className="text-center">รางวัลละ 6000000 บาท</div>
                <div className="text-center">111111</div>
              </td>
              <td className="border border-slate-300 bg-white" colspan="2">
                <div className="text-center">รางวัลละ 4000 บาท</div>
                <div className="flex justify-between">
                  <div className="w-full text-center">123</div>
                  <div className="w-full text-center">321</div>
                </div>
              </td>
              <td className="border border-slate-300 bg-white" colspan="2">
                <div className="text-center">รางวัลละ 4000 บาท</div>
                <div className="flex justify-between">
                  <div className="w-full text-center">123</div>
                  <div className="w-full text-center">321</div>
                </div>
              </td>
              <td className="border border-slate-300 bg-white" colspan="1">
                <div className="text-center">รางวัลละ 2000 บาท</div>
                <div className="text-center">111111</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lottery1;
