import React, { useState } from "react";
import { usePrizes, useResult } from "./hooks";
import { Form, Result, AllResult, History } from "./components";
const AppLotteryChecker = () => {
  const [queryNumbers, setQueryNumbers] = useState([]);
  const [checkClicked, setCheckClicked] = useState(false);
  const [page, setPage] = useState(0);
  const { prizes, lotteryDateTitle } = usePrizes({ page });
  const { result, sumResult, setSumResult } = useResult({
    queryNumbers,
    prizes,
    checkClicked,
  });

  return (
    <>
      {page !== 0 && (
        <button
          className="m-2 rounded-lg bg-gradient-to-t from-slate-200 via-slate-300 bg-size-200
          bg-pos-0 p-2 shadow-md transition-all duration-300 hover:bg-pos-100"
          onClick={() => {
            setQueryNumbers([]);
            setSumResult(0);
            setPage(0);
          }}
        >
          เช็คผลการออกรางวัลล่าสุด
        </button>
      )}
      {page === 1 && <History setPage={setPage} page={page} />}
      {prizes.length > 1 && page === 0 && (
        <div className="flex flex-col items-center justify-center font-kanit">
          <img className="mt-7 h-28" src="./lotteryLogo.png" alt="" />
          <p className="my-4 text-xl font-bold">
            ตรวจผลลอตเตอรี่ By กองสลากไมนัส
          </p>
          <Form
            setCheckClicked={setCheckClicked}
            setQueryNumbers={setQueryNumbers}
            checkClicked={checkClicked}
          />
          <Result
            queryNumbers={queryNumbers}
            result={result}
            sumResult={sumResult}
          />
          <AllResult
            lotteryDateTitle={lotteryDateTitle}
            prizes={prizes}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
      {prizes.length > 1 && page !== 0 && page !== 1 && (
        <div className="flex flex-col items-center justify-center font-kanit">
          <img className="mt-7 h-28" src="./lotteryLogo.png" alt="" />
          <p className="my-4 text-xl font-bold">
            ตรวจผลลอตเตอรี่ By กองสลากไมนัส
          </p>
          <Form
            setCheckClicked={setCheckClicked}
            setQueryNumbers={setQueryNumbers}
            checkClicked={checkClicked}
          />
          <Result
            queryNumbers={queryNumbers}
            result={result}
            sumResult={sumResult}
          />
          <AllResult
            lotteryDateTitle={lotteryDateTitle}
            prizes={prizes}
            page={page}
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
};
export default AppLotteryChecker;
