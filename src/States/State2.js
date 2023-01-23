import { useState } from "react";
const State2 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
      className="bg-gray-300 rounded-lg p-2 m-2"
    >
      State2 : Counter
    </button>
    {counter}
    </div>
  );
};

export default State2;
