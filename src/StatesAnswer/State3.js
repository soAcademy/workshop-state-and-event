import React, { useState } from "react";

const State3 = () => {
  const [counter, setCounter] = useState(10);

  return (
    <div className="bg-gray-200">
      <p>{counter}</p>
      <div>
        <button className="p-4 bg-blue-200" onClick={() => setCounter(counter + 1)}>
          Increase Counter
        </button>
        <button className="p-4 bg-green-200" onClick={() => setCounter(counter - 1)}>
          Decrease Counter
        </button>
      </div>
    </div>
  );
};

export default State3;