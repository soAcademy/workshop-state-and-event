import { useState } from "react";

const Result = (props) => <div>{props.counter}</div>;

const DecreaseButton = ({ counter, setCounter }) => (
  <button
    type="button"
    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
    onClick={() => setCounter(counter - 1)}
  >
    Decrease
  </button>
);

const IncreaseButton = ({ counter, setCounter }) => (
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    onClick={() => setCounter(counter + 1)}
  >
    Increase
  </button>
);

const Prop4 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Result counter={counter} />
      <DecreaseButton counter={counter} setCounter={setCounter} />
      <IncreaseButton counter={counter} setCounter={setCounter} />
    </>
  );
};

export default Prop4;
