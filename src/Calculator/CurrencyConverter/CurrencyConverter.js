import FxStat from "./Components/FxStat";
import FxChart from "./Components/FxChart";
import { AiOutlineSwap } from "react-icons/ai";
import { useFxRates,useFxChartData,useFxResult,useFxStat } from "./Hooks";
const CurrencyConverter = () => {
  const authToken =
    "Basic bG9kZXN0YXI6WnoxdndXVmFVRXdFZUFkdkpIWjFuMEY0bXRROWY4U1g=";
  const { fxRates, options } = useFxRates({ authToken });
  const { amount, setAmount, from, setFrom, to, setTo, result, rates } =
    useFxResult({ fxRates });
  const stats = useFxStat({ from, to, authToken });
  const chartData = useFxChartData({ from, to, authToken });
  const switchVar = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <>
      <div className="flex flex-col font-kanit">
        <p className="mx-auto my-14 text-xl font-bold">คำนวณอัตราแลกเปลี่ยน</p>
        <form className="mx-auto w-2/3 rounded-xl bg-gray-200 p-10">
          <div className="flex justify-evenly space-x-4">
            <div className="">
              <p>จำนวน</p>
              <input
                id="amount"
                defaultValue={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 px-5"
              ></input>
            </div>
            <div>
              <p>จาก</p>
              <select
                id="from"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                  setTo(document.querySelector("#to").value);
                }}
                className="w-full p-2 px-5"
              >
                {options.map((e, idx) => {
                  return to !== e ? (
                    <option key={idx}>{e}</option>
                  ) : (
                    <option key={idx} disabled>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="relative flex items-end justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  switchVar();
                }}
                className="mb-1 p-2"
              >
                <AiOutlineSwap className="text-xl" />
              </button>
            </div>
            <div>
              <p>ไป</p>
              <select
                id="to"
                value={to}
                onChange={(e) => {
                  setFrom(document.querySelector("#from").value);
                  setTo(e.target.value);
                }}
                className="w-full p-2 px-5"
              >
                {options
                  .filter((e) => e !== from)
                  .map((e, idx) => {
                    return from !== e ? (
                      <option key={idx}>{e}</option>
                    ) : (
                      <option key={idx} disabled>
                        {e}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <p className="mt-4">
            {result
              ? `${amount} ${from} = ${result.toLocaleString()} ${to}`
              : ""}
          </p>
          <p>{result ? `Exchange Rate : 1 ${from} = ${rates()} ${to}` : ""}</p>
        </form>
        <div className="mx-auto  my-10 w-2/3">
          <p className="text-xl">อัตราแลกเปลี่ยนย้อนหลัง</p>
          <FxStat from={from} to={to} stats={stats} />
        </div>
        <FxChart chartData={chartData} />
      </div>
    </>
  );
};

export default CurrencyConverter;
