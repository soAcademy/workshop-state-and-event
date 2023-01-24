import React, { useState, useEffect } from "react";

const Effet3 = () => {
  const [num, setNum] = useState(0);
  const [numSquare, setNumSquare] = useState();

  useEffect(() => setNumSquare(Number(num)**2, [num]));

  return (
    <div className="m-2 p-2 bg-gray-300 rounded-lg w-fit">
      <input
        type="number"
        placeholder="Enter Number"
        onChange={(e) => {
          setNum(e.target.value ? e.target.value : 0);
        }}
        className="rounded-lg px-2"
      ></input>
      <p>num : {num}</p>
      <p>numSquare : {numSquare}</p>
    </div>
  );
};

export default Effet3;
