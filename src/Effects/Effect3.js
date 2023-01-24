import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSquare, setNumSquare] = useState(0);

  useEffect(() => {
    setNumSquare(Number(num) ** 2);
  }, [num]);

  return (
    <div className="m-3 py-2 bg-yellow-200 rounded-lg">
      <p className="text-xl pl-4 mb-2">Input num: {num}</p>
      <p className="text-xl pl-4 mb-2">Output num Square: {numSquare}</p>
      <input
        type="text"
        className="border border-black rounded-lg w-64 h-8 ml-4 mb-2"
        onChange={(e) => setNum(e.target.value)}
      />
    </div>
  )
}

export default Effect3;