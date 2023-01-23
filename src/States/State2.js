import { useState } from "react";

const State2 = () => {
  const [counter, increaseCounter] = useState(0);
  return (
    <>
      <div>{counter}</div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => increaseCounter(counter + 1)}
      >
        Increase Counter
      </button>
    </>
  );
};

export default State2;
