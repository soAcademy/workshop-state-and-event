import { useState, useEffect } from "react";
import axios from "axios";

const LotteryForm = ({
  lotteryNumbers,
  setLotteryNumbers,
  toggleCalculateResult,
  setToggleCalculateResult,
  setLotteryResult,
}) => (
  <>
    <div className="w-1/2 mx-auto bg-gray-100 mt-8 p-8">
      <textarea
        rows="4"
        value={lotteryNumbers}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="กรอกเลขลอตเตอรี่"
        onChange={(e) => setLotteryNumbers(e.target.value)}
      />
      <div className="space-x-4">
        <button
          className="bg-yellow-500 active:bg-amber-500 rounded-lg mt-4 p-4"
          onClick={() => setToggleCalculateResult(!toggleCalculateResult)}
        >
          ตรวจหวย
        </button>
        <button
          className="bg-blue-200 active:bg-purple-200 rounded-lg mt-4 p-4"
          onClick={() => {
            setLotteryResult();
            setLotteryNumbers('');
          }}
        >
          เคลียร์เลข
        </button>
      </div>
    </div>
  </>
);

const LotteryResult = ({ lotteryResult }) => (
  <>
    {lotteryResult?.resultTexts?.length > 0 && (
      <div className="w-1/2 mx-auto bg-gray-50 mt-8 py-8 text-left pl-8">
        {lotteryResult?.resultTexts?.map((r, idx) => (
          <div key={idx}>{r}</div>
        ))}
        <div className="font-bold mt-4">
          คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
          {lotteryResult?.totalPrize?.toLocaleString("TH-th")} บาท
        </div>
      </div>
    )}
  </>
);

