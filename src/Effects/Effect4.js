import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    console.log(interval);

    count > 1 || clearInterval(interval);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div>{count}</div>
    </>
  );
};

export default Effect4;
