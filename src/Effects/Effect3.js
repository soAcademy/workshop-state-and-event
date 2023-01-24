import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [radius, setRadius] = useState(0);
  const [areaCircle, setAreaCircle] = useState(0);

  useEffect(() => {
    // setAreaCircle(Number(redius) ** 0.5);
    setAreaCircle(Math.PI*(radius)**2);
  }, [radius]);

  return (
    <>
      <p>Radius: {radius}</p>
      <p>The Circle Area = <b>{areaCircle}</b></p>
      <input
        className="border border-black bg-yellow-200 w-64"
        onChange={(e) => setRadius(e.target.value)}
      />
    </>
  );
};

export default Effect3;

