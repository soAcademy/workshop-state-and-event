import { Fragment, useState, useEffect } from "react";
import axios from "axios";
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

const baseApiUrl = "https://www.thairath.co.th/api-lottery";

const filterCheckingNumbers = (checkingNumbers) => [
  ...new Set(
    checkingNumbers.value
      .split(/\n|\s|\t|,/)
      .filter(
        (number) => Number.isInteger(Number(number)) && number.length === 6
      )
  ),
];

const useFetchLotteryResults = () => {
  const [lotteryData, setLotteryData] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: `${baseApiUrl}`,
      params: { history: "1", date: "2023-02-01" },
    }).then((response) => {
      // console.log(response.data.data);
      setLotteryData(response.data.data);
    });
  }, []);

  return { lotteryData, setLotteryData };
};

const Lottery2 = () => {
  const { lotteryData } = useFetchLotteryResults();
  const handleCheckNumbersSubmit = (e) => {
    e.preventDefault();
    console.log(filterCheckingNumbers(e.target["checkingNumbers"]));
  };
  return (
    <Fragment>
      <div className="mx-auto my-8 w-3/4 bg-gray-100 p-6">
        <h1 className="text-center text-xl font-bold">
          ตรวจผลลอตเตอรี่ by หวยบิน
        </h1>
        <form onSubmit={(e) => handleCheckNumbersSubmit(e)}>
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
              className="w-32 bg-yellow-400 p-4 text-xl font-bold hover:bg-yellow-500 active:bg-amber-400"
            >
              ตรวจหวย
            </button>
          </div>
        </form>
      </div>
      <div className="">
        {lotteryData.prizes &&
          Object.keys(lotteryData.prizes)
            .reduce((accArray, prize, idx) => {
              accArray[idx] = {
                prizeCode: prize,
                ...lotteryData.prizes[prize],
              };
              return accArray;
            }, [])
            .map((prize, idx) => (
              <Fragment key={idx}>
                <h2 className="text-lg font-bold">
                  {prizeNames[Number(prize.prizeCode)]} จำนวน {prize.info[0]}{" "}
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
      {/* <div>{JSON.stringify(lotteryData.prizes)}</div> */}
    </Fragment>
  );
};

export default Lottery2;
