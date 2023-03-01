import React from "react";

const LottoTable = ({ lotteryData, selectedDate }) => {
  return (
    <div>
      {" "}
      {/* ตารางหวย */}
      <div className="w-3/4 mx-auto mt-8">
        {/* 1.1 */}
        <div class="w-full">
          <div className="w-1/2 mx-auto ">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลที่ 1
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[0]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <h1 className="text-center">{lotteryData[0]?.numbers[0]}</h1>
          </div>
        </div>
        <br />
        {/* 1.3 */}
        <div class="w-full flex">
          <div className="w-1/3 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              เลขหน้า 3 ตัว
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-2">
              {lotteryData[7]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-4 w-full">
                  <div className="col-span-1 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              เลขท้าย 3 ตัว
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[5]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-2">
              {lotteryData[5]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-4 w-full">
                  <div className="col-span-1 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              เลขท้าย 2 ตัว
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[6]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <h1 className="w-full text-center p-1 bg-gray-100">
              {lotteryData[6]?.numbers[0]}
            </h1>
          </div>
        </div>
        <br />
        {/* 2 */}
        <div className="w-full flex">
          <div className="w-1/3 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลข้างเคียง รางวัลที่ 1
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[8]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-2">
              {lotteryData[8]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-4 w-full">
                  <div className="col-span-1 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/3 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลที่ 2
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[1]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-5">
              {lotteryData[1]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-4 w-full">
                  <div className="col-span-1 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        {/* 3 */}
        <div className="flex">
          <div className="w-full mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลที่ 3
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[2]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-10 gap-1">
              {lotteryData[2]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-5 w-full">
                  <div className="col-span-2 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        {/* 4 */}
        <div className="flex">
          <div className="w-full mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลที่ 4
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[3]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-10 gap-1">
              {lotteryData[3]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-5 w-full">
                  <div className="col-span-2 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        {/* 5 */}
        <div className="flex">
          <div className="w-full mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลที่ 5
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[4]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-10 gap-1">
              {lotteryData[4]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-5 w-full">
                  <div className="col-span-2 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        {/* หวยย้อนหลัง */}
        <div className=" flex mb-4 text-2xl">งวดวันที่ {selectedDate}</div>
        <div className="w-full flex">
          <div className="w-1/4 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              รางวัลที่ 1
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[0]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <h1 className="w-full text-center p-1 bg-gray-100">
              {lotteryData[0]?.numbers[0]}
            </h1>
          </div>
          <div className="w-1/4 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              เลขหน้า 3 ตัว
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-2">
              {lotteryData[7]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-4 w-full">
                  <div className="col-span-1 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              เลขท้าย 3 ตัว
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[5]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <div className="grid grid-cols-2">
              {lotteryData[5]?.numbers?.map((r, idx) => (
                <div className="grid grid-cols-4 w-full">
                  <div className="col-span-1 text-center p-1 bg-gray-300">
                    {idx + 1}
                  </div>
                  <div className="col-span-3 text-center p-1 bg-gray-100">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4 mx-2">
            <h1 className="text-center p-2 bg-sky-200 rounded-t-2xl">
              เลขท้าย 2 ตัว
            </h1>
            <h1 className="text-center">
              รางวัลละ {lotteryData[6]?.prize?.toLocaleString("TH-th")} บาท
            </h1>
            <h1 className="w-full text-center p-1 bg-gray-100">
              {lotteryData[6]?.numbers[0]}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LottoTable;
