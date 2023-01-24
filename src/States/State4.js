import React, { useState } from "react";

const State4 = () => {
  const [number, setNumber] = useState(0);
  const [sum, setSum] = useState(0);
  const calculate = (e) => {
    e.preventDefault();
    setSum(+number + 7);
  };
  return (
    <div className="flex flex-row items-center bg-gray-300 w-fit px-4 my-4 m-2 rounded-lg">
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="bg-gray-200 rounded-lg px-2 w-[105px]"
      ></input>
      &nbsp; +7 = &nbsp;
      <p>{sum}</p>
      <button
        onClick={calculate}
        className="bg-gray-400 rounded-lg p-2 m-2 font-bold shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
      >
        Calculate
      </button>
    </div>
  );
};

export default State4;
