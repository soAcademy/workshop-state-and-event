import React, { useState } from "react";

const RenderComponent = ({ counterData }) => <div className="p-2">Counter: {counterData}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="m-3 bg-slate-200 rounded-lg">
      <RenderComponent counterData={counter} />
      <button className="bg-green-300 rounded p-2" onClick={() => setCounter(counter + 1)}>
        counter + 1
      </button>
    </div>
  );
};

export default Prop3;

// const RenderCounter = (props) => <div>Counter: {props.counter}</div>;

// const Prop3 = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <RenderCounter props={counter} />
//       <button onClick={() => setCounter(counter + 1)} className="">counter + 1</button>
//     </div>
//   );
// };

// export default Prop3;