const LotteryTable = ({ lotteryData, lotteryDateTitle }) => (
  <div className="mb-16">
    <div>
      <h1 className="text-xl font-bold mt-8">
        ผลการออกรางวัลสลากกินแบ่งรัฐบาล
        <br />
        ประจำวันที่ {lotteryDateTitle}
      </h1>
    </div>
    <div className="flex w-full mt-4 space-x-4">
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">รางวัลที่ 1</h1>
        <h2>รางวัลละ {lotteryData[0]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4">
          {lotteryData[0]?.numbers[0]}
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">เลขหน้า 3 ตัว</h1>
        <h2>รางวัลละ {lotteryData[7]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4 flex">
          <div className="flex-auto">{lotteryData[7]?.numbers[0]}</div>
          <div className="flex-auto">{lotteryData[7]?.numbers[1]}</div>
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">เลขท้าย 3 ตัว</h1>
        <h2>รางวัลละ {lotteryData[5]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4 flex">
          <div className="flex-auto">{lotteryData[5]?.numbers[0]}</div>
          <div className="flex-auto">{lotteryData[5]?.numbers[1]}</div>
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">เลขท้าย 2 ตัว</h1>
        <h2>รางวัลละ {lotteryData[6]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4">
          {lotteryData[6]?.numbers[0]}
        </div>
      </div>
    </div>
    <div className="flex w-full mt-4 space-x-4">
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">รางวัลข้างเคียงรางวัลที่ 1</h1>
        <h2>รางวัลละ {lotteryData[8]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-2xl mt-4 flex">
          <div className="flex-auto">{lotteryData[8]?.numbers[0]}</div>
          <div className="flex-auto">{lotteryData[8]?.numbers[0]}</div>
        </div>
      </div>
      <div className="flex-auto bg-green-50 rounded-lg p-4">
        <h1 className="font-bold text-lg">รางวัลที่ 2</h1>
        <h2>รางวัลละ {lotteryData[1]?.prize?.toLocaleString("TH-th")} บาท</h2>
        <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
          {lotteryData[1]?.numbers?.map((r, idx) => (
            <div className="float-left">
              <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
                {idx + 1}
              </div>
              <div className="float-left">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full mt-4 bg-green-50 rounded-lg p-4">
      <h1 className="font-bold text-lg">รางวัลที่ 3</h1>
      <h2>รางวัลละ {lotteryData[2]?.prize?.toLocaleString("TH-th")} บาท</h2>
      <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
        {lotteryData[2]?.numbers?.map((r, idx) => (
          <div className="float-left mb-4">
            <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
              {idx + 1}
            </div>
            <div className="float-left">{r}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full mt-4 bg-green-50 rounded-lg p-4">
      <h1 className="font-bold text-lg">รางวัลที่ 4</h1>
      <h2>รางวัลละ {lotteryData[3]?.prize?.toLocaleString("TH-th")} บาท</h2>
      <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
        {lotteryData[3]?.numbers?.map((r, idx) => (
          <div className="float-left mb-4">
            <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
              {idx + 1}
            </div>
            <div className="float-left">{r}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full mt-4 bg-green-50 rounded-lg p-4">
      <h1 className="font-bold text-lg">รางวัลที่ 5</h1>
      <h2>รางวัลละ {lotteryData[4]?.prize?.toLocaleString("TH-th")} บาท</h2>
      <div className="font-bold text-xl mt-4 grid grid-cols-5 px-8">
        {lotteryData[4]?.numbers?.map((r, idx) => (
          <div className="float-left mb-4">
            <div className="float-left bg-gray-200 px-4 mx-4 text-blue-500">
              {idx + 1}
            </div>
            <div className="float-left">{r}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const useFetchLottery = ({ lotteryDate }) => {
  const [lotteryData, setLotteryData] = useState([]);
  const [lotteryDateTitle, setlotteryDateTitle] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.thairath.co.th/api-lottery?history=1&date=${lotteryDate}`,
    }).then((response) => {
      setlotteryDateTitle(response.data?.data?.lotteryDateTitle);

      const _lotteryData = Object.values(response.data?.data?.prizes)?.map(
        (r) => ({
          numbers: r.data,
          prize: r.info[1],
        })
      );
      setLotteryData(_lotteryData);
    });
  }, [lotteryDate]);

  return {
    lotteryData,
    lotteryDateTitle,
  };
};

const useCheckLottery = ({ lotteryData }) => {
  const [lotteryNumbers, setLotteryNumbers] = useState();
  const [toggleCalculateResult, setToggleCalculateResult] = useState(false);
  const [lotteryResult, setLotteryResult] = useState();

  const checkLotteryPrize = (number) =>
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
      ? "รางวัลเลขท้าย 3 ตัว"
      : index === 6
      ? "รางวัลเลขท้าย 2 ตัว"
      : index === 7
      ? "รางวัลเลขหน้า 3 ตัว"
      : "รางวัลข้างเคียงรางวัลที่ 1";

  useEffect(() => {
    const _lotteryNumbers = [
      ...new Set(lotteryNumbers?.split("\n").filter((r) => r.length === 6)),
    ];

    const _lotteryResult = _lotteryNumbers.map((number) => ({
      number,
      prize: checkLotteryPrize(number),
    }));

    const resultTexts = _lotteryResult.map(
      (r) =>
        "หมายเลข " +
        r.number +
        " " +
        (r.prize === -1 ? "ถูกกินครับ" : `ถูก${getPrizeText(r.prize)}`)
    );

    const totalPrize = _lotteryResult
      .filter((r) => r.prize !== -1)
      .reduce((acc, r) => acc + lotteryData[r.prize].prize, 0);

    setLotteryResult({
      resultTexts,
      totalPrize,
    });
  }, [toggleCalculateResult]);

  return {
    lotteryNumbers,
    setLotteryNumbers,
    toggleCalculateResult,
    setToggleCalculateResult,
    lotteryResult,
    setLotteryResult,
  };
};

const getDate = (date) => new Date(date).toISOString().slice(0, 10);

const Lottery3 = () => {
  const { lotteryData, lotteryDateTitle } = useFetchLottery(
    getDate(new Date())
  );

  const {
    lotteryNumbers,
    setLotteryNumbers,
    toggleCalculateResult,
    setToggleCalculateResult,
    lotteryResult,
    setLotteryResult,
  } = useCheckLottery({
    lotteryData,
  });

  return (
    <div className="w-3/4 mx-auto text-center mt-8">
      <h1 className="font-bold text-2xl">ตรวจผลลอตเตอรี่ by หวยบิน</h1>
      <LotteryForm
        lotteryNumbers={lotteryNumbers}
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
  );
};

export default Lottery3;
