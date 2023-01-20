import React, { useState } from "react";

const State2 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bg-yellow-200">
      <p>{counter}</p>
      <p>
        <button className="p-4 bg-blue-200" onClick={() => setCounter(counter + 1)}>
          Increase Counter
        </button>
      </p>
    </div>
  );
};

export default State2;