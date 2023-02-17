import React, { useState } from "react";
import { usePrizes, useResult } from "./hooks";
import { Form, Result, AllResult } from "./components";
const AppLotteryChecker = () => {
  const [queryNumbers, setQueryNumbers] = useState([]);
  const [checkClicked, setCheckClicked] = useState(false);

  const { prizes, lotteryDateTitle } = usePrizes();
  const { result, sumResult } = useResult({
    queryNumbers,
    prizes,
    checkClicked,
  });

  return (
    <>
      {prizes.length > 1 && (
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
          <AllResult lotteryDateTitle={lotteryDateTitle} prizes={prizes} />
        </div>
      )}
    </>
  );
};
export default AppLotteryChecker;
