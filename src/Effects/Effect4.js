import React, { useState, useEffect } from "react";

// const Effect4 = () => {
//   const [countdown, setCountdown] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountdown(countdown - 1);
//     }, 1000);
//     countdown > 0 || clearInterval(interval);
//     return () => clearInterval(interval);
//   }, [countdown]);

//   return (
//     <div className="m-3 py-2 bg-yellow-200 rounded-lg h-36">
//       <p className="text-xl pl-4 mb-2">countdown: {countdown}</p>
//     </div>
//   )
// }

// export default Effect4;

// const Effect4 = () => {
//   const [countdown, setCountdown] = useState(10);
//   const [isCountdownOver, setIsCountdownOver] = useState(false);

//   useEffect(() => {
//     if (countdown === 0) {
//       setIsCountdownOver(true);
//     }
//     const interval = setInterval(() => {
//       setCountdown(countdown - 1);
//     }, 1000);
//     countdown > 0 || clearInterval(interval);
//     return () => clearInterval(interval);
//   }, [countdown]);

//   return (
//     <div className={`m-3 py-2 bg-yellow-200 rounded-lg h-36 ${isCountdownOver ? "bg-black" : ""}`}>
//       <p className="text-xl pl-4 mb-2">countdown: {countdown}</p>
//     </div>
//   )
// }

// export default Effect4;

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);
  const [isCountdownOver, setIsCountdownOver] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (countdown === 0) {
      setIsCountdownOver(true);
    }
    if (countdown > 0) {
      const id = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [countdown]);

  const resetCountdown = () => {
    setCountdown(10);
    setIsCountdownOver(false);
    clearInterval(intervalId);
  };

  return (
    <div>
      <div
        className={`m-3 py-2 bg-yellow-200 rounded-lg h-36 ${
          isCountdownOver ? "bg-black" : ""
        }`}
      >
        <p className="text-xl pl-4 mb-2">countdown: {countdown}</p>
      </div>
      <button
        onClick={resetCountdown}
        className="bg-green-300 rounded w-1/12 p-2 ml-3 mt-2"
      >
        Restart
      </button>
    </div>
  );
};

export default Effect4;
