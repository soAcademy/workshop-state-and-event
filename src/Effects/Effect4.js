import React, { useState, useEffect } from "react";
const Effect4 = () => {
  const [time, setTime] = useState(10);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    (time > 1 && start) || clearInterval(interval);
    return () => clearInterval(interval);
  }, [start, time]);

  return (
    <div className="w-fit bg-gray-300 rounded-lg p-2 m-2">
      Time : {time}
      <form>
        <input
          type="number"
          placeholder="Enter Time"
          onChange={(e) => {
            setStart(false);
            setTime(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            setStart(false);
            setTime(e.target.form[0].value ? e.target.form[0].value : 10);
          }}
          className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
        >
          Reset
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setStart(!start);
          }}
          className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
        >
          Start
        </button>
      </form>
    </div>
  );
};

export default Effect4;
