import { useState } from "react";

const State2 = () => {
  const [counter, setCounter] = useState(10);
  return (
    <>
      <div>{counter}</div>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <button
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </>
  );
};

export default State2;
