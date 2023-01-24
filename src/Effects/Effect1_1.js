import React, { useState, useEffect } from "react";

const Effect1_1 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(5);

  useEffect(() => {
    document.title = `Counter : ${counter2}`;
    console.log(counter1);
    console.log(counter2);
  });

  return (
    <>
      <div>{counter1}</div>
      <div>{counter2}</div>
      <button
        className="border border-red-200 bg-yellow-300"
        onClick={() => setCounter1(counter1 + 1)}
      >
        INCREASE COUNTER1
      </button>
      <br />
      <button
        className="border border-red-200 bg-blue-300"
        onClick={() => setCounter2(counter2 + 1)}
      >
        INCREASE COUNTER2
      </button>
    </>
  );
};

export default Effect1_1;
