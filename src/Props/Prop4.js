import React, { useState } from "react";

// const IncreaseComponent = ({ counter, setCounter }) => (
//   <div>
//     <button
//       className="bg-blue-300 rounded border border-black"
//       onClick={() => setCounter(counter + 1)}
//     >
//       INCREASE!
//     </button>
//   </div>
// );

const IncreaseComponent = (a) => (
  <div>
    <button
      className="bg-blue-300 rounded border border-black"
      onClick={() => a.setCounter(a.counter + 1)}
    >
      INCREASE!
    </button>
  </div>
);

// const DecreaseComponent = ({ counter, setCounter }) => {
//   return (
//     <div>
//       <button
//         className="bg-red-300 rounded border border-black"
//         onClick={() => setCounter(counter - 1)}
//       >
//         DECREASE!
//       </button>
//     </div>
//   );
// };

const DecreaseComponent = (b) => {
  return (
    <div>
      <button
        className="bg-red-300 rounded border border-black"
        onClick={() => b.setCounter(b.counter - 1)}
      >
        DECREASE!
      </button>
    </div>
  );
};

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
