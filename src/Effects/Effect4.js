import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);}, 1000);


    // true 
    // false || true 
    countdown > 1 && clearInterval(interval);
    // countdown > 1 || clearInterval(interval);



    //true && true
    // toggle && <div></div>

    return () => clearInterval(interval); }, [countdown]);

  return (
    <>
      <p>Countdown: {countdown}</p>
    </>
  );
};

export default Effect4;
