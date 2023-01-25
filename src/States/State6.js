import React, { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [sum, setSum] = useState();
  return (
    <div className="bg-blue-200 p-2 m-2">
      <div>
      Input1: 
      <input
        className="bg-yellow-200"
        type="number"
        onChange={(e) => setNumber1(e.target.value)}
      />
      </div>
      <div>
      Input2: 
      <input
        className="bg-green-200"
        type="number"
        onChange={(e) => setNumber2(e.target.value)}
      />
      </div>
      <div>
        Sum: {sum}
      <button
        className="bg-red-200 rounded-lg p-2 m-2"
        onClick={() => setSum(Number(number1) + Number(number2))}
      >
        Calculate
      </button>
      </div>
    </div>
  );
};

export default State6;
