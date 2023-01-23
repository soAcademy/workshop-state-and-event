import React, { useState } from "react";

const State3 = () => {
  const [counter, setCounter] = useState(10);

  return (
    <div className="bg-yellow-200">
      <p>{counter}</p>
      <p>
        <button
          className="p-4 bg-red-200 border border-red-600"
          onClick={() => setCounter(counter + 1)}
        >
          Increase counter
        </button>
        <button
          className="p-4 bg-red-200 border border-red-600"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease counter
        </button>
      </p>
    </div>
  );
};

export default State3;
