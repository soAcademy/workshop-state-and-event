import { useState, useEffect } from "react";
const Retirement = () => {
  const [input, setInput] = useState({
    age: 25,
    retireAge: 55,
    inflation: 4.27,
    deadAge: 75,
    cost: 30000,
  });
  const [result, setResult] = useState(0);
  const sum = (array) => {
    return array.reduce((acc, e) => (acc += e), 0);
  };
  useEffect(() => {
    const yearsAfterRetire =
      input.deadAge !== "" && input.retireAge !== ""
        ? [...Array(Number(input.deadAge) + 1 - Number(input.retireAge)).keys()]
        : [];
    const _result = 
      sum(yearsAfterRetire.map((e) => {
        return (
          input.cost *
          12 *
          (1 + input.inflation / 100) ** (input.retireAge + e - input.age)
        );
      }))
    console.log("_result :>> ", _result);
    setResult((_result).toFixed(2));
  }, [input]);
  return (
    <div className="flex font-kanit flex-col">
      <p className="mx-auto my-14 font-bold text-xl">แผนการเกษียญของฉัน</p>
      <form
        onChange={(e) => {
          const age = Number(e.target.form[0].value);
          const retireAge = Number(e.target.form[1].value);
          const inflation = Number(e.target.form[2].value)
          const deadAge = Number(e.target.form[3].value)
          const cost = Number(e.target.form[4].value)
          setInput({ age, retireAge, inflation, deadAge, cost })
        }}
        className="mx-auto w-2/3 bg-gray-200 flex"
      >
        <div className="w-1/2 p-6 pl-8 space-y-2 mb-2">
          <p>คุณอายุเท่าไหร่</p>
          <input className="w-full p-2 px-4" defaultValue={25}></input>
          <p>เกษียณตอนอายุ</p>
          <input className="w-full p-2 px-4" defaultValue={55}></input>
          <p>อัตราเงินเฟ้อ</p>
          <input className="w-full p-2 px-4" defaultValue={4.27}></input>
        </div>
        <div className="w-1/2 p-6 pr-8 space-y-2 ">
          <p>มีอายุถึงกี่ปี</p>
          <input className="w-full p-2 px-4" defaultValue={75}></input>
          <p>ค่าใช้จ่ายต่อเดือน</p>
          <input className="w-full p-2 px-4" defaultValue={30000}></input>
        </div>
      </form>
      <div
        className="flex flex-col mx-auto 
      space-y-4 text-2xl font-bold my-8"
      >
        <p>คุณต้องมีเงินเก็บตอนอายุ 60 ปี จำนวน</p>
        <p id="result" className="mx-auto text-red-600">
          {Number(result).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Retirement;
