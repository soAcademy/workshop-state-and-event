import React, { useState } from "react";

const State3 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-200 m-10">
      <p className="pl-12">{count}</p>
      <p>
        <button className="p-4 bg-blue-200 m-4" onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </p>

      <p>
        <button className="p-4 bg-blue-200 m-4" onClick={() => setCount(count - 1)}>
          Decrease Count
        </button>
      </p>
    </div>
  );
};

export default State3;
