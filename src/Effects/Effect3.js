import { useState, useEffect } from "react";

const Effect3 = () => {
  const [num, setNum] = useState(0);
  const [numSq, setNumSq] = useState(0);

  useEffect(() => {
    setNumSq(num ** 2);
  }, [num]);

  return (
    <>
      <div>Number: {num}</div>
      <div>Number Squared: {numSq}</div>
      <input
        type="number"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=""
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

export default Effect3;
