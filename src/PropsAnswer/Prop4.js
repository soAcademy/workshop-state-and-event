import React, { useState } from "react";

const IncreaseComponent = ({ counter, setCounter }) => (
  <div>
    <button className="bg-yellow-300" onClick={() => setCounter(counter + 1)}>
      Increase
    </button>
  </div>
);

const DecreaseComponent = ({ counter, setCounter }) => (
  <div>
    <button className="bg-orange-300" onClick={() => setCounter(counter - 1)}>
      Decrease
    </button>
  </div>
);

const Prop4 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {counter}
      <IncreaseComponent counter={counter} setCounter={setCounter} />
      <DecreaseComponent counter={counter} setCounter={setCounter} />
    </>
  );
};

export default Prop4;

