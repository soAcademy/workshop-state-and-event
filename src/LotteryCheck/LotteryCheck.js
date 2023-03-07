import { useState, useEffect } from "react";
import axios from "axios";

const LotteryCheck = () => {
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setLotteryDateTitle] = useState();
  const [historyLotteryData, setHistoryLotteryData] = useState();
  const [inputNumber, setInputNumber] = useState("");
  const [resultTexts, setResultTexts] = useState([]);
  const [prizeResult, setPrizeResult] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);

  console.log("inputNumber", inputNumber);

  const currentDate = new Date().toISOString().slice(0, 10);
  console.log("currentDate", currentDate);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${currentDate}`,
    }).then((response) => {
      console.log("API res", response.data);

      setLotteryDateTitle(response.data.data.lotteryDateTitle);
      console.log("Date", response.data.data.lotteryDateTitle);

      const tempLotteryData = Object.values(response.data?.data?.prizes)?.map(
        (r) => ({
          numbers: r.data,
          prize: r.info[1],
        })
      );

      setLotteryData(tempLotteryData);
      console.log("tempLotteryData", tempLotteryData);

      const tempHistoryLotteryData = Object.values(
        response.data?.data?.history
      )?.map((r) => ({
        date: r.title,
        prize: r.prizes,
      }));

      setHistoryLotteryData(tempHistoryLotteryData);
      console.log("tempHistoryLotteryData", tempHistoryLotteryData);

      console.log("aaa", tempHistoryLotteryData[0].prize[1][0]);

      const tempInputNumber = [
        ...new Set(inputNumber?.split("\n").filter((r) => r.length === 6)),
      ];
      console.log("tempInputNumber", tempInputNumber);

      const tempLotteryResult = tempInputNumber.map((num, idx) => {
        const checkLotteryPrize = lotteryData.findIndex((r, idx) =>
          idx === 5
            ? r.numbers.includes(num.substr(-3))
            : idx === 6
            ? r.numbers.includes(num.substr(-2))
            : idx === 7
            ? r.numbers.includes(num.substr(0, 3))
            : r.numbers.includes(num)
        );
        return {
          num,
          prize: checkLotteryPrize,
        };
      });
      console.log("tempLotteryResult", tempLotteryResult);

      const getPrizeText = (index) =>
        index < 5
          ? `รางวัลที่ ${index + 1}`
          : index === 5
          ? "รางวัลเลขท้าย 3 ตัว"
          : index === 6
          ? "รางวัลเลขท้าย 2 ตัว"
          : index === 7
          ? "รางวัลเลขหน้า 3 ตัว"
          : "รางวัลข้างเคียงรางวัลที่ 1";

      const tempResultTexts = tempLotteryResult.map(
        (r) =>
          "หมายเลข " +
          r.num +
          " " +
          (r.prize === -1 ? "ถูกกินครับ" : `ถูก${getPrizeText(r.prize)}`)
      );
      setResultTexts(tempResultTexts);
      console.log("tempResultTexts", tempResultTexts);

      const tempPrizeResult = tempLotteryResult
        ?.filter((r) => r.prize !== -1)
        .reduce((acc, r) => acc + tempLotteryData[r.prize].prize, 0);
      setPrizeResult(tempPrizeResult);
      console.log("tempPrizeResult", tempPrizeResult);
    });
  }, [toggle, click]);

  return (
    <>
      <div className="m-4">
        <h1 className="font-bold text-xl text-center">ตรวจผลลอตเตอรี่</h1>
        <div className="w-1/2 bg-gray-200 mx-auto mt-8 p-4 mb-4">
          <p>กรอกเลข</p>
          <textarea
            value={inputNumber}
            type="text"
            className="bg-white h-32 w-full mt-2 p-2"
            placeholder="กรอกเลขลอตเตอรี่"
            onChange={(e) => setInputNumber(e.target.value)}
          />
          <div className="flex justify-evenly pt-4">
            <button
              className="rounded bg-yellow-300 py-2 px-4 font-bold"
              onClick={() => {
                setToggle(true);
                setClick(!click);
              }}
            >
              ตรวจหวย
            </button>
            <button
              className="rounded bg-gray-300 py-2 px-4 font-bold"
              onClick={() => {
                setInputNumber("");
                setToggle(!toggle);
              }}
            >
              เคลียร์เลย
            </button>
          </div>
        </div>

        {toggle && (
          <div className="w-1/2 bg-red-100 mx-auto m-4 p-4">
            {resultTexts.map((r) => (
              <div>{r}</div>
            ))}
            <div className="mt-2 font-bold">
              คุณถูกหวยงวดนี้ทั้งสิ้น {prizeResult.toLocaleString()} บาท
            </div>
          </div>
        )}

        <h1 className="text-center">
          ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryDateTitle}
        </h1>
        <div>
          {/* รางวัลที่ 1 */}
          <div className="flex justify-evenly w-11/12 mx-auto text-center mt-4">
            <div className="w-2/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 1
              </p>
              <p className="pt-2">
                รางวัลละ {lotteryData[0]?.prize?.toLocaleString()} บาท
              </p>
              <p className="text-xl font-bold text-blue-300">
                {lotteryData[0]?.numbers}
              </p>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขหน้า 3 ตัว
              </p>
              <p className="pt-2">
                รางวัลละ {lotteryData[7]?.prize?.toLocaleString()} บาท
              </p>
              <div className="flex justify-evenly">
                <span className="text-xl font-bold text-blue-300">
                  {lotteryData[7]?.numbers[0]}
                </span>
                <span className="text-xl font-bold text-blue-300">
                  {lotteryData[7]?.numbers[1]}
                </span>
              </div>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขท้าย 3 ตัว
              </p>
              <p className="pt-2">
                รางวัลละ {lotteryData[5]?.prize?.toLocaleString()} บาท
              </p>
              <div className="flex justify-evenly">
                <span className="text-xl font-bold text-blue-300">
                  {lotteryData[5]?.numbers[0]}
                </span>
                <span className="text-xl font-bold text-blue-300">
                  {lotteryData[5]?.numbers[1]}
                </span>
              </div>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                เลขท้าย 2 ตัว
              </p>
              <p className="pt-2">
                รางวัลละ {lotteryData[6]?.prize?.toLocaleString()} บาท
              </p>
              <p className="text-xl font-bold text-blue-300">
                {lotteryData[6]?.numbers}
              </p>
            </div>
          </div>

          {/* รางวัลที่ 2 */}
          <div className="flex justify-evenly w-11/12 mx-auto text-center mt-4">
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลข้างเคียงรางวัลที่ 1
              </p>

              <p className="text-xl font-bold text-blue-300 mt-5">
                {" "}
                {lotteryData[8]?.numbers[0]}
              </p>
            </div>
            <div className="w-1/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลละ {lotteryData[8]?.prize?.toLocaleString()} บาท
              </p>

              <p className="text-xl font-bold text-blue-300 mt-5">
                {" "}
                {lotteryData[8]?.numbers[1]}
              </p>
            </div>
            <div className="w-3/5 border border-gray-300">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 2
              </p>
              <p className="mt-2 ">
                รางวัลละ {lotteryData[1]?.prize?.toLocaleString()} บาท
              </p>
              <div className="grid grid-cols-5 mt-2 m-2 gap-2">
                {lotteryData[1]?.numbers?.map((r, idx) => (
                  <div className="flex">
                    <div className="w-1/5 bg-gray-200 border border-gray-300 px-2">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">{r}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* รางวัลที่ 3 */}
          <div className="w-11/12 mx-auto text-center mt-4">
            <div className="border border-gray-300 w-full">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 3
              </p>
              <p className="mt-2 ">
                รางวัลละ {lotteryData[2]?.prize?.toLocaleString()} บาท
              </p>
              <div className="grid grid-cols-10 mt-2 m-2 gap-2">
                {lotteryData[2]?.numbers?.map((r, idx) => (
                  <div className="flex ">
                    <div className="w-1/5 bg-gray-200 border border-gray-300">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">{r}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* รางวัลที่ 4 */}
          <div className="w-11/12 mx-auto text-center mt-4">
            <div className="border border-gray-300 w-full">
              <p className="border-b border-gray-300 bg-blue-200 font-bold">
                รางวัลที่ 4
              </p>
              <p className="mt-2 ">
                รางวัลละ {lotteryData[3]?.prize?.toLocaleString()} บาท
              </p>
              <div className="grid grid-cols-10 mt-2 m-2 gap-2">
                {lotteryData[3]?.numbers?.map((r, idx) => (
                  <div className="flex">
                    <div className="w-1/5 bg-gray-200 border border-gray-300">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">{r}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* รางวัลที่ 5 */}
          <div className="w-11/12 mx-auto text-center mt-4">
            <div className="border border-gray-300 w-full">
              <p className="border-b border-gray-300 bg-blue-200 font-bold ">
                รางวัลที่ 5
              </p>
              <p className="mt-2 ">
                รางวัลละ {lotteryData[4]?.prize?.toLocaleString()} บาท
              </p>
              <div className="grid grid-cols-10 mt-2 m-2 gap-2">
                {lotteryData[4]?.numbers?.map((r, idx) => (
                  <div className="flex">
                    <div className="w-1/5 bg-gray-200 border border-gray-300">
                      {idx + 1}
                    </div>
                    <div className="w-4/5">{r}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ตรวจหวย */}
          {historyLotteryData?.map((r) => (
            <div className="w-3/4 mx-auto text-center mt-6 border border-gray-300 rounded">
              <h1 className="bg-green-400 text-white text-left p-2 font-bold border-b border-gray-300">
                ตรวจหวย {r.date}
              </h1>
              <div className="flex py-2">
                <div className="w-2/5 border-r border-gray-300">
                  <p className="">รางวัลที่ 1</p>
                  <p className="text-xl font-bold text-blue-300">
                    {r.prize[1][0]}
                  </p>
                </div>
                <div className="w-1/5 border-r border-gray-300">
                  <p className="">เลขหน้า 3 ตัว</p>
                  <div className="flex justify-evenly">
                    <span className="text-xl font-bold text-blue-300">
                      {r.prize[6][0]}
                    </span>
                    <span className="text-xl font-bold text-blue-300">
                      {r.prize[6][1]}
                    </span>
                  </div>
                </div>
                <div className="w-1/5 border-r border-gray-300">
                  <p className="">เลขท้าย 3 ตัว</p>
                  <div className="flex justify-evenly">
                    <span className="text-xl font-bold text-blue-300">
                      {r.prize[10][0]}
                    </span>
                    <span className="text-xl font-bold text-blue-300">
                      {r.prize[10][1]}
                    </span>
                  </div>
                </div>
                <div className="w-1/5">
                  <p className="">เลขท้าย 2 ตัว</p>
                  <p className="text-xl font-bold text-blue-300">
                    {r.prize[7][0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LotteryCheck;
