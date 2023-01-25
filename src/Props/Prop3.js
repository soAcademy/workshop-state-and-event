import React, { useState } from "react";
const RenderComponent = ({counterData}) => <div>counter: {counterData}</div>;
const Prop3 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <RenderComponent counterData={counter} />
      <button className="bg-red-200 m-3 rounded-lg p-2" onClick={() => setCounter(counter + 1)}>
        Increased ticker
      </button>
    </>
  );
};

export default Prop3;
