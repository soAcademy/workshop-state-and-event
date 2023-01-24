import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSquareRoot, setNumSquareRoot] = useState(0);

  useEffect(() => {
    // setNumSquareRoot(Number(num) ** 0.5);
    setNumSquareRoot(Math.sqrt(num));
  }, [num]);

  return (
    <>
      <p>Num: {num}</p>
      <p>The Square Root of <b>{num}</b> is equal to <b>{numSquareRoot}</b></p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

export default Effect3;

