import React from "react";

const LottoResult = ({ lotteryResult }) => {
  return (
    <div>
      {lotteryResult.length > 0 && (
        <div className="w-3/4 p-4 mx-auto mt-8 bg-sky-200 ">
          <h2 className="text-lg font-bold">ผลตรวจ</h2>
          {lotteryResult.map((result, index) => (
            <div>
              {result.number} : {result.result}
            </div>
          ))}
          <div className="text-lg font-bold">
            คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
            {lotteryResult
              .reduce((acc, r) => (acc += r.prize), 0)
              .toLocaleString()}{" "}
            บาท
          </div>
        </div>
      )}
    </div>
  );
};

export default LottoResult;


