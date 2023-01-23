import React, { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div>
      <div>
        Input: {number1}
        <input
          type="number"
          className="border border-black rounded-full"
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        Input: {number2}
        <input
          type="number"
          className="border border-black rounded-full"
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        Sum: {sum}
        <button
          className="p-2 bg-yellow-200 rounded-full"
          onClick={() => setSum(Number(number1) + Number(number2))}
        >
          Cal SUM
        </button>
      </div>
    </div>
  );
};

export default State6;
