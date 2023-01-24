import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSquared, setNumSquared] = useState(0);

  useEffect(() => {
    setNumSquared(Number(num) ** 2);
}, [num]);
  return (
    <>
      <p className='m-2'>Number: {num}</p>
      <p className='m-2'>Squared number: {numSquared}</p>
      <input className='bg-green-200 m-2 border border-red' onChange={(e) => setNum(e.target.value)} />
    </>
  );
};

export default Effect3;
