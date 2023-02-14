import React, { useState } from "react";

const useNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return {
    number1,
    setNumber1,
    number2,
    setNumber2,
    sum,
    setSum,
  };
};

const CustomHook2 = () => {
  const { number1, setNumber1, number2, setNumber2, sum, setSum } = useNumber();

  return (
    <div className="">
      <div>
        Input1: {number1}
        <input
          type="number"
          className="border bg-red-300"
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        Input2: {number2}
        <input
          type="number"
          className="border bg-yellow-300"
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        Sum: {sum}
        <button
          className="p-4 bg-green-200"
          onClick={() => setSum(Number(number1) + Number(number2))}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CustomHook2;
