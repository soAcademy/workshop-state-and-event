import React, { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();
  return (
    <div className="bg-blue-200 p-2 m-2">
      <h1>{inputNumber}</h1>
      <input
        className="bg-green-200"
        type="number"
        onChange={(e) => setInputNumber(e.target.value)}
      />

      <button
        className="bg-red-200 rounded-lg p-2 m-2"
        onClick={() => setInputNumber(Number(inputNumber) + 7)}
      >
        Calculate
      </button>
    </div>
  );
};

export default State4;
