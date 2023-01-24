import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    countDown > 1 || clearInterval(interval);
    return () => clearInterval(interval);
  }, [countDown]);
  return (
    <>
      <p>Countdown: {countDown}</p>
    </>
  );
};

export default Effect4;
