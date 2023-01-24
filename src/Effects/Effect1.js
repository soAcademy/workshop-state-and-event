import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter ${counter}`;
    console.log(counter);
  }, [counter]);
  return (
    <>
      <button
        className="bg-red-200 rounded-lg m-2 p-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
    </>
  );
};

export default Effect1;
