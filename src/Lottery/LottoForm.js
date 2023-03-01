import React from "react";

const LottoForm = ({
  lotteryNumbers,
  checkWinner,
  setLotteryNumbers,
  setLotteryResult,
  selectedDate,
  setSelectedDate,
  lotteryDate,
}) => {
  return (
    <div>
      {/* กรอกเลข */}
      <h1 className="font-bold text-xl text-center mt-16">
        ตรวจผลลอตเตอรี่ by หวยบิน
      </h1>
      <div className="w-3/4 mx-auto bg-gray-100 mt-8 p-6">
        <div className="flex mt-4">
          <div className="w-full">
            <label>เลือกงวด</label>
            <br />
            <select
              onChange={(e) => setSelectedDate(e.target.value)}
              value={selectedDate}
            >
              {lotteryDate.map((date) => (
                <option key={date.dateString} value={date.dateString}>
                  {date.dateText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-full">
            <label>กรอกเลข</label>
            <br />
            <textarea
              rows="4"
              value={lotteryNumbers}
              className="p-2 w-full mt-2"
              placeholder="ตรวจหลายเลขให้เว้นบรรทัด( enter )"
              onChange={(e) => setLotteryNumbers(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between text-center mt-8">
          <button
            onClick={checkWinner}
            className="bg-sky-200 hover:bg-sky-300 active:bg-sky-400 p-4 w-full mx-1 font-bold text-xl"
          >
            ตรวจหวย
          </button>
          <button
            type="reset"
            className="bg-gray-400 hover:bg-gray-500 active:bg-amber-400 p-4 w-full mx-1 font-bold text-xl"
            onClick={() => {
              setLotteryNumbers("");
              setLotteryResult([]);
            }}
          >
            เคลียร์เลข
          </button>
        </div>
      </div>
    </div>
  );
};

export default LottoForm;

// <option value="2023-02-16">16 กุมภาพันธ์ 2566</option>
// <option value="2023-02-01"> 1 กุมภาพันธ์ 2566</option>
// <option value="2023-01-17">17 มกราคม 2566</option>
// <option value="2022-12-30">30 ธันวาคม 2565</option>
// <option value="2022-12-16">16 ธันวาคม 2565</option>
// <option value="2022-12-01"> 1 ธันวาคม 2565</option>
// <option value="2022-11-16">16 พฤศจิกายน 2565</option>
// <option value="2022-11-01"> 1 พฤศจิกายน 2565</option>
// <option value="2022-10-16">16 ตุลาคม 2565</option>
// <option value="2022-10-01"> 1 ตุลาคม 2565</option>
// <option value="2022-09-16">16 กันยายน 2565</option>
// <option value="2022-09-01"> 1 กันยายน 2565</option>
// <option value="2022-08-16">16 สิงหาคม 2565</option>
// <option value="2022-08-01"> 1 สิงหาคม 2565</option>
// <option value="2022-07-16">16 กรกฎาคม 2565</option>
// <option value="2022-07-01"> 1 กรกฎาคม 2565</option>
// <option value="2022-06-16">16 มิถุนายน 2565</option>
// <option value="2022-06-01"> 1 มิถุนายน 2565</option>
// <option value="2022-05-16">16 พฤษภาคม 2565</option>
// <option value="2022-05-02"> 2 พฤษภาคม 2565</option>
// <option value="2022-04-16">16 เมษายน 2565</option>
// <option value="2022-04-01"> 1 เมษายน 2565</option>
// <option value="2022-03-16">16 มีนาคม 2565</option>
// <option value="2022-03-01"> 1 มีนาคม 2565</option>
// <option value="2022-02-17">17 กุมภาพันธ์ 2565</option>
// <option value="2022-02-01"> 1 กุมภาพันธ์ 2565</option>
// <option value="2022-01-17">17 มกราคม 2565</option>
// <option value="2021-12-30">30 ธันวาคม 2564</option>
// <option value="2021-12-16">16 ธันวาคม 2564</option>
// <option value="2021-12-01"> 1 ธันวาคม 2564</option>
// <option value="2021-11-16">16 พฤศจิกายน 2564</option>
// <option value="2021-11-01"> 1 พฤศจิกายน 2564</option>
// <option value="2021-10-16">16 ตุลาคม 2564</option>
// <option value="2021-10-01"> 1 ตุลาคม 2564</option>
// <option value="2021-09-16">16 กันยายน 2564</option>
// <option value="2021-09-01"> 1 กันยายน 2564</option>
// <option value="2021-08-16">16 สิงหาคม 2564</option>
// <option value="2021-08-01"> 1 สิงหาคม 2564</option>
// <option value="2021-07-16">16 กรกฎาคม 2564</option>
// <option value="2021-07-01"> 1 กรกฎาคม 2564</option>
// <option value="2021-06-16">16 มิถุนายน 2564</option>
// <option value="2021-06-01"> 1 มิถุนายน 2564</option>
// <option value="2021-05-16">16 พฤษภาคม 2564</option>
// <option value="2021-05-02"> 2 พฤษภาคม 2564</option>
// <option value="2021-04-16">16 เมษายน 2564</option>
// <option value="2021-04-01"> 1 เมษายน 2564</option>
// <option value="2021-03-16">16 มีนาคม 2564</option>
// <option value="2021-03-01"> 1 มีนาคม 2564</option>
// <option value="2021-02-16">16 กุมภาพันธ์ 2564</option>
