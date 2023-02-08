import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    console.log(counter, counter2);
  }, [counter2]);

  return (
    <>
      {counter}, {counter2}
      <button
        className="bg-yellow-300 w-24"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="bg-yellow-300 w-24"
        onClick={() => setCounter2(counter2 + 1)}
      >
        Increase2
      </button>
    </>
  );
};

export default Effect1;
