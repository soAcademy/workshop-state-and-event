import React, { useState } from "react";

const State2 = () => {
  const [counter, setCounter] = useState(0);
  const Try = () => {
    setCounter((prev) => prev+1)
    console.log("TryCounter:",counter)
    console.log("TrySetCounter:",setCounter)
  }
  console.log("counter:",counter)
  console.log("setCounter:",setCounter)

  return (
    <div className="bg-yellow-200">
      <p>{counter}</p>
      <p>
        <button
          className="p-4 bg-blue-200"
          onClick={Try}
        >
          Increase Counter
        </button>
      </p>
    </div>
  );
};

export default State2;
