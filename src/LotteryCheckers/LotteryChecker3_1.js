import { useState, useEffect } from "react";
import axios from "axios";

const LotteryChecker3_1 = () => {
  const [lotteryNumbers, setLotteryNumbers] = useState();
  const [toggleCalculateResult, setToggleCalculateResult] = useState();
  const [lotteryResult, setLotteryResult] = useState();

  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setLotteryDateTitle] = useState();
  //getDate
  const getDate = (date) => new Date(date).toISOString().slice(0, 10);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${getDate}`,
    }).then((response) => {
      setLotteryDateTitle(response.data?.data?.lotteryDateTitle);

      console.log("date", response.data?.data?.lotteryDateTitle);
      //remove nested objects + get data
      const _lotteryData = Object.values(response.data?.data?.prizes)?.map(
        (r) => ({
          numbers: r.data,
          prize: r.info[1],
        })
      );
      setLotteryData(_lotteryData);
      console.log("no object.values", response.data?.data?.prizes);
      console.log("data", _lotteryData);
    });
  }, []);

  const checkLotteryPrize = (number) =>
    lotteryData.findIndex(
      (r, idx) =>
        idx === 5
          ? r.numbers.includes(number.substr(-3)) //สามตัวท้าย
          : idx === 6
          ? r.numbers.includes(number.substr(-2)) //สองตัวท้าย
          : idx === 7
          ? r.numbers.includes(number.substr(0, 3)) //สามตัวหน้า
          : r.numbers.includes(number) //...?
    );

    

  const getPrizeText = (index) =>
    index < 5 //รางวัลที่ 1 ถึง 5
      ? `รางวัลที่ ${index + 1}`
      : index === 5
      ? `รางวัลเลขท้าย 3 ตัว`
      : index === 6
      ? `รางวัลเลขท้าย 2 ตัว`
      : index === 7
      ? `รางวัลเลขหน้า 3 ตัว`
      : "รางวัลข้างเคียงรางวัลที่หนึ่ง";

  useEffect(() => {
    const __lotteryNumbers = [
      ...new Set(lotteryNumbers?.split("\n").filter((r) => r.length === 6)),
    ];
    const _lotteryResult = __lotteryNumbers.map((number) => ({
      number,
      prize: checkLotteryPrize(number),
    }));

    console.log("lotteryNumbers", __lotteryNumbers)
    console.log("_lotteryResult", _lotteryResult)

    const resultTexts = _lotteryResult.map(
      (r) =>
        "หมายเลข" +
        r.number +
        " " +
        (r.prize === -1 ? "ถูกกินครับ" : `ถูก${getPrizeText(r.prize)}`)  
    );
    
    const totalPrize = _lotteryResult
      .filter((r) => r.prize !== -1)
      .reduce((acc, r) => acc + lotteryData[r.prize].prize, 0);

    setLotteryResult({ resultTexts, totalPrize });
    console.log("resultTexts", resultTexts)
    console.log("totalPrize", totalPrize)
  }, [toggleCalculateResult]);

  return (
    <div>
      <h1 className="text-center p-2 font-bold text-2xl">Lottery Checker</h1>
      <div className="bg-sky-300 m-auto w-1/2 mt-4">
        <h1 className="ml-4">กรอกเลข</h1>
        <div className="text-center">
          <textarea
            rows="4"
            value={lotteryNumbers}
            paceholder="กรอกเลขลอตเตอรี่"
            type="text"
            className="w-3/4 h-3/4 m-auto"
            onChange={(e) => setLotteryNumbers(e.target.value)}
          />
        </div>
        <div className="flex">
          <button
            className="button bg-yellow-300 w-1/3 p-2 mt-4 rounded-lg mx-auto mb-4"
            onClick={() => setToggleCalculateResult(!toggleCalculateResult)} //...?
          >
            ตรวจหวย
          </button>
          <button
            className="button bg-neutral-200 w-1/3 p-2 mt-4 rounded-lg mx-auto mb-4"
            onClick={() => {
              setLotteryResult();
              setLotteryNumbers("");
            }}
          >
            Clear
          </button>
        </div>
      </div>
      {lotteryResult?.resultTexts?.length > 0 && ( //line 309
        <div className="bg-red-300 m-auto w-1/2  mt-4">
          {lotteryResult?.resultTexts?.map(
            (
              r,
              idx //resultTexts from line 314
            ) => (
              <div className="flex">
                <h2 className="p-2" key={idx}>
                  {r}
                </h2>
              </div>
            )
          )}
          <div className="p-2">
            คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
            {lotteryResult?.totalPrize?.toLocaleString()}
          </div>
        </div>
      )}

      <div className="text-center text-xl font-bold mt-2">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryDateTitle}
      </div>
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
              <h2 className="font-bold">
                รางวัลละ {lotteryData[7]?.prize?.toLocaleString()} บาท
              </h2>
              <h1 className="text-center">{lotteryData[7]?.numbers[0]}</h1>
              <h1 className="text-center">{lotteryData[7]?.numbers[1]}</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">
                รางวัลละ {lotteryData[5]?.prize?.toLocaleString()} บาท
              </h2>
              <h1 className="text-center">{lotteryData[5]?.numbers[0]}</h1>
              <h1 className="text-center">{lotteryData[5]?.numbers[1]}</h1>
            </td>
            <td className="border border-2 border-black p-2">
              <h2 className="font-bold">
                รางวัลละ {lotteryData[6]?.prize?.toLocaleString()} บาท
              </h2>
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
          {[...new Array(5).keys()].map((row) => (
            <tr>
              {lotteryData[2]?.numbers
                ?.slice(row * 10, (row + 1) * 10)
                .map((r, idx) => (
                  <>
                    <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                      <span>{row * 10 + idx + 1}</span>
                    </td>
                    <td className="border border-2 border-black p-2 text-center font-bold">
                      {r}
                    </td>
                  </>
                ))}
            </tr>
          ))}
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
          {[...new Array(5).keys()].map((row) => (
            <tr>
              {lotteryData[3]?.numbers
                ?.slice(row * 10, (row + 1) * 10)
                .map((r, idx) => (
                  <>
                    <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                      <span>{row * 10 + idx + 1}</span>
                    </td>
                    <td className="border border-2 border-black p-2 text-center font-bold">
                      {r}
                    </td>
                  </>
                ))}
            </tr>
          ))}
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
          {[...new Array(10).keys()].map((row) => (
            <tr>
              {lotteryData[4]?.numbers
                ?.slice(row * 10, (row + 1) * 10)
                .map((r, idx) => (
                  <>
                    <td className="border border-2 border-black p-2 text-center font-bold bg-neutral-400">
                      <span>{row * 10 + idx + 1}</span>
                    </td>
                    <td className="border border-2 border-black p-2 text-center font-bold">
                      {r}
                    </td>
                  </>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LotteryChecker3_1;
