import { useState, useEffect } from "react";

const useNumber1 = () => {
  const [number1, setNumber1] = useState(10);

  return {
    number1,
    setNumber1,
  };
};

const useNumber2 = () => {
  const [number2, setNumber2] = useState(20);
  return {
    number2,
    setNumber2,
  };
};

const useSum = (number1, number2) => {
  console.log(">>>>>",number1, number2);
  const [sum, setSum] = useState(number1*number2);

  return {
    sum,
    setSum,
  };
};

const Playground = () => {
  const { number1, setNumber1 } = useNumber1();
  const { number2, setNumber2 } = useNumber2();
  const { sum, setSum } = useSum(number1, number2);

  const multiply = (x, y) => {
    const _result = x * y;
    setSum(_result);
    return _result;
  };

  return (
    <>
      <div className="bg-slate-800 h-screen p-5 font-kanit w-screen ">
        <h1 className="text-center font-bold text-teal-100 text-2xl">
          Multiply number
        </h1>
        <div className="text-center w-1/2 mx-auto h-1/2 mt-10 ">
          <div className="text-white text-center ">
            Number1 : {number1}
            <div>
              <input
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
                className="p-2 bg-slate-400 w-1/2 text-center rounded-lg"
              />
            </div>
          </div>
          <div className="text-white text-center">
            Number2 : {number2}
            <div>
              <input
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
                className="p-2 bg-slate-400 w-1/2 text-center rounded-lg"
              />
            </div>
          </div>
          <div className="p-2">
            <button
              className="bg-yellow-200 p-2 w-1/2 rounded-lg font-bold"
              onClick={() => multiply(number1, number2)}
            >
              Multiply
            </button>
          </div>
          <div className="text-white text-xl">Sum: {sum}</div>
        </div>
      </div>
    </>
  );
};
export default Playground;
