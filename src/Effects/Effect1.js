import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter : ${counter}`;
    console.log(counter);
  }, [counter]);

  return (
    <>
      <button
        className="border border-red-200 bg-yellow-300"
        onClick={() => setCounter(counter + 1)}
      >
        INCREASE!
      </button>
      <br />
      <button
        className="border border-red-200 bg-blue-300"
        onClick={() => setCounter(counter - 1)}
      >
        DECREASE!
      </button>
    </>
  );
};

export default Effect1;
