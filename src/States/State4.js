import React, { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();

  return (
    <div className="bg-gray-200 pl-10">
      <div>{inputNumber}</div>
      <div>
        <input
          type="number"
          className="bg-red-300 p-3"
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button
          className="p-3 bg-green-200 "
          onClick={() => setInputNumber(Number(inputNumber) + 7)}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default State4;
