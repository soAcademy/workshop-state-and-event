import React, { useState } from "react";

const State3 = () => {
  const [count, setCount] = useState(10);
  return (
    <div className="m-3 bg-yellow-400 rounded-lg">
      <h1 className="text-2xl p-2 mt-2">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Counter - 0
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Counter - 1
      </button>
    </div>
  );
};

export default State3;
