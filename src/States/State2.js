import { useState } from "react";
const State2 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
      className="bg-gray-300 rounded-lg p-2 m-2 font-bold shadow-sm shadow-black duration-75 hover:shadow-md hover:shadow-black active:bg-gray-500"
    >
      State2 : Counter
    </button>
    {counter}
    </div>
  );
};

export default State2;
