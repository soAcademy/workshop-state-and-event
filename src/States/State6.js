import React, { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div className="">
      <div className="p-4 bg-black text-gray-100 text-3xl w-1/6">
        <h1>{sum}</h1>
      </div>
      <div>
        <p>Input1: {number1} </p>

        <input
          type="number"
          className="border bg-red-100"
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        <p>Input2: {number2} </p>
        <input
          type="number"
          className="border bg-yellow-100"
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
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

export default State6;
