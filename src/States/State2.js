import React, { useState } from "react";

const State2 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-blue-200 p-2 m-2 text-green-700">
      <h1>{counter}</h1>
      <button
        className="bg-red-200 rounded-lg p-2 m-2"
        onClick={() => setCounter(counter + 1)}
      >
        Counter
      </button>
    </div>
  );
};

export default State2;
