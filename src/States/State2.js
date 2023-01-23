import React, { useState } from "react";

const State2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="m-3 bg-orange-400 rounded-lg">
      <h1 className="text-2xl p-2 mt-2">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Counter
      </button>
    </div>
  );
};

export default State2;
