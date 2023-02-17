import { useGetData, useCheckLotte } from "./hooks";

const LotteryChecker1 = () => {
  const { allDatasApi, datasLottery, inputNumber, setInputNumber } =
    useGetData();

  const { prizes, setPrizes, checkLotto } = useCheckLotte({
    inputNumber,
    datasLottery,
  });

  const clearDataIn = () => {
    setInputNumber("");
    setPrizes([]);
  };

  return (
    <div className="window w-full h-full font-prompt text-sm p-8">
      {Object.keys(allDatasApi).length > 0 && datasLottery.length > 0 && (
        <div className="main-block w-full">
          <div className="header mb-8">
            <h1 className="text-center text-3xl">ตรวจผลลอตเตอรี่ by หวยบิน</h1>
          </div>
          <div className="w-full flex justify-center mb-8">
            <div className="w-2/3">
              <div className=" bg-gray-100 rounded-lg shadow-md mb-4 p-8">
                <div className="input-block mb-8">
                  <div className="mb-4">
                    <p>กรอกเลข</p>
                  </div>
                  <div className="mb-4">
                    <textarea
                      onChange={(e) => setInputNumber(e.target.value)}
                      id="message"
                      rows="4"
                      value={inputNumber}
                      placeholder="กรอกเลข 6 หลักต่อ 1 บรรทัด"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {inputNumber}
                    </textarea>
                  </div>
                  <div className="btn-block flex justify-between gap-x-4">
                    <button
                      onClick={() => checkLotto()}
                      className="w-full block bg-yellow-300 active:bg-yellow-400 active:shadow-md rounded-lg p-4"
                    >
                      ตรวจหวย
                    </button>
                    <button
                      onClick={() => clearDataIn()}
                      className="w-full block bg-gray-300 active:bg-gray-400 active:shadow-md rounded-lg p-4"
                    >
                      เคลียร์เลข
                    </button>
                  </div>
                </div>
              </div>

              {prizes.length > 0 && (
                <div className="result-block bg-red-100 rounded-lg p-8">
                  {prizes.map((r, idx) => {
                    return (
                      <p key={`result_${idx + 1}`}>
                        {r.number}{" "}
                        {r.result[0].prize === "0"
                          ? "ถูกกินครับ"
                          : r.result[0].prize === "1"
                          ? "เย้! ถูกรางวัลที่ 1"
                          : r.result[0].prize === "2"
                          ? "เย้! ถูกรางวัลที่ 2"
                          : r.result[0].prize === "3"
                          ? "เย้! ถูกรางวัลที่ 3"
                          : r.result[0].prize === "4"
                          ? "เย้! ถูกรางวัลที่ 4"
                          : r.result[0].prize === "5"
                          ? "เย้! ถูกรางวัลที่ 5"
                          : r.result[0].prize === "11"
                          ? "เย้! ถูกรางวัลข้างเคียงรางวัลที่ 1"
                          : r.result[0].prize === "10"
                          ? "เย้! ถูกรางวัลเลขหน้า 3 ตัว"
                          : r.result[0].prize === "6"
                          ? "เย้! ถูกรางวัลเลขท้าย 3 ตัว"
                          : "เย้! ถูกรางวัลเลขท้าย 2 ตัว"}
                      </p>
                    );
                  })}
                  <p className="mt-4">
                    คุณถูกหวยงวดนี้ทั้งสิ้น{" "}
                    {prizes
                      .reduce((acc, r) => acc + r.result[0].thaiBaht, 0)
                      .toLocaleString("TH")}{" "}
                    บาท
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="all-lottery-block w-full">
            <div className="header mb-4">
              <h3 className="text-xl text-center">
                ผลการออกรางวัลสลากกินแบ่งรัฐบาลประจำวันที่{" "}
                {allDatasApi.data.lotteryDateTitle}
              </h3>
            </div>
            <div className="big-res-block shadow-md text-center">
              <div className="w-full">
                <div className="row-1 flex">
                  <div className="w-2/5">
                    <div className="bg-sky-200 border border-slate-300 p-1">
                      รางวัลที่ 1
                    </div>
                    <div className="h-[70px] flex items-center justify-center border border-slate-300 p-1">
                      <div>
                        <p>รางวัลละ 6,000,000 บาท</p>
                        <h3 className="text-3xl">
                          {
                            datasLottery?.filter((r) => r.prize === "1")[0]
                              .value[0]
                          }
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="bg-sky-200 border border-slate-300 p-1">
                      เลขหน้า 3 ตัว
                    </div>
                    <div className="h-[70px] flex items-center justify-center border border-slate-300 p-1">
                      <div>
                        <p>รางวัลละ 4,000 บาท</p>
                        <div className="flex justify-around">
                          {datasLottery
                            .filter((r) => r.prize === "10")[0]
                            .value.map((r, idx) => (
                              <h3 key={`3fnt_${idx + 1}`} className="text-3xl">
                                {r}
                              </h3>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="bg-sky-200 border border-slate-300 p-1">
                      เลขท้าย 3 ตัว
                    </div>
                    <div className="h-[70px] flex items-center justify-center border border-slate-300 p-1">
                      <div>
                        <p>รางวัลละ 4,000 บาท</p>
                        <div className="flex justify-around">
                          {datasLottery
                            .filter((r) => r.prize === "6")[0]
                            .value.map((r, idx) => (
                              <h3 key={`3bck_${idx + 1}`} className="text-3xl">
                                {r}
                              </h3>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <div className="bg-sky-200 border border-slate-300 p-1">
                      เลขท้าย 2 ตัว
                    </div>
                    <div className="h-[70px] flex items-center justify-center border border-slate-300 p-1">
                      <div>
                        <p>รางวัลละ 2,000 บาท</p>
                        <h3 className="text-3xl">
                          {
                            datasLottery?.filter((r) => r.prize === "7")[0]
                              .value[0]
                          }
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row-beside-1 flex">
                  <div className="w-5/12">
                    <div className="flex">
                      <div className="w-1/2 bg-sky-200 border border-slate-300 p-1">
                        รางวัลข้างเคียงรางวัลที่ 1
                      </div>
                      <div className="w-1/2 border border-slate-300 p-1">
                        รางวัลละ 100,000 บาท
                      </div>
                    </div>
                    <div className="flex">
                      {datasLottery
                        .filter((r) => r.prize === "11")[0]
                        .value.map((r, idx) => (
                          <div
                            key={`11bck_${idx + 1}`}
                            className="w-1/2 h-[50px] flex items-center justify-center border border-slate-300 p-1"
                          >
                            <h3 className="text-2xl">{r}</h3>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="w-7/12">
                    <div className="w-full flex">
                      <div className="w-4/12 bg-sky-200 border border-slate-300 p-1">
                        รางวัลที่ 2
                      </div>
                      <div className="w-8/12 border border-slate-300 p-1">
                        รางวัลละ 200,000 บาท
                      </div>
                    </div>
                    <div className="flex">
                      {datasLottery
                        .filter((r) => r.prize === "2")[0]
                        .value.map((r, idx) => (
                          <div
                            key={`2_${idx + 1}`}
                            className="w-full h-[50px] flex"
                          >
                            <div className="w-1/4 flex items-center justify-center bg-gray-200 border border-slate-300 p-1">
                              {idx + 1}
                            </div>
                            <div className="w-3/4 flex items-center justify-center border border-slate-300 p-1">
                              <h3 className="text-xl">{r}</h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="row-3">
                  <div className="w-full flex">
                    <div className="w-4/12 bg-sky-200 border border-slate-300 p-1">
                      รางวัลที่ 3
                    </div>
                    <div className="w-8/12 border border-slate-300 p-1">
                      รางวัลละ 80,000 บาท
                    </div>
                  </div>
                </div>
                <div className="row-3-number flex">
                  <div className="w-full flex">
                    {datasLottery
                      .filter((r) => r.prize === "3")[0]
                      .value.map((r, idx) => (
                        <div
                          key={`3_${idx + 1}`}
                          className="w-full h-[50px] flex"
                        >
                          <div className="w-1/4 flex items-center justify-center bg-gray-200 border border-slate-300 p-1">
                            {idx + 1}
                          </div>
                          <div className="w-3/4 flex items-center justify-center border border-slate-300 p-1">
                            <h3>{r}</h3>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="row-4">
                  <div className="w-full flex">
                    <div className="w-4/12 bg-sky-200 border border-slate-300 p-1">
                      รางวัลที่ 4
                    </div>
                    <div className="w-8/12 border border-slate-300 p-1">
                      รางวัลละ 40,000 บาท
                    </div>
                  </div>
                </div>
                <div className="row-4-number w-full flex">
                  {[...Array(10).keys()].map((row) => {
                    return (
                      <div key={`4_${row + 1}`} className="w-full">
                        {[...Array(5).keys()].map((col) => {
                          const datasArr = datasLottery
                            .filter((col) => col.prize === "4")[0]
                            .value.map((col) => col);

                          return (
                            <div
                              key={`4_${col + row * 5 + 1}`}
                              className="flex"
                            >
                              <div className="w-1/4 bg-gray-200 border border-slate-300 text-center py-1">
                                {col + row * 5 + 1}
                              </div>
                              <div className="w-3/4 border border-slate-300 p-1">
                                {datasArr[col + row * 5]}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>

                <div className="row-5">
                  <div className="w-full flex">
                    <div className="w-1/4 bg-sky-200 border border-slate-300 p-1">
                      รางวัลที่ 5
                    </div>
                    <div className="w-3/4 border border-slate-300 p-1">
                      รางวัลละ 20,000 บาท
                    </div>
                  </div>
                </div>
                <div className="row-5-number w-full flex">
                  {[...Array(10).keys()].map((row) => {
                    return (
                      <div key={`5_${row + 1}`} className="w-full">
                        {[...Array(10).keys()].map((col) => {
                          const datasArr = datasLottery
                            .filter((col) => col.prize === "5")[0]
                            .value.map((col) => col);

                          return (
                            <div
                              key={`5_${col + row * 10 + 1}`}
                              className="flex"
                            >
                              <div className="w-1/4 bg-gray-200 border border-slate-300 text-center py-1">
                                {col + row * 10 + 1}
                              </div>
                              <div className="w-3/4 border border-slate-300 p-1">
                                {datasArr[col + row * 5]}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LotteryChecker1;
