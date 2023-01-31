import React, { useState } from "react";
const ComponentIncrease = ({ counter, setCounter }) => (  //ลูก
  <div>
    <button
      className="bg-green-200 m-3 rounded-lg p-2"
      onClick={() => setCounter(counter + 1)}
    >
      Increase
    </button>
  </div>
);
const ComponentDecrease = ({ counter, setCounter }) => (   //ลูก
  <div>
    <button
      className="bg-red-200 m-3 rounded-lg p-2"
      onClick={() => setCounter(counter - 1)}
    >
      Decrease
    </button>
  </div>
);
const Prop4 = () => {
  const [counter, setCounter] = useState(0); //Parent
  return (
    <>
      {counter}
      <ComponentIncrease counter={counter} setCounter={setCounter} />
      <ComponentDecrease counter={counter} setCounter={setCounter} />
    </>
  );
};

export default Prop4;
