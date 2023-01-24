import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    console.log(counter);
  });

  return (
    <div className="m-3">
      <div className="text-xl pl-4">
        {counter}, {counter2}
      </div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Title + 1
      </button>
      <button
        onClick={() => setCounter2(counter2 + 1)}
        className="w-48 h-12 border-2 rounded-lg text-lg test-center bg-slate-100 m-2"
      >
        Title + 1
      </button>
    </div>
  );
};

export default Effect1;
