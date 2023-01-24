import React, { useState } from "react";

const RenderComponent = ({ counterData }) => <div>Counter: {counterData}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <div className="font-bold">
        อยากลองบวกเลขดูอะป่าววว
      <RenderComponent counterData={counter} />
      <button className="bg-teal-500" onClick={() => setCounter(counter + 5)}>
        Increase
      </button>
      <button className="bg-red-500 ml-5" onClick={() => setCounter(counter - 5)}>
        Decrease
      </button>
      </div>
    </>
  );
};

export default Prop3;
