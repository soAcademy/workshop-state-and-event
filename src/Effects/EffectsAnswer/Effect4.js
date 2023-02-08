import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);

  // setInterval(() => {
  //   console.log("Bin" + new Date().getTime());
  // }, 1000)

  // Inteval1: 1, 2, 3, 4, 5, 6, 7, 8, 9
  // Interval2:  1  2  3  4  5  5
  // Interval3:    1  2  3  4  5  6
  
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCountdown(countdown - 1);
    // }, 1000);

    setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      }
    }, 1000)

    // async await, synchronouse, async

    // if (countdown === 1) {
    //   clearInterval(interval);
    // }

    // true
    // false || true
    // countdown > 1 && clearInterval(interval);
    // countdown > 1 || clearInterval(interval);

    // true && true
    // toggle && <div></div>

    // return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <p>Countdown: {countdown}</p>
    </>
  );
};

export default Effect4;
