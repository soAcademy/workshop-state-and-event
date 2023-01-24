import React, { useState, useEffect } from "react";
import IncreaseButton from "../Props/IncreaseButton";
import CounterRender from "../Props/CounterRender";

const Effect1_1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    console.log(`counter1 ${counter}`)
    document.title = `Counter : ${counter}`;
  }, [counter]);

  // useEffect(() => {
  //   console.log(`counter2 ${counter2}`)
  //   document.title = `Counter : ${counter2}`;
  // }, []);

  // useEffect(() => {
  //   console.log(`counter3 ${counter3}`)
  //   document.title = `Counter : ${counter3}`;
  // },);

  return (
    <div className="w-fit m-2 p-2 bg-gray-300 rounded-lg">
      <IncreaseButton counter={counter} setCounter={setCounter}/>
      <IncreaseButton counter={counter2} setCounter={setCounter2}/>
      <IncreaseButton counter={counter3} setCounter={setCounter3}/>
      <p>Counter1</p><CounterRender counter={counter} />
      Counter2<CounterRender counter={counter2} />
      Counter3<CounterRender counter={counter3} />

    </div>
  );
};

export default Effect1_1;
