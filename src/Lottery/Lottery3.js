import { Fragment, useState, useEffect } from "react";
import axios from "axios";
// import lotteryApi from "./api-lottery.json";

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
  const [lotteryData, setLotteryData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: baseApiUrl,
      params: { history: "1", date: "2023-02-01" },
    }).then((response) => {
      // console.log(response.data.data);
      setLotteryData(
        Object.keys(response.data.data.prizes).reduce(
          (accArray, prize, idx) => {
            accArray[idx] = {
              prizeCode: prize,
              ...response.data.data.prizes[prize],
            };
            return accArray;
          },
          []
        )
      );
    });
  }, []);

  return { lotteryData, setLotteryData };
};

const Lottery3 = () => {
  const { lotteryData } = useFetchLotteryResults();

  const [validCheckingNumbers, setValidCheckingNumbers] = useState([]);

  const checkLotteryResults = (checkingNumbers, lotteryData) => {
    return checkingNumbers.reduce((accArray, number) => {
      const matchedPrizes = lotteryData.reduce((accPrizes, prize) => {
        const isPrizeMatched =
          prize.prizeCode === "6" &&
          prize.data.includes(number.substring(number.length - 3))
            ? "6"
            : prize.prizeCode === "7" &&
              prize.data.includes(number.substring(number.length - 2))
            ? "7"
            : prize.prizeCode === "10" &&
              prize.data.includes(number.substring(0, 3))
            ? "10"
            : prize.data.includes(number)
            ? prize.prizeCode
            : null;
        return [...accPrizes, isPrizeMatched];
      }, []);
      return [
        ...accArray,
        {
          number: number,
          prizes: matchedPrizes.filter((prize) => prize !== null),
        },
      ];
    }, []);
  };

  // const checkingNumbersWithPrizes = [
  //   { number: "181101", prizes: ["6", "10"] },
  //   { number: "297411", prizes: ["1"] },
  // ];

  const PrizesSummary = ({ checkingNumbersWithPrizes }) => {
    const totalAmount = checkingNumbersWithPrizes.reduce(
      (accAmount, number) => {
        return (
          accAmount +
          number.prizes.reduce((accPrizeAmount, prize) => {
            return (
              accPrizeAmount +
              lotteryData.filter(
                (lotteryPrize) => lotteryPrize.prizeCode === prize
              )[0].info[1]
              // 0
            );
          }, 0)
        );
      },
      0
    );
    return (
      <div className="mx-auto my-8 w-3/4 bg-red-200 p-6 font-nstl">
        <ul>
          {checkingNumbersWithPrizes.map((number, idx) => {
            // number.prizes.reduce((accString, prize) => {
            //   accString += prizeNames[prize];
            //   return accString;
            // }, "");
            return (
              <li key={idx}>
                {number.number}{" "}
                {number.prizes.length > 0
                  ? `เย้! ถูก${number.prizes.reduce((accString, prize, idx) => {
                      accString = `${accString}${idx === 0 ? "" : " "}${
                        idx === number.prizes.length - 1 && idx !== 0
                          ? "และ"
                          : ""
                      }${prizeNames[prize]} `;
                      return accString;
                    }, "")}`
                  : "ถูกกินครับ"}
                {/* {number.prizes.reduce((accString, prize, idx) => {
                accString = `${accString}${idx === 0 ? "" : " "}${
                  idx === number.prizes.length - 1 && idx !== 0 ? "และ" : ""
                }${prizeNames[prize]} `;
                return accString;
              }, "")} */}
              </li>
            );
          })}
        </ul>
        {checkingNumbersWithPrizes.length > 0 && (
          <p>
            คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
            {Intl.NumberFormat("th-TH").format(totalAmount)} บาท
          </p>
        )}
      </div>
    );
  };

  const handleCheckNumbersSubmit = (e) => {
    e.preventDefault();
    // console.log(filterCheckingNumbers(e.target["checkingNumbers"]));
    setValidCheckingNumbers(filterCheckingNumbers(e.target["checkingNumbers"]));
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-nstl text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
      {/* {JSON.stringify(checkLotteryResults(validCheckingNumbers, lotteryData))} */}
      <PrizesSummary
        checkingNumbersWithPrizes={checkLotteryResults(
          validCheckingNumbers,
          lotteryData
        )}
      />
      {/* <ul>
          {validCheckingNumbers.map((number, idx) => (
            <li key={idx}>{number}</li>
          ))}
        </ul> */}
      <div className="">
        {lotteryData?.map((prize, idx) => (
          <Fragment key={idx}>
            <h2 className="text-lg font-bold">
              {prizeNames[Number(prize.prizeCode)]} จำนวน {prize.info[0]} รางวัล
              รางวัลละ {Intl.NumberFormat("th-TH").format(prize.info[1])} บาท
            </h2>
            <ol className="flex flex-wrap font-nstl">
              {prize.data.map((entry, idx2) => (
                <li key={idx2} className="basis-1/5">
                  {entry}
                </li>
              ))}
            </ol>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Lottery3;
