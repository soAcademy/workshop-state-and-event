import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);

 useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    // if (countdown === 1) {
    //   clearInterval(interval);
    // }

    countdown > 1 || clearInterval(interval);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <p>Countdown: {countdown}</p>
    </>
  );
};

export default Effect4;
