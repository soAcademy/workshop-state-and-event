import { useState, useEffect } from "react";
const Retirement = () => {
  const [input, setInput] = useState({
    age: 25,
    retireAge: 55,
    inflation: 4.27,
    deadAge: 75,
    cost: 30000,
    invest: 3000,
    percentYield: 8,
  });
  const [result, setResult] = useState([]);
  const sum = (array) => {
    return array.reduce((acc, e) => (acc += e), 0);
  };
  const calculate = (input) => {
    const yearsUntilDie = [
      ...Array(Number(input.deadAge) + 1 - Number(input.age)).keys(),
    ];
    const cost = yearsUntilDie.map((e, idx) => {
      const cost = input.cost * 12 * (1 + input.inflation / 100) ** e;
      const age = input.age + e;
      return {
        age: age,
        cost: cost,
      };
    });
    const _result = cost.reduce((acc, result, idx) => {
      return result.age < input.retireAge
        ? [
            ...acc,
            {
              age: result.age,
              cost: result.cost.toFixed(2),
              port: (
                (acc[idx - 1]?.port ?? 0) * (1 + input.percentYield / 100) +
                input.invest * 12
              ).toFixed(2),
            },
          ]
        : [
            ...acc,
            {
              age: result.age,
              cost: result.cost.toFixed(2),
              port:
                (acc[idx - 1]?.port ?? 0) > 0
                  ? (
                      ((acc[idx - 1]?.port ?? 0) - result.cost) *
                      (1 + input.percentYield / 100)
                    ).toFixed(2)
                  : ((acc[idx - 1]?.port ?? 0) - result.cost).toFixed(2),
            },
          ];
    }, []);
    console.log("result: ", _result);
    
    // _result.filter(e=>e.age > input.retireAge).reduce((acc,e,idx)=>{
    //   return {
    //     age: e.age,
    //     cost: e.cost,
    //     port: acc[idx-1]?.port
    //   }
    // },[])
    return _result;
  };
  useEffect(() => {
    const _result =
      input.deadAge > input.retireAge
        ? calculate(input)
        : [{ age: 0, cost: 0, port: 0 }];
    setResult(_result);
  }, [input]);
  return (
    <div className="flex font-kanit flex-col">
      <p className="mx-auto my-14 font-bold text-xl">แผนการเกษียญของฉัน</p>
      <form
        onChange={(e) => {
          console.log("e :>> ", e);
          const age = Number(e.target.form[0].value);
          const retireAge = Number(e.target.form[1].value);
          const inflation = Number(e.target.form[2].value);
          const deadAge = Number(e.target.form[3].value);
          const cost = Number(e.target.form[4].value);
          const invest = Number(e.target.form[5].value);
          const percentYield = Number(e.target.form[6].value);
          setInput({
            age,
            retireAge,
            inflation,
            deadAge,
            cost,
            invest,
            percentYield,
          });
        }}
        className="mx-auto w-2/3 bg-gray-200 rounded-xl flex flex-col"
      >
        <div className="flex">
          <div className="w-1/2 p-6 pl-8 space-y-2 mb-2">
            <p>คุณอายุเท่าไหร่</p>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
              className="w-full p-2 px-4"
              defaultValue={25}
            ></input>
            <p>เกษียณตอนอายุ</p>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
              className="w-full p-2 px-4"
              defaultValue={55}
            ></input>
            <p>อัตราเงินเฟ้อ (%) </p>
            <input
              type="number"
              className="w-full p-2 px-4"
              defaultValue={4.27}
            ></input>
          </div>
          <div className="w-1/2 p-6 pr-8 space-y-2 ">
            <p>มีอายุถึงกี่ปี</p>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
              className="w-full p-2 px-4"
              defaultValue={75}
            ></input>
            <p>ค่าใช้จ่ายต่อเดือน</p>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
              className="w-full p-2 px-4"
              defaultValue={30000}
            ></input>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 p-6 pl-8 space-y-2 mb-2">
            <p>เงินลงทุนต่อเดือน</p>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 7))}
              className="w-full p-2 px-4"
              defaultValue={3000}
            ></input>
          </div>
          <div className="w-1/2 p-6 pl-8 space-y-2 mb-2">
            <p>ผลตอบแทนต่อปี (%)</p>
            <input
              type="number"
              className="w-full p-2 px-4"
              defaultValue={8}
            ></input>
          </div>
        </div>
      </form>
      <div
        className="flex flex-col mx-auto 
      space-y-4 text-2xl font-bold my-8"
      >
        <p>คุณต้องมีเงินเก็บตอนอายุ {input.retireAge} ปี จำนวน</p>
        <p id="result" className="mx-auto text-red-600">
          {Number(
            sum(
              result
                .filter((e) => e.age > input.retireAge)
                .map((e) => Number(e.cost))
            )
          ).toLocaleString()}
        </p>
      </div>
      <div className="rounded-xl m-10 border w-2/3 mx-auto bg-blue-100">
        <table className="mx-auto w-full m-5">
          <thead className="border-b-2">
            <tr>
              <td
                className="text-xl text-center border-slate-500 font-bold"
                width={"10%"}
              >
                อายุ
              </td>
              <td
                className="text-xl  border-slate-500 text-center font-bold"
                width={"45%"}
              >
                ค่าใช้จ่ายต่อปี
              </td>
              <td
                className="text-xl  border-slate-500 text-center font-bold"
                width={"45%"}
              >
                พอร์ทการลงทุน
              </td>
            </tr>
          </thead>
          <tbody>
            {result.map((e, idx) => {
              return (
                <tr key={idx}>
                  <td
                    className={`${
                      idx % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
                    } text-center`}
                  >
                    {e.age}
                  </td>
                  <td
                    className={`${
                      idx % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
                    } text-center`}
                  >
                    {Number(e.cost).toLocaleString()}
                  </td>
                  <td
                    className={`${
                      idx % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
                    } text-center`}
                  >
                    {Number(e.port).toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retirement;
