import React, { useState, useEffect } from "react";

const useNumber = () => {
  const [num, setNum] = useState(0);
  return {
    num,
    setNum,
  };
};

// const min1 = (x, y) => x < y ? x : y;
// const min2 = (args) => args.x < args.y ? args.y : args.x;

// min1(3, 5, 10, 5, 12);
// min2({x: 3, y: 5})
// min2({y: 5, x: 3, a1: 5, a2: 10, a3: 1})

const useNumSquare = (num) => {
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);

  return { numSquare, setNumSquare };
};

const CustomHook3 = () => {
  // เรียกใช้งาน
  const { num, setNum } = useNumber();
  const { numSquare, setNumSquare } = useNumSquare(num);

  return (
    <>
      <p>Num: {num}</p>
      <p>Num Square: {numSquare}</p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

export default CustomHook3;
