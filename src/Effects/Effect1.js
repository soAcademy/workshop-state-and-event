import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
    document.title = `Counter ${counter}`;
  }, [counter]);

  return (
    <>
      <button
        className="p-4 bg-blue-400 w-24 rounded-lg"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
    </>
  );
};

export default Effect1;