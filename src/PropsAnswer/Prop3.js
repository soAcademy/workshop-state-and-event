import React, { useState } from "react";

const RenderComponent = ({ counterData }) => <div>Counter: {counterData}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);
console.log(Prop3)
  return (
    <>
      <RenderComponent counterData={counter} />
      <button className="bg-green-300" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
    </>
  );
};

export default Prop3;
