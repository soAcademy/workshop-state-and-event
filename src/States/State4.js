import React, { useState } from "react";

const State4 = () => {
  const [inputNumber, setInputNumber] = useState();

  return (
    <div className="bg-gray-200">
      <div>{inputNumber}</div>
      <div>
        <input
          type="number"
          className="bg-red-300"
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <div>
          Plus 7
        </div>
        <button
          className="p-4 bg-green-200"
          onClick={() => setInputNumber(Number(inputNumber) + 7)}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default State4;


// เริ่มต้นด้วยการ Set state ขึ้นมา แล้วก็ตามด้วย Input ให้มันเป็น Target value เพื่อเก็บไว้ก่อน 
// แล้วเราก็สร้าง setInputNumber เพื่อมาบอกว่า เป็นการสร้าง Interaction ระหว่าง Input กับ State 