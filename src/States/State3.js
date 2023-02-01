import React, { useState } from "react";

const State3 = () => {
  const [counter, setCounter] = useState(10);
  console.log("counter:",counter)
  console.log("setCounter:",setCounter)
  
  return (
    <div className="bg-yellow-200">
      <p>{counter}</p>
      <p>
        <button
          className="p-4 bg-blue-200"
          onClick={() => setCounter(counter + 1)}
        >
          Increase Counter
        </button>

        <button
          className="p-4 bg-blue-200"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease Counter
        </button>
      </p>
    </div>
  );
};

export default State3;
