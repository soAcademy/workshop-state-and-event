import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    
    document.title = `Counter ${counter}`;
    console.log(counter,counter2);
  }, [counter]);

  return (
    <>
      {counter}, {counter2}
      <button
        className="p-4 bg-blue-400 w-24 rounded-lg"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="p-4 bg-red-400 w-24 rounded-lg"
        onClick={() => setCounter(counter2 + 1)}
      >
        Increase2
      </button>
    </>
  );
};

export default Effect1;