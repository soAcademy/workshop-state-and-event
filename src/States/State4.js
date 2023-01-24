import React, { useState } from "react";

const State4 = (props) => {
  const [inputNumber, setInputNumber] = useState(props.default);

  return (
    <div className="m-4">
      <div>{inputNumber}</div>
      <div>
        <input
          type="number"
          value={inputNumber}
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
