import React from "react";
import { LotterySearch, LotteryResult, LotteryTable } from "./components";
import { useFetch, useCheck } from "./hooks";

const LotteryCheck = () => {
  const getDate = (date) => new Date(date).toISOString().slice(0, 10);
  const dateCheck = getDate(new Date());
  // const dateCheck = "2023-01-23";  // Check api date
  // console.log("today1", dateCheck);
  const { lotteryData, lotteryTitle } = useFetch({ dateCheck });
  const {
    lotteryNumbers,
    setLotteryNumbers,
    toggle,
    setToggle,
    lottoResult,
    setLottoResult,
  } = useCheck({ lotteryData });

  return (
    <div className="w-full">
      <LotterySearch
        lotteryNumbers={lotteryNumbers}
        setLotteryNumbers={setLotteryNumbers}
        toggle={toggle}
        setToggle={setToggle}
        setLottoResult={setLottoResult}
      />
      <LotteryResult lottoResult={lottoResult} />
      <LotteryTable lotteryData={lotteryData} lotteryTitle={lotteryTitle} />
    </div>
  );
};

export default LotteryCheck;
