import React, { useState } from "react";
import CounterRender from "./CounterRender";
import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";

const Prop4 = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="bg-gray-300 m-2 p-2 w-fit rounded-lg flex flex-col justify-center">
      <div>
        <IncreaseButton counter={num} setCounter={setNum} />
        <DecreaseButton counter={num} setCounter={setNum} />
      </div>
      <CounterRender counter={num} />
    </div>
  );
};

export default Prop4;
