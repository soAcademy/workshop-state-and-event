import { useState, useEffect } from "react";
import axios from "axios";

const LotteryFetch = ({ lotteryDate }) => {
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setlotteryDateTitle] = useState();
  console.log("lotteryData555", lotteryData);
  useEffect(() => {
    axios({
      url: "https://www.thairath.co.th/api-lottery?history=1&date=2023-01-17",
      method: "get",
    }).then((res) => {
      setlotteryDateTitle(res.data?.data?.lotteryDateTitle);

      // console.log("_lotteryData",_lotteryData)
      console.log("Objects.Values", Object.values(res.data?.data?.prizes));
      // console.log("Objects.Values+Map",Object.values(res.data?.data?.prizes)?.map(r=>r.data))
      const _lotteryData = Object.values(res.data?.data?.prizes)?.map((r) => ({
        numbers: r.data, //เลขที่ออก
        prize: r.info[1], //เงินรางวัล
      }));
      setLotteryData(_lotteryData);
    });
  }, [lotteryDate]);

  return {
    lotteryData,
    lotteryDateTitle,
  };
};

const LotteryForm = ({
  LotteryNumbers,
  setLotteryNumbers,
  toggleCalculateResult,
  setToggleCalculateResult,
  setLotteryResult,
}) => {
  return (
    <>
      <div className="font-kanit  bg-transparant ">
        <div className="p-4 text-2xl flex flex-row  ">
          <div className="mx-auto flex">
            <div className="my-auto text-2xl font-bold ">ตรวจผลลอตเตอรี่</div>
            <div className="  flex">
              {" "}
              <img className="w-[50px]" src="doreamon555.png" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-gradient-to-b from-cyan-400 to-cyan-300 w-[500px] mx-auto flex flex-col rounded-lg shadow-lg">
            <p className="p-2">กรอกเลย</p>
            <div className="p-2 ">
              {console.log(LotteryNumbers)}
              <textarea
                row="4"
                value={LotteryNumbers}
                placeholder="กรอกล็อตเตอรี่"
                onChange={(e) => setLotteryNumbers(e.target.value)}
                className="bg-slate-200 w-full pb-10 pl-5 pt-2 mx-auto rounded-lg"
              />
            </div>
            <div className="flex flex-row mx-auto space-x-4 p-2 w-full ">
              <div className="w-1/2">
                <button
                  onClick={() =>
                    setToggleCalculateResult(!toggleCalculateResult)
                  }
                  className="bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-lg p-2 text-xl w-full "
                >
                  ตรวจผลลอตเตอรี่
                </button>
              </div>
              <div className="w-1/2">
                <button
                  onClick={() => {
                    setLotteryNumbers();
                    setLotteryResult();
                  }}
                  className="bg-gradient-to-b from-slate-400 to-slate-300 rounded-lg p-2 text-xl w-full "
                >
                  เคลียร์เลย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const LotteryTable = ({ lotteryData, lotteryDateTitle }) => {
  console.log(
    "LotteryTable>>lotteryData",
    lotteryData[3]?.numbers?.map((r) => r)
  );
  return (
    <>
      <div className="w-full">
        <div className="font-bold p-4 text-center mx-auto">
          ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่ {lotteryDateTitle}
        </div>
      </div>
      <div className="font-kanit px-4 pb-5 shadow-lg">
        <div className="flex w-full  text-center ">
          <div className="w-1/3 bg-green-50  border-t-2 border-l-2 border-b-2 border-r-2 border-slate-600  ">
            <h1 className="font-bold text-lg bg-blue-400  ">รางวัลที่ 1</h1>
            <h2 className="font-bold text-lg">
              รางวัลละ {lotteryData[0]?.prize} บาท
            </h2>
            <div className="font-bold text-2xl mt-4 text-blue-700">
              {lotteryData[0]?.numbers}
            </div>
          </div>
          <div className="flex-auto bg-green-50  border-t-2 border-b-2 border-r-2 border-slate-600">
            <h1 className="font-bold text-lg  bg-blue-400 ">เลขหน้า 3 ตัว</h1>
            <h2 className="font-bold text-lg">รางวัลละ 4,000 บาท</h2>
            <div className="font-bold text-2xl mt-4 flex text-blue-700">
              {lotteryData[5]?.numbers?.map((r) => (
                <div className="flex-auto ">{r}</div>
              ))}
            </div>
          </div>
          <div className="flex-auto bg-green-50 border-t-2 border-b-2 border-r-2 border-slate-600">
            <h1 className="font-bold text-lg  bg-blue-400  border-b-2 border-slate-400">
              เลขท้าย 3 ตัว
            </h1>
            <h2 className="font-bold text-lg ">รางวัลละ 4,000 บาท</h2>
            <div className="font-bold text-2xl mt-4 flex text-blue-700">
              {lotteryData[7]?.numbers?.map((r) => (
                <div className="flex-auto ">{r}</div>
              ))}
            </div>
          </div>
          <div className="flex-auto bg-green-50 border-t-2 border-b-2 border-r-2 border-slate-600">
            <h1 className="font-bold text-lg bg-blue-400  ">เลขท้าย 2 ตัว</h1>
            <h2 className="font-bold text-lg ">รางวัลละ 2,000 บาท</h2>
            {lotteryData[6]?.numbers?.map((r) => (
              <div className="text-2xl mt-4 font-bold text-blue-700 ">{r}</div>
            ))}
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col w-1/6 ">
            <div className="text-center bg-blue-400 border-l-2 border-b-2 border-r-2 border-slate-600 ">
              รางวัลข้างเคียงรางวัลที่1
            </div>

            <div className="text-center font-bold text-blue-700 bg-green-50 border-l-2 border-b-2 border-r-2 border-slate-600">
              {lotteryData[8]?.numbers[0]}
            </div>
          </div>
          <div className="flex flex-col w-1/6 ">
            <div className="text-center   border-b-2 border-r-2 border-slate-600 bg-green-50">
              รางวัลละ 100,000 บาท
            </div>

            <div className="text-center font-bold text-blue-700 bg-green-50  border-b-2 border-r-2 border-slate-600">
              {lotteryData[8]?.numbers[1]}
            </div>
          </div>
          <div className="w-2/3 bg-red-200 ">
            <div className="flex ">
              <div className="bg-blue-400 w-1/3 text-center  border-b-2 border-r-2 border-slate-600 ">
                รางวัลที่ 2
              </div>
              <div className="flex-auto text-center bg-green-50  border-b-2 border-r-2 border-slate-600">
                รางวัลละ 200,000 บาท
              </div>
            </div>
            <div className="grid grid-cols-5 font-bold text-blue-700 ">
              {lotteryData[1]?.numbers
                ?.map((r) => r)
                .map((r, idx) => (
                  <div className="flex flex-row bg-green-50  border-b-2 border-r-2 border-slate-600">
                    <div className="bg-slate-400 px-2">{idx + 1}</div>
                    <div className="text-center mx-auto">{r}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full  bg-green-50 rounded-lg font-kanit">
          <div className="flex flex-row border-x-2  border-b-2 border-r-2 border-slate-600">
            <div className="font-bold text-lg bg-blue-400 w-1/3 text-center border-r-2 border-slate-600">
              รางวัลที่ 3
            </div>
            <div className="flex-auto bg-green-50 text-center font-bold">
              รางวัลละ 80,000 บาท
            </div>
          </div>
          <div className=" grid grid-cols-5 text-center border-l-2 border-slate-600 ">
            {lotteryData[2]?.numbers
              ?.map((r) => r)
              .map((r, idx) => (
                <div className="flex text-center  border-b-2 border-r-2 border-slate-600">
                  <div className=" bg-slate-400 px-2 w-[30px] ">{idx + 1}</div>
                  <div className="mx-auto text-blue-600">{r}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full  bg-green-50 font-kanit  border-l-2 border-slate-600">
          <div className="flex flex-row  border-b-2 border-r-2 border-slate-600  ">
            <div className="font-bold text-lg bg-blue-400 w-1/3 text-center  border-r-2 border-slate-600 ">
              รางวัลที่ 4
            </div>
            <div className="flex-auto bg-green-50 text-center font-bold">
              รางวัลละ 40,000 บาท
            </div>
          </div>
          <div className=" grid grid-cols-5 text-center  ">
            {lotteryData[3]?.numbers
              ?.map((r) => r)
              .map((r, idx) => (
                <div className="flex text-center border-b-2 border-r-2 border-slate-600">
                  <div className=" bg-slate-400 px-2 w-[30px] ">{idx + 1}</div>
                  <div className="mx-auto text-blue-400">{r}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const LotteryResult = ({ lotteryResult }) => {
  return (
    <>
      {lotteryResult?.resultTexts?.length > 0 && (
        <div className="w-1/2 mx-auto bg-cyan-100 mt-8 py-8 text-left pl-8 rounded-lg text-xl font-kanit">
          {lotteryResult?.resultTexts?.map((r, idx) => (
            <div key={idx}>{r}</div>
          ))}
          <div className="font-bold mt-4 text-xl">
            คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
            {lotteryResult?.totalPrizes?.toLocaleString("TH-th")} บาท
          </div>
        </div>
      )}
    </>
  );
};
const useCheckLottery = ({ lotteryData }) => {
  //เรียกใช้ ค่าที่ถูก setState มาจาก LotteryForm
  const [LotteryNumbers, setLotteryNumbers] = useState();
  const [toggleCalculateResult, setToggleCalculateResult] = useState(false);
  const [lotteryResult, setLotteryResult] = useState();

  //function for ตรวจหวย
  const checkLotteryPrizes = (number) =>
    lotteryData.findIndex((r, idx) =>
      idx === 5
        ? r.numbers.includes(number.substr(-3))
        : idx === 6
        ? r.numbers.includes(number.substr(-2))
        : idx === 7
        ? r.numbers.includes(number.substr(0, 3))
        : r.numbers.includes(number)
    );

  const getPrizeText = (index) =>
    index < 5
      ? `รางวัลที่ ${index + 1}`
      : index === 5
      ? `รางวัลเลขท้าย 3 ตัว`
      : index === 6
      ? `รางวัลเลขท้าย 2 ตัว`
      : index === 7
      ? `รางวัลเลขหน้า 3 ตัว`
      : "รางวัลข้างเคียงรางวัลที่ 1";

  useEffect(() => {
    //transform input from textarea
    const _lotteryNumbers = [
      ...new Set(LotteryNumbers?.split("\n").filter((r) => r.length === 6)),
    ];

    const _lotteryResults = _lotteryNumbers.map((number) => ({
      number,
      prize: checkLotteryPrizes(number),
    }));

    const resultTexts = _lotteryResults.map(
      (r) =>
        "หมายเลข" +
        " " +
        r.number +
        " " +
        (r.prize === -1 ? " ถูกกินครับ" : `ถูก${getPrizeText(r.prize)}`)
    );

    const totalPrizes = _lotteryResults
      .filter((r) => r.prize !== -1)
      .reduce((acc, r) => acc + lotteryData[r.prize].prize, 0);

    setLotteryResult({ resultTexts, totalPrizes });
  }, [toggleCalculateResult]);

  return {
    LotteryNumbers,
    setLotteryNumbers,
    toggleCalculateResult,
    setToggleCalculateResult,
    lotteryResult,
    setLotteryResult,
  };
};

const getDate = (date) => new Date(date).toISOString().slice(0, 10);

const LotteryHome = () => {
  //use hook Lottery Fetch
  const { lotteryData, lotteryDateTitle } = LotteryFetch(getDate(new Date()));

  //use hook check lottery
  const {
    LotteryNumbers,
    setLotteryNumbers,
    toggleCalculateResult,
    setToggleCalculateResult,
    lotteryResult,
    setLotteryResult,
  } = useCheckLottery({ lotteryData });
  return (
    <>
      <div className=" bg-gradient-to-b from-slate-400 to-slate-300 h-full">
        <LotteryForm
          LotteryNumbers={LotteryNumbers}
          setLotteryNumbers={setLotteryNumbers}
          toggleCalculateResult={toggleCalculateResult}
          setToggleCalculateResult={setToggleCalculateResult}
          setLotteryResult={setLotteryResult}
        />
        <LotteryResult lotteryResult={lotteryResult} />
        <LotteryTable
          lotteryData={lotteryData}
          lotteryDateTitle={lotteryDateTitle}
        />
      </div>
    </>
  );
};
export default LotteryHome;
