import React from "react";
import { useState } from "react";

const State3 = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="bg-rose-300 p-6 w-1/2 mt-4 ml-4 rounded-[40px] border-4 border-green-700">
      <h1 className="text-white text-xl ">{count}</h1>
      <p>
        <button
          className="p-4 bg-green-200 rounded-[10px]"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="p-4 bg-gray-200 rounded-[10px]"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </p>
    </div>
  );
};

export default State3;
