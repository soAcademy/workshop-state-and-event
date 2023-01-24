import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    console.log(counter);
  }, [counter, counter2]);
  return (
    <>
      {counter}, {counter2}
      <button
        className="bg-red-200 rounded-lg m-2 p-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="bg-yellow-200 rounded-lg m-2 p-2"
        onClick={() => setCounter2(counter2 + 1)}
      >
        Increase
      </button>
    </>
  );
};

export default Effect1;
