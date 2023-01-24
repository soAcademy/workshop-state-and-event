import React, { useState } from "react";

// const RenderComponent = ({ counterData }) => <div className="p-2">Counter: {counterData}</div>;

// const Prop3 = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div className="m-3 bg-slate-200 rounded-lg">
//       <RenderComponent counterData={counter} />
//       <button className="bg-green-300 rounded p-2" onClick={() => setCounter(counter + 1)}>
//         counter + 1
//       </button>
//     </div>
//   );
// };

// export default Prop3;

const RenderCounter = (props) => <div className="ml-3 mb-2 text-xl">Counter: {props.counter}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="ml-3 py-2 bg-slate-200 rounded-lg">
      <RenderCounter counter={counter} />
      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-green-300 rounded w-1/12 p-2 ml-2 mt-2"
      >
        counter + 1
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="bg-green-300 rounded w-1/12 p-2 ml-2 mt-2"
      >
        counter - 1
      </button>
    </div>
  );
};

export default Prop3;
