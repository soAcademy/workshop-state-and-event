import React, { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();

  return (
    <div className="m-4">
      <div>{inputNumber}</div>
      <div>
        <input
          type="number"
          className="p-1 bg-gray-100"
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button
          className="p-1 bg-green-200"
          onClick={() => setInputNumber(Number(inputNumber) + 7)}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default State4;
