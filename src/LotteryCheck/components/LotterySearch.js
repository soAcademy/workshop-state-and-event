export const LotterySearch = ({
  lotteryNumbers,
  setLotteryNumbers,
  toggle,
  setToggle,
  setLottoResult,
}) => {
  return (
    <div>
      <div className="pt-5 text-center">
        <p className="text-2xl">ตรวจผลลอตเตอรี่</p>
      </div>
      <div className="bg-slate-100 m-auto w-2/3 p-5 mt-5 rounded">
        <p>กรอกเลข</p>
        <textarea
          className="w-full rounded mt-5 h-36"
          rows="4"
          value={lotteryNumbers}
          placeholder="กรอกเลขลอตเตอรี่"
          onChange={(e) => setLotteryNumbers(e.target.value)}
        />
        <div className="flex justify-between space-x-2 mt-5">
          <button
            className="w-6/12 p-3 bg-emerald-400 hover:bg-emerald-300 rounded"
            onClick={() => setToggle(!toggle)}
          >
            ตรวจหวย
          </button>
          <button
            className="w-6/12 p-3 bg-slate-300 hover:bg-slate-200 rounded"
            onClick={() => {
              setLottoResult();
              setLotteryNumbers("");
            }}
          >
            เคลียร์เลข
          </button>
        </div>
      </div>
    </div>
  );
};
