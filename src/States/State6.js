import { useState } from "react";

const State1 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  return (
    <>
      <label
        for="number1"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Number 1:
      </label>
      <div>{number1}</div>
      <input
        type="number"
        name="number1"
        onChange={(e) => setNumber1(e.target.value)}
      />
      <label
        for="number2"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Number 2:
      </label>
      <div>{number2}</div>
      <input
        type="number"
        name="number2"
        onChange={(e) => setNumber2(e.target.value)}
      />
      <div>Number 1 + Number 2: {sum}</div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setSum(Number(number1) + Number(number2))}
      >
        Calculate
      </button>
    </>
  );
};

export default State1;
