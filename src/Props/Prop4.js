import React, { useState } from "react";

const IncreasesComponent = ({ counterIn, setCounterIn }) => (
  <div>
    <button
      onClick={() => setCounterIn(counterIn + 1)}
      className="bg-green-300 rounded w-1/12 p-2 ml-2 mt-2"
    >
      counter + 1
    </button>
  </div>
);

const DecreaseCounter = ({ counterDe, setCounterDe }) => (
  <div>
    <button
      // onClick={() => setCounterDe(counterDe - 1)}
      onClick={() => (counterDe > 0 ? setCounterDe(counterDe - 1) : null)}
      className="bg-green-300 rounded w-1/12 p-2 ml-2 mt-2"
    >
      counter - 1
    </button>
  </div>
);

const Prop4 = () => {
  const [counterProp, setCounterProp] = useState(0);

  return (
    <div className="m-3 py-2 bg-slate-200 rounded-lg">
      <div className="pl-3 text-xl">Counter: {counterProp}</div>
      <IncreasesComponent
        counterIn={counterProp}
        setCounterIn={setCounterProp}
      />
      <DecreaseCounter counterDe={counterProp} setCounterDe={setCounterProp} />
    </div>
  );
};

export default Prop4;

