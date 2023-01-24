import React, { useState } from "react";

// const RenderComponent = ({ counterData }) => <div>Counter: {counterData}</div>;
const RenderComponent = (a) => <div>Counter: {a.counterData}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <RenderComponent counterData={counter} />
      <button
        className="bg-blue-300 rounded border border-black"
        onClick={() => setCounter(counter + 1)}
      >
        INCREASE!!
      </button>
    </>
  );
};

export default Prop3;
