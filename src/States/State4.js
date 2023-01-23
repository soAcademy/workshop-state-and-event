import React, { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();
  return (
    <div className="m-3 bg-gradient-to-b from-green-400 to-blue-400 rounded-lg">
      <h1 className="text-2xl p-2 mt-2">{inputNumber}</h1>
      <input
        type="number"
        className="border-2 border-green-400 rounded-lg p-1 m-2"
        onChange={(e) => setInputNumber(e.target.value)}
      />
      <button
        onClick={() => setInputNumber(Number(inputNumber) + 7)}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Calculate + 7
      </button>
    </div>
  );
};

export default State4;
