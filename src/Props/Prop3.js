import React, { useState } from "react";

const RenderComponent = ({ counterData }) => <div>Counter: {counterData}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <RenderComponent counterData={counter} />
      <button className="bg-green-300" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>

      <button className="bg-red-300" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </>
  );
};

export default Prop3;