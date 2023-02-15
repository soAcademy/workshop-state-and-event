import { Fragment } from "react";
import lotteryApi from "./api-lottery.json";

const prizeNames = {
  1: "รางวัลที 1",
  2: "รางวัลที่ 2",
  3: "รางวัลที่ 3",
  4: "รางวัลที่ 4",
  5: "รางวัลที่ 5",
  6: "รางวัลเลขท้าย 3 ตัว",
  7: "รางวัลเลขท้าย 2 ตัว",
  10: "รางวัลเลขหน้า 3 ตัว",
  11: "รางวัลข้างเคียงรางวัลที่ 1",
};

const Lottery1 = () => {
  return (
    <Fragment>
      <div className="mx-auto my-8 w-3/4 bg-gray-100 p-6">
        <h1 className="text-center text-xl font-bold">
          ตรวจผลลอตเตอรี่ by หวยบิน
        </h1>
        <form>
          <div className="my-4 flex space-x-8">
            <div className="w-full">
              <label htmlFor="checkingNumbers">กรอกเลข</label>
              <br />
              <textarea
                id="checkingNumbers"
                rows="4"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="กรอกเลขบรรทัดละชุด"
              ></textarea>
            </div>
          </div>
          <div className="my-8 text-center">
            <button
              type="submit"
              // onClick={() => handleCalculateClick()}
              className="w-32 bg-yellow-400 p-4 text-xl font-bold hover:bg-yellow-500 active:bg-amber-400"
            >
              ตรวจหวย
            </button>
          </div>
        </form>
      </div>
      <div className="">
        {Object.keys(lotteryApi.data.prizes)
          .reduce((accArray, prize, idx) => {
            accArray[idx] = {
              prizeName: prize,
              ...lotteryApi.data.prizes[prize],
            };
            return accArray;
          }, [])
          .map((prize, idx) => (
            <Fragment key={idx}>
              <h2 className="text-lg font-bold">
                {prizeNames[Number(prize.prizeName)]} จำนวน {prize.info[0]}{" "}
                รางวัล รางวัลละ{" "}
                {Intl.NumberFormat("th-TH").format(prize.info[1])} บาท
              </h2>
              <ol className="flex flex-wrap font-nstl">
                {prize.data.map((entry, idx2) => (
                  <li key={idx2} className="basis-1/5">
                    {entry}
                  </li>
                ))}
              </ol>
            </Fragment>
            // <div>{JSON.stringify(prize)}</div>
          ))}
      </div>
      {/* <div>{JSON.stringify(lotteryApi.data.prizes)}</div> */}
    </Fragment>
  );
};

export default Lottery1;
