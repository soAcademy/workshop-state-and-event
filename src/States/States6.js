import React, { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <div className="border bg-gradient-to-r 
    from-orange-500 to-red-500">
      <div>
        Input1: {number1} 
        {/* ตรงนี้ถ้าไม่ใส่ number จะไม่โชว์เลขด้านหน้า */}
        <input
          type="number"
          className="border  bg-gradient-to-r 
          from-green-500 to-yellow-500"
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        Input2: {number2}
        <input
          type="number"
          className="border bg-gradient-to-r 
          from-red-500 to-blue-500"
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
      Result: {sum}
        <button
          className="p-4 bg-yellow-200 rounded-lg "
          onClick={() => setSum(Number(number1) * Number(number2))}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default State6;
