import React, { useState } from "react";
const RenderComponent = ({ counterData }) => <div>Counter: {counterData}</div>;

const IncreaseCounter = (props) => {
  console.log("IncreaseCounter", props);
  const { counterData, setCounter2 } = props;
  return (
    <button
      className="bg-green-300"
      onClick={() => setCounter2(counterData + 1)}
    >
      Increase
    </button>
  );
};
// const IncreaseCounter = ({ counterData, setCounter2 }) => (
//   <button className="bg-green-300" onClick={() => setCounter2(counterData + 1)}>
//     Increase
//   </button>
// );
const DecreaseCounter = ({ counterData, abc }) => (
  <button className="bg-red-300" onClick={() => abc(counterData - 1)}>
    Decrease
  </button>
);
const Prop4 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <RenderComponent counterData={counter} />
      <IncreaseCounter counterData={counter} setCounter2={setCounter} />
      <DecreaseCounter counterData={counter} abc={setCounter} />
    </>
  );
};

export default Prop4;
