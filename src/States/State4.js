import React from "react";
import { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();
  return (
    <div className="bg-gray-200 p-5">
      <div className="text-xl">{inputNumber}</div>
      <div>
        <input
          className=" bg-yellow-300 p-4 border-2 border-black mt-4 ml-6 rounded-[10px]"
          type="number"
          onChange={(e) => setInputNumber(e.target.value)}
        ></input>
        <button
          className="p-4 bg-green-200"
          onClick={() => setInputNumber(Number(inputNumber) + 7)}
        >
          Compute
        </button>
      </div>
    </div>
  );
};

export default State4;
