import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);

  return (
    <>
      <div>NUM : {num}</div>
      <div>NUM SQUARE : {numSquare}</div>
      <input
        className="border border-red-200 bg-yellow-300"
        onChange={(e) => setNum(e.target.value)}
      ></input>
    </>
  );
};

export default Effect3;
