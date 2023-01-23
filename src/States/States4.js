import React, { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();

  return (
    <div className="bg-gradient-to-r 
    from-blue-500 to-red-500">
      <div>{inputNumber}</div>
      <div>
        <input
          className=" border border-red-800 bg-red-200"
          type="number"
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button
          className="p-4 border border-black bg-purple-400 rounded-lg "
          onClick={() => setInputNumber(Number(inputNumber) + 10)}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default State4;