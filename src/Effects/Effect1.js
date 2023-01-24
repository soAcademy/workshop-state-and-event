import React, { useState, useEffect } from "react";
import IncreaseButton from "../Props/IncreaseButton";
import CounterRender from "../Props/CounterRender";

const Effect1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter)
    document.title = `Counter : ${counter}`;
  }, [counter]);

  return (
    <div className="w-fit m-2 p-2 bg-gray-300 rounded-lg">
      <IncreaseButton counter={counter} setCounter={setCounter}/>
      <CounterRender counter={counter} />
    </div>
  );
};

export default Effect1;
