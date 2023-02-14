import {
  useCurrency,
  useFetchEachExchange,
  useStatistics,
  useChart,
} from "./useCustom";
// import { FaExchangeAlt } from "react-icons/fa";
// import ExchangeRate from "./ExchangeRates.json";
import ReactECharts from "echarts-for-react";

const CurrencyConvertor7 = () => {
  const { amount, setAmount, fromCurr, setFromCurr, toCurr, setToCurr } =
    useCurrency();
  const { options, result } = useFetchEachExchange({
    amount,
    toCurr,
    fromCurr,
  });
  const { averageArr } = useStatistics({ toCurr, fromCurr });
  const { chartOption } = useChart({ toCurr, fromCurr });

  return (
    // <></>
    <div className="w-full h-full flex justify-center font-prompt text-sm p-4 bg-[url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&h=400&q=80')] bg-no-repeat">
      <div className="md:w-2/3">
        <div className="header my-8">
          <h1 className="text-3xl font-bold text-center bg-slate-200/40 rounded-lg p-2">
            คำนวนอัตราแลกเปลี่ยน
          </h1>
        </div>

        <div className="convertor-block bg-gray-50 rounded-lg shadow-lg p-4 md:p-14 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="amountCurr">
              <label className="block mb-2">จำนวน</label>
              <input
                type="number"
                onChange={(e) => setAmount(Number(e.target.value))}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={amount}
              />
            </div>
            <div className="fromCurr">
              <label className="block mb-2">จาก</label>
              <select
                onChange={(e) => setFromCurr(e.target.value)}
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={fromCurr}
              >
                {options
                  .filter((r) => r !== toCurr)
                  ?.map((r) => (
                    <option key={r.name} value={r.name}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="toCurr">
              <label className="block mb-2">ไป</label>
              <select
                onChange={(e) => setToCurr(e.target.value)}
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                value={toCurr}
              >
                {options
                  .filter((r) => r !== fromCurr)
                  .map((r) => (
                    <option key={r.name} value={r.name}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="btn-block mb-8">
            <button className="w-full h-12 text-white bg-sky-500 hover:bg-sky-600 shadow-sm active:shadow-md rounded-lg">
              คำนวน
            </button>
          </div>
          <div className="detail-block">
            <h1>
              {amount} {fromCurr} ={" "}
            </h1>
            <h1 className="text-xl">
              {result} {toCurr}
            </h1>
            {/* <h1>
              1 {toCurr} = 32.0190 {fromCurr}
            </h1> */}
          </div>
        </div>

        <div className="prev-rate">
          <div>
            <p className="mb-4 px-4">อัตราแลกเปลี่ยนย้อนหลัง</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {averageArr?.map((r) => (
              <div key={r.time} className="p-4">
                <p>{r.time}</p>
                <h1 className="text-xl">
                  1 {fromCurr} = {r.average} {toCurr}
                </h1>
                <p>
                  1 {toCurr} = {r.reverse} {fromCurr}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="charts-block">
          <div>
            <ReactECharts option={chartOption} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor7;
