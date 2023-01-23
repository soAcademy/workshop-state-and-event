import React from "react";
import { useState } from "react";

const State2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-pink-500 p-6">
      <h1 className="text-white text-xl">{count}</h1>
      <p>
        <button
          className="p-4 bg-gray-200 rounded-[10px]"
          onClick={() => setCount(count + 1)}
        >
          Plus 1
        </button>
      </p>
    </div>
  );
};

export default State2;
