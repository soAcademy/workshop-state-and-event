import { useState, useEffect } from "react";

const useNum = () => {
  const [num, setNum] = useState(0);

  return { num, setNum };
};

const useNumSq = ({ num }) => {
  const [numSq, setNumSq] = useState(0);

  useEffect(() => {
    setNumSq(num ** 2);
  }, [num]);

  return { numSq, setNumSq };
};

const CustomHook3 = () => {
  // const [num, setNum] = useState(0);
  // const [numSq, setNumSq] = useState(0);

  // useEffect(() => {
  //   setNumSq(num ** 2);
  // }, [num]);

  const { num, setNum } = useNum();

  const { numSq } = useNumSq({ num });

  return (
    <>
      <div>Number: {num}</div>
      <div>Number Squared: {numSq}</div>
      <input
        type="number"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder=""
        onChange={(e) => setNum(e.target.value)}
      />
    </>
  );
};

export default CustomHook3;
