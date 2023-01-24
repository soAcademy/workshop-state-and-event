import { useState } from "react";

const Result = (props) => <div>{props.counter}</div>;

const Prop3 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Result counter={counter} />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
    </>
  );
};

export default Prop3;
