import React from "react";
import { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div className="mt-6 ml-6">
      <div>
        Input1: {number1}
        <input
          type="number"
          className="border-3 border-black bg-indigo-400 text-white rounded-[20px]"
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        Input2: {number2}
        <input
          className="border-3 border-black bg-slate-400 text-white rounded-[20px]"
          type="number"
          onChange={(event) => setNumber2(event.target.value)}
        />
      </div>
      <div>
        Sum: {sum}
        <button
          className="p-4 bg-gray-400 rounded-lg mt-[20px] text-white ml-2"
          onClick={() => setSum(Number(number1) + Number(number2))}
        >
          Compute
        </button>
      </div>
    </div>
  );
};

export default State6;
