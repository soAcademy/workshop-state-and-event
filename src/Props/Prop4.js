import { useState } from "react";

const IncreaseBtn = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => setCounter(counter + 1)}
      className="bg-green-100 active:bg-green-300 border-2 border-green-300 rounded-lg font-bold shadow-md active:shadow-lg py-2 px-4"
    >
      +
    </button>
  );
};

const DecreaseBtn = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => setCounter(counter - 1)}
      className="bg-green-100 active:bg-green-300 border-2 border-green-300 rounded-lg font-bold shadow-md active:shadow-lg py-2 px-4"
    >
      -
    </button>
  );
};

const Prop4 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="w-100 h-screen flex justify-center items-center">
      <DecreaseBtn counter={counter} setCounter={setCounter} />
      <p className="w-[50px] text-center mx-4">{counter}</p>
      <IncreaseBtn counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default Prop4;
