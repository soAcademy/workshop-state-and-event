import React, { useState } from "react";
import CounterRender from "./CounterRender";

const Prop3 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="w-fit bg-gray-300 rounded-lg p-2 m-2">
      <button
        onClick={() => setCounter(counter + 1)}
        className="p-2 bg-gray-400 font-bold rounded-lg mx-2 shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
      >Counter</button>
      <CounterRender counter={counter} />
    </div>
  );
};

export default Prop3;
