import { useState, useEffect } from "react";

const Effect4 = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000);
    timer > 1 || clearInterval(interval);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <div>Countdown Timer: {timer}</div>
    </>
  );
};

export default Effect4;
