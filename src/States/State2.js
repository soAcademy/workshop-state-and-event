import React, { useState } from "react";

const State2 = () => {
   const [count, setCount] = useState(0);

  return (
    <div className="bg-red-200">
      <p>{count}</p>
      <p>
        <button className="p-4 bg-blue-200" onClick={() => {
          setCount(count + 1)
        }}>
          Count ++
        </button>
      </p>
    </div>
  );
};

export default State2;