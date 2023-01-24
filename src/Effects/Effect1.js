import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter ${counter}`;
  }, [counter]);

  return (
    <>
    {counter}
      <button
        className="bg-green-300 w-24"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
    </>
  );
};

export default Effect1;
