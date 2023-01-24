import React, { useState, useEffect } from "react";
const Effect4 = () => {
  const [time, setTime] = useState(10);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      time !== 1
        ? start
          ? setTime(time - 1)
          : setStart(start)
        : setTime(time);
    }, 1000);
  }, [start, time]);

  return (
    <div className="w-fit bg-gray-300 rounded-lg p-2 m-2">
      Time : {time}
      <button
        onClick={() => {
          setTime(10);
          setStart(false);
        }}
        className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
      >
        Reset
      </button>
      <button
        onClick={() => setStart(!start)}
        className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
      >
        Start
      </button>
    </div>
  );
};

export default Effect4;
