import React, { useState } from "react";

const State3 = () => {
  const [counter, setCounter] = useState(10);
  return (
    <div className="bg-blue-200 p-2 m-2">
      <h1>{counter}</h1>
      <button
        className="bg-green-200 rounded-lg p-2 m-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increased Counter
      </button>
      <button
        className="bg-red-200 rounded-lg p-2 m-2"
        onClick={() => setCounter(counter - 1)}
      >
        Decreased Counter
      </button>
    </div>
  );
};

export default State3;
