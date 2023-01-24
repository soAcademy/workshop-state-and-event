// import React, { useState, useEffect } from "react";

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

import React, { useState, useEffect } from "react";

const Effect4 = () => {
  const [countdown, setCountdown] = useState(10);
  const [isCountdownOver, setIsCountdownOver] = useState(false);

  useEffect(() => {
    if (countdown === 0) {
      setIsCountdownOver(true);
    }
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    countdown > 0 || clearInterval(interval);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className={`m-3 py-2 bg-yellow-200 rounded-lg h-36 ${isCountdownOver ? "bg-black" : ""}`}>
      <p className="text-xl pl-4 mb-2">countdown: {countdown}</p>
    </div>
  )
}

export default Effect4;
