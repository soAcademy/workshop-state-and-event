import { useState, useEffect } from "react";

const Effect1_1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(1000);

  useEffect(() => {
    document.title = `Counter: ${counter}`;
    console.log(counter);
  }, [counter]);

  return (
    <>
      <div>{counter}</div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <div>{counter2}</div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCounter2(counter2 + 1)}
      >
        Increase2
      </button>
    </>
  );
};

export default Effect1_1;
