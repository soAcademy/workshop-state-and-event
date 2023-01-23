import React, { useState } from "react";

const State6 = () => {
  const [inputNumber1, setInputNumber1] = useState(0);
  const [inputNumber2, setInputNumber2] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);

  return (
    <div className="m-3 bg-gradient-to-b from-indigo-400 to-violet-400 rounded-lg">
      <div className="text-2xl p-2 mt-2">
        <h1>Input 1: {inputNumber1}</h1>
        <h1 className="mt-2">Input 2: {inputNumber2}</h1>
        <h1 className="mt-2">Total: {totalNumber}</h1>
      </div>
      <div>
        <input
          type="number"
          placeholder="Input 1"
          className="border-2 border-green-400 rounded-lg p-1 m-2"
          onChange={(e) => setInputNumber1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Input 1"
          className="border-2 border-green-400 rounded-lg p-1 m-2"
          onChange={(e) => setInputNumber2(e.target.value)}
        />
        <button
          onClick={() =>
            setTotalNumber(Number(inputNumber1) + Number(inputNumber2))
          }
          className="w-40 h-8 border-2 rounded-lg text-lg test-center bg-slate-100 mb-2"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default State6;
